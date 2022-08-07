import React from "react"

const BannersItem = ({ banner }) => {
    console.log(banner)
    return (
        <div className="banners__item">
            <div className="banners__item-wrap" style={{ backgroundImage: banner.backgroundImage}} >
                
            </div>
        </div>
    )
}

export default BannersItem