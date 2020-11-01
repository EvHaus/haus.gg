// @flow strict

/* eslint-disable react/jsx-props-no-spreading */

import Document, {Head, Html, Main, NextScript} from 'next/document';
import React, {type Element} from 'react';
import {Helmet} from 'react-helmet';

export default class _document extends Document {
	static async getInitialProps (ctx: any): Promise<any> {
		const initialProps = await Document.getInitialProps(ctx);
		return {...initialProps, helmet: Helmet.renderStatic()};
	}

	render (): Element<typeof Html> {
		const {helmet} = this.props;
		const htmlArgs = helmet.htmlAttributes.toComponent();
		const bodyArgs = helmet.bodyAttributes.toComponent();
		const headElements = Object.keys(this.props.helmet)
			.filter((el: string): boolean => el !== 'htmlAttributes' && el !== 'bodyAttributes')
			.map((el: string): Element<any> => helmet[el].toComponent());

		// That script tag on the end -- that's a fix for crazy FOUC bug in Chrome
		// See https://stackoverflow.com/questions/14389566
		return (
			<Html {...htmlArgs}>
				<Head>
					{headElements}
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
				<body {...bodyArgs}>
					<Main />
					<NextScript />
					<script> </script>
				</body>
			</Html>
		);
	}
}
