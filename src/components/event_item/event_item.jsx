import React, { Component } from "react"
import { NavLink } from 'react-router-dom'

import charts from '@/echarts/charts.js'

import './event_item.css'

class EventItem extends Component{
	static defaultProps = {
		itemData:{
            "emotion": {
                "neg": 0,
                "neu": 1,
                "pos": 0
            },
            "title": "一带一路峰会",
            "value": 1
        },
	}

	initChart = () => {
		this.state.results.forEach((item,index) => {
			var chart_box = ReactDOM.findDOMNode(this.refs["chart_box"]);
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

	render(){
		var outputHotValue = (value) => {
			var dom = [];
			for (var i=0;i<value;i++){
				dom.push(<img src="./img/hotvalue.png" alt="" key={i}/>)
			}

			return dom;
		}

		return (<div className="event">
			<div className="top">
				<NavLink to="/event">
					<h5 className="event_title">{itemData.title}</h5>
				</NavLink>
				<div className="hot">
					<img src="./img/hoticon.png" alt=""/>
					<span>热度: </span> 
					{
						outputHotValue(itemData.value).map((item,index) => {
							return itemData
						})
					}
				</div>
			</div>
			<div className="chart_box" ref="chart_box"></div>
		</div>)
	}
}