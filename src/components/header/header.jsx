import React, { Component } from "react"
import { NavLink, Link } from 'react-router-dom'
import './header.css'


class Header extends Component {
	static defaultProps = {
        status: 1,
    }

    state = {
    	keyword:"",
    }
	
	inputKeyword = (e) => {
		var value = e.target.value;
		this.setState({keyword:value});
	}

	render(){
		return (
			<div className={"header " + (this.props.status === 1 ? "status1" : "status2")}>
				<div className="main">
					<div className="logo">
						<img src={this.props.status === 1 ? "./img/logo.png" : "./img/logo2.png"} alt="" className="logo1"/>
						<img src={this.props.status === 1 ? "./img/logotext.png" : "./img/logotext2.png"} alt="" className="logo2"/>
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

export default Header;