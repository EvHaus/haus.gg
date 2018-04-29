// @flow

import React, {
	type Element,
	Fragment,
	type Node,
	PureComponent,
} from 'react';
import Head from 'next/head';

type PropsType = {
	children?: Node,
	title?: string,
};

export default class Template extends PureComponent<PropsType> {
	static displayName = 'Template';

	static defaultProps = {
		title: 'haus.gg',
	};

	componentDidMount () {
		const el = document.getElementsByTagName('html')[0];
		el.innerHTML = `<!--          _
             | |
  _____   __ | |__   __ _ _   _ ___
 / _ \\ \\ / / | '_ \\ / _\` | | | / __|
|  __/\\ V /  | | | | (_| | |_| \\__ \\
 \\___| \\_/   |_| |_|\\__,_|\\__,_|___/

If this code works - I totally wrote it.
Otherwise, I don't know where it came from.
-->${el.innerHTML}`;
	}

	render (): Element<typeof Fragment> {
		const {children, title} = this.props;

		return (
			<Fragment>
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
					<title>haus.gg</title>
				</Head>
				{children}
				<style global={true} jsx={true}>{`
body {
	background: #222;
	color: #FFF;
	display: flex;
	font-family: "Geo", sans-serif;
	height: 100%;
	margin: 0;
	overflow: hidden;
	padding: 0;
	width: 100%;
}`}
				</style>
			</Fragment>
		);
	}
}
