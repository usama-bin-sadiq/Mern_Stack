// import React, {Component} from 'react'

// export default class Clock extends Component {
//     constructor(props){
//         super(props);
//         this.state = {date:new Date()}
//     }
//     tick(){
//         this.setState({
//             date:new Date(),
//         })
//     }
//     componentDidMount(){
//         this.timeID = setInterval(()=>this.tick(),1000);
//     }
//     render(){
//         return ( 
//             <div className = "App">
//                 <h2>This is {this.state.date.toLocaleTimeString()}</h2>
//             </div>  
//         )
//     }
// }

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
export default class Clock extends Component {

  
    handleClick (e) {
        console.log(e.target)
    }
    render() {
        return (
            <div className="App">
                <a href="#" onClick={()=>console.log("Click me is fired")}>Click ME</a>
                <p></p>
                <a href="#" onClick={(e)=>console.log(e.target)}>Click ME 1</a>
                <p></p>
                <a href="#" onClick= {this.handleClick}>Click ME 2</a>

            </div>
        )
    }
}
