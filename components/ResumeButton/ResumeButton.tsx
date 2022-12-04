'use client';

import React, {useState} from 'react';
import styles from './ResumeButton.module.css';

export const ResumeButton = () => {
	const [isResumeBuilding, setIsResumeBuilding] = useState(false);

	const handleClick = () => {
		setIsResumeBuilding(true);
		window.open('/api/resume');
		setIsResumeBuilding(false);
	};

	return (
		<button className={styles.main} onClick={handleClick}>
			{isResumeBuilding ? 'Building resume...' : 'My Resume'}
		</button>
	);
};

export default ResumeButton;
