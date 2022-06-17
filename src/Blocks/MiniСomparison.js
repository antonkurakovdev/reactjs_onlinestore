import React from "react";

function Search(){
    return (
        <div className="search">

            <input type="text" placeholder="Введите поисковой запрос.." />
            <button>
                <i className="fa-solid fa-search"></i>
            </button>
        </div>
    )
}

export default Search