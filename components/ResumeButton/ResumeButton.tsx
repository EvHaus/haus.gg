'use client';

import React, {useState} from 'react';
import styles from './ResumeButton.module.css';

export const ResumeButton = () => {
	const [isResumeBuilding, setIsResumeBuilding] = useState(false);

	const handleClick = () => {
		const generate = async () => {
			setIsResumeBuilding(true);
			const request = await fetch('/api/resume');
			const result = await request.json() as {url: string};
			window.open(result.url);
			setIsResumeBuilding(false);
		};

		generate();
	};

	return (
		<button className={styles.main} onClick={handleClick}>
			{isResumeBuilding ? 'Building resume...' : 'My Resume'}
		</button>
	);
};

export default ResumeButton;
