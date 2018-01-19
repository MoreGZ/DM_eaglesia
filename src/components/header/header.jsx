import React, { Component } from "react"
import { NavLink } from 'react-router-dom'
import './header.css'


class Header extends Component {
	render(){
		return (
			<div className="header">
				<div className="main">
					<div className="logo">
						<img src="./logo.png" alt="" className="logo1"/>
						<img src="./logotxt.png" alt="" className="logo2"/>
					</div>
					<div className="navbar">
						<ul>
							<li>
								<NavLink to="/home" activeClassName="active">首页</NavLink>
							</li>
							<li>
								<NavLink to="/found" activeClassName="active">发现</NavLink>
							</li>
						</ul>
					</div>
					<div className="searchbox">
						<form action="">
							<input type="text" placeholder="请输入关键字进行搜索"/>
							<button></button>
							<img src="./img/search.png" alt="" className="icon"/>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default Header;