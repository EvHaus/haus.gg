/* eslint-disable import/no-commonjs, no-unused-vars, flowtype/require-valid-file-annotation */

const Deploy = require('@globexdesigns/deploy');

const D = new Deploy({
	host: '138.68.241.10',
	private_key_path: '/home/globex/.ssh/id_rsa',
	target_dir: '/var/www',
	user: 'root',
}).run();
