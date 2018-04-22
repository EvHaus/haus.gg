// @flow

import App from './App';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import {hydrate} from 'react-dom';
import React from 'react';

const root = document.getElementById('root');

if (root) {
	hydrate(
		<BrowserRouter>
			<App />
		</BrowserRouter>,
		root
	);
}

// flow-disable-next-line
if (module.hot) {
	// flow-disable-next-line
	module.hot.accept();
}
