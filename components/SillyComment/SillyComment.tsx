'use client';

import {useEffect} from 'react';

// Avoid the comment from being injected twice when in dev mode
let isRendered = false;

const SillyComment = () => {
	useEffect(() => {
		if (isRendered) {
			const comment = document.createComment(`
/*               _
 *              | |
 *   _____   __ | |__   __ _ _   _ ___
 *  / _ \\ \\ / / | '_ \\ / _' | | | / __|
 * |  __/\\ V /  | | | | (_| | |_| \\__ \\
 *  \\___| \\_/   |_| |_|\\__,_|\\__,_|___/
 *
 * If this code works - I wrote it.
 * Otherwise, I don't know where it came from.
 */`);
			document.documentElement.insertBefore(comment, document.documentElement.firstChild);
		}
		isRendered = true;
	}, []);
	return null;
};

export default SillyComment;
