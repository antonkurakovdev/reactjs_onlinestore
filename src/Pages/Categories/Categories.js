import React, { useEffect, useState } from "react";
import "./categories.scss"
import ProductItemGrid from "./components/ProductItemGrid";
import ProductItemShortList from "./components/ProductItemShortList";

function Categories(){
    const itemsPerPage = 12
    let [products, setProducts] = useState([])
    let [limit, setLimit] = useState(itemsPerPage)
    let [skip, setSkip] = useState(0)
    let [displayType, setDisplayType] = useState(1)
    const [total, setTotal] = useState()
    const [pagination, setPagination] = useState([])
    const [sorting, setSorting] = useState()

    //событие нажатия на элемент паджинации
    function SwitchPage(pageNumber){
        setSkip(itemsPerPage * pageNumber)
    }
    //событие переключения вида отображения товаров
    function SwitchDisplayType(clickType){
        setDisplayType(clickType)
        if (clickType !== displayType) {
            setDisplayType(clickType)
        }
    }
    //хук получающий список товаров
    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=' + limit + '&skip=' + skip)
        .then(res => res.json())
        .then(json => {
            setProducts(json.products)
            setTotal(json.total)
            setPagination(Array.from(Array(Math.ceil(json.total / itemsPerPage)).keys()))
            console.log(json)
        })
    }, [limit, skip])

    return (
        <div className="catalog">
            <div className="container-width padding-tb-40">
                <div className="catalog__controls">
                    <div className="sortings">
                        <span className="sortings-label">Сортировать по:</span>
                        <select className="sortings-select">
                            <option>Дешевые выше</option>
                            <option>Дорогие выше</option>
                            <option>От А до Я</option>
                            <option>От Я до А</option>
                        </select>
                    </div>
                    <div className="catalog__controls-views">
                        <span className="catalog__controls-views-one" onClick={() => SwitchDisplayType(1)}>Сетка</span>
                        <span className="catalog__controls-views-one" onClick={() => SwitchDisplayType(2)}>Короткий список</span>
                    </div>
                </div>
                <div className={ (displayType == 1) ? 'grid' : 'shortlist'}>
                    { products && products.map((product) => {
                        return (displayType === 1) ? <ProductItemGrid product={product} key={product.id} /> : <ProductItemShortList product={product} key={product.id} /> 
                    })}
                </div>

                <div className="pagination">
                    { pagination.map((page) => {
                        return <span onClick={() => SwitchPage(page)} className="pagination__item" key={page}>{page + 1}</span>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Categories