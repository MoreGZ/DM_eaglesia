import React,{ Component } from "react"

import Api from "@/api/api.js"

import PublicDetail from '@/components/detail/detail'

import './hotnews.css'

class Report extends Component {
	state = {
		"news":[
	        {
	            "id":23,
	            "date":"2017.6.12",
	            "title":"Lorem ipsum dolor sit amet",
	            "body":"新闻内容(string)",    
	            "source":"报道来源(string|domain)"
	        },
	        {
	            "id":24,
	            "date":"2017.6.13",
	            "title":"Lorem ipsum dolor sit amet",
	            "body":"新闻内容(string)",    
	            "source":"报道来源(string|domain)"
	        },
	        {
	            "id":25,
	            "date":"2017.6.14",
	            "title":"Lorem ipsum dolor sit amet",
	            "body":"新闻内容(string)",    
	            "source":"报道来源(string|domain)"
	        },
	        {
	            "id":26,
	            "date":"2017.6.15",
	            "title":"Lorem ipsum dolor sit amet",
	            "body":"新闻内容(string)",    
	            "source":"报道来源(string|domain)"
	        },
	        {
	            "id":23,
	            "date":"2017.6.16",
	            "title":"Lorem ipsum dolor sit amet",
	            "body":"新闻内容(string)",    
	            "source":"报道来源(string|domain)"
	        }
	    ],
	    isShowDetial:false,
	    newsPage:2,
	    commentsPgae:2
	}
	
	loadMoreNews = async () => {
		let params = {
			data:{
				page:this.state.newsPage
			}
		}
		try{
			let result = await Api.getMoreNews(params);
			
			let data = result.data;
			let news = this.state.news;
			data.forEach((item) => {
				news.push(item);
			})

			this.setState({
				news:news,
				newsPage:this.state.newsPage+1
			})
		}catch(err){
			throw(err);
		}
	}

	showDetail = (item) => {
		let detailDom = this.refs.detail;
		detailDom.props.news.title = item.title;
		detailDom.props.news.date = item.date;
		detailDom.props.news.source = item.source;
		detailDom.props.news.body = item.body;

		this.setState({
			isShowDetial:true
		})
	}

	hideDetail = (a) =>{
		this.setState({
			isShowDetial:false
		})
	}

	getMoreHotevent = async () => {
		
	}


	initData = async () => {
		
	}

	componentDidMount(){
		
	}

	render(){
		return (
			<div id="hotnews">
				<h5 className="module_title news_title">印尼媒体相关报道</h5>
				<div className="text_flow_box text_flow_box_height">
					{
						this.state.news.map((item,index)=>{
							return (
								<div className="text_flow" key={index} onClick={this.showDetail.bind(this,item)}>
									<h5 className="text_title">
										{item.title}
										<span className="right">{item.date}</span>
									</h5>
									<div className="text_content">
										<span className="username">报道摘要</span>:{item.body.length <= 300 ? item.body : item.body.slice(0,300)+"..."}
									</div>
									<p className="text_source">报道来源: {item.source}</p>
								</div>
							)
						})
					}
				</div>
				<div className="loadMoreBtn" onClick={this.loadMoreNews}>点击加载更多</div>
				<div className={this.state.isShowDetial ? "" : "hidden_detail"}>
					<PublicDetail hide={this.hideDetail.bind(this)} ref="detail"></PublicDetail>
				</div>
			</div>
		)
	}
}

export default Report;