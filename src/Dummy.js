import React, { Component } from 'react'
import Dummy1 from './Dummy1.js'
class Dummy extends Component {
    constructor() {
        super()
        this.state = {
            clickCount: 0
        }
    }
    plusHandler = () => {
        const count=this.state.clickCount;
        this.setState((prevState)=>({clickCount:prevState.clickCount+1}))
    }
    minusHandler = () => {
        const count=this.state.clickCount;
        if(count>0)
        this.setState((previousState)=>({clickCount:previousState.clickCount-1}))
    }
    resetHandler = () => {
        this.setState((previousState)=>({clickCount:0}))
    }
    render() {
        const {clickCount}=this.state;
        return (
            <div>
                <Dummy1 
                clickCount={clickCount} 
                plusHandler={this.plusHandler}
                minusHandler={this.minusHandler}
                resetHandler={this.resetHandler}
                />
            </div>
        )
    }
}
export default Dummy