import React, { Component } from 'react';
import './App.css';

class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            days : 0,
            hours : 0,
            minutes : 0,
            seconds : 0
        }
    }
    componentWillMount(){
        this.getTimeUntil(this.props.deadline);
    }

    getTimeUntil(deadline){
        const time = Date.parse(deadline) - Date.parse(new Date());
        
        const days = Math.floor(time/(1000*60*60*24));
        const hours = Math.floor(time/(1000*60*60) % 24);
        const minutes = Math.floor((time/1000/60) % 60);
        const seconds = Math.floor((time/1000) % 60);
        
        this.setState({ days, hours, minutes, seconds});
        console.log('seconds', seconds, 'minutes', minutes, 'hours', hours, 'days', days);
    }

    render(){
        
        return(
            <div className="counter-list">
                <div className="counter-item">{this.state.days} days</div>
                <div className="counter-item">{this.state.hours} hours</div>
                <div className="counter-item">{this.state.minutes} minutes</div>
                <div className="counter-item">{this.state.seconds} seconds</div>
            </div>
        )
    }
}

export default Clock;