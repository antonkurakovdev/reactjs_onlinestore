import React from "react"
import { Link } from "react-router-dom"

import './Breadcrumbs.scss'

function Breadcrumbs({ breadcrumbs }){
    return (
        <div className="breadcrumbs">
            <Link className="breadcrumbs__link" to="/">Home</Link>
            <span className="breadcrumbs__divider">/</span>
            <Link className="breadcrumbs__link" to="/catalog">Catalog</Link>
            <span className="breadcrumbs__divider">/</span>
            <span className="breadcrumbs__active">Category</span>
        </div>
    )
}

export default Breadcrumbs