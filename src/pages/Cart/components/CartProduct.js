import React from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

import { removeFromCart, updateProductAmount, updateCartTotal } from "../../../redux/actions/cartActions"

const CartProduct = ({ product }) => {
    const dispatch = useDispatch()

    const onClickDelete = () => {
        dispatch(removeFromCart(product.id))
        dispatch(updateCartTotal())
    }
    const onClickDecreaseAmount = () => {
        if (product.amount > 1){
            dispatch(updateProductAmount(product.id, product.amount - 1))
            dispatch(updateCartTotal())
        }
    }
    const onClickIncreaseAmount = () => {
        dispatch(updateProductAmount(product.id, product.amount + 1))
        dispatch(updateCartTotal())
    }
    const onChangeAmount = (event) => {
        dispatch(product.id, parseInt(event.target.value))
        dispatch(updateCartTotal())
    }
    return (
        <div className="cart__content-one">
            <div className="cart__content-column cart__content-image">
                <Link to={"/products/" + product.id} ><img src={product.thumbnail} /></Link>
            </div>
            <div className="cart__content-column cart__content-description">
                <Link className="cart__content-name" to={"/products/" + product.id} >{product.title}</Link>
                <span onClick={onClickDelete} className="cart__content-delete"><i className="fa-solid fa-circle-minus"></i></span>

                <div className="cart__content-options sku">
                    <span className="cart__content-options-label">Код:</span>
                    <span className="cart__content-options-value">A77765432F_A18D</span>
                </div>
                <div className="cart__content-options">
                    <span className="cart__content-options-label">Бренд:</span>
                    <span className="cart__content-options-value">{product.brand}</span>
                </div>
                <div className="cart__content-options">
                    <span className="cart__content-options-label">Категория:</span>
                    <span className="cart__content-options-value">{product.category}</span>
                </div>
            </div>
            <div className="cart__content-column cart__content-price">{product.price} руб.</div>
            <div className="cart__content-column cart__content-qty">
                <div className="qty">
                    <div className="qty__wrapper">
                        <span onClick={onClickDecreaseAmount} className="qty__decrease"><i className="fa-solid fa-minus"></i></span>
                        <input onChange={onChangeAmount} className="qty__input" type="text" value={product.amount} />
                        <span onClick={onClickIncreaseAmount} className="qty__increase"><i className="fa-solid fa-plus"></i></span>
                    </div>
                </div>                
            </div>
            <div className="cart__content-column cart__content-price">{product.price * product.amount} руб.</div>
        </div>
    )
}

export default CartProduct