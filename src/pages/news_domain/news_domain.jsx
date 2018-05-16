import React, { Component } from 'react'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'

import PublicHeader from '@/components/header/header'
import HotNews from "@/components/hotnews/hotnews"
import PublicRank from '@/components/rank/rank'

import api from "@/api/api.js"

import './news_domain.less'

class NewsDomain extends Component {
	state = {
		total_leader:[],
		political_leader:[],
		economic_leader:[],
	}
	
	initData = async () => {
		try{
			let result = await api.getFoundHotevent();
			let data = result.data;
			this.setState({
				total_leader:data.total_leader,
				political_leader:data.political_leader,
				economic_leader:data.economic_leader
			})
		}catch(err){
			throw(err);
		}
	}
	
	componentDidMount(){
		this.initData()
	}

	render() {
		return (
			<div className="news_domain">
				<PublicHeader></PublicHeader>
				<div className="body">
					<div className="left">
						<div className="nav">
							<ul>
								<li><NavLink to={`${this.props.match.path}/political`}>政治</NavLink></li>
								<li><NavLink to={`${this.props.match.path}/economic`}>经济</NavLink></li>
								<li><NavLink to={`${this.props.match.path}/society`}>社会</NavLink></li>
								<li><NavLink to={`${this.props.match.path}/technology`}>科技</NavLink></li>
								<li><NavLink to={`${this.props.match.path}/military`}>军事</NavLink></li>
								<li><NavLink to={`${this.props.match.path}/culture`}>文化</NavLink></li>
								<li><NavLink to={`${this.props.match.path}/surroundings`}>环境</NavLink></li>
							</ul>
						</div>
						<div className="main">
							<Switch>
								<Route path={`${this.props.match.path}/:type`} component={HotNews}></Route>
								<Redirect from={`${this.props.match.path}`} to={`${this.props.match.path}/political`} exact component={HotNews} />
							</Switch>
						</div>
					</div>
					<div className="right">
						<div className="rank_a">
							<PublicRank list={this.state.total_leader} title="新闻总榜"></PublicRank>
						</div>
						<div className="rank_a">
							<PublicRank list={this.state.political_leader} title="政治新闻榜"></PublicRank>
						</div>
						<div className="rank_a">
							<PublicRank list={this.state.economic_leader} title="经济新闻榜"></PublicRank>
						</div>
					</div>
				</div>
				
			</div>
		);
	}
}

export default NewsDomain;