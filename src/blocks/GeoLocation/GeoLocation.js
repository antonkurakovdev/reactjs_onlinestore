import React from "react";
import './GeoLocation.scss'

function GeoLocation(){
    return (
        <div className="location">
            <div className="location__icon"><i className="fa-solid fa-location-arrow"></i></div>
            <div className="location__value">Москва</div>
        </div>
    )
}

export default GeoLocation