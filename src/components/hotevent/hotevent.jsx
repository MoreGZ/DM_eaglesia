import React,{ Component } from "react"

import api from "@/api/api.js"

import EventItem from "@/components/event_item/event_item"
import PublicRank from '@/components/rank/rank'

import './hotevent.less'

class Report extends Component {
	state = {
		'currentPage':2,
		"events": [],
	    "total_leader": [],
	    "political_leader": [],
	    "economic_leader": []
	}
	

	getMoreHotevent = async () => {
		try{
			let params = {
				data:{
					page:this.state.currentPage,
					x:"xx"
				}
			}
			let result = await api.getMoreHotevent(params);
			let data = result.data;
			
			var e = this.state.events;
			data.forEach((item)=>{
				e.push(item);
			})
			this.setState({
				currentPage:this.state.currentPage+1,
				events:e
			})

		}catch(err){
			throw(err);
		}
	}


	initData = async () => {
		try{
			let result = await api.getFoundHotevent();
			let data = result.data;
			
			console.log(data);
			this.setState({
				events:data.events,
				total_leader:data.total_leader,
				political_leader:data.political_leader,
				economic_leader:data.economic_leader
			})
		}catch(err){
			throw(err);
		}
	}

	componentDidMount(){
		this.initData();
	}

	render(){
		return (
			<div id="hotevent">
				<div className="left">
					{
						this.state.events.map((item,index) => {
							return (<EventItem itemData={item} key={index}></EventItem>)
						})
					}
					<div className="getMoreBtn" onClick={this.getMoreHotevent}>点击加载更多内容</div>
				</div>
				<div className="right">
					<div className="rank_a">
						<PublicRank list={this.state.total_leader} title="新闻总榜"></PublicRank>
					</div>
					<div className="rank_a">
						<PublicRank list={this.state.political_leader} title="政治新闻榜"></PublicRank>
					</div>
					<div className="rank_a">
						<PublicRank list={this.state.economic_leader} title="经济新闻榜"></PublicRank>
					</div>
				</div>
			</div>
		)
	}
}

export default Report;