// @flow
/* eslint-disable import/no-mutable-exports */

import App from './App';
import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';

// flow-disable-next-line
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const server = express();

const app = server
	.disable('x-powered-by')
	.use(express.static(process.env.RAZZLE_PUBLIC_DIR))
	.get('/*', (req: *, res: *) => {
		const context = {};
		const markup = renderToString(
			<StaticRouter context={context} location={req.url}>
				<App />
			</StaticRouter>
		);

		if (context.url) {
			res.redirect(context.url);
		} else {
			res.status(200).send(`<!doctype html>
<!--          _
             | |
  _____   __ | |__   __ _ _   _ ___
 / _ \\ \\ / / | '_ \\ / _\` | | | / __|
|  __/\\ V /  | | | | (_| | |_| \\__ \\
 \\___| \\_/   |_| |_|\\__,_|\\__,_|___/

If this code works - I totally wrote it.
Otherwise, I don't know where it came from.
-->
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="application-name" content="haus.gg" />
        <meta name="description" content="Personal website of Ev Haus" />
        <meta name="generator" content="razzle" />
        <meta name="rating" content="General" />
        <meta name="theme-color" content="#222" />
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />

        <meta property="article:author" content="Ev Haus" />
        <meta property="og:description" content="Personal website of Ev Haus" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="haus.gg" />
        <meta property="og:title" content="haus.gg" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@EvHaus" />
        <meta name="twitter:description" content="Personal website of Ev Haus" />
        <meta name="twitter:title" content="haus.gg" />

        <title>haus.gg</title>
        ${assets.client.css ?
		`<link rel="stylesheet" href="${assets.client.css}">` :
		''}
        ${process.env.NODE_ENV === 'production' ?
		`<script src="${assets.client.js}" defer></script>` :
		`<script src="${assets.client.js}" defer crossorigin></script>`}
    </head>
    <body>
        <div id="root">${markup}</div>
    </body>
</html>`
			);
		}
	});

export default app;
