import React,{ Component } from "react"

import EventItem from "@/components/event_item/event_item"

import './event_list.css'

class EventList extends Component {
	static defaultStatus = {
		events: []
	}

	render(){
		return (
			<div className="event_item">	
				{
					this.props.events.map((item,index) => {
						// return <div></div>
						return (<EventItem itemData={item} key={index}></EventItem>)
					})
				} 
			</div>
		)
	}

}

export default EventList;