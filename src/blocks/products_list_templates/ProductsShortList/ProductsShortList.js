import React from "react";
import {
    Link,
  } from "react-router-dom";

import "./ProductsShortList.scss"

function ProductsShortList({ product }){
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
                    <div className="shortlist__item-add_to_cart"><i className="fa-solid fa-cart-shopping"></i></div>
                    <div className="shortlist__item-add_to_wishlist"><i class="fa-regular fa-heart"></i></div>
                    <div className="shortlist__item-add_to_compare"><i className="fa-solid fa-chart-simple"></i></div>
                </div>
            </div>
        </div>
    )
}

export default ProductsShortList