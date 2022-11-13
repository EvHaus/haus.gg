import {SITE_AUTHOR, SITE_DESC, SITE_NAME, TWITTER_USER} from '../constants/seo';
import Analytics from '../components/Analytics';
import {clsx} from 'clsx';
import {Montserrat} from '@next/font/google';
import React from 'react';
import SillyComment from '../components/SillyComment';
import styles from './layout.module.css';

type PropsType = {
	children?: React.ReactNode,
};

const monserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
});

const Layout = ({ children }: PropsType) => (
	<html className={clsx(styles.main, monserrat.variable)} lang='en'>
		<head>
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
			<link href='https://www.google-analytics.com' rel='preconnect' />
		</head>
		<body>
			{children}
			<Analytics />
			<SillyComment />
		</body>
	</html>
);

export default Layout;
