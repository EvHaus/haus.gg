import React, {type Element, PureComponent} from 'react';
import './Home.css';

type PropsType = {
	// Array of colors for the circle
	circleColors: Array<string>,
	// Number of circles in animation
	circleCount: boolean,
	// Opacity of circles in animation
	circleOpacity: number,
	// Speed of animation in ms
	circleSpeed: number
};

class Home extends PureComponent<PropsType> {
	static displayName = "Home";

	static defaultProps = {
		circleColors: [
			'#E9FCC7',
			'#FDE0A8',
			'#FFB99B',
			'#CC8E9A',
			'#686F80',
			'#919FB6',
			'#4F4F61'
		],
		circleCount: 6,
		circleOpacity: 0.6,
		circleSpeed: 10000
	};

	render () {
		const {
			circleColors,
			circleCount,
			circleOpacity,
			circleSpeed
		} = this.props;

		const orbStyle = {
			animationDuration: `${circleSpeed}ms`
		};

		const circleStyle = {
			opacity: circleOpacity
		};

		return (
			<div className="view">
				<div className="logo">
					<strong className="logoLetter">e</strong>v&nbsp;
					<strong className="logoLetter">h</strong>aus
					<span className="logoDot">.</span>
					<strong className="logoDomain">gg</strong>
				</div>
				<div className="orb" style={orbStyle}>
					{Array.apply(null, Array(circleCount)).map((
						v: void,
						i: number
					): Element<'div'> => {
						const circleStyleUnique = {
							color: circleColors[i]
						};

						return (
							<div
								className="orbCircle"
								key={i}
								style={{...circleStyle, ...circleStyleUnique}} />
						);
					})}
				</div>
			</div>
		);
	}
}

export default Home;
