import React, { useEffect, useState } from "react";
import {connect, useDispatch, useSelector} from 'react-redux'
import Select from 'react-select'
import { getProducts } from "../../redux/actions";

import "./categories.scss"
import ProductItemGrid from "./components/ProductItemGrid";
import ProductItemShortList from "./components/ProductItemShortList";



const Categories = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => {
        console.log('state', state.category.products);
        return state.category.products
    })
    const itemsPerPage = 12
    // let [products, setProducts] = useState([])
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
        // fetch('https://dummyjson.com/products?limit=' + limit + '&skip=' + skip)
        // .then(res => res.json())
        // .then(json => {
        //     setProducts(json.products)
        //     setTotal(json.total)
        //     setPagination(Array.from(Array(Math.ceil(json.total / itemsPerPage)).keys()))
        //     console.log(json)
        // })
        dispatch(getProducts())
    }, [limit, skip])


    const sortings = [
        { value: 'PRICEASC', label: 'Дешевые выше' },
        { value: 'PRICEDESC', label: 'Дорогие выше' },
        { value: 'SYMBOLASC', label: 'От А до Я' },
        { value: 'SYMBOLDESC', label: 'От Я до А' }
    ]

    return (
        <div className="catalog">
            <div className="container-width padding-tb-40">
                <div className="catalog__controls">
                    <div className="sortings">
                        <span className="sortings-label">Сортировать по:</span>
                        <Select className="sortings-select" options={sortings} defaultValue={{ value: 'PRICEASC', label: 'Дешевые выше' }} />
                    </div>
                    <div className="catalog__controls-views">
                        <span className="catalog__controls-views-one" onClick={() => SwitchDisplayType(1)}>
                            <i className="fa-solid fa-grip-lines"></i>
                        </span>
                        <span className="catalog__controls-views-one" onClick={() => SwitchDisplayType(2)}>
                            <i className="fa-solid fa-grip-lines"></i>
                        </span>
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

const mapStateToProps = state => {
    console.log(state)
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(Categories)