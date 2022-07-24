import React from "react"
import { Link } from "react-router-dom"

import Breadcrumbs from "../../blocks/Breadcrumbs/Breadcrumbs"


const Cart = () => {
    const breadcrumbs = [
        { id: 1, name: "Главная", link: "/" },
        { id: 2, name: "Корзина", link: "/cart" }
    ]
    return (
        <div className="cart">
            <div className="container-width">
                <Breadcrumbs breadcrumbs={breadcrumbs} />

                <h1 className="cart__title">Корзина</h1>

                <div className="cart__buttons cart__buttons-top">
                    <div className="cart__buttons-left">
                        <Link className="btn__secondary" to="/">Продолжить покупки</Link>
                    </div>
                    <div className="cart__buttons-right">
                        <Link className="btn__primary" to="/">Оформить покупки</Link>
                    </div>
                </div>

                <div className="cart__content">
                    <div className="cart__content-header">
                        <div className="cart__content-header-column">Товар</div>
                        <div className="cart__content-header-column"></div>
                        <div className="cart__content-header-column">Цена за ед.</div>
                        <div className="cart__content-header-column">Кол-во</div>
                        <div className="cart__content-header-column">Итого</div>
                    </div>
                    <div className="cart__content-items">
                        <div className="cart__content-column cart__content-image"></div>
                        <div className="cart__content-column cart__content-name"></div>
                        <div className="cart__content-column cart__content-price"></div>
                        <div className="cart__content-column cart__content-qty"></div>
                        <div className="cart__content-column cart__content-price"></div>
                    </div>
                </div>

                <div className="cart__total">
                    <div className="cart__total-wrapper">
                        <div className="cart__total-left"></div>
                        <div className="cart__total-right">
                            <div className="cart__statistic">
                                <div className="cart__statistic-one">
                                    <span className="cart__statistic-title">Сумма</span>
                                    <span className="cart__statistic-value">18 420 руб.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="cart__buttons cart__buttons-bottom">
                    <div className="cart__buttons-left">
                        <Link className="btn__secondary" to="/">Продолжить покупки</Link>
                        <span className="btn__tertiary">Очистить корзину</span>
                    </div>
                    <div className="cart__buttons-right">
                        <Link className="btn__primary" to="/">Оформить покупки</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart