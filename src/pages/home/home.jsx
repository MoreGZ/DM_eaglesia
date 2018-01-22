import React, { Component } from 'react';

import Api from '@/api/api.js'

import PublicHeader from '@/components/header/header';

import './home.css';

class Home extends Component {

	state = {
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
				<PublicHeader></PublicHeader>
			</div>
		);
	}


}

export default Home;
