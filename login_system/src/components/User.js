import React from 'react';
import  ReactDOM  from 'react-dom';
import Clock from './Clock';

//functional react component

// const name = "User Functional Component";
// function User(){
//     return (
//         <div className = "App">
//             <div className="container">
//             {/* <h2>User Functional Component</h2>
//             <h2>{name}</h2> */}
//             <h2>{setInterval(tick, 1000)}</h2>

//         </div>
//         </div>
//     )
// }
// export default User;
// function tick(){
//     const element = (
//         <h2>It is {new Date().toLocaleTimeString()}</h2>
//     )
//     ReactDOM.render(element, document.getElementById('root'));
// }



export default function User(props) {
    return (
        <div className = "App">
            {/* <h2>This is {props.name}</h2> */}
            <Clock />
        </div>
    )
}
