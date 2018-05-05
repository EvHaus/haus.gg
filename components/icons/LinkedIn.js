// @flow
/* eslint-disable max-len */

import React, {type Element, PureComponent} from 'react';

export default class LinkedIn extends PureComponent<{}> {
	static displayName = 'LinkedIn';

	render (): Element<'svg'> {
		return (
			<svg height='24' viewBox='0 0 82.67 82.67' width='24' xmlns='http://www.w3.org/2000/svg'>
				<path d='M41.33,0A41.34,41.34,0,1,0,82.67,41.33,41.33,41.33,0,0,0,41.33,0Zm0,77.33a36,36,0,1,1,36-36A36,36,0,0,1,41.33,77.33Z' fill='currentColor' />
				<rect fill='currentColor' height='25.54' width='7.9' x='23.77'
					y='33.2' />
				<path
					d='M27.68,29.85A4.71,4.71,0,1,0,23,25.14,4.7,4.7,0,0,0,27.68,29.85Z'
					fill='currentColor' />
				<path
					d='M44.31,45.33c0-3.59,1.65-5.73,4.81-5.73,2.91,0,4.31,2,4.31,5.73v13.4h7.86V42.56c0-6.84-3.87-10.14-9.29-10.14a8.9,8.9,0,0,0-7.69,4.21V33.2H36.72V58.73h7.59Z'
					fill='currentColor' />
			</svg>
		);
	}
}
