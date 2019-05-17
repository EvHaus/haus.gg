// @flow

import React, {type Element, memo, useCallback} from 'react';
import styles from './Button.css';

type PropsType = {|
	label: string,
	link: string,
|};

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

Button.displayName = 'Button';

export default memo<PropsType>(Button);
