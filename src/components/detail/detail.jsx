import React, { Component } from 'react'

import './detail.less'

class Detail extends Component {
	static defaultProps = {
		news : {
			title:"this is title",
			pub_time:"2019.2.3",
			source:"XX媒体",
			body:"这里是振文这里是振文这里是振文这里是振文这里是振文这里是振文这里是振文这里是振文这里是振文这里是振文这里是振文这里是振文这里是振文这里是振文这里是振文这里是振文这里是振文这里是振文这里是振文这里是振文这里是振文这里是振文d",
			lead:"这里是导语"
		},
		hide:() => {}
	}

	componentWillMount(){
		
	}

	componentDidMount(){

	}

	render(){

		var news = this.props.news;

		return (
			<div className="Detail">
				<div className="detail_content">
					<h1 className="detail_title">{news.title}</h1>
					<div className="detail_body">
						<span className="detail_date">{news.pub_time}</span>
						<span className="detail_media">{news.source}</span>
						<div className="main">
							<p className="detail_lead">
								<strong>报道导语：</strong>{news.lead}
							</p>
							<p className="detail_context">
							<strong>报道正文：</strong>{news.body}
							</p>
						</div>
					</div>
					<span className="out" onClick={this.props.hide}>
						<img src="./img/out.png" alt=""/>
					</span>
				</div> 
			</div>
		)
	}
}

export default Detail;