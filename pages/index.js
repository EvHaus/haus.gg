// @flow

import React, {type Element, PureComponent} from 'react';
import Template from './../components/Template';

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

	render (): Element<typeof Template> {
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
			<Template>
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
								{/* eslint-disable-next-line */}
								<path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z' fill='currentColor' />
							</svg>
						</a>
					</div>
				</div>
				<style jsx={true}>{`
.view {
	bottom: 0;
	left: 0;
	perspective: 400;
	position: absolute;
	right: 0;
	top: 0;
	user-select: none;
}

.logo {
	align-items: center;
	bottom: 0;
	display: flex;
	font-size: 42px;
	justify-content: center;
	left: 0;
	padding-top: 140px;
	pointer-events: none;
	position: absolute;
	right: 0;
	top: 0;
	user-select: none;
}

.logoEv {
	color: #999;
	margin-right: 8px;
}

.logoHaus { color: #FFF }

.logoDot,
.logoDomain {
	color: #4F4F61;
	font-size: 32px;
	line-height: 20px;
	margin-top: 8px;
}

.logoDomain {
	font-weight: bold;
}

.icons {
	align-items: center;
	bottom: 0;
	display: flex;
	justify-content: center;
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
}

.orb {
	animation-iteration-count: infinite;
	animation-name: orbRotate;
	animation-timing-function: ease-in-out;
	bottom: 0;
	height: 120px;
	left: 0;
	margin: auto;
	position: absolute;
	right: 0;
	top: -100px;
	transform: rotateX(60deg) rotateZ(-30deg);
	transform-style: preserve-3d;
	width: 120px;
}

.orbCircle {
	border-radius: 100%;
	box-shadow: 0 0 60px currentColor, inset 0 0 60px currentColor;
	box-sizing: border-box;
	height: 120px;
	position: absolute;
	transform-style: preserve-3d;
	width: 120px;
}

.orbCircle::before,
.orbCircle::after {
	border-radius: 100%;
	bottom: 0;
	box-shadow: 0 0 60px 2px currentColor;
	box-sizing: border-box;
	content: "";
	display: block;
	left: 0;
	height: 0;
	margin: auto;
	position: absolute;
	right: 0;
	top: 0;
	width: 0;
}

.orbCircle::before { transform: translateZ(-90px) }
.orbCircle::after { transform: translateZ(90px) }
.orbCircle:nth-child(1) { transform: rotateZ(72deg) rotateX(63.435deg) }
.orbCircle:nth-child(2) { transform: rotateZ(144deg) rotateX(63.435deg) }
.orbCircle:nth-child(3) { transform: rotateZ(216deg) rotateX(63.435deg) }
.orbCircle:nth-child(4) { transform: rotateZ(288deg) rotateX(63.435deg) }
.orbCircle:nth-child(5) { transform: rotateZ(360deg) rotateX(63.435deg) }

@keyframes orbRotate {
	0% { transform: rotateX(0) rotateY(0) rotateZ(0) }
	100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg) }
}

@keyframes orbZoom {
	0% { transform: scale(1) }
	50% { transform: translateY(40px) scale(2) }
	80% { transform: scale(0.8) }
	90% { transform: scale(1.1) }
	95% { transform: scale(0.9) }
	100% { transform: scale(1) }
}

.icons { margin-top: 260px }

.iconLink { color: #686F80 }
.iconLink:hover { color: #FFF }`}
				</style>
			</Template>
		);
	}
}
