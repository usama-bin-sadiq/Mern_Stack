import React, {Component} from 'react'

export default class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {date:new Date()}
    }
    tick(){
        this.setState({
            date:new Date(),
        })
    }
    componentDidMount(){
        this.timeID = setInterval(()=>this.tick(),1000);
    }
    render(){
        return ( 
            <div className = "App">
                <h2>This is {this.state.date.toLocaleTimeString()}</h2>
            </div>  
        )
    }
}
