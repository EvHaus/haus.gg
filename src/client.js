// @flow

import App from './App';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import React from 'react';
import {render} from 'react-dom';

const root = document.getElementById('root');

if (root) {
	render(
		<BrowserRouter>
			<App />
		</BrowserRouter>,
		root
	);
}

if (module.hot) {
	// flow-disable-next-line
	module.hot.accept();
}
