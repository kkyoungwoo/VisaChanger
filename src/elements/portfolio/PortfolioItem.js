import React from 'react';
import {Link} from "react-router-dom";

const PortfolioItem = ({ portfolio }) => {
    return (
        <div className="rwt-card" style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <Link to={process.env.PUBLIC_URL + `/employmentvisa/${portfolio.id}`} className="visa_cards_data">
                {portfolio.title}
            </Link>
        </div>
    )
}
export default PortfolioItem;