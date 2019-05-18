// @flow

import Document, {Head, Main, NextScript} from 'next/document';
import React, {type Element} from 'react';
import {type Context} from 'next';
import Helmet from 'react-helmet';

const SITE_AUTHOR = 'Ev Haus';
const SITE_NAME = 'haus.gg';
const SITE_DESC = 'Personal website of Ev Haus';
const TWITTER_USER = '@EvHaus';

const DEFAULT_META = [
	{charSet: 'utf-8'},
	{content: 'ie=edge', httpEquiv: 'x-ua-compatible'},
	{name: 'viewport', content: 'width=device-width,initial-scale=1,shrink-to-fit=no'},

	{content: SITE_NAME, name: 'application-name'},
	{content: SITE_DESC, name: 'description'},
	{content: 'next.js', name: 'generator'},
	{content: 'General', name: 'rating'},
	{content: '#222', name: 'theme-color'},

	{content: SITE_AUTHOR, property: 'article:author'},
	{content: SITE_DESC, property: 'og:description'},
	{content: 'en_US', property: 'og:locale'},
	{content: SITE_NAME, property: 'og:site_name'},
	{content: SITE_NAME, property: 'og:title'},
	{content: 'website', property: 'og:type'},

	{content: 'summary', property: 'twitter:card'},
	{content: TWITTER_USER, property: 'twitter:creator'},
	{content: SITE_DESC, property: 'twitter:description'},
	{content: SITE_NAME, property: 'twitter:title'},
];

export default class _document extends Document {
	static async getInitialProps (...args: Context): Promise<any> {
		const documentProps = await super.getInitialProps(...args);
		return {...documentProps, helmet: Helmet.renderStatic()};
	}

	render (): Element<'html'> {
		const {helmet} = this.props;
		const htmlArgs = helmet.htmlAttributes.toComponent();
		const bodyArgs = helmet.bodyAttributes.toComponent();
		const headElements = Object.keys(this.props.helmet)
			.filter((el: string): boolean => el !== 'htmlAttributes' && el !== 'bodyAttributes')
			.map((el: string): Element<any> => helmet[el].toComponent());

		return (
			// eslint-disable-next-line jsx-a11y/html-has-lang
			<html {...htmlArgs}>
				<Head>
					<Helmet
						htmlAttributes={{lang: 'en'}}
						meta={DEFAULT_META}
						title={SITE_NAME} />
					{headElements}
					<link href='https://fonts.googleapis.com/css?family=Montserrat:200,400' rel='stylesheet' />
					<link href='/static/favicon.ico' rel='icon' type='image/x-icon' />
					<link href='/_next/static/style.css' rel='stylesheet' />
				</Head>
				<body {...bodyArgs}>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
