/* eslint-disable flowtype/require-valid-file-annotation, import/no-commonjs */
/* eslint-disable flowtype/require-return-type, flowtype/require-parameter-type */

const express = require('express');
const greenlock = require('greenlock-express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

if (!dev) {
	greenlock.create({
		agreeTos: true,
		app: express().get('*', (req, res) => {
			return handle(req, res);
		}),
		approveDomains: ['haus.gg', 'www.haus.gg'],
		configDir: '/tmp/etc/greenlock',
		email: 'globexdesigns@gmail.com',
		server: 'https://acme-v02.api.letsencrypt.org/directory',
		version: 'draft-11',
	}).listen(80, 443);
} else {
	app.prepare()
		.then(() => {
			const server = express();

			server.get('*', (req, res) => {
				return handle(req, res);
			});

			// In production `greenlock-express` will take over
			const port = parseInt(process.env.PORT, 10) || 3000;

			server.listen(port, (err) => {
				if (err) throw err;
				// eslint-disable-next-line no-console
				console.log(`> Ready on http://localhost:${port}`);
			});

			return server;
		})
		.catch((err) => {
			throw err;
		});
}
