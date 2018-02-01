import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {NavLink} from 'react-router-dom'

import Api from '@/api/api.js'
import charts from '@/echarts/charts.js'

import PublicHeader from '@/components/header/header'
import PublicRank from '@/components/rank/rank'

import './found.css'

class Found extends Component {
	
	state = {
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
	        }
	    ]
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
				<div className="body">
					<div className="left">
					</div>
					<div className="right">
						<div className="rank_a">
							<PublicRank list={this.state.leader}></PublicRank>
						</div>
						<div className="rank_a">
							<PublicRank list={this.state.leader}></PublicRank>
						</div>
						<div className="rank_a">
							<PublicRank list={this.state.leader}></PublicRank>
						</div>
					</div>
				</div>
				<div className="header_wrapper">
					<PublicHeader></PublicHeader>
				</div>
			</div>
		);
	}
}

export default Found;