import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {NavLink} from 'react-router-dom'

import Api from '@/api/api.js'
import charts from '@/echarts/charts.js'

import PublicHeader from '@/components/header/header'
import PublicRank from '@/components/rank/rank'
import EventList from '@/components/event_list/event_list'
import EventItem from '@/components/event_item/event_item'
import Report from "@/components/report/report"

import './found.css'

class Found extends Component {
	
	state = {
		"total_leader":[
			{

			}
		],
		
	    "events": [
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
				<PublicHeader></PublicHeader>
				<div className="body">
					<div className="left">
						<div className="left_nav">
							<ul>
								<li className="active_li">热点新闻事件</li>
								<li>月度舆情报告</li>
								<li>年度舆情报告</li>
							</ul>
						</div>
						<div className="left_content">
							<Report events={this.state.events} title="年度舆情报告"></Report>
						</div>
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
			</div>
		);
	}
}

export default Found;