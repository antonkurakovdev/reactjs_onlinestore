import React from "react";

function CallRequest(){
    return (
        <div className="call">
            <div className="call__icon"><i class="fa-solid fa-mobile-screen"></i></div>
            <div className="call__content">
                <a className="call__phone" href="tel:88005553535">
                    <span className="call__phone-gray">+8(800)</span>
                    <span className="call__phone-black">555-35-35</span>
                </a>
                <a className="call__link">Заказать обратный звонок</a>
            </div>
        </div>
    )
}

export default CallRequest