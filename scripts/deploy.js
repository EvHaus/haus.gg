/* eslint-disable no-console, import/no-commonjs */
/* eslint-disable flowtype/require-valid-file-annotation, flowtype/require-return-type, flowtype/require-parameter-type */

const archiver = require('archiver');
const chalk = require('chalk');
const fs = require('fs');
const ora = require('ora');
const path = require('path');
const inquirer = require('inquirer');
const Client = require('ssh2').Client;

// Deployment Server Configuration
const HOST = '138.68.241.10';
const USER = 'root';
const TARGET_DIR = '/var/www';
const PRIVATE_KEY_PATH = '/home/globex/.ssh/id_rsa';

class Deploy {
	constructor () {
		this.server = null;
		this.spinner = ora();
		this.sshPassword = null;
	}

	run () {
		this.spinner.start();

		this.askForPassword()
			.then(() => this.connectToServer())
			.then((server) => {
				this.server = server;
				return this.ensureTargetDirectoryExists();
			})
			.then(() => this.zipUpCurrentDirectory())
			.then((zipPackage) => this.uploadToServer(zipPackage.path))
			.then(() => this.restartServer())
			.then(() => {
				this.spinner.succeed(`Deployment completed successfully!`);
				return this.server.end();
			})
			.catch((err) => {
				let msg = err.message;

				// ssh2 reports wrong password as "InvalidAsn1Error", with no
				// way to catch it in `connectToServer`
				if (err && err.name === 'InvalidAsn1Error') {
					msg = `Wrong password. Try again.`;
				}

				this.spinner.fail(`${chalk.red(msg)}`);
				if (this.server) this.server.end();
			});
	}

	// Ask the user for a password
	askForPassword () {
		// Spinner conflicts with `inquirer`. Stop it until the prompt is done.
		this.spinner.stop();

		return inquirer.prompt([{
			message: 'What is your SSH private key passphrase?',
			name: 'password',
			type: 'password',
		}]).then((result) => {
			this.sshPassword = result.password;
			this.spinner.start();
			return this.sshPassword;
		});
	}

	// Connect to deployment server
	connectToServer (password) {
		return new Promise((resolve, reject) => {
			let privateKey;
			try {
				privateKey = fs.readFileSync(PRIVATE_KEY_PATH);
			} catch (err) {
				throw new Error(
					`Can't find private SSH key in ${chalk.yellow(PRIVATE_KEY_PATH)}. ` +
					`Make sure you're running this script via Bash.`
				);
			}

			const c = new Client();
			this.spinner.text = `Connecting to ${chalk.yellow(HOST)}...`;

			c.on('ready', () => {
				this.spinner.text = `Connected to ${chalk.yellow(HOST)}!`;
				resolve(c);
			}).connect({
				host: HOST,
				username: USER,
				privateKey,
				passphrase: this.sshPassword,
			});
		});
	}

	// Ensure target directory exists
	ensureTargetDirectoryExists () {
		return new Promise((resolve, reject) => {
			this.spinner.text = `Ensuring target directory ${chalk.yellow(TARGET_DIR)} exists...`;
			this.server.exec(`mkdir -p ${TARGET_DIR}`, (err, stream) => {
				if (err) throw err;
				stream.on('close', (code, signal) => {
					this.spinner.text = `Directory exists!`;
					resolve();
				}).on('data', (data) => {
					// console.log('STDOUT: ' + data);
				}).stderr.on('data', (data) => {
					// console.log('STDERR: ' + data);
					reject(data);
				});
			});
		});
	}

	// Creates a ZIP of the current directory
	zipUpCurrentDirectory () {
		return new Promise((resolve, reject) => {
			this.spinner.text = 'Creating deployment archive...';
			const output = fs.createWriteStream(path.join(__dirname, 'build.zip'));
			const archive = archiver('zip');

			output.on('close', () => {
				this.spinner.text = 'Deployment package created!';
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
	}

	// Uploads the given file to the server
	uploadToServer (source) {
		return new Promise((resolve, reject) => {
			this.spinner.text = `Uploading ${chalk.yellow(source)} to server...`;

			this.server.sftp((err, sftp) => {
				if (err) throw err;
				const target = `${TARGET_DIR}/build.zip`;
				sftp.fastPut(source, target, (result) => {
					// Untar the package once its on the server
					this.spinner.text = `Deployment package uploaded to '${chalk.yellow(target)}'. Unzipping...`;

					this.server.exec(
						`cd ${TARGET_DIR} && ` +
						`unzip -ao ${target} && ` +
						`rm -f build.zip`,
						(err, stream) => {
							if (err) throw err;
							stream.on('close', (code, signal) => {
								this.spinner.text = 'Package unzipped!';
								resolve();
							}).on('data', (data) => {
								// console.log('STDOUT: ' + data);
							}).stderr.on('data', (data) => {
								reject(data);
							});
						});
				}, (err) => reject);
			});
		});
	}

	// Restart the webserver
	restartServer () {
		return new Promise((resolve, reject) => {
			this.spinner.text = `Installing & restarting web server...`;

			this.server.exec(
				`cd ${TARGET_DIR} && ` +
				`yarn --pure-lockfile && ` +
				// Start with: `pm2 start npm --name "yarn" -- start`
				`pm2 restart yarn`,
				(err, stream) => {
					if (err) throw err;
					stream.on('close', (code, signal) => {
						if (code !== 127) {
							this.spinner.text = `Server restarted!`;
							resolve();
						}
					}).on('data', (data) => {
						// console.log('STDOUT: ' + data);
					}).stderr.on('data', (data) => {
						// TODO: A Buffer is returned when the upload was done
						// succesfully. Find out why.
						if (data instanceof Buffer) return resolve();
						reject(data);
					});
				});
		});
	}
}

const D = new Deploy();
D.run();
