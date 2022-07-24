import React from "react";

import './TopPanel.scss'
import Menu from "../../blocks/Menu/Menu";
import GeoLocation from "../../blocks/GeoLocation/GeoLocation";
import Currencies from "../../blocks/Currencies/Currencies";
import Languages from "../../blocks/Languages/Languages";

function TopPanel(){
    const quickLinks = [
        { id: 1, name: "Главная", href: "/" },
        { id: 2, name: "Каталог", href: "/categories" },
        { id: 3, name: "Товар", href: "/products/1" },
        { id: 5, name: "Корзина", href: "/cart" },
        { id: 6, name: "Оформление заказа", href: "/checkout" },
        { id: 7, name: "Информация", href: "#", subitems: [ { id: 8, name: "Информация 1", href: "#" }, { id: 9, name: "Информация 2", href: "#" }, { id: 10, name: "Информация 3", href: "#" }]}
    ]

    return (
        <div className="toppanel">
            <div className="container-width">
                <GeoLocation />
                <Menu items={quickLinks} />
                <Currencies />
                <Languages />
            </div>
        </div>
    )
}

export default TopPanel