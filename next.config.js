// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
	experimental: {
		esmExternals: true,
		// Enable this when https://github.com/vercel/next.js/issues/46320 is fixed
		// typedRoutes: true,
	},
};
