import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import Select from 'react-select'

import "./Category.scss"
import ProductItemGrid from "./components/ProductItemGrid";
import ProductItemShortList from "./components/ProductItemShortList";
import { getProducts, switchProductsDisplayType } from "../../redux/actions";



const Category = () => {
    const dispatch = useDispatch()
    const category = useSelector((state) => {
        return state.category
    })
    const itemsPerPage = 12
    const total = category.total
    const pagination = Array.from(Array(Math.ceil(total / itemsPerPage)).keys())
    const skip = 0

    console.log('category render >>', category)
    // const [sorting, setSorting] = useState()

    //событие нажатия на элемент паджинации
    const SwitchPage = (pageNumber) => {
        dispatch(getProducts(itemsPerPage, itemsPerPage * pageNumber))
    }
    //событие переключения вида отображения товаров
    const SwitchDisplayType = (clickType) => {
        if (category.displayType !== clickType) {
            dispatch(switchProductsDisplayType(clickType))
        }
    }
    //хук получающий список товаров
    useEffect(() => {
        dispatch(getProducts(itemsPerPage, skip))
    }, [itemsPerPage, skip])

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
                <div className={ (category.displayType == 1) ? 'grid' : 'shortlist'}>
                    { category.products && category.products.map((product) => {
                        return (category.displayType === 1) ? <ProductItemGrid product={product} key={product.id} /> : <ProductItemShortList product={product} key={product.id} /> 
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

export default Category