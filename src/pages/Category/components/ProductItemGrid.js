import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function ProductItemGrid({ product }){
    return (
        <div className="grid__item">
            <div className="grid__item-wrap">
                <div className="grid__item-image">
                    <Link to={"products/" + product.id}><img src={product.thumbnail} /></Link>
                </div>
                <div className="grid__item-price">
                    {product.price}
                </div>
                <div className="grid__item-rating">
                    {product.rating}
                </div>
                <div className="grid__item-name">
                    <Link to={"products/" + product.id}>{product.title}</Link>
                </div>
                <div className="grid__item-stock">
                    <span>В наличии:</span>
                    <span>{product.stock}</span>
                </div>

                <div className="grid__item-control">
                    <div className="grid__item-addtocart">Купить</div>
                    <div className="grid__item-addtowishlist">Добавить в желаемое</div>
                    <div className="grid__item-addtocompare">Добавить в сравнение</div>
                </div>
            </div>
        </div>
    )
}

export default ProductItemGrid