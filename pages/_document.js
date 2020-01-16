// @flow strict

/* eslint-disable react/jsx-props-no-spreading */

import Document, {Head, Main, NextScript} from 'next/document';
import React, {type Element} from 'react';
import {type Context} from 'next';
import {Helmet} from 'react-helmet';

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

		// That script tag on the end -- that's a fix for crazy FOUC bug in Chrome
		// See https://stackoverflow.com/questions/14389566
		return (
			// eslint-disable-next-line jsx-a11y/html-has-lang
			<html {...htmlArgs}>
				<Head>
					{headElements}
					<link
						as='font'
						crossOrigin={true}
						href='/fonts/muli-v12-latin-regular.woff2'
						rel='preload'
						type='font/woff2' />
					<link
						as='font'
						crossOrigin={true}
						href='/fonts/muli-v12-latin-700.woff2'
						rel='preload'
						type='font/woff2' />
					<link href='/favicon.ico' rel='icon' type='image/x-icon' />
				</Head>
				<body {...bodyArgs}>
					<Main />
					<NextScript />
					<script> </script>
				</body>
			</html>
		);
	}
}
