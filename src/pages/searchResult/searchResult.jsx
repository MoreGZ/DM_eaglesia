import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {NavLink} from 'react-router-dom'

import Api from '@/api/api.js'
import charts from '@/echarts/charts.js'

import PublicHeader from '@/components/header/header'
import PublicRank from '@/components/rank/rank'

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

	initChart = () => {
		this.state.results.forEach((item,index) => {
			var chart_box = ReactDOM.findDOMNode(this.refs["chart_box"+(index+1)]);
			var data = item.emotion;
			charts.searchCreateEmotionChart(chart_box,data);
		})
	}

	componentWillMount(){
		// this.initChart();
	}
	
	componentDidMount(){
		this.initChart();
	}

	render() {
		var outputHotValue = (value) => {
			var dom = [];
			for (var i=0;i<value;i++){
				dom.push(<img src="./img/hotvalue.png" alt="" key={i}/>)
			}

			return dom;
		}

		return (
			<div className="searchResult">
				<div className="body">
					<div className="left">
						<div className="events">
							{
								this.state.results.map((item,index) => {
									return (
										<div className="event" key={index}>
											<div className="top">
												<NavLink to="/event">
													<h5 className="event_title">{item.title}</h5>
												</NavLink>
												<div className="hot">
													<img src="./img/hoticon.png" alt=""/>
													<span>热度: </span> 
													{
														outputHotValue(item.value).map((item,index) => {
															return item
														})
													}
												</div>
											</div>
											<div className="chart_box" ref={"chart_box"+(index+1)}></div>
										</div>
									)
								})
							}
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

export default SearchResult;