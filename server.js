/* eslint-disable flowtype/require-valid-file-annotation, import/no-commonjs */
/* eslint-disable flowtype/require-return-type, flowtype/require-parameter-type */

const express = require('express');
const greenlock = require('greenlock-express');
const http = require('http');
const http2 = require('http2');
const next = require('next');
const redirectHttps = require('redirect-https');

const __DEV__ = process.env.NODE_ENV !== 'production';
const app = next({dev: __DEV__});
const handle = app.getRequestHandler();

app.prepare().then(() => {
	// Dev server uses express and none of the greenlock and HTTP2 stuff
	if (__DEV__) {
		const server = express();

		// All routes go to the next app
		server.get('*', (req, res) => handle(req, res));

		const port = parseInt(process.env.PORT, 10) || 3000;

		return server.listen(port, (err) => {
			if (err) throw err;
			// eslint-disable-next-line no-console
			console.log(`> Ready on http://localhost:${port}`);
		});
	}

	// Enable greenlock SSL
	const gLock = greenlock.create({
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
		store: require('greenlock-store-fs'),
		version: 'draft-11',
	});

	// Handle HTTPS connections with HTTP/2
	const server = http2.createSecureServer(gLock.tlsOptions);

	// All routes go to the next app
	server.on('request', (req, res) => {
		return app.render(req, res, '/', req.query);
	});

	// Handle HTTP connnections
	const acmeChallengeHandler = gLock.middleware(redirectHttps());
	http.createServer(acmeChallengeHandler).listen(80, () => {
		// eslint-disable-next-line no-console
		console.log('Listening for ACME http-01 challenges on 80');
	});

	// Handle HTTPS connections
	return server.listen(443, (err) => {
		if (err) throw err;
		// eslint-disable-next-line no-console
		console.log('Listening for http2 requests on 443');
	});
}).catch((err) => {
	throw err;
});
