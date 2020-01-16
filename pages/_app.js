// @flow strict

/* eslint-disable react/jsx-props-no-spreading */

import './_app.css';
import 'tippy.js/dist/tippy.css';
import {DEFAULT_META, SITE_NAME} from '../constants/seo';
import {initGA, logPageView} from '../utils/analytics';
import React, {type Element, Fragment} from 'react';
import App from 'next/app';
import {Helmet} from 'react-helmet';
import Router from 'next/router';

export default class _app extends App {
	componentDidMount () {
		initGA();
		logPageView();
		Router.router.events.on('routeChangeComplete', logPageView);
	}

	render (): Element<typeof Fragment> {
		const {Component, pageProps} = this.props;
		return (
			<Fragment>
				<Helmet
					htmlAttributes={{lang: 'en'}}
					meta={DEFAULT_META}
					title={SITE_NAME}
					titleTemplate={SITE_NAME} />
				<Component {...pageProps} />
			</Fragment>
		);
	}
}
