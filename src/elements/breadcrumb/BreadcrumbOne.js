import React from 'react';
import {Link} from "react-router-dom";

const BreadcrumbOne = ({ title , rootUrl , parentUrl, currentUrl}) => {
    return (
        <div className="breadcrumb-area breadcarumb-style-1 ptb--120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb-inner text-center">
                            <h1 className="title theme-gradient h2" dangerouslySetInnerHTML={{__html: title}}></h1>
                            <ul className="page-list">
                                <li className="rn-breadcrumb-item"><Link to={`${rootUrl}`} dangerouslySetInnerHTML={{__html: parentUrl}}></Link></li>
                                <li className="rn-breadcrumb-item active" dangerouslySetInnerHTML={{__html: currentUrl}}></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreadcrumbOne;