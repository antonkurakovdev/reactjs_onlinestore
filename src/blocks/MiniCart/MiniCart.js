import React, { useState } from "react"
import { useSelector } from "react-redux"

function MiniCart(){
    const { products } = useSelector((state) => state.cart)
    return (
        <div className="cart-mini dropdown-box">
            <div className="dropdown-box__title">
                <div className="cart-mini__count dropdown-box__count">{products.length}</div>
                <i className="fa-solid fa-cart-shopping"></i>
            </div>
        </div>
    )
}

export default MiniCart