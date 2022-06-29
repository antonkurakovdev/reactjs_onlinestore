import React from "react";
import Select from 'react-select'

function Languages(){
    const languages = [
        { value: 'EN', label: 'English' },
        { value: 'RU', label: 'Русский' }
    ]

    return <Select options={languages} defaultValue={{ value: 'RU', label: 'Русский' }} />
}

export default Languages