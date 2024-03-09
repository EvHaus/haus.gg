import ResumeButton from '../components/ResumeButton/ResumeButton';
import SocialIcon from '../components/SocialIcon/SocialIcon';
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

	return (
		<div className={styles.view}>
			<h1 className={styles.logo}>
				<span className={styles.logoEv}>Ev</span>
				<span className={styles.logoHaus}>Haus</span>
			</h1>
			<div className={styles.orb}>
				<div className={styles.orbInner}>
					{Array.from(new Array(CIRCLE_COUNT)).map((_v, i) => {
						const circleStyleUnique = {
							color: CIRCLE_COLORS[i],
						};

						return (
							<div
								className={styles.orbCircle}
								key={`${
									// biome-ignore lint/suspicious/noArrayIndexKey: Index is stable here
									i
								}`}
								style={{ ...circleStyle, ...circleStyleUnique }}
							/>
						);
					})}
				</div>
			</div>
			<div className={styles.resume}>
				<ResumeButton />
			</div>
			<div className={styles.icons}>
				<SocialIcon type='linkedin' />
				<SocialIcon type='x' />
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
