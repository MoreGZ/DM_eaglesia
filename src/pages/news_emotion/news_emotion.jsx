import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'

import PublicHeader from '@/components/header/header'
import EmotionNews from "@/components/emotion_news/emotion_news"
import charts from '@/echarts/charts.js'
import api from '@/api/api.js'

import './news_emotion.less'

class NewsDomain extends Component {
	state = {
		emotion:[],
		currentChartPage:1
	}
	
	loadData = async () => {
		try{
			let parmas = {
				data:{
					page:this.state.currentChartPage
				}
			}
			let result = await api.loadNewsEmotion(parmas);
			console.log(result.data);
			let emotion = this.state.emotion;
			result.data.forEach((item) => {
				emotion.push(item);
			})
			this.setState({
				emotion:emotion,
				currentChartPage:this.state.currentChartPage+1
			})
			this.initChart();
		}catch(err){
			throw(err);
		}
	}

	initData = async () => {
		await this.loadData();
		
	}

	initChart = () => {
		// 评价对象
		this.state.emotion.forEach((item,index) => {
			charts.createSpeEmotionChart(
				ReactDOM.findDOMNode(this.refs['spe_emotion_chart_box'+index]),
				{
					word: item.name || '媒体名',
					pos: item.emotion[0],
					neu: item.emotion[1],
					neg: item.emotion[2]
				}
			);
		})
	}

	componentWillMount(){
	}
	
	componentDidMount(){
		this.initData();
	}

	render() {
		return (
			<div className="news_emotion">
				<PublicHeader></PublicHeader>
				<div className="body">
					<div className="left">
						<div className="nav">
							<ul>
								<li><NavLink to={`${this.props.match.path}/support`}>支持</NavLink></li>
								<li><NavLink to={`${this.props.match.path}/oppose`}>反对</NavLink></li>
							</ul>
						</div>
						<div className="main">
							<Switch>
								<Route path={`${this.props.match.path}/:type`} component={EmotionNews} titlemaxLength="10" txtmaxLength="150"></Route>
								<Redirect from={`${this.props.match.path}`} to={`${this.props.match.path}/support`} exact component={EmotionNews} />
							</Switch>
						</div>
					</div>
					<div className="right">
						<div className="spe_emotion">
							<h5 className="module_title spe_emotion_title">印尼媒体对华情感倾向</h5>
							{
								this.state.emotion.map((item,index) => {
									return (
										<div key={index} className="spe_emotion_chart_box1 chart_box" ref={"spe_emotion_chart_box"+index}></div>
									)
								})
							}
							<div className="loadmore" onClick={this.loadData}>点击加载更多</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default NewsDomain;