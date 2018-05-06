// @flow

import React, {type Element, PureComponent} from 'react';
import Email from './../icons/Email';
import Instagram from './../icons/Instagram';
import LinkedIn from './../icons/LinkedIn';
import styles from './SocialIcon.css';
import {Tooltip} from 'react-tippy';
import Twitter from './../icons/Twitter';

type ItemType = {
	icon: Element<any>,
	tooltip: string,
	url: string,
};

type PropsType = {
	type: 'email' | 'instagram' | 'linkedin' | 'twitter',
};

export default class SocialIcon extends PureComponent<PropsType> {
	static displayName = 'SocialIcon';

	render (): Element<typeof Tooltip> {
		const item = this._getItem();

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
	}

	_getItem (): ItemType {
		const {type} = this.props;

		switch (type) {
			case 'email': return {
				icon: <Email />,
				tooltip: 'Email',
				url: 'mailto:ev@haus.gg',
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
	}
}
