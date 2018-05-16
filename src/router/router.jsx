import React, { Component } from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';

import Found from '@/pages/found/found.jsx'
import Home from '@/pages/home/home.jsx'
import Event from '@/pages/event/event.jsx'
import NewsDomain from '@/pages/news_domain/news_domain.jsx'
import NewsEmotion from '@/pages/news_emotion/news_emotion.jsx'
import SearchResult from '@/pages/searchResult/searchResult.jsx'

class RouteConfig extends Component{
	render(){
		return (
			<HashRouter>
				<Switch>
					<Route path="/home" component={Home}/>
					<Route path="/searchResult/:keyword" component={SearchResult}/>
					<Route path="/event/:event_name" component={Event}/>
					<Route path="/found" component={Found}/>
					<Route path="/news/domain" component={NewsDomain}/>
					<Route path="/news/emotion" component={NewsEmotion}/>
					<Route path="/" component={Home}/>
					<Redirect to="/event"></Redirect>
				</Switch>
			</HashRouter>
		)
	}
} 

export default RouteConfig;