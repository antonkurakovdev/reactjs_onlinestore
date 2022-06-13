import React, { useEffect, useState } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

function Products(){
    const { id } = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch('https://dummyjson.com/products/' + id)
        .then(res => res.json())
        .then(json => {
            setProduct(json)
            console.log('product', product)
        })
    }, [])

    return (
        <div className="container-width padding-tb-40">
            <div className="product">
                <div className="product__name">{product.title}</div>

                <div className="product__content">
                    <div className="product__image">
                        <img src={product.thumbnail} />
                    </div>
                    <div className="product__right">
                        <div className="product__right-top">
                            <div className="product__rating">
                                <div className="product__rating-value">{product.rating}</div>
                                <div className="product__rating-link">Написать отзыв</div>
                            </div>

                            <div className="product__call">Задать вопрос</div>

                            <div className="product__sku">
                                <span className="product__sku-label">Код:</span>
                                <span className="product__sku-value">I0241GCXF9</span>
                            </div>
                        </div>

                        <div className="product__right-middle">
                            <div className="product__info">
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products