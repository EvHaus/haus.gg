import Button from '../components/Button';
import React from 'react';
import SocialIcon from '../components/SocialIcon';
import styles from './page.module.css';

// Array of colors for the circle
const CIRCLE_COLORS = [
	'#E9FCC7',
	'#FDE0A8',
	'#FFB99B',
	'#CC8E9A',
	'#686F80',
	'#919FB6',
	'#4F4F61',
];

// Number of circles in animation
const CIRCLE_COUNT = 6;

// Opacity of circles in animation
const CIRCLE_OPACITY = 0.6;

const Index = () => {
	const circleStyle = { opacity: CIRCLE_OPACITY };

	// const handleClick = async () => {
	// 	const result = await fetch('/api/resume');
	// 	const payload = await result.json();
	// 	window.open(payload.data.url);
	// };

	return (
		<div className={styles.view}>
			<h1 className={styles.logo}>
				<span className={styles.logoEv}>EV</span>
				<span className={styles.logoHaus}>HAUS</span>
			</h1>
			<div className={styles.orb}>
				<div className={styles.orbInner}>
					{Array.from(new Array(CIRCLE_COUNT)).map((v, i) => {
						const circleStyleUnique = {
							color: CIRCLE_COLORS[i],
						};

						return (
							<div
								className={styles.orbCircle}
								key={i}
								style={{...circleStyle, ...circleStyleUnique}} />
						);
					})}
				</div>
			</div>
			<div className={styles.resume}>
				<Button label='My Resume' link='/api/resume' />
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
};

export default Index;
