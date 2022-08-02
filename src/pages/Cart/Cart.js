import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'

import { clearCart } from "../../redux/actions/cartActions";
import Breadcrumbs from "../../blocks/Breadcrumbs/Breadcrumbs"
import CartProduct from "./components/CartProduct";
import "./Cart.scss"


const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => {
        return state.cart
    })
    const breadcrumbs = [
        { id: 1, name: "Главная", link: "/" },
        { id: 2, name: "Корзина", link: "/cart", last: true }
    ]

    useEffect(() => {
    }, [])

    const onClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className="cart">
            <div className="container-width">
                <Breadcrumbs breadcrumbs={breadcrumbs} />

                { cart.products.length > 0 && 
                    <React.Fragment>
                        <h1 className="cart__title">Корзина</h1>
                        <div className="cart__buttons cart__buttons-top">
                            <div className="cart__buttons-left">
                                <Link className="btn btn__secondary" to="/">Продолжить покупки</Link>
                            </div>
                            <div className="cart__buttons-right">
                                <Link className="btn btn__primary" to="/checkout">Оформить покупки</Link>
                            </div>
                        </div>
                        <div className="cart__content">
                            <div className="cart__content-header">
                                <div className="cart__content-header-column cart__content-image">Товар</div>
                                <div className="cart__content-header-column cart__content-description"></div>
                                <div className="cart__content-header-column cart__content-price">Цена за ед.</div>
                                <div className="cart__content-header-column cart__content-qty">Кол-во</div>
                                <div className="cart__content-header-column cart__content-price">Итого</div>
                            </div>
                            <div className="cart__content-items">
                                { cart.products && cart.products.map((product) => {
                                    return <CartProduct product={product} key={product.id} />
                                })}
                            </div>
                        </div>

                        <div className="cart__total">
                            <div className="cart__total-wrapper">
                                <div className="cart__total-left"></div>
                                <div className="cart__total-right">
                                    <div className="cart__statistic">
                                        <div className="cart__statistic-one">
                                            <span className="cart__statistic-title">Сумма</span>
                                            <span className="cart__statistic-value">{cart.totalPrice} руб.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                }

                { cart.products.length === 0 && 
                    <div className="cart__empty">
                        <div className="cart__empty-text">Ваша корзина пуста</div>
                    </div>
                }

                <div className="cart__buttons cart__buttons-bottom">
                    <div className="cart__buttons-left">
                        <Link className="btn btn__secondary" to="/">Продолжить покупки</Link>
                        { cart.products.length > 0 &&
                            <span onClick={onClearCart} className="btn btn__tertiary">Очистить корзину</span>
                        }
                    </div>
                    <div className="cart__buttons-right">
                        { cart.products.length > 0 &&
                            <Link className="btn btn__primary" to="/checkout">Оформить покупки</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart