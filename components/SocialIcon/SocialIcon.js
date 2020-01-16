// @flow strict

import React, {type Element, memo} from 'react';
import Email from './icons/Email';
import Github from './icons/Github';
import Instagram from './icons/Instagram';
import LinkedIn from './icons/LinkedIn';
import Medium from './icons/Medium';
import StackOverflow from './icons/StackOverflow';
import styles from './SocialIcon.module.css';
import {Tooltip} from 'react-tippy';
import Twitter from './icons/Twitter';

type ItemType = {|
	icon: Element<any>,
	tooltip: string,
	url: string,
|};

type TypeType = (
	'email' | 'github' | 'instagram' | 'linkedin' | 'medium' | 'stackoverflow' | 'twitter'
);

type PropsType = {|
	type: TypeType,
|};

const getItem = (type: TypeType): ItemType => {
	switch (type) {
		case 'email': return {
			icon: <Email />,
			tooltip: 'Email',
			url: 'mailto:ev@haus.gg',
		};
		case 'github': return {
			icon: <Github />,
			tooltip: 'Github',
			url: 'https://github.com/EvHaus',
		};
		case 'instagram': return {
			icon: <Instagram />,
			tooltip: 'Instagram',
			url: 'https://www.instagram.com/haus.gg',
		};
		case 'linkedin': return {
			icon: <LinkedIn />,
			tooltip: 'LinkedIn',
			url: 'https://www.linkedin.com/in/evhaus',
		};
		case 'medium': return {
			icon: <Medium />,
			tooltip: 'Medium',
			url: 'https://medium.com/@EvHaus',
		};
		case 'stackoverflow': return {
			icon: <StackOverflow />,
			tooltip: 'Stack Overflow',
			url: 'https://stackoverflow.com/users/1330283/ev-haus',
		};
		case 'twitter': return {
			icon: <Twitter />,
			tooltip: 'Twitter',
			url: 'https://twitter.com/EvHaus',
		};
		default: return {
			icon: <span />,
			tooltip: '',
			url: '#',
		};
	}
};

export const SocialIcon = ({
	type,
}: PropsType): Element<typeof Tooltip> => {
	const item = getItem(type);
	return (
		<Tooltip
			className={styles.wrapper}
			position='bottom'
			title={item.tooltip}>
			<a
				className={styles.main}
				href={item.url}
				rel='noopener noreferrer'
				target='_blank'>
				{item.icon}
			</a>
		</Tooltip>
	);
};

SocialIcon.displayName = 'SocialIcon';

export default memo<PropsType>(SocialIcon);
