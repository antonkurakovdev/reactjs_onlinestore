
import React from "react"

import './PaymentIcons.scss'

function PaymentIcons(){
    return (
        <div className="payment-icons">
            <div className="payment-icons__one">
                <i class="fa-brands fa-cc-mastercard"></i>
            </div>
            <div className="payment-icons__one">
                <i class="fa-brands fa-cc-paypal"></i>
            </div>
            <div className="payment-icons__one">
                <i class="fa-brands fa-cc-visa"></i>
            </div>
            <div className="payment-icons__one">
                <i class="fa-brands fa-cc-stripe"></i>
            </div>
        </div>
    )
}
export default PaymentIcons