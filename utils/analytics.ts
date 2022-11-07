import ReactGA from 'react-ga';

export const initGA = () => {
	ReactGA.initialize('UA-250654-12');
};

export const logPageView = () => {
	ReactGA.set({page: window.location.pathname});
	ReactGA.pageview(window.location.pathname);
};

export const logEvent = (
	category = '',
	action = ''
) => {
	if (category && action) {
		ReactGA.event({action, category});
	}
};

export const logException = (
	description = '',
	fatal = false
) => {
	if (description) {
		ReactGA.exception({description, fatal});
	}
};
