import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function MiniCart(){
    const { products } = useSelector((state) => state.cart)

    return (
        <div className="cart-mini dropdown-box">
            <div className="dropdown-box__title">
                <div className="cart-mini__count dropdown-box__count">{products.length}</div>
                <i className="fa-solid fa-cart-shopping"></i>
            </div>

            <div className="dropdown-box__content">
                { products.length === 0 && 
                    <div className="dropdown-box__empty">
                        <div className="dropdown-box__empty-text">Ваша корзина пуста</div>
                    </div>
                }   

                <div className="dropdown-box__content-wrapper">
                    { products.length > 0 && products.map((product) => {
                        return (
                            <div className="dropdown-box__element" key={product.id}>
                                <div className="dropdown-box__element-image">
                                    <Link to={"/products/" + product.id} ><img src={product.thumbnail} /></Link>
                                </div>
                                <div className="dropdown-box__element-content">
                                    <div className="dropdown-box__element-name">
                                        <Link className="cart__content-name" to={"/products/" + product.id} >{product.title}</Link>                             
                                    </div>
                                    <div className="dropdown-box__element-price">{product.amount} x {product.price} руб.</div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                { products.length > 0 && 
                    <div className="dropdown-box__buttons">
                        <div className="dropdown-box__buttons-left">
                            <Link className="btn btn__secondary" to="/cart">Корзина</Link>
                        </div>
                        <div className="dropdown-box__buttons-right">
                            <Link className="btn btn__primary" to="/checkout">Оформление заказа</Link>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default MiniCart