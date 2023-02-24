// @ts-check

/* eslint-disable import/no-commonjs */

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
	experimental: {
		appDir: true,
		esmExternals: true,
		// Enable this when https://github.com/vercel/next.js/issues/46320 is fixed
		// typedRoutes: true,
	},
};
