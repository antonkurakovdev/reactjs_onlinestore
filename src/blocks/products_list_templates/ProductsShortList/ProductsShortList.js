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
                        <Link to={"products/" + product.id}>{product.title}</Link>
                    </div>
                    <div className="shortlist__item-rating">
                        {product.rating}
                    </div>
                    <div className="shortlist__item-stock">
                        <span>В наличии:</span>
                        <span>{product.stock}</span>
                    </div>
                </div>

                <div className="shortlist__item-controls">
                    <div className="shortlist__item-price">
                        {product.price}
                    </div>
                    <div className="shortlist__item-addtocart">Купить</div>
                    <div className="shortlist__item-addtowishlist">Добавить в желаемое</div>
                    <div className="shortlist__item-addtocompare">Добавить в сравнение</div>
                </div>
            </div>
        </div>
    )
}

export default ProductsShortList