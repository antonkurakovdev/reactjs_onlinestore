import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import Select from 'react-select'

import "./Category.scss"
import { getProducts, switchProductsDisplayType } from "../../redux/actions";
import Breadcrumbs from "../../blocks/Breadcrumbs/Breadcrumbs";
import Menu from "../../blocks/Menu/Menu";
import ProductsGridList from "../../blocks/products_list_templates/ProductsGridList/ProductsGridList";
import ProductsShortList from "../../blocks/products_list_templates/ProductsShortList/ProductsShortList";



const Category = () => {
    const dispatch = useDispatch()
    const category = useSelector((state) => {
        return state.category
    })

    const sideMenu = [
        { id: 1, name: "Компьютеры", href: "/category/1" },
        { id: 2, name: "Автоэлектроника", href: "/category/2" },
        { id: 3, name: "Телевизоры и видео", href: "/category/3" },
        { id: 4, name: "Телефоны", href: "/category/4" },
        { id: 5, name: "MP3 плееры", href: "/category/5" },
        { id: 6, name: "Фото видео", href: "/category/6" },
        { id: 7, name: "Игровые приставки", href: "/category/7" },
    ]

    const breadcrumbs = [
        { id: 1, name: "Главная", link: "/" },
        { id: 2, name: "Каталог", link: "/catalog" },
        { id: 3, name: "Категория", last: true }
    ]

    //количество товаров на странице
    const itemsPerPage = 12
    //генерация элементов паджинации
    const pagination = Array.from(Array(Math.ceil(category.total / itemsPerPage)).keys())
    const skip = 0

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
                <h1 className="catalog__title">{category.category_name}</h1>
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <div className="catalog__wrapper">
                    <div className="catalog__side">
                        <Menu items={sideMenu} type="vertical" />
                    </div>
                    
                    <div className="catalog__content">
                        <div className="catalog__controls">
                            <div className="sortings">
                                <span className="sortings-label">Сортировать по:</span>
                                <Select className="sortings-select" options={sortings} defaultValue={category.sortType} />
                            </div>
                            <div className="catalog__controls-views">
                                <span className={"catalog__controls-views-one grid " + (category.displayType === 1 ? "catalog__controls-views-one_active" : "")} onClick={() => SwitchDisplayType(1)}> 
                                    <span className="wrap">
                                        <span className="dot first"></span>  
                                        <span className="dot second"></span>  
                                        <span className="dot third"></span>  
                                        <span className="dot fourth"></span>                        
                                    </span>
                                </span>
                                <span className={"catalog__controls-views-one short " + (category.displayType === 2 ? "catalog__controls-views-one_active" : "")} onClick={() => SwitchDisplayType(2)}>
                                    <span className="wrap">
                                        <span className="line first"></span>  
                                        <span className="line second"></span>  
                                        <span className="line third"></span>                                      
                                    </span>
                                </span>
                            </div>
                        </div>

                        <div className={ (category.displayType === 1) ? 'grid' : 'shortlist'}>
                            { category.products && category.products.map((product) => {
                                return (category.displayType === 1) ? <ProductsGridList product={product} key={product.id} /> : <ProductsShortList product={product} key={product.id} /> 
                            })}
                        </div>

                        <div className="pagination">
                            { pagination.map((page) => {
                                return <span onClick={() => SwitchPage(page)} className="pagination__item" key={page}>{page + 1}</span>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category