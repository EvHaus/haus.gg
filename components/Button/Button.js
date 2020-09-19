// @flow strict

import React, {type Element, useCallback} from 'react';
import styles from './Button.module.css';

type PropsType = {
	label: string,
	link: string,
};

export const Button = ({
	label,
	link,
}: PropsType): Element<'button'> => {
	const _handleClick = useCallback(() => {
		window.location.href = link;
	}, [link]);

	return (
		<button className={styles.main} onClick={_handleClick}>
			{label}
		</button>
	);
};

export default Button;
