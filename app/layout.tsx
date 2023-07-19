import Analytics from '../components/Analytics';
import {clsx} from 'clsx';
import {type Metadata} from 'next';
import {Montserrat} from 'next/font/google';
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
		<body>
			{children}
			<Analytics />
			<SillyComment />
		</body>
	</html>
);

const SITE_AUTHOR = 'Ev Haus';
const SITE_NAME = 'Ev Haus';
const SITE_DESC = 'Personal website of Ev Haus';

export const metadata: Metadata = {
	applicationName: SITE_NAME,
	authors: [{name: SITE_AUTHOR}],
	creator: SITE_AUTHOR,
	description: SITE_DESC,
	generator: 'Next.js',
	keywords: ['Ev', 'Haus'],
	openGraph: {
		description: SITE_DESC,
		locale: 'en-US',
		siteName: SITE_NAME,
		title: SITE_NAME,
		type: 'website',
	},
	publisher: SITE_AUTHOR,
	themeColor: '#222',
	title: SITE_NAME,
	twitter: {
		card: 'summary',
		creator: '@EvHaus',
		description: SITE_DESC,
		title: SITE_NAME,
	},
};

export default Layout;
