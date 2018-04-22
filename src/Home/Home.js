// @flow

import './Home.css';
import React, {type Element, PureComponent} from 'react';

type PropsType = {
	// Array of colors for the circle
	circleColors: Array<string>,
	// Number of circles in animation
	circleCount: boolean,
	// Opacity of circles in animation
	circleOpacity: number,
	// Speed of animation in ms
	circleSpeed: number,
};

export default class Home extends PureComponent<PropsType> {
	static displayName = 'Home';

	static defaultProps = {
		circleColors: [
			'#E9FCC7',
			'#FDE0A8',
			'#FFB99B',
			'#CC8E9A',
			'#686F80',
			'#919FB6',
			'#4F4F61',
		],
		circleCount: 6,
		circleOpacity: 0.6,
		circleSpeed: 10000,
	};

	render (): Element<'div'> {
		const {
			circleColors,
			circleCount,
			circleOpacity,
			circleSpeed,
		} = this.props;

		const orbStyle = {
			animationDuration: `${circleSpeed}ms`,
		};

		const circleStyle = {
			opacity: circleOpacity,
		};

		return (
			<div className='view'>
				<div className='logo'>
					<span className='logoEv'>ev</span>
					<span className='logoHaus'>haus</span>
					<span className='logoDot'>.</span>
					<span className='logoDomain'>gg</span>
				</div>
				<div className='orb' style={orbStyle}>
					{Array(...Array(circleCount)).map((
						v: void,
						i: number
					): Element<'div'> => {
						const circleStyleUnique = {
							color: circleColors[i],
						};

						return (
							<div
								className='orbCircle'
								key={i}
								style={{...circleStyle, ...circleStyleUnique}} />
						);
					})}
				</div>
				{this._renderIcons()}
			</div>
		);
	}

	_renderIcons (): Element<'div'> {
		/* eslint-disable max-len */
		return (
			<div className='icons'>
				<a
					className='iconLink'
					href='https://www.linkedin.com/in/evhaus'
					rel='noopener noreferrer'
					target='_blank'>
					<svg
						height='24'
						viewBox='0 0 24 24'
						width='24'
						xmlns='http://www.w3.org/2000/svg'>
						<path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z' fill='currentColor' />
					</svg>
				</a>
			</div>
		);
		/* eslint-enable max-len */
	}
}
