import React from "react";
import {
    Link
  } from "react-router-dom";

import { useDispatch } from "react-redux";

import "./ProductsGridList.scss"

import { addToCart, updateProductAmount } from "../../../redux/actions";

function ProductsGridList({ product }){
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
        <div className="grid__item">
            <div className="grid__item-wrap">
                <div className="grid__item-image">
                    <Link to={"products/" + product.id}><img alt="" src={product.thumbnail} /></Link>
                    <div className="grid__item-buttons">
                        <div className="grid__item-button grid__item-addtowishlist"><i className="fa-regular fa-heart"></i></div>
                        <div className="grid__item-button grid__item-addtocompare"><i className="fa-solid fa-chart-simple"></i></div>
                    </div>
                </div>
                <div className="grid__item-name">
                    <Link className="grid__item-name-a" to={"products/" + product.id}>{product.title}</Link>
                </div>
                <div className="grid__item-rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                    <i className="fa-regular fa-star"></i>
                    <div className="grid__item-rating-value">
                        ({product.rating})
                    </div>
                </div>
                <div className={'grid__item-stock ' + ((product.stock > 0) ? 'grid__item-stock_active' : '')}>
                    <i className={'fa-regular ' + ((product.stock > 0) ? 'fa-circle-check' : 'fa-circle-xmark')}></i>
                    <span className='grid__item-stock-label'>В наличии:</span>
                    <span className='grid__item-stock-value'>{product.stock} шт.</span>
                </div>

                <div className="grid__item-control">
                    <div className="grid__item-price">
                        {product.price} руб.
                    </div>
                    <div className="grid__item-control-right">
                        <div onClick={onClickAdd} className="grid__item-add_to_cart">
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
                </div>
            </div>
        </div>
    )
}

export default ProductsGridList