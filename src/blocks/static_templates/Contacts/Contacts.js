import React from "react";
import { Link } from "react-router-dom";
import './Contacts.scss'

function Contacts( { title }){
    return (
        <div className="contacts">
            { title && 
                (<div className="contacts__title">{title}</div>)
            }
            <div className="contacts__wrap">
                <div className="contacts__one">г. Москва, ул. Мира, д. 1</div>
                <div className="contacts__one">
                    <a className="contacts__phone" href="tel:+78005551515">+7(800)555-15-15 (звонок бесплатный)</a>
                </div>
                <div className="contacts__one">
                    <a className="contacts__phone" href="tel:+74955550505">+7(495)555-05-05</a>
                </div>
                <div className="contacts__one">Пн-Вс 9.00 - 18.00</div>
                <div className="contacts__one ">
                    <a className="contacts__link" href="mailto:admin@admin.net">admin@admin.net</a>
                </div>
                <div className="contacts__one">
                    <Link className="contacts__link" to="/contacts">Посмотреть на карте</Link>
                </div>
            </div>
        </div>
    )
}

export default Contacts