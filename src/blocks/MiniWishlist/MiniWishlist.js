import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


function MiniWishlist(){
    const { products } = useSelector((state) => state.wishlist)
   
    useEffect(() => {
        const json = JSON.stringify(products);
        localStorage.setItem('wishlist', json)
    }, [products])
    return (
        <div className="wishlist-mini dropdown-box">
            <div className="dropdown-box__title">
                <div className="wishlist-mini__count dropdown-box__count">{products.length}</div>
                <i className="fa-solid fa-heart"></i>
            </div>

            <div className="dropdown-box__content">
                { products.length === 0 && 
                    <div className="dropdown-box__empty">
                        <div className="dropdown-box__empty-text">Ваш список желаемого пуст</div>
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
                            <Link className="btn btn__primary" to="/wishlist">К списку желаемого</Link>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default MiniWishlist