// @flow strict

/* eslint-disable import/no-commonjs */

const withCSS = require('@zeit/next-css');

module.exports = withCSS({
	cssModules: true,
	cssLoaderOptions: {
		importLoaders: 1,
		localIdentName: '[name]__[local]',
	},
});
