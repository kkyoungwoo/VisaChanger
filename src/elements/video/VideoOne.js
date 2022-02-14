import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { FiPlay } from "react-icons/fi";

const PopupContent =  {
    image: "./images/portfolio/portfolio-04.jpg",
    popupLink: [ "https://www.youtube.com/watch?v=xshEZzpS4CQ"],
}



function VideoOne() {
    const [toggler, setToggler] = useState(false);
    return (
        <div className="row row--15">
            <div className="col-lg-6 col-md-6 col-12 mt--30">
                <div className="video-popup icon-center">
                    <div className="thumbnail">
                        <img className="radius-small" src={`${PopupContent.image}`} alt="Corporate Image" />
                    </div>
                    <div className="video-icon">
                        <button className="btn-default rounded-player" onClick={ () => setToggler(!toggler) }><span><FiPlay /></span></button>
                    </div>
                    <FsLightbox toggler={ toggler } sources={PopupContent.popupLink} />
                </div>
            </div>  

            <div className="col-lg-6 col-md-6 col-12 mt--30">
                <div className="video-popup icon-center">
                    <div className="thumbnail">
                        <img className="radius-small" src={`${PopupContent.image}`} alt="Corporate Image" />
                    </div>
                    <div className="video-icon">
                        <button className="btn-default rounded-player" onClick={ () => setToggler(!toggler) }><span><FiPlay /></span></button>
                    </div>
                    <FsLightbox toggler={ toggler } sources={PopupContent.popupLink} />
                </div>
            </div> 
        </div>
    )
}
export default VideoOne;