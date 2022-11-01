'use client';

import React from 'react';
import styles from './Button.module.css';

type PropsType = {
	label: string,
	link: string,
};

export const Button = ({
	label,
	link,
}: PropsType) => {
	const handleClick = () => {
		window.location.href = link;
	};

	return (
		<button className={styles.main} onClick={handleClick}>
			{label}
		</button>
	);
};

export default Button;
