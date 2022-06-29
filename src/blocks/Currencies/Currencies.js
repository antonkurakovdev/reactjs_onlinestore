import React from "react";
import Select from 'react-select'

function Currencies(){
    const currencies = [
        { value: 'USD', label: '$' },
        { value: 'RUB', label: '₽' },
        { value: 'EUR', label: '€' },
        { value: 'GBP', label: '£' }
    ]

    return <Select options={currencies} defaultValue={{ value: 'RUB', label: '₽' }} />
}

export default Currencies