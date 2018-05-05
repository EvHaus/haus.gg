// @flow
/* eslint-disable max-len */

import React, {type Element, PureComponent} from 'react';

export default class Email extends PureComponent<{}> {
	static displayName = 'Email';

	render (): Element<'svg'> {
		const textStyle = {
			fill: 'currentColor',
			fontSize: '48.51px',
			fontFamily: 'Roboto-Bold',
			fontWeight: 700,
		};

		return (
			<svg height='24' viewBox='0 0 82.67 82.67' width='24' xmlns='http://www.w3.org/2000/svg'>
				<path d='M41.33,0A41.34,41.34,0,1,0,82.67,41.33,41.33,41.33,0,0,0,41.33,0Zm0,77.33a36,36,0,1,1,36-36A36,36,0,0,1,41.33,77.33Z' fill='currentColor' />
				<text style={textStyle} transform='translate(17.31 54.28) scale(1.13 1)'>@</text>
			</svg>
		);
	}
}
