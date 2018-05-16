import React, { Component } from "react"
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { changeLan } from '@/redux/action'

import './header.less'

class Header extends Component {
	static defaultProps = {
		status: 1,
    }

    state = {
		keyword:"",
		language:[
			'chi',
			'eng',
			'ind',
			'mal'
		],
		languageMap:{
			'chi':"中文",
			'eng':"英语",
			'ind':"印尼语",
			'mal':"马来语"
		},
    }
	
	inputKeyword = (e) => {
		var value = e.target.value;
		this.setState({keyword:value});
	}

	render(){
		let changelanguage = <div className="changelanguage">
								<div className="currentLanguage">{this.state.languageMap[this.props.language]}</div>
								<ul>
									{
										this.state.language.map((item) => {
											return <li onClick={this.props.changeLanguage.bind(this,item)}>{this.state.languageMap[item]}</li>
										})	
									}
								</ul>
							</div>
		
		return (
			<div className={"header " + (this.props.status === 1 ? "status1" : "status2")}>
				<div className="main">
					<NavLink to="/home" activeClassName="active">
						<div className="logo">
							<img src={this.props.status === 1 ? "./img/logo.png" : "./img/logo2.png"} alt="" className="logo1"/>
							<img src={this.props.status === 1 ? "./img/logotext.png" : "./img/logotext2.png"} alt="" className="logo2"/>
						</div>
					</NavLink>
					<div className="navbar">
						<ul>
							<li className="navbar_item">
								<NavLink to="/found" activeClassName="active">舆情分析</NavLink>
							</li>
							<li className="navbar_item">
								<NavLink to="/news/domain" activeClassName="active">热点新闻</NavLink>
								<ul className="navbar_subItem">
									<li><NavLink to="/news/domain" activeClassName="active">领域风云</NavLink></li>
									<li><NavLink to="/news/emotion" activeClassName="active">态度走向</NavLink></li>
								</ul>
							</li>
						</ul>
					</div>
					{
						// console.log(window.location.hash)
						window.location.hash.split('/')[1] == "news" ?	changelanguage : ""
					}
					{
						this.props.status === 1 
						? (
							<div className="searchbox">
								<form action="">
									<input type="text" placeholder="请输入关键字进行搜索" onInput={this.inputKeyword}/>
									<Link to={"/searchResult/"+this.state.keyword}>
										<button></button>
									</Link>
									<img src="./img/search.png" alt="" className="icon"/>
								</form>
							</div>
						)
						: (<div></div>)
					}
					
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		changeLanguage: (language) => {
			dispatch(changeLan(language))
		}
	}
}
const mapStateToProps = (state) => {
	return {
		language:state.language
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);