import PropTypes from "prop-types";
import React from 'react';

const Logo = ({image, image2}) => {
    return(
        <div className="logo">
            <a href={process.env.PUBLIC_URL + "/"}>
                <img className="logo-light" src={process.env.PUBLIC_URL + image} alt="Corporate Logo" />
                <img className="logo-dark" src={process.env.PUBLIC_URL + image2} alt="Corporate Logo" />
            </a>
        </div>
    )
}
Logo.propTypes = {
    image: PropTypes.string
};

export default Logo;
