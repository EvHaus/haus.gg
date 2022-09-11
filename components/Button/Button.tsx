'use client';

import React from 'react';
import styles from './Button.module.css';

type PropsType = {
	label: string,
	link: string,
	onClick?: () => void,
};

export const Button = ({
	label,
	link,
	onClick,
}: PropsType) => {
	const handleClick = () => {
		if (link) {
			window.location.href = link;
		} else if (onClick) {
			onClick();
		}
	};

	return (
		<button className={styles.main} onClick={handleClick}>
			{label}
		</button>
	);
};

export default Button;
