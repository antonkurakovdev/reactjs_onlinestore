import React from "react";
import Logo from "../Blocks/Logo"
import Search from "../Blocks/Search";
import CallRequest from "../Blocks/CallRequest";
import MiniСomparison from "../Blocks/MiniСomparison";
import MiniWishlist from "../Blocks/MiniWishlist";
import MiniAccount from "../Blocks/MiniAccount";
import MiniCart from "../Blocks/MiniCart";


function Header(){
    return (
        <div className="header">
            <div className="container-width">
                <div className="header__wrapper">
                    <Logo />
                    <Search />
                    <CallRequest />

                    <div className="header__right">
                        <MiniСomparison />
                        <MiniWishlist />
                        <MiniAccount />
                        <MiniCart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header