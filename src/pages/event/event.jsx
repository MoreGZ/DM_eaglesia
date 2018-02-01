import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Api from '@/api/api.js'
import charts from '@/echarts/charts.js'

import PublicHeader from '@/components/header/header'

import './event.css';

class Event extends Component {

	state = {
		"title":"",
		"info":"",
		"rank":{
			totalRank:{
				rank:"",
				trend:0
			},
			classRank:{
				class:"",
				rank:"",
				trend:0
			}
		},
		"class": [],        
		"total":0,                   
		"track":[],
	    "emotion":[],
	    "spe_emotion":[],
	    "trend_attitude":[],
		"trend_value":[],
		"comments":[],
	    "keywords":[],
		"posWords":[],
		"negWords":[],
	    "news":[],
	    tags:[
			{key:"info",value:"事件简介",scroll:46},
			{key:"rank",value:"关注度排名",scroll:70},
			{key:"track",value:"事件发展",scroll:446},
			{key:"emotion",value:"印媒对华情感倾向",scroll:469},
			{key:"spe_emotion",value:"评价对象",scroll:850},
			{key:"trend_attitude",value:"态度趋势",scroll:1305},
			{key:"trend_value",value:"热度趋势",scroll:1805},
			{key:"comments",value:"印尼国民评论",scroll:2340},
			{key:"keywords",value:"事件关键词",scroll:2915},
			{key:"posWords",value:"正面高频词",scroll:2935},
			{key:"negWords",value:"负面高频词",scroll:2955},
			{key:"news",value:"印尼媒体相关报道",scroll:3320},
	    ],
	    currentTag:"info",
	    currentTagIndex:0
	}

	textFilter = (text,count) => {
		var len = text.length;
		return len <= count ? text : text.slice(0,count)+"...";
	}
	
	// 是否让便签显示在上层
	isOpacity = (item) => {
		return item.key !== this.state.currentTag ? "hidden" : "";
	}

	// 左边的标签导航功能
	navTo = (item) => {	
		var scrollTop = document.documentElement.scrollTop;
		if(item.scroll>scrollTop){
			// 下滑动
			var t = setInterval(function(){
				scrollTop += 20;
				window.scrollTo(0,scrollTop);
				if(scrollTop>item.scroll){
					clearInterval(t);
				}
			},1)
		}
		if(item.scroll<scrollTop){
			// 上滑动
			var t = setInterval(function(){
				scrollTop -= 20;
				window.scrollTo(0,scrollTop);
				if(scrollTop<item.scroll){
					clearInterval(t);
				}
			},1)
		}
	}

	// 初始化currentTag和currentTagIndex
	initTag = () => {
		var scrollTop = document.documentElement.scrollTop;
		var tags = this.state.tags;
		for(var index in tags){
			if(tags[index].scroll>scrollTop){
				this.setState({
					currentTag:tags[index].key,
					currentTagIndex:index
				})
				break;
			}
		}
	}

	// 滑动滚动条时候和左边标签做联动
	showTag = (e) => {
		var scrollTop = document.documentElement.scrollTop;
		var cindex = this.state.currentTagIndex;
		var tags = this.state.tags;
		var tag = this.state.currentTag,index = cindex;
		// 向下滚动
		if(cindex<11&&scrollTop>tags[cindex+1].scroll){
			tag = tags[cindex+1].key;
			index = cindex+1;
		}

		// 向上滚动
		if(cindex>0&&scrollTop<tags[cindex-1].scroll){
			index = cindex-1;
			tag = tags[cindex-1].key;
		}
		
		this.setState({
			currentTag:tag,
			currentTagIndex:index
		})
		
	}
	
	initChart = () => {
		// 态度比例
		var emotion_chart_box =  ReactDOM.findDOMNode(this.refs.emotion_chart_box);
		var data=[
            {value:335, name:'直接访问'},
            {value:310, name:'邮件营销'},
            {value:234, name:'联盟广告'},
            {value:135, name:'视频广告'},
            {value:1548, name:'搜索引擎'}
        ];
		charts.createEmotionChart(emotion_chart_box,data)
		
		
		// 评价对象
		var spe_emotion_chart_box1 =  ReactDOM.findDOMNode(this.refs.spe_emotion_chart_box1);
		var spe_emotion_chart_box2 =  ReactDOM.findDOMNode(this.refs.spe_emotion_chart_box2);
		var spe_emotion_chart_box3 =  ReactDOM.findDOMNode(this.refs.spe_emotion_chart_box3);
		var data=[
        ];
		charts.createSpeEmotionChart(spe_emotion_chart_box1,data);
		charts.createSpeEmotionChart(spe_emotion_chart_box2,data);
		charts.createSpeEmotionChart(spe_emotion_chart_box3,data);
		

		// 态度趋势
		var trend_attitude_chart_box = ReactDOM.findDOMNode(this.refs.trend_attitude_chart_box);
		var data = [];
		charts.createTrendAttitudeChart(trend_attitude_chart_box,data);

		
		// 热度趋势
		var trend_value_chart_box = ReactDOM.findDOMNode(this.refs.trend_value_chart_box);
		var data = [];
		charts.createTrendValueChart(trend_value_chart_box,data);


		// 全局关键词
		var keywords_chart_box = ReactDOM.findDOMNode(this.refs.keywords_chart_box);
		var keywords = {
		    "visualMap": 22199,
		    "continuous": 10288,
		    "contoller": 620,
		    "series": 274470,
		    "gauge": 12311,
		    "detail": 1206,
		    "piecewise": 4885,
		    "textStyle": 32294,
		    "markPoint": 18574,
		    "pie": 38929,
		    "roseType": 969,
		    "label": 37517,
		    "emphasis": 12053,
		    "yAxis": 57299,
		    "name": 15418,
		    "type": 22905,
		    "gridIndex": 5146,
		    "normal": 49487,
		    "itemStyle": 33837,
		    "min": 4500,
		    "silent": 5744,
		    "animation": 4840,
		    "offsetCenter": 232,
		    "inverse": 3706,
		    "borderColor": 4812,
		    "markLine": 16578,
		    "line": 76970,
		    "radiusAxis": 6704,
		    "radar": 15964,
		    "data": 60679,
		    "dataZoom": 24347,
		    "tooltip": 43420,
		    "toolbox": 25222,
		    "geo": 16904,
		    "parallelAxis": 4029,
		    "parallel": 5319,
		    "max": 3393,
		    "bar": 43066,
		    "heatmap": 3110,
		    "map": 20285,
		    "animationDuration": 3425,
		    "animationDelay": 2431,
		    "splitNumber": 5175,
		    "axisLine": 12738,
		    "lineStyle": 19601,
		    "splitLine": 7133,
		    "axisTick": 8831,
		    "axisLabel": 17516,
		    "pointer": 590,
		};
		var data = [];
		for (var name in keywords) {
		    data.push({
		        name: name,
		        value: Math.sqrt(keywords[name])
		    })
		}
		charts.createKeywordChart(keywords_chart_box,data);


		// 正面高频词
		var posWords_chart_box = ReactDOM.findDOMNode(this.refs.posWords_chart_box);
		var data = [];
		charts.createPoswordsChart(posWords_chart_box,data);


		// 负面高频词
		var negWords_chart_box = ReactDOM.findDOMNode(this.refs.negWords_chart_box);
		var data = [];
		charts.createNegwordsChart(negWords_chart_box,data);
	}
	/*
	初始化数据
	1.获取数据
	2.绑定windows函数
	*/
	initData = async () => {
		try{
			var data = await Api.getEventData();
			data = data.data;
			console.log(data);
			this.setState({
				"title":data.title,
				"info":data.info,
				"rank":data.rank,
				"class": data.class,        
				"total":data.total,                   
				"track":data.track,
			    "emotion":data.emotion,
			    "spe_emotion":data.spe_emotion,
			    "trend_attitude":data.trend_attitude,
				"trend_value":data.trend_value,
				"comments":data.comments,
			    "keywords":data.keywords,
				"posWords":data.posWords,
				"negWords":data.negWords,
			    "news":data.news
			})

			this.initChart();
		}catch(err){
			console.error(err);
		}
	}
	
	componentWillMount(){
		this.initData();
	}

	componentDidMount(){
		window.onscroll = this.showTag;
	}

	render() {
		return (
			<div className="Event">
				<PublicHeader></PublicHeader>
				<div className="body">
					<div className="title">
						<h2 className="eventtitle">{this.state.title}</h2>
						<h3>
							{
								this.state.class.map((item, index) => {
									return <span key={index}>{item}</span>
								})
							}
						</h3>
						<h3 className="eventnewcount">总报道数：{this.state.total}</h3>
					</div>
					<div className="tags1">
						{
							this.state.tags.map((item, index) => {
								return (<div className="tag" key={index}>
									<div className="left">
										{item.value}
									</div>
									<div className="right"></div>
									
								</div>)
							})
						}
					</div>
					<div className="tags2">
						{
							this.state.tags.map((item, index) => {
								return (<div className={this.isOpacity(item)+" tag"} key={index} onClick={this.navTo.bind(this,item)}>
									<div className="left">
										{item.value}
									</div>
									<div className="right"></div>
									
								</div>)
							})
						}
					</div>
					<div className="main">
						<div className="info">
							<h5 className="module_title info_title">事件简介</h5>
							<p className="text">{this.textFilter(this.state.info,640)}</p>
						</div>
						<div className="rank">
							<h5 className="module_title">关注度排名</h5>
							<div className="rank_main">
								<div className="item">
									<span className="key">总榜排名</span>
									<span className="value">{this.state.rank.totalRank.rank}</span>
									<span className="trend">
									{
										this.state.rank.totalRank.trend === 1 
										? <img src="./img/uparrow.png" alt=""/> 
										: (
											this.state.rank.totalRank.trend === 0 
											? <img src="./img/levelarrow.png" alt=""/> 
											: <img src="./img/downarrow.png" alt=""/>
										)
									}
									</span>
								</div>
								<div className="item">
									<span className="key">{this.state.rank.classRank.class}榜排名</span>
									<span className="value">{this.state.rank.classRank.rank}</span>
									<span className="trend">
									{
										this.state.rank.classRank.trend === 1 
										? <img src="./img/uparrow.png" alt=""/> 
										: (
											this.state.rank.classRank.trend === 0 
											? <img src="./img/levelarrow.png" alt=""/> 
											: <img src="./img/downarrow.png" alt=""/>
										)
									}
									</span>
								</div>
							</div>
						</div>
						<div className="track">
							<h5 className="module_title">事件发展</h5>
						</div>
						<div className="emotion_spe_emotion_box">
							<div className="emotion">
								<h5 className="module_title">印媒对华情感倾向</h5>
								<div className="chart_box" ref="emotion_chart_box">	
									
								</div>
							</div>
							<div className="spe_emotion">
								<h5 className="module_title spe_emotion_title">评价对象</h5>
								<div className="spe_emotion_chart_box1 chart_box" ref="spe_emotion_chart_box1"></div>
								<div className="spe_emotion_chart_box2 chart_box" ref="spe_emotion_chart_box2"></div>
								<div className="spe_emotion_chart_box3 chart_box" ref="spe_emotion_chart_box3"></div>
							</div>
						</div>
						<div className="trend_attitude">
							<h5 className="module_title">态度趋势</h5>
							<div className="trend_attitude_chart_box" ref="trend_attitude_chart_box"></div>
						</div>
						<div className="trend_value">
							<h5 className="module_title">热度趋势</h5>
							<div className="trend_value_chart_box" ref="trend_value_chart_box"></div>
						</div>
						<div className="comments">
							<h5 className="module_title comments_title">印尼国民评论</h5>
							<div className="text_flow_box">
								{
									this.state.comments.map((item,index)=>{
										return (
											<div className="text_flow" key={index}>
												<h5 className="text_title">
													{item.date}
												</h5>
												<div className="text_content">
													<span className="username">{item.username}</span>:{item.content}
												</div>
											</div>
										)
									})
								}
							</div>
						</div>
						<div className="keywords">
							<h5 className="module_title">事件关键词</h5>
							<div className="keywords_chart_box" ref="keywords_chart_box"></div>
						</div>
						<div className="posWords">
							<h5 className="module_title">正面高频词</h5>
							<div className="posWords_chart_box" ref="posWords_chart_box"></div>
						</div>
						<div className="negWords">
							<h5 className="module_title">负面高频词</h5>
							<div className="negWords_chart_box" ref="negWords_chart_box"></div>
						</div>
						<div className="news">
							<h5 className="module_title news_title">印尼媒体相关报道</h5>
							<div className="text_flow_box text_flow_box_height">
								{
									this.state.news.map((item,index)=>{
										return (
											<div className="text_flow" key={index}>
												<h5 className="text_title">
													{item.title}
													<span className="right">{item.date}</span>
												</h5>
												<div className="text_content">
													<span className="username">报道摘要</span>:{item.body}
												</div>
												<p className="text_source">报道来源: {item.source}</p>
											</div>
										)
									})
								}
							</div>
						</div>
					</div>

				</div>
			</div>
		);
	}


}

export default Event;