import React from "react";

import './Header.scss'
import Logo from "../../blocks/static_templates/Logo/Logo"
import Search from "../../blocks/Search/Search"
import CallRequest from "../../blocks/CallRequest/CallRequest"
import MiniСomparison from "../../blocks/MiniСomparison/MiniСomparison"
import MiniWishlist from "../../blocks/MiniWishlist/MiniWishlist"
import MiniAccount from "../../blocks/MiniAccount/MiniAccount"
import MiniCart from "../../blocks/MiniCart/MiniCart"


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