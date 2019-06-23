// @flow

/* eslint-disable react/jsx-props-no-spreading */

import './_app.css';
import App, {Container} from 'next/app';
import {DEFAULT_META, SITE_NAME} from '../constants/seo';
import {initGA, logPageView} from '../utils/analytics';
import React, {type Element} from 'react';
import {Helmet} from 'react-helmet';
import Router from 'next/router';

export default class _app extends App {
	static async getInitialProps ({Component, ctx, router}: any): {} {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return {pageProps};
	}

	componentDidMount () {
		initGA();
		logPageView();
		Router.router.events.on('routeChangeComplete', logPageView);
	}

	render (): Element<typeof Container> {
		const {Component, pageProps} = this.props;
		return (
			<Container>
				<Helmet
					htmlAttributes={{lang: 'en'}}
					meta={DEFAULT_META}
					title={SITE_NAME}
					titleTemplate={SITE_NAME} />
				<Component {...pageProps} />
			</Container>
		);
	}
}
