import React, { Component } from 'react';

import PublicHeader from '@/components/header/header';

import './home.css';

class Home extends Component {

	state = {
		eventtitle:"一带一路峰会",
		eventclass:"社会",
		eventnewcount:""
	}

	initData = () => {
		
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
						<h2 className="eventtitle">{this.state.eventtitle}</h2>
						<h3 className="eventclass">{this.state.eventclass}</h3>
						<h3 className="eventnewcount">总报道数：{this.state.eventnewcount}</h3>
					</div>
					<div className="main"></div>
				</div>
			</div>
		);
	}


}

export default Home;
