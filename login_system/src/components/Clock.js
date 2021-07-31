import React, {Component} from 'react'

export default class Clock extends Clock {
    constructor(props){
        super(props);
        this.this.state = {date:new Date()}
    }
    tick(){
        this.setState({
            date:new Date()
        })
    }
    componentDidMount(){
        this.timeID = setInterval(()=>this.tick(),1000);
    }
    render(){
        return ( 
            <div className = "App">
                <h2>This is {this.state.date.toLacaleTimeString()}</h2>
            </div>  
        )
    }
}
