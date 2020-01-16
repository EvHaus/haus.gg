// @flow strict

import React, {type Element, PureComponent} from 'react';
import Button from '../components/Button';
import SocialIcon from '../components/SocialIcon';
import styles from './index.module.css';

type PropsType = {|
	// Array of colors for the circle
	+circleColors: Array<string>,
	// Number of circles in animation
	+circleCount: boolean,
	// Opacity of circles in animation
	+circleOpacity: number,
	// Speed of animation in ms
	+circleSpeed: number,
|};

export default class index extends PureComponent<PropsType> {
	static displayName = 'index';

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

	componentDidMount () {
		const el = document.getElementsByTagName('html')[0];
		const c = document.createComment(`          _
		     | |
  _____   __ | |__   __ _ _   _ ___
 / _ \\ \\ / / | '_ \\ / _\` | | | / __|
|  __/\\ V /  | | | | (_| | |_| \\__ \\
 \\___| \\_/   |_| |_|\\__,_|\\__,_|___/

If this code works - I wrote it.
Otherwise, I don't know where it came from.`);
		el.prepend(c);
	}

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
			<div className={styles.view}>
				<div className={styles.logo}>
					<span className={styles.logoEv}>EV</span>
					<span className={styles.logoHaus}>HAUS</span>
				</div>
				<div className={styles.orb} style={orbStyle}>
					{Array(...Array(circleCount)).map((
						v: void,
						i: number
					): Element<'div'> => {
						const circleStyleUnique = {
							color: circleColors[i],
						};

						return (
							<div
								className={styles.orbCircle}
								key={i}
								style={{...circleStyle, ...circleStyleUnique}} />
						);
					})}
				</div>
				<div className={styles.resume}>
					<Button label='My Resume' link='/resume-ev-haus.pdf' />
				</div>
				<div className={styles.icons}>
					<SocialIcon type='linkedin' />
					<SocialIcon type='twitter' />
					<SocialIcon type='instagram' />
					<SocialIcon type='github' />
					<SocialIcon type='medium' />
					<SocialIcon type='stackoverflow' />
					<SocialIcon type='email' />
				</div>
			</div>
		);
	}
}
