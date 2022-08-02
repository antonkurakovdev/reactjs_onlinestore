import React from "react";
import {
    Link,
  } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./ProductsShortList.scss"

import { updateProductAmount } from "../../../redux/actions/categoryActions";
import { addToCart } from "../../../redux/actions/cartActions";

function ProductsShortList({ product }){
    const dispatch = useDispatch()
    const onClickAdd = () => {
        const item = {
            id: product.id,
            title: product.title,
            thumbnail: product.thumbnail,
            price: product.price,
            amount: product.amount,
            brand: product.brand,
            category: product.category
        }
        dispatch(addToCart(item))
    } 
    if (!product.amount){
        product.amount = 1;
    }
    const onClickIncreaseAmount = () => {
        dispatch(updateProductAmount(product.id, product.amount + 1))
    }
    const onClickDecreaseAmount = () => {
        if (product.amount > 1){
            dispatch(updateProductAmount(product.id, product.amount - 1))
        }
    }
    const onChangeAmount = (event) => {
        dispatch(updateProductAmount(product.id, parseInt(event.target.value)))
    }

    return (
        <div className="shortlist__item">
            <div className="shortlist__item-wrap">
                <div className="shortlist__item-image">
                    <Link to={"products/" + product.id}><img src={product.thumbnail} /></Link>
                </div>

                <div className="shortlist__item-content">
                    <div className="shortlist__item-name">
                        <Link className="shortlist__item-name-a" to={"products/" + product.id}>{product.title}</Link>
                    </div>
                    <div className="shortlist__item-rating">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                        <i className="fa-regular fa-star"></i>
                        <div className="shortlist__item-rating-value">
                            ({product.rating})
                        </div>
                    </div>
                    <div className="shortlist__item-code">
                        <span className="shortlist__item-code-label">КОД:</span>
                        <span className="shortlist__item-code-value">AP534523466</span>
                    </div>
                    <div className={'shortlist__item-stock ' + ((product.stock > 0) ? 'shortlist__item-stock_active' : '')}>
                        <i className={'fa-regular ' + ((product.stock > 0) ? 'fa-circle-check' : 'fa-circle-xmark')}></i>
                        <span className='shortlist__item-stock-label'>В наличии:</span>
                        <span className='shortlist__item-stock-value'>{product.stock} шт.</span>
                    </div>
                </div>

                <div className="shortlist__item-controls">
                    <div className="shortlist__item-price">
                        {product.price} руб.
                    </div>
                    <div className="shortlist__item-add_to_cart-wrapper">
                        <div onClick={onClickAdd} className="shortlist__item-add_to_cart">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </div>
                        <div className="qty">
                            <div className="qty__wrapper">
                                <span onClick={onClickDecreaseAmount} className="qty__decrease"><i className="fa-solid fa-minus"></i></span>
                                <input onChange={onChangeAmount} className="qty__input" type="text" value={product.amount} />
                                <span onClick={onClickIncreaseAmount} className="qty__increase"><i className="fa-solid fa-plus"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="shortlist__item-add_to_wishlist"><i className="fa-regular fa-heart"></i></div>
                    <div className="shortlist__item-add_to_compare"><i className="fa-solid fa-chart-simple"></i></div>
                </div>
            </div>
        </div>
    )
}

export default ProductsShortList