/* eslint-disable no-console, import/no-commonjs */
/* eslint-disable flowtype/require-valid-file-annotation, flowtype/require-return-type, flowtype/require-parameter-type */

const archiver = require('archiver');
const fs = require('fs');
const path = require('path');
const prompt = require('prompt');
const Client = require('ssh2').Client;

// Deployment Server Configuration
const HOST = '138.68.241.10';
const USER = 'root';
const TARGET_DIR = '/var/www';

// Ask the user for a password
const askForPassword = () => {
	return new Promise((resolve, reject) => {
		prompt.start();
		return prompt.get([{
			hidden: true,
			message: 'What is your SSH private key passphrase?',
			name: 'password',
		}], (err, result) => {
			if (err) throw err;
			return resolve(result.password);
		});
	});
};

// Connect to deployment server
const connectToServer = (password) => {
	return new Promise((resolve, reject) => {
		const c = new Client();
		console.log(`Connecting to ${HOST}...`);
		c.on('ready', () => {
			console.log('    Connected!');
			resolve(c);
		}).connect({
			host: HOST,
			username: USER,
			privateKey: fs.readFileSync('/home/globex/.ssh/id_rsa'),
			passphrase: password,
		});
	});
};

// Ensure target directory exists
const ensureTargetDirectoryExists = (server) => {
	return new Promise((resolve, reject) => {
		console.log(`Ensuring target directory ${TARGET_DIR} exists...`);
		server.exec(`mkdir -p ${TARGET_DIR}`, (err, stream) => {
			if (err) throw err;
			stream.on('close', (code, signal) => {
				console.log('    Directory exists!');
				resolve();
			}).on('data', (data) => {
				// console.log('STDOUT: ' + data);
			}).stderr.on('data', (data) => {
				// console.log('STDERR: ' + data);
				reject(data);
			});
		});
	});
};

// Creates a ZIP of the current directory
const zipUpCurrentDirectory = () => {
	return new Promise((resolve, reject) => {
		console.log('Creating deployment archive...');
		const output = fs.createWriteStream(path.join(__dirname, 'build.zip'));
		const archive = archiver('zip');

		output.on('close', () => {
			console.log('    Deployment package created!');
			resolve(output);
		});

		archive.on('error', reject);
		archive.pipe(output);
		archive.file('package.json');
		archive.file('server.js');
		archive.file('yarn.lock');
		archive.directory('.next');
		archive.finalize();
	});
};

// Uploads the given file to the server
const uploadToServer = (server, source) => {
	return new Promise((resolve, reject) => {
		console.log(`Uploading ${source} to server...`);
		server.sftp((err, sftp) => {
			if (err) throw err;
			const target = `${TARGET_DIR}/build.zip`;
			sftp.fastPut(source, target, (result) => {
				// Untar the package once its on the server
				console.log(`    Deployment package uploaded to '${target}'!`);
				console.log('    Unzipping...');

				server.exec(
					`cd ${TARGET_DIR} && ` +
					`unzip -ao ${target} && ` +
					`rm -f build.zip`,
					(err, stream) => {
						if (err) throw err;
						stream.on('close', (code, signal) => {
							console.log('    Package unzipped!');
							resolve();
						}).on('data', (data) => {
						// console.log('STDOUT: ' + data);
						}).stderr.on('data', (data) => {
							console.log(`STDERR: ${data}`);
							reject(data);
						});
					});
			}, (err) => reject);
		});
	});
};

// Restart the webserver
const restartServer = (server) => {
	return new Promise((resolve, reject) => {
		console.log(`Installing & restarting web server...`);
		// `npm update` sometimes fails on Digital Ocean, so
		// we run `npm run restart` before AND after it to be safe
		server.exec(
			`cd ${TARGET_DIR} && ` +
			`yarn --pure-lockfile && ` +
			// Start with: `pm2 start npm --name "yarn" -- start`
			`pm2 restart yarn`,
			(err, stream) => {
				if (err) throw err;
				stream.on('close', (code, signal) => {
					if (code !== 127) {
						console.log('    Server restarted!');
						resolve();
					}
				}).on('data', (data) => {
				// console.log('STDOUT: ' + data);
				}).stderr.on('data', (data) => {
					// console.log('STDERR: ' + data);
					reject(data);
				});
			});
	});
};

const Deploy = () => {
	this.server = null;

	this.run = () => {
		askForPassword()
			.then((password) => connectToServer(password))
			.then((server) => {
				this.server = server;
				return ensureTargetDirectoryExists(server);
			})
			.then(zipUpCurrentDirectory)
			.then((zipPackage) => uploadToServer(this.server, zipPackage.path))
			.then(() => restartServer(this.server))
			.then(() => this.server.end())
			.catch((err) => {
				console.error(err);
				this.server.end();
			});
	};

	return this;
};

Deploy().run();
