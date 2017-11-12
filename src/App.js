// @flow

import './App.css';
import React, {type Element} from 'react';
import Home from './Home';
import Redirect from 'react-router-dom/Redirect';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

const App = (): Element<typeof Switch> => (
	<Switch>
		<Route component={Home} exact={true} path="/" />
		<Redirect to="/" />
	</Switch>
);

App.displayName = "App";

export default App;
