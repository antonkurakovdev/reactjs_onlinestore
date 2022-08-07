import React from "react"
import Slider from "react-slick";

import "./Banners.scss"
import BannersItem from "./components/BannersItem";

const Banners = ({ banners }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div className="banners">
            <Slider {...settings}>
                {banners.map( banner => {
                    return <BannersItem banner={banner} key={banner.id} />
                })}
            </Slider>
        </div>
    )
}

export default Banners

