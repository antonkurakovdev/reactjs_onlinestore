import React from "react";
import logo from '../images/logo.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

function Logo(){
    return (
        <div className="logo">
            <Link to="/"><img src={logo} /></Link>
        </div>
    )
}

export default Logo