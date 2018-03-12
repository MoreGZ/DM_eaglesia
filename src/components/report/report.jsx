import React,{ Component } from "react"
import ReactDOM from "react-dom"

import charts from '@/echarts/charts.js'

import EventItem from "@/components/event_item/event_item"

import './report.css'

class Report extends Component {
	static defaultStatus = {
		events: [],
		title:"**度热点时间"
	}
	
	state = {
		year:[2014,2015,2016,2017,2018],
		currentYear:2018
	}
	
	initChart = () => {
		var graph_chart1 = ReactDOM.findDOMNode(this.refs["graph_chart1"]);
		var graph_chart2 = ReactDOM.findDOMNode(this.refs["graph_chart2"]);
		var graph_chart3 = ReactDOM.findDOMNode(this.refs["graph_chart3"]);
		var emotion_trend_chart = ReactDOM.findDOMNode(this.refs["emotion_trend_chart"]);
		
		var data = {};

		charts.keywordGraph(graph_chart1,data);
		charts.keywordGraph(graph_chart2,data);
		charts.keywordGraph(graph_chart3,data);
		charts.searchCreateEmotionChart(emotion_trend_chart,data);
	}

	componentDidMount(){
		this.initChart();
	}


	render(){
		return (
			<div id="report">
				<div className="time_choose">
					<div className="chooser"></div>
					<div className="time_choose_title">{this.state.currentYear}</div>
				</div>
				<div className="report_title">{this.props.title}</div>
				{
					this.props.events.map((item,index) => {
						// return <div></div>
						return (<EventItem itemData={item}></EventItem>)
					})
				}
				<div className="keyword">
					<div className="graph_chart graph_chart1" ref="graph_chart1"></div>     
					<div className="graph_chart graph_chart2" ref="graph_chart2"></div>     
					<div className="graph_chart graph_chart3" ref="graph_chart3"></div>     
				</div>
				<div className="emotion_trend">
					<div className="top">年度情感趋势</div>
					<div className="emotion_trend_chart" ref="emotion_trend_chart"></div>
				</div>
			</div>
		)
	}
}

export default Report;