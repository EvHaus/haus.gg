// @ts-check

/* eslint-disable import/no-commonjs */

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
	experimental: {
		esmExternals: true,
	},
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
};
