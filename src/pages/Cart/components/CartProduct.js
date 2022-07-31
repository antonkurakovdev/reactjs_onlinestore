import React from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

import { removeFromCart } from "../../../redux/actions"

const CartProduct = ({ product }) => {
    const dispatch = useDispatch()
    const onClickDelete = () => {
        dispatch(removeFromCart(product))
    }
    return (
        <div className="cart__content-one">
            <div className="cart__content-column cart__content-image">
                <Link to={"/products/" + product.id} ><img src={product.thumbnail} /></Link>
            </div>
            <div className="cart__content-column cart__content-description">
                <Link className="cart__content-name" to={"/products/" + product.id} >{product.title}</Link>
                <span onClick={onClickDelete} className="cart__content-delete"><i className="fa-solid fa-circle-minus"></i></span>

                <div className="cart__content-sku">
                    <span className="cart__content-sku-label">Код:</span>
                    <span className="cart__content-sku-value">A77765432F_A18D</span>
                </div>
            </div>
            <div className="cart__content-column cart__content-price">{product.price} руб.</div>
            <div className="cart__content-column cart__content-qty">{product.amount} шт.</div>
            <div className="cart__content-column cart__content-price">{product.price * product.amount} руб.</div>
        </div>
    )
}

export default CartProduct