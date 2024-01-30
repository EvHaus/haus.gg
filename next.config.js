// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
	experimental: {
		// Needed to ensure react-pdf works with Next 13+. Fixes error:
		// TypeError: ba.Component is not a constructor. For more info:
		// https://github.com/diegomura/react-pdf/issues/2350
		serverComponentsExternalPackages: ['@react-pdf/renderer'],

		// Not supported in Turbopack yet. Enable when it is.
		// typedRoutes: true,
	},
};
