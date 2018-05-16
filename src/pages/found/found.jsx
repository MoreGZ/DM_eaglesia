import React, { Component } from 'react'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'

import PublicHeader from '@/components/header/header'
import Report from "@/components/report/report"
import HotEvent from "@/components/hotevent/hotevent"

import './found.less'

class Found extends Component {
	state = {
		
	}
	
	initData = () => {

	}

	initChart = () => {
		
	}

	componentWillMount(){
	}
	
	componentDidMount(){
	}

	render() {
		return (
			<div className="found">
				<PublicHeader></PublicHeader>
				<div className="body">
					<div className="nav">
						<ul>
							<li><NavLink to={`${this.props.match.path}/hotevent`}>热点新闻事件</NavLink></li>
							<li><NavLink to={`${this.props.match.path}/report/month`}>月度舆情报告</NavLink></li>
							<li><NavLink to={`${this.props.match.path}/report/year`}>年度舆情报告</NavLink></li>
						</ul>
					</div>
					<div className="main">
						<Switch>
							<Route path={`${this.props.match.path}/hotevent`} component={HotEvent}></Route>
							<Route path={`${this.props.match.path}/report/:type`} component={Report}></Route>
							<Redirect from={`${this.props.match.path}`} to={`${this.props.match.path}/hotevent`} exact component={HotEvent} />
						</Switch>
					</div>
				</div>
			</div>
		);
	}
}

export default Found;