import React from "react"
import {
    Link,
  } from "react-router-dom"

import './Menu.scss'

function Menu({ items, title, type }){
    return (
        <div className={"menu " + type}>
            { title &&
                (<div className="menu__title">{title}</div>)
            }
            <ul className="menu__ul">
                {items.map(item => {
                    return <li className="menu__li" key={item.id}><Link className="menu__a" to={item.href}>{item.name}</Link></li>
                })}
            </ul>
        </div>
    )
}

export default Menu