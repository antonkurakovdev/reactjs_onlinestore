import React from "react";
import {
    Link
  } from "react-router-dom";

import { useDispatch } from "react-redux";

import "./ProductsGridList.scss"

import { updateProductAmount } from "../../../redux/actions/categoryActions";
import { addToCart, removeFromCart } from "../../../redux/actions/cartActions";
import { addToWishlist, removeFromWishlist } from "../../../redux/actions/wishlistActions";
import { addToCompare, removeFromCompare } from "../../../redux/actions/compareActions";

function ProductsGridList({ product, cart, wishlist, compare }){
    const dispatch = useDispatch()

    if (!product.amount){
        product.amount = 1;
    }
    
    const onClickAddToCart = () => {
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
    const onClickAddToWishlist = () =>{
        const item = {
            id: product.id,
            title: product.title,
            thumbnail: product.thumbnail,
            price: product.price,
            amount: product.amount,
            brand: product.brand,
            category: product.category
        }
        dispatch(addToWishlist(item))
    }
    const onClickRemoveFromWishlist = () =>{
        dispatch(removeFromWishlist(product))
    }
    const onClickAddToCompare = () =>{
        const item = {
            id: product.id,
            title: product.title,
            thumbnail: product.thumbnail,
            price: product.price,
            amount: product.amount,
            brand: product.brand,
            category: product.category
        }
        dispatch(addToCompare(item))
    }
    const onClickRemoveFromCompare = () =>{
        dispatch(removeFromCompare(product))
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

    let wishlistLink, compareLink;
    if (wishlist.products.some((item) => item.id === product.id)){
        wishlistLink = <div onClick={onClickRemoveFromWishlist} className="grid__item-button grid__item-add_to_wishlist"><i className="fa-solid fa-heart"></i></div>
    }else{
        wishlistLink = <div onClick={onClickAddToWishlist} className="grid__item-button grid__item-add_to_wishlist"><i className="fa-regular fa-heart"></i></div>
    }
    if (compare.products.some((item) => item.id === product.id)){
        compareLink = <div onClick={onClickRemoveFromCompare} className="grid__item-button grid__item-add_to_compare added"><i className="fa-solid fa-chart-simple"></i></div>
    }else{
        compareLink = <div onClick={onClickAddToCompare} className="grid__item-button grid__item-add_to_compare"><i className="fa-solid fa-chart-simple"></i></div>
    }

    return (
        <div className="grid__item">
            <div className="grid__item-wrap">
                <div className="grid__item-image">
                    <Link to={"products/" + product.id}><img alt="" src={product.thumbnail} /></Link>
                    <div className="grid__item-buttons">
                        {wishlistLink}
                        {compareLink}
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
                        <div onClick={onClickAddToCart} className="grid__item-add_to_cart">
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