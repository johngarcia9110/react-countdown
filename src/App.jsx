import React, { Component } from 'react';
import Clock from './Clock';
// import './App.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            deadline : 'December 25, 2017',
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
                <Clock deadline={this.state.deadline}/>
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