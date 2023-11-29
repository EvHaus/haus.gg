'use client';

import WithTooltip from '../WithTooltip';
import styles from './SocialIcon.module.css';
import Email from './icons/Email';
import Github from './icons/Github';
import Instagram from './icons/Instagram';
import LinkedIn from './icons/LinkedIn';
import Medium from './icons/Medium';
import StackOverflow from './icons/StackOverflow';
import X from './icons/X';

type ItemType = {
	icon: JSX.Element;
	name: string;
	url: string;
};

type TypeType =
	| 'email'
	| 'github'
	| 'instagram'
	| 'linkedin'
	| 'medium'
	| 'stackoverflow'
	| 'twitter'
	| 'x';

type PropsType = {
	type: TypeType;
};

const getItem = (type: TypeType): ItemType => {
	switch (type) {
		case 'email':
			return {
				icon: <Email />,
				name: 'Email',
				url: 'mailto:ev@haus.gg',
			};
		case 'github':
			return {
				icon: <Github />,
				name: 'Github',
				url: 'https://github.com/EvHaus',
			};
		case 'instagram':
			return {
				icon: <Instagram />,
				name: 'Instagram',
				url: 'https://www.instagram.com/evhaus',
			};
		case 'linkedin':
			return {
				icon: <LinkedIn />,
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/evhaus',
			};
		case 'medium':
			return {
				icon: <Medium />,
				name: 'Medium',
				url: 'https://medium.com/@EvHaus',
			};
		case 'stackoverflow':
			return {
				icon: <StackOverflow />,
				name: 'Stack Overflow',
				url: 'https://stackoverflow.com/users/1330283/ev-haus',
			};
		case 'x':
			return {
				icon: <X />,
				name: 'X (Twitter)',
				url: 'https://x.com/EvHaus',
			};
		default:
			return {
				icon: <span />,
				name: '',
				url: '#',
			};
	}
};

export const SocialIcon = ({ type }: PropsType) => {
	const item = getItem(type);
	return (
		<WithTooltip placement='bottom' tooltip={item.name}>
			<a
				aria-label={item.name}
				className={styles.main}
				href={item.url}
				rel='noopener noreferrer'
				target='_blank'
			>
				{item.icon}
			</a>
		</WithTooltip>
	);
};

export default SocialIcon;
