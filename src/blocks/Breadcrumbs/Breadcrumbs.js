import React from "react"
import { Link } from "react-router-dom"

import './Breadcrumbs.scss'

function Breadcrumbs({ breadcrumbs }){
    return (
        <div className="breadcrumbs">
            { breadcrumbs.map((br) => {
                let breadcrumbHtml = ""
                if (br.last){
                    breadcrumbHtml = <span className="breadcrumbs__active">{br.name}</span>
                }else{
                    breadcrumbHtml = <Link className="breadcrumbs__link" to={br.link}>{br.name}</Link>
                }
                return (
                    <React.Fragment key={br.id}>
                        {breadcrumbHtml}
                        { !br.last &&
                            <span className="breadcrumbs__divider">/</span>
                        }
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default Breadcrumbs