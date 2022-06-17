import React from "react";
import Logo from "../Blocks/Logo"
import Search from "../Blocks/Search";
import CallRequest from "../Blocks/CallRequest";


function Header(){
    return (
        <div className="header">
            <div className="container-width">
                <Logo />
                <Search />
                <CallRequest />

                {/* <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/categories">Category</Link></li>
                    <li><Link to="/products/1">Product</Link></li>
                </ul> */}
            </div>
        </div>
    )
}

export default Header