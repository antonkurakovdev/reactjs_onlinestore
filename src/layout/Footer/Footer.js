import React from "react";

import Contacts from "../../blocks/static_templates/Contacts/Contacts";
import Copyright from "../../blocks/static_templates/Copyright/Copyright";
import Menu from "../../blocks/Menu/Menu";
import PaymentIcons from "../../blocks/static_templates/PaymentIcons/PaymentIcons";
import './Footer.scss'

function Footer(){
    const section1 = [
        { id: 1, name: "Войти", href: "/" }, 
        { id: 2, name: "Создать учетную запись", href: "/" },
    ]
    const section2 = [
        { id: 1, name: "О нас", href: "/" }, 
        { id: 2, name: "Обратная связь", href: "/" },
        { id: 3, name: "Подарочные сертификаты", href: "/" }, 
        { id: 4, name: "Торговые марки", href: "/" },
        { id: 5, name: "Карта сайта", href: "/" }, 
        { id: 6, name: "Блог", href: "/" },
    ]
    const section3 = [
        { id: 1, name: "Ваши заказы", href: "/" }, 
        { id: 2, name: "Отложенные", href: "/" },
        { id: 3, name: "Список сравнения", href: "/" },
    ]

    return (
        <div className="footer">
            <div className="footer__menu container-width">
                <div className="footer__section">
                    <Menu items={section1} title="Моя учётная запись" />
                </div>
                <div className="footer__section">
                    <Menu items={section2} title="Демо-магазин" />
                </div>
                <div className="footer__section">
                    <Menu items={section3} title="Покупательский сервис" />
                </div>
                <div className="footer__section">
                    <Contacts title={"Контакты"} />
                </div>
            </div>

            <div className="footer__bottom container-width">
                <div className="footer__copyright"><Copyright/></div>
                <div className="footer__payment-icons"><PaymentIcons/></div>
            </div>
        </div>
    )
}

export default Footer