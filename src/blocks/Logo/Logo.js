import React from "react"
import {
    Link
} from "react-router-dom"


import logo from './Logo.png';

function Logo(){
    return (
        <div className="logo">
            <Link to="/"><img src={logo} /></Link>
        </div>
    )
}

export default Logo