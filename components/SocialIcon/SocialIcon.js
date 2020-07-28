// @flow strict

import React, {type Element, memo} from 'react';
import Email from './icons/Email';
import Github from './icons/Github';
import Instagram from './icons/Instagram';
import LinkedIn from './icons/LinkedIn';
import Medium from './icons/Medium';
import StackOverflow from './icons/StackOverflow';
import styles from './SocialIcon.module.css';
import Tippy from '@tippyjs/react';
import Twitter from './icons/Twitter';

type ItemType = {
	icon: Element<any>,
	name: string,
	url: string,
};

type TypeType = (
	'email' | 'github' | 'instagram' | 'linkedin' | 'medium' | 'stackoverflow' | 'twitter'
);

type PropsType = {
	type: TypeType,
};

const getItem = (type: TypeType): ItemType => {
	switch (type) {
		case 'email': return {
			icon: <Email />,
			name: 'Email',
			url: 'mailto:ev@haus.gg',
		};
		case 'github': return {
			icon: <Github />,
			name: 'Github',
			url: 'https://github.com/EvHaus',
		};
		case 'instagram': return {
			icon: <Instagram />,
			name: 'Instagram',
			url: 'https://www.instagram.com/haus.gg',
		};
		case 'linkedin': return {
			icon: <LinkedIn />,
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/evhaus',
		};
		case 'medium': return {
			icon: <Medium />,
			name: 'Medium',
			url: 'https://medium.com/@EvHaus',
		};
		case 'stackoverflow': return {
			icon: <StackOverflow />,
			name: 'Stack Overflow',
			url: 'https://stackoverflow.com/users/1330283/ev-haus',
		};
		case 'twitter': return {
			icon: <Twitter />,
			name: 'Twitter',
			url: 'https://twitter.com/EvHaus',
		};
		default: return {
			icon: <span />,
			name: '',
			url: '#',
		};
	}
};

export const SocialIcon = ({
	type,
}: PropsType): Element<typeof Tippy> => {
	const item = getItem(type);
	return (
		<Tippy
			className={styles.tippy}
			content={item.name}
			offset={[0, 0]}
			placement='bottom'>
			<a
				aria-label={item.name}
				className={styles.main}
				href={item.url}
				rel='noopener noreferrer'
				target='_blank'>
				{item.icon}
			</a>
		</Tippy>
	);
};

SocialIcon.displayName = 'SocialIcon';

export default memo<PropsType>(SocialIcon);
