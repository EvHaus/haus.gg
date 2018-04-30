// @flow

// TODO: Blocked by https://github.com/zeit/next-plugins/issues/149
// import './_document.css';
import Document, {Head, Main, NextScript} from 'next/document';
import React, {type Element} from 'react';

export default class MyDocument extends Document {
	render (): Element<'html'> {
		return (
			<html lang='en'>
				<Head>
					<meta charSet='utf-8' />
					<meta content='ie=edge' httpEquiv='x-ua-compatible' />
					<meta content='haus.gg' name='application-name' />
					<meta content='Personal website of Ev Haus' name='description' />
					<meta content='razzle' name='generator' />
					<meta content='General' name='rating' />
					<meta content='#222' name='theme-color' />
					<meta content='width=device-width,initial-scale=1,shrink-to-fit=no' name='viewport' />

					<meta content='Ev Haus' property='article:author' />
					<meta content='Personal website of Ev Haus' property='og:description' />
					<meta content='en_US' property='og:locale' />
					<meta content='haus.gg' property='og:site_name' />
					<meta content='haus.gg' property='og:title' />
					<meta content='website' property='og:type' />

					<meta content='summary' name='twitter:card' />
					<meta content='@EvHaus' name='twitter:creator' />
					<meta content='Personal website of Ev Haus' name='twitter:description' />
					<meta content='haus.gg' name='twitter:title' />

					<link href='https://fonts.googleapis.com/css?family=Geo' rel='stylesheet' />
					<link href='/static/favicon.ico' rel='icon' type='image/x-icon' />
					<link href='/_next/static/style.css' rel='stylesheet' />

					<title>haus.gg</title>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
