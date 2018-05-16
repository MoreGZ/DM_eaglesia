import React, { Component } from "react"
import { NavLink } from 'react-router-dom'
import './rank.css'


class Rank extends Component {
	static defaultProps = {
		title:"热点搜索",
        list:[]
    }

	render(){
		return (
			<div className="rank">
				<div className="title">
					<span>{this.props.title}</span>
				</div>
				<div className="list">
					{
						this.props.list.map((item,index) => {
							return (
								<div className="item" key={index}>
									<span className="index">{index+1}.</span>
									<NavLink to={"/event/"+item.title}>
										<span className="content">{item.title}</span>
									</NavLink>
									{
										item.trend === 0 
										? <img src="./img/level.png" alt="" className="trend"/>
										: (item.trend === 1
											? <img src="./img/up.png" alt="" className="trend"/>
											: <img src="./img/down.png" alt="" className="trend"/>
										)
									}
								</div>
							)
						})
					}
				</div>
			</div>
		)
	}
}

export default Rank;