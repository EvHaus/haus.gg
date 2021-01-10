// @flow strict

/* eslint-disable react/jsx-props-no-spreading */

import './_app.css';
import 'tippy.js/dist/tippy.css';
import {initGA, logPageView} from '../utils/analytics';
import React, {type Element, Fragment} from 'react';
import {SITE_AUTHOR, SITE_DESC, SITE_NAME, TWITTER_USER} from '../constants/seo';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';

export default class _app extends App {
	componentDidMount () {
		initGA();
		logPageView();
		Router.events.on('routeChangeComplete', logPageView);
	}

	render (): Element<typeof Fragment> {
		const {Component, pageProps} = this.props;
		return (
			<Fragment>
				<Head>
					<title>{SITE_NAME}</title>
					<meta charSet='utf-8' />
					<meta content='width=device-width,initial-scale=1,shrink-to-fit=no' name='viewport' />
					<meta content={SITE_NAME} name='application-name' />
					<meta content={SITE_DESC} name='description' />
					<meta content='next.js' name='generator' />
					<meta content='General' name='rating' />
					<meta content='#222' name='theme-color' />
					<meta content={SITE_AUTHOR} property='article:author' />
					<meta content={SITE_DESC} property='og:description' />
					<meta content='en_US' property='og:locale' />
					<meta content={SITE_NAME} property='og:site_name' />
					<meta content={SITE_NAME} property='og:title' />
					<meta content='website' property='og:type' />
					<meta content='summary' property='twitter:card' />
					<meta content={TWITTER_USER} property='twitter:creator' />
					<meta content={SITE_DESC} property='twitter:description' />
					<meta content={SITE_NAME} property='twitter:title' />
					<link
						as='font'
						crossOrigin='anonymous'
						href='/fonts/montserrat-v14-latin-200.woff2'
						rel='preload'
						type='font/woff2' />
					<link
						as='font'
						crossOrigin='anonymous'
						href='/fonts/montserrat-v14-latin-regular.woff2'
						rel='preload'
						type='font/woff2' />
					<link href='/favicon.ico' rel='icon' type='image/x-icon' />
					<link href='https://www.google-analytics.com' rel='preconnect' />
				</Head>
				<Component {...pageProps} />
			</Fragment>
		);
	}
}
