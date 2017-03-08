import React, { Component } from 'react';
import './App.css';

class App extends Component{
    render(){
        return(
            <div className="app">
                <div className="counter-title"> Countdown to: December 25, 2017</div>
                <div className="counter-list">
                    <div className="counter-item">14 days</div>
                    <div className="counter-item">7 hours</div>
                    <div className="counter-item">20 minutes</div>
                    <div className="counter-item">34 seconds</div>
                </div>
                <div className="counter-add">
                    <input type="date" placeholder='enter date here'/>
                    <button>Submit</button>
                </div>
                <div className="triangle"></div>
            </div>

        )
    }
}

export default App;