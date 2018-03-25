import React, { Component } from 'react'

import Api from '@/api/api.js'

import PublicHeader from '@/components/header/header'
import PublicRank from '@/components/rank/rank'
import EventList from '@/components/event_list/event_list'

import './searchResult.css'

class SearchResult extends Component {
	state = {
	    "results": [],
	    "leader": [],
	    keyword:""
	}
	
	initData = async (keyword = this.props.match.params.keyword) => {
		let params = {
			url:"/results/kw/"+ keyword
		}
		try{
			let results = await Api.getResearchData(params);
			let data = results.data;
			this.setState({
				results : data.results,
				leader : data.leader
			})
		}catch(err){
			console.log(err);
		}
	}
	
	componentWillReceiveProps(nextProps){
		if(nextProps.match.params.keyword != this.props.match.params.keyword){
			this.initData(nextProps.match.params.keyword);
		}
	}

	componentWillMount(){
		
	}
	
	componentDidMount(){
		
		this.initData();
	}

	render() {
		return (
			<div className="searchResult">
				<div className="body">
					<div className="left">
						<div className="events">
							<EventList events={this.state.results}></EventList>
						</div>
					</div>
					<div className="right">
						<PublicRank list={this.state.leader}></PublicRank>
					</div>
				</div>
				<div className="header_wrapper">
					<PublicHeader></PublicHeader>
				</div>
			</div>
		);
	}
}

export default SearchResult