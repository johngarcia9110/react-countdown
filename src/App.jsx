import React, { Component } from 'react';
import './App.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            deadline : 'aDecember 25, 2017',
            newDeadLine : ''
        }
    }

    changeDeadline(){
        this.setState({deadline : this.state.newDeadLine});
    }

    render(){
        return(
            <div className="app">
                <div className="counter-title"> Countdown to: {this.state.deadline}</div>
                <div className="counter-list">
                    <div className="counter-item">14 days</div>
                    <div className="counter-item">7 hours</div>
                    <div className="counter-item">20 minutes</div>
                    <div className="counter-item">34 seconds</div>
                </div>
                <div className="counter-add">
                    <input 
                    placeholder='enter date here'
                    onChange={event => this.setState({newDeadLine : event.target.value})}
                    />
                    <button onClick={() => this.changeDeadline()}>Submit</button>
                </div>
                <div className="triangle"></div>
            </div>

        )
    }
}

export default App;