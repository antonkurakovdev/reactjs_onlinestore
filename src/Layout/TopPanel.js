import React from "react";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     useParams
//   } from "react-router-dom";

import Menu from "../Blocks/Menu/Menu";
import GeoLocation from "../Blocks/GeoLocation";
import Currencies from "../Blocks/Currencies";
import Languages from "../Blocks/Languages";

function TopPanel(){
    const quickLinks = [
        { id: 1, name: "Подарочные сертификаты", href: "#" }, 
        { id: 2, name: "Доставка и оплата", href: "#" },
        { id: 3, name: "Возврат", href: "#" },
        { id: 5, name: "Пункты самовывоза", href: "#" },
        { id: 6, name: "Контакты", href: "#" },
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