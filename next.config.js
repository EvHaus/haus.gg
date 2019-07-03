// @flow strict

/* eslint-disable import/no-commonjs */

const withCSS = require('@zeit/next-css');

module.exports = withCSS({
	cssModules: true,
	cssLoaderOptions: {
		localIdentName: '[name]__[local]',
	},
});
