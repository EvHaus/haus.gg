'use client';

import {GoogleAnalytics} from 'nextjs-google-analytics';
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import {Analytics as VercelAnalytics} from '@vercel/analytics/react';

const Analytics = () => (
	<>
		<GoogleAnalytics trackPageViews={true} />
		<VercelAnalytics />
	</>
);

export default Analytics;
