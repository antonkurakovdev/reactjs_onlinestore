import React from "react";

function Menu({ items }){
    console.log(items)
    return (
        <div className="menu">
            <ul className="menu__ul">
                {items.map(item => {
                    return <li className="menu__li" key={item.id}><a className="menu__a" href={item.link}>{item.name}</a></li>
                })}
            </ul>
        </div>
    )
}

export default Menu