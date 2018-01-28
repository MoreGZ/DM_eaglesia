import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import Api from '@/api/api.js'

import PublicHeader from '@/components/header/header';

import './searchResult.css';

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
	            "trend": 1
	        },
	        {
	            "title": "Thai rice prices plummeted",
	            "trend": 1
	        },
	        {
	            "title": "Samsung market crisis",
	            "trend": 1
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
	            "trend": 1
	        },
	        {
	            "title": "巫统代表大会",
	            "trend": 1
	        },
	        {
	            "title": "政府刑法法案",
	            "trend": 1
	        }
	    ]
	}

	render() {
		var outputHotValue = (value) => {
			var dom = [];
			for (var i=0;i<value;i++){
				dom.push(<img src="./img/hotvalue.png" alt=""/>)
			}

			return dom;
		}

		return (
			<div className="searchResult">
				<div className="header_wrapper">
					<PublicHeader></PublicHeader>
				</div>
				<div className="body">
					<div className="left">
						<div className="events">
							{
								this.state.results.map((item,index) => {
									return (
										<div className="event">
											<div className="top">
												<h5 className="event_title">{item.title}</h5>
												<div className="hot">
													<img src="./img/hoticon.png" alt=""/>
													热度: 
													{
														outputHotValue(item.value).map((item,index) => {
															return item
														})
													}
												</div>
											</div>
											<div className="chart" ref={"chart"+(index+1)}></div>
										</div>
									)
								})
							}
						</div>
					</div>
					<div className="right"></div>
				</div>
			</div>
		);
	}
}

export default SearchResult;