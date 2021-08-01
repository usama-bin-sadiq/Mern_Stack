import React from 'react';
import ReactDOM from 'react-dom';

//import functional component
import User from "./components/User"
//import class component
import UserClass from "./components/UserClass"


ReactDOM.render(
    
    <React.StrictMode>
         {/* <User></User> */}
        <User />
        {/* <UserClass  name = "Usama"/> */}
    </React.StrictMode>,
    document.getElementById("root")
);