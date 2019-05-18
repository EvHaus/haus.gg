/* eslint-disable flowtype/require-valid-file-annotation, import/no-commonjs */
/* eslint-disable flowtype/require-return-type, flowtype/require-parameter-type */

const compression = require('compression');
const express = require('express');
const greenlock = require('greenlock-express');
const next = require('next');

const __DEV__ = process.env.NODE_ENV !== 'production';
const app = next({dev: __DEV__});
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	// In production enable GZIP compression
	if (!__DEV__) server.use(compression());

	server.get('*', (req, res) => {
		return handle(req, res);
	});

	// In production `greenlock-express` will take over
	if (!__DEV__) {
		return greenlock.create({
			app: server,
			approveDomains (opts, certs, cb) {
				opts.domains = certs && certs.altnames || opts.domains;
				opts.email = 'globexdesigns@gmail.com';
				opts.agreeTos = true;

				cb(null, {
					certs,
					options: opts,
				});
			},
			configDir: '/tmp/etc/greenlock',
			server: 'https://acme-v02.api.letsencrypt.org/directory',
			version: 'draft-11',
		}).listen(80, 443);
	}

	const port = parseInt(process.env.PORT, 10) || 3000;

	server.listen(port, (err) => {
		if (err) throw err;
		// eslint-disable-next-line no-console
		console.log(`> Ready on http://localhost:${port}`);
	});

	return server;
}).catch((err) => {
	throw err;
});
