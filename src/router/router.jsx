import React, { Component } from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';

import Found from '../pages/found/found.jsx'
import Home from '../pages/home/home.jsx'
import Event from '../pages/event/event.jsx'
import SearchResult from '../pages/searchResult/searchResult.jsx'

class RouteConfig extends Component{
	render(){
		return (
			<HashRouter>
				<Switch>
					<Route path="/home" component={Home}/>
					<Route path="/searchResult" component={SearchResult}/>
					<Route path="/event" component={Event}/>
					<Route path="/found" component={Found}/>
					<Route path="/" component={Home}/>
					<Redirect to="/"/>
				</Switch>
			</HashRouter>
		)
	}
} 

export default RouteConfig;