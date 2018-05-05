// @flow
/* eslint-disable max-len */

import React, {type Element, PureComponent} from 'react';

export default class Instagram extends PureComponent<{}> {
	static displayName = 'Instagram';

	render (): Element<'svg'> {
		return (
			<svg height='24' viewBox='0 0 82.67 82.67' width='24' xmlns='http://www.w3.org/2000/svg'>
				<path d='M41.33,0A41.34,41.34,0,1,0,82.67,41.33,41.33,41.33,0,0,0,41.33,0Zm0,77.33a36,36,0,1,1,36-36A36,36,0,0,1,41.33,77.33Z' fill='currentColor' />
				<path d='M41.73,31.15a10.36,10.36,0,0,1,7.38,3.09H62V29h0a8,8,0,0,0-8-8H32.11V31.07H30.47V21H29.33V31.07H27.69V21.19a7.32,7.32,0,0,0-1.15.36v9.52H24.89V22.45A8,8,0,0,0,21.51,29v5.26H34.35A10.36,10.36,0,0,1,41.73,31.15Zm9.71-5.54a1.28,1.28,0,0,1,1.29-1.28h4.32a1.28,1.28,0,0,1,1.29,1.28V30a1.29,1.29,0,0,1-1.29,1.28H52.73A1.28,1.28,0,0,1,51.44,30Z' fill='currentColor' />
				<path d='M47,35.51a8,8,0,0,0-8.54-1.27,8.3,8.3,0,0,0-2,1.27,8,8,0,1,0,10.51,0Zm-5.23,11.9a5.9,5.9,0,1,1,5.9-5.9A5.9,5.9,0,0,1,41.75,47.41Z' fill='currentColor' />
				<path d='M29.52,61.68H54a8,8,0,0,0,8-8V35.51H50.17a10.36,10.36,0,1,1-16.88,0H21.51V53.67A8,8,0,0,0,29.52,61.68Z' fill='currentColor' />
			</svg>
		);
	}
}
