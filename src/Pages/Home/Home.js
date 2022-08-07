import React from "react"

import Banners from "../../blocks/Banners/Banners"

const Home = () => {
    const banners = [{
      id: 1,
      image: "",
      backgroundImage: "https://unitheme.net/images/ab__webp/abt__ut2/banners/all/13/macbook-banner-01_jpg.webp",
      title: "Title 1",
      description: "Description 1",
      btn: {
        link: "",
        text: "",
        fontColor: "",
        backgroundColor: "" 
      }
    },
    {
        id: 2,
        image: "",
        backgroundImage: "https://unitheme.net/images/ab__webp/abt__ut2/banners/all/13/macbook-banner-01_jpg.webp",
        title: "Title 2",
        description: "Description 2",
        btn: {
          link: "",
          text: "",
          fontColor: "",
          backgroundColor: "" 
        }
    }]
    return (
        <div className="home">
            <div className="container-full-width">
                <Banners banners={banners} />
            </div>
            <div className="container-width"></div>
        </div>
    )
}

export default Home