import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function MiniСomparison(){
    const { products } = useSelector((state) => state.comparison)

    useEffect(() => {
        if (localStorage.getItem('comparison')){
            const json = JSON.stringify(products);
            localStorage.setItem('comparison', json)
        }
    }, [products])
    return (
        <div className="compare-mini dropdown-box">
            <div className="compare-mini__title dropdown-box__title">
                <div className="compare-mini__count dropdown-box__count">{products.length}</div>
                <i className="fa-solid fa-chart-simple"></i>
            </div>
            <div className="dropdown-box__content">
                { products.length === 0 && 
                    <div className="dropdown-box__empty">
                        <div className="dropdown-box__empty-text">Ваш список сравнения пуст</div>
                    </div>
                }   

                <div className="dropdown-box__content-wrapper">
                    { products.length > 0 && products.map((product) => {
                        return (
                            <div className="dropdown-box__element" key={product.id}>
                                <div className="dropdown-box__element-image">
                                    <Link to={"/products/" + product.id} ><img src={product.thumbnail} /></Link>
                                </div>
                                <div className="dropdown-box__element-content">
                                    <div className="dropdown-box__element-name">
                                        <Link className="cart__content-name" to={"/products/" + product.id} >{product.title}</Link>                             
                                    </div>
                                    <div className="dropdown-box__element-price">{product.amount} x {product.price} руб.</div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                { products.length > 0 && 
                    <div className="dropdown-box__buttons">
                        <div className="dropdown-box__buttons-full">
                            <Link className="btn btn__primary" to="/comparison">К списку сравнения</Link>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default MiniСomparison