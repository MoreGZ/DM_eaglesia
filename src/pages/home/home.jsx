import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import Api from '@/api/api.js'

import PublicHeader from '@/components/header/header';

import './home.css';

class Home extends Component {

	state = {
		events:[
		    {
		        "title": "Thai rice prices plummeted"
		    },
		    {
		        "title": "Samsung market crisis"
		    },
		    {
		        "title": "马丽哈路口车祸"
		    },
		    {
		        "title": "印尼凶杀案频发"
		    },
		    {
		        "title": "沙巴政党问题"
		    }
		]
	}
	/*
	初始化数据
	1.获取数据
	2.绑定windows函数
	*/
	initData = async () => {
		try{
		}catch(err){
			console.error(err);
		}
	}
	
	componentWillMount(){
		this.initData();
	}

	componentDidMount(){
		
	}

	render() {
		return (
			<div className="Home">
				<PublicHeader status="2"></PublicHeader>
				<div className="body">
					<div className="background">
						<img src="./img/background.png" alt=""/>
						<div className="cover"></div>
					</div>
					<div className="main">
						<div className="logo">
							<img src="./img/logo_big.png" alt=""/>
							<img src="./img/logotext_big.png" alt=""/>
						</div>
						<div className="searchbox">
							<form action="">
								<input type="text" placeholder="请输入关键字进行搜索"/>
								<button></button>
								<img src="./img/search.png" alt="" className="icon"/>
							</form>
						</div>
						<div className="events">
							{
								this.state.events.map((item,index) => {
									return (
										<Link to="/event">
											<div className={"event event"+(index+1)}>
												<span className="title">{item.title}</span>
											</div>
										</Link>
									)
								})
							}
						</div>
					</div>
				</div>
			</div>
		);
	}


}

export default Home;
