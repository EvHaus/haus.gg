'use client';

import {GoogleAnalytics} from 'nextjs-google-analytics';
import React from 'react';

const Analytics = () => (
	<GoogleAnalytics trackPageViews={true} />
);

export default Analytics;
