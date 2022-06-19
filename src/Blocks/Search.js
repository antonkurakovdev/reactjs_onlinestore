import React from "react";

function Search(){
    return (
        <div className="search">

            <input className="search__input" type="text" placeholder="Введите поисковой запрос.." />
            <button className="search__button">
                <i className="fa-solid fa-search"></i>
            </button>
        </div>
    )
}

export default Search