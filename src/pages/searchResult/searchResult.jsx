import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {NavLink} from 'react-router-dom'

import Api from '@/api/api.js'
import charts from '@/echarts/charts.js'

import PublicHeader from '@/components/header/header'
import PublicRank from '@/components/rank/rank'
import EventList from '@/components/event_list/event_list'
import EventItem from '@/components/event_item/event_item'

import './searchResult.css'

class SearchResult extends Component {
	
	state = {
	    "results": [
	        {
	            "emotion": {
	                "neg": 0,
	                "neu": 1,
	                "pos": 0
	            },
	            "title": "马丽哈路口车祸",
	            "value": 3
	        },
	        {
	            "emotion": {
	                "neg": 0,
	                "neu": 1,
	                "pos": 0
	            },
	            "title": "一带一路峰会",
	            "value": 1
	        },
	        {
	            "emotion": {
	                "neg": 0,
	                "neu": 1,
	                "pos": 0
	            },
	            "title": "一带一路峰会",
	            "value": 4
	        },
	        {
	            "emotion": {
	                "neg": 0,
	                "neu": 1,
	                "pos": 0
	            },
	            "title": "马丽哈路口车祸",
	            "value": 2
	        },
	        {
	            "emotion": {
	                "neg": 0,
	                "neu": 1,
	                "pos": 0
	            },
	            "title": "马丽哈路口车祸",
	            "value": 5
	        }
	    ],
	    "leader": [
	        {
	            "title": "马丽哈路口车祸",
	            "trend": 0
	        },
	        {
	            "title": "Thai rice prices plummeted",
	            "trend": -1
	        },
	        {
	            "title": "Samsung market crisis",
	            "trend": 0
	        },
	        {
	            "title": "沙巴政党问题",
	            "trend": 1
	        },
	        {
	            "title": "英超联赛",
	            "trend": 1
	        },
	        {
	            "title": "净选盟集会",
	            "trend": -1
	        },
	        {
	            "title": "巫统代表大会",
	            "trend": -1
	        },
	        {
	            "title": "政府刑法法案",
	            "trend": 1
	        }
	    ]
	}
	
	initData = () => {

	}

	componentWillMount(){
		
	}
	
	componentDidMount(){
		
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