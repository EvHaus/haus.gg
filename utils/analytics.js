// @flow

import ReactGA from 'react-ga';

export const initGA = () => {
	const __DEV__ = process.env.NODE_ENV !== 'production';
	ReactGA.initialize('UA-250654-12');
};

export const logPageView = () => {
	ReactGA.set({page: window.location.pathname});
	ReactGA.pageview(window.location.pathname);
};

export const logEvent = (
	category: string = '',
	action: string = ''
) => {
	if (category && action) {
		ReactGA.event({category, action});
	}
};

export const logException = (
	description: string = '',
	fatal: boolean = false
) => {
	if (description) {
		ReactGA.exception({description, fatal});
	}
};
