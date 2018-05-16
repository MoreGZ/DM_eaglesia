import React,{ Component } from "react"
import ReactDOM from "react-dom"

import charts from '@/echarts/charts.js'
import api from '@/api/api.js'

import EventItem from "@/components/event_item/event_item"

import './report.css'

class Report extends Component {
	state = {
		"events": [],
		year:[2014,2015,2016,2017,2018],
		month:[1,2,3,4,5,6,7,8,9,10,11,12],
		currentMonth:new Date().getMonth(),
		targetMonth:new Date().getMonth(),
		currentYear:new Date().getFullYear()-1,
		targetYear:new Date().getFullYear()-1,
		// 判断当前报表状态，可以是year，可以是month
		status:"year",
	}
	
	nextYear = () => {
		let finalIndex = this.state.year.length-1
		if(this.state.targetYear<this.state.year[finalIndex]){
			this.setState({
				targetYear:this.state.targetYear+1
			})
		}else{
			alert("没有上一年了");
		}
	}

	lastYear = () => {
		if(this.state.targetYear>this.state.year[0]){
			this.setState({
				targetYear:this.state.targetYear-1
			})
		}else{
			alert("已经是最后一年了");
		}
	}

	nextMonth = () => {
		let finalIndex = this.state.month.length-1
		if(this.state.targetMonth<this.state.month[finalIndex]){
			this.setState({
				targetMonth:this.state.targetMonth+1
			})
		}else{
			alert("没有上一月了");
		}
	}

	lastMonth = () => {
		if(this.state.targetMonth>this.state.month[0]){
			this.setState({
				targetMonth:this.state.targetMonth-1
			})
		}else{
			alert("已经是最后一月了");
		}
	}

	check = () => {
		this.state.currentYear = this.state.targetYear,
		this.state.currentMonth = this.state.targetMonth,
		this.setState({
			currentYear:this.state.targetYear,
			currentMonth:this.state.targetMonth,
			events:[],
			total_emotion:{},
			total_emotion:[]
		})
		this.fetchData();
	}

	initChart = () => {
		
		let emotion_trend_chart = ReactDOM.findDOMNode(this.refs["emotion_trend_chart"]);
		charts.searchCreateEmotionChart(emotion_trend_chart,this.state.total_emotion);
	
		this.state.events.forEach((item,index) => {
			let data = {
				title:item.title,
				keywords:item.keywords
			}
			var graph_chart = ReactDOM.findDOMNode(this.refs["graph_chart"+index]);
			charts.keywordGraph(graph_chart,data);
		})
		
	}
	
	fetchYearData = async () => {
		let params = {
			data:{
				year:this.state.currentYear
			}
		}

		try{
			let result = await api.getYearReport(params);
			return result;
		}catch(err){
			throw(err);
		}
	}
	
	fetchMonthData = async () => {
		let params = {
			data:{
				year:this.state.currentYear,
				month:this.state.currentMonth
			}
		}

		try{
			let result = await api.getMonthReport(params);
			return result;

		}catch(err){
			throw(err);	
		}
	}

	fetchData = async (type = this.props.match.params.type) => {
		try{
			let result;
			if(type === "year"){
				result = await this.fetchYearData();
			}else{
				result = await this.fetchMonthData();
			}
			let data = result.data;
			console.log(data);
			this.setState({
				events:data.events,
				keywords:data.keywords,
				total_emotion:data.total_emotion
			})
			this.initChart();
		}catch(err){
			throw(err);
		}
	}
	
	initData = async () => {
		this.fetchData();
	}

	componentWillReceiveProps(nextProps){
		if(this.props.match.params.type !== nextProps.match.params.type){
			this.fetchData(nextProps.match.params.type);
		}
	}
	
	componentDidMount(){
		this.initData();
	}


	render(){
		return (
			<div id="report">
				<div className="time_choose">
					<div className="chooser_box">
						<div className="chooser">
							<img src="./img/last.png" alt="" onClick={this.lastYear}/>
							<input type="text" value={this.state.targetYear} readOnly/>
							<img src="./img/next.png" alt="" onClick={this.nextYear}/>
						</div>
						<span>年</span>
					</div>
					<div className={this.props.match.params.type==="year" ? "hidden" : "chooser_box"}>
						<div className="chooser">
							<img src="./img/last.png" alt="" onClick={this.lastMonth}/>
							<input type="text" value={this.state.targetMonth} readOnly/>
							<img src="./img/next.png" alt="" onClick={this.nextMonth}/>
						</div>
						<span>月</span>
					</div>
					<button className="check" onClick={this.check}>查看</button>
					{
						this.props.match.params.type==="year" ?
						<div className="time_choose_title">{this.state.currentYear+"年舆情报表"}</div> :
						<div className="time_choose_title">{this.state.currentYear+"年"+this.state.currentMonth+"月舆情报表"}</div>
					}
				</div>
				<div className="report_title">{this.props.match.params.type==="year" ? "年度热点事件" : "月度热点事件"}</div>
				{
					this.state.events.map((item,index) => {
						// return <div></div>
						return (<EventItem itemData={item} key={index}></EventItem>)
					})
				}
				<div className="keyword">
					<div className="keyword_title">{this.props.match.params.type==="year" ? "年度热门关键词与话题" : "月度热门关键词与话题"}</div>
					{
						this.state.events.map((item,index) => {
							return (
								<div className="graph_chart graph_chart1" ref={"graph_chart"+index} key={index}></div>
							)
						})
					}
				</div>
				<div className="emotion_trend">
					<div className="top">{this.props.match.params.type==="year" ? "年度情感趋势" : "月度情感趋势"}</div>
					<div className="emotion_trend_chart" ref="emotion_trend_chart"></div>
				</div>
			</div>
		)
	}
}

export default Report;