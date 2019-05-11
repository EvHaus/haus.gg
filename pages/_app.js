// @flow

import './_app.css';
import App, {Container} from 'next/app';
import {initGA, logPageView} from '../utils/analytics';
import React, {type Element} from 'react';
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
				<Component {...pageProps} />
			</Container>
		);
	}
}
