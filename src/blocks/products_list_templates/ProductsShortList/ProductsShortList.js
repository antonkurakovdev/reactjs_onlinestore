import React from "react";
import {
    Link,
  } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./ProductsShortList.scss"

import { updateProductAmount } from "../../../redux/actions/categoryActions";
import { addToCart, updateCartTotal, removeFromCart } from "../../../redux/actions/cartActions";
import { addToWishlist, removeFromWishlist } from "../../../redux/actions/wishlistActions";
import { addToCompare, removeFromCompare } from "../../../redux/actions/compareActions";

function ProductsShortList({ product, cart, wishlist, compare }){
    const dispatch = useDispatch()
    if (!product.amount){
        product.amount = 1;
    }
    const productInCart = cart.products.filter(item => item.id === product.id)[0]
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
        dispatch(updateCartTotal())
    }
    const onClickRemoveFromCart = () => {
        dispatch(removeFromCart(product.id))
        dispatch(updateCartTotal())
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
        dispatch(removeFromWishlist(product.id))
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
        dispatch(removeFromCompare(product.id))
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

    let addToCartButton, wishlistLink, compareLink;
    if (cart.products.some((item) => item.id === product.id)){
        addToCartButton = <div onClick={onClickRemoveFromCart} className="shortlist__item-add_to_cart remove" title="Удалить из корзины"><i className="fa-solid fa-cart-shopping"></i><span className="count">{productInCart.amount}</span></div>
    }else{
        addToCartButton = <div onClick={onClickAddToCart} className="shortlist__item-add_to_cart" title="Добавить в корзину"><i className="fa-solid fa-cart-shopping"></i></div>
    }
    if (wishlist.products.some((item) => item.id === product.id)){
        wishlistLink = <div onClick={onClickRemoveFromWishlist} className="shortlist__item-add_to_wishlist" title="Удалить из желаемого"><i className="fa-solid fa-heart"></i></div>
    }else{
        wishlistLink = <div onClick={onClickAddToWishlist} className="shortlist__item-add_to_wishlist" title="Добавить в желаемое"><i className="fa-regular fa-heart"></i></div>
    }
    if (compare.products.some((item) => item.id === product.id)){
        compareLink = <div onClick={onClickRemoveFromCompare} className="shortlist__item-add_to_compare added" title="Удалить из сравнения"><i className="fa-solid fa-chart-simple"></i></div>
    }else{
        compareLink = <div onClick={onClickAddToCompare} className="shortlist__item-add_to_compare" title="Добавить в сравнение"><i className="fa-solid fa-chart-simple"></i></div>
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
                        {addToCartButton}
                        <div className="qty">
                            <div className="qty__wrapper">
                                <span onClick={onClickDecreaseAmount} className="qty__decrease"><i className="fa-solid fa-minus"></i></span>
                                <input onChange={onChangeAmount} className="qty__input" type="text" value={product.amount} />
                                <span onClick={onClickIncreaseAmount} className="qty__increase"><i className="fa-solid fa-plus"></i></span>
                            </div>
                        </div>
                    </div>
                    {wishlistLink}
                    {compareLink}
                </div>
            </div>
        </div>
    )
}

export default ProductsShortList