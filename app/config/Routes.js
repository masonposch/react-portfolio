import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, hashHistory, browserHistory } from 'react-router'
import Main from '../Main'




const routes = (
	<Router history = {hashHistory}>
		<Route path = '/' component={Main}>
		</Route>
	</Router>
)

export default routes;