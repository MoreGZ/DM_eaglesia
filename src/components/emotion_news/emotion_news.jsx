import React,{ Component } from "react"

import Api from "@/api/api.js"
import { connect } from 'react-redux'

import PublicDetail from '@/components/detail/detail'

import './emotion_news.less'

class Emotion_news extends Component {
	static defaultProps = {
		txtmaxLength: 180,
		titlemaxLangth:18
	}
	state = {
		"news":[],
	    isShowDetial:false,
		newsPage:1,
		classMap:{
			support:1,
			oppose:0,
		}
	}
	
	loadNews = async () => {
		let params = {
			data:{
				language:this.props.language,
				page:this.state.newsPage,
				emotion:this.state.classMap[this.props.match.params.type]
			}
		}
		try{
			let result = await Api.loadNewsEmotionNews(params);
			
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
		detailDom.props.news.pub_time = item.pub_time;
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

	componentDidMount(){
		this.loadNews();
	}

	componentWillReceiveProps(nextProps){
		if(this.props.match.params.type !== nextProps.match.params.type){
			this.setState({
				"news":[],
				isShowDetial:false,
				newsPage:1,
			},() => {
				this.loadNews();
			})
		}

		if(this.props.language !== nextProps.language){
			this.setState({
				"news":[],
				isShowDetial:false,
				newsPage:1,
			},() => {
				this.loadNews();
			})
		}
	}

	render(){
		return (
			<div id="emotion_news">
				<h5 className="module_title news_title">印尼媒体相关报道</h5>
				<div className="text_flow_box text_flow_box_height">
					{
						this.state.news.map((item,index)=>{
							return (
								<div className="text_flow" key={index} onClick={this.showDetail.bind(this,item)}>
									<h5 className="text_title">
										{item.title.length <= this.props.titlemaxLangth ? item.title : item.title.slice(0,this.props.titlemaxLangth)+"..."}
										<span className="classtag">
											{
												item.class.map((tagItem) => {
													return tagItem ? (<span className="tag">{tagItem}</span>) : ""
												})
											}
										</span>
										<span className="pub_time">{item.pub_time}</span>
									</h5>
									
									<div className="text_content">
										<span className="username">报道摘要</span>:{item.body.length <= this.props.txtmaxLength ? item.body : item.body.slice(0,this.props.txtmaxLength)+"..."}
									</div>
									<p className="text_source">报道来源: {item.source}</p>
								</div>
							)
						})
					}
				</div>
				<div className="loadMoreBtn" onClick={this.loadNews}>点击加载更多</div>
				<div className={this.state.isShowDetial ? "" : "hidden_detail"}>
					<PublicDetail hide={this.hideDetail.bind(this)} ref="detail"></PublicDetail>
				</div>
			</div>
		)
	}
}

export default connect(
	(state) => ({
		language:state.language
	})
)(Emotion_news);