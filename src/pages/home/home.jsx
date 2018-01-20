import React, { Component } from 'react';

import Api from '@/api/api.js'

import PublicHeader from '@/components/header/header';

import './home.css';

class Home extends Component {

	state = {
		"title":"",
		"info":"",
		"rank":{},
		"class": "",        
		"total":0,                   
		"track":[],
	    "emotion":[],
	    "trend_attitude":[],
		"trend_value":[],
		"comments":[],
	    "keywords":[],
		"posWords":[],
		"negWords":[],
	    "news":[],
	}

	initData = async () => {
		try{
			var data = await Api.getEventData();
			
			this.setState({
				title:data.data.title
			})

			console.log(data);
		}catch(err){
			console.error(err);
		}
		
	}
	
	componentWillMount(){
		this.initData();
	}


	render() {
		return (
			<div className="Home">
				<PublicHeader></PublicHeader>
				<div className="body">
					<div className="title">
						<h2 className="eventtitle">{this.state.title}</h2>
						<h3 className="eventclass">{this.state.class}</h3>
						<h3 className="eventnewcount">总报道数：{this.state.total}</h3>
					</div>
					<div className="main"></div>
				</div>
			</div>
		);
	}


}

export default Home;
