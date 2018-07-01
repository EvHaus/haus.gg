// @flow

// TODO: Blocked by https://github.com/zeit/next-plugins/issues/149
// import './_document.css';
import Document, {Head, Main, NextScript} from 'next/document';
import React, {type Element} from 'react';
import ReactGA from 'react-ga';

const __DEV__ = process.env.NODE_ENV !== 'production';

export const initGA = function () {
	ReactGA.initialize('UA-250654-12', {
		debug: __DEV__,
	});
};

export const logPageView = (
	pageName: string = window.location.pathname + window.location.search
) => {
	ReactGA.set({page: pageName});
	ReactGA.pageview(pageName);
};

export default class MyDocument extends Document {
	componentDidMount () {
		if (!window.GA_INITIALIZED) {
			initGA();
			window.GA_INITIALIZED = true;
		}
		logPageView();
	}

	render (): Element<'html'> {
		return (
			<html lang='en'>
				<Head>
					<meta charSet='utf-8' />
					<meta content='ie=edge' httpEquiv='x-ua-compatible' />
					<meta content='haus.gg' name='application-name' />
					<meta content='Personal website of Ev Haus' name='description' />
					<meta content='next.js' name='generator' />
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

					<link href='https://fonts.googleapis.com/css?family=Montserrat:200,400' rel='stylesheet' />
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
