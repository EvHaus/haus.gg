// @flow
/* eslint-disable max-len */

import React, {type Element, PureComponent} from 'react';

export default class Twitter extends PureComponent<{}> {
	static displayName = 'Twitter';

	render (): Element<'svg'> {
		return (
			<svg height='24' viewBox='0 0 82.67 82.67' width='24' xmlns='http://www.w3.org/2000/svg'>
				<path d='M41.33,0A41.34,41.34,0,1,0,82.67,41.33,41.33,41.33,0,0,0,41.33,0Zm0,77.33a36,36,0,1,1,36-36A36,36,0,0,1,41.33,77.33Z' fill='currentColor' />
				<path d='M22.89,56.21A23.65,23.65,0,0,0,35.69,60C51.19,60,60,46.87,59.42,35.12a16.8,16.8,0,0,0,4.17-4.32,17.15,17.15,0,0,1-4.8,1.32,8.35,8.35,0,0,0,3.67-4.62,16.74,16.74,0,0,1-5.3,2,8.35,8.35,0,0,0-14.22,7.62,23.67,23.67,0,0,1-17.21-8.73,8.35,8.35,0,0,0,2.58,11.15,8.31,8.31,0,0,1-3.78-1,8.36,8.36,0,0,0,6.69,8.29,8.36,8.36,0,0,1-3.77.14,8.37,8.37,0,0,0,7.8,5.8A16.8,16.8,0,0,1,22.89,56.21Z' fill='currentColor' />
			</svg>
		);
	}
}
