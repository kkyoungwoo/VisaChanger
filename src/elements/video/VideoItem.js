import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { FiPlay, FiZoomIn , FiFolderPlus} from "react-icons/fi";



function VideoItem({galleryItem}) {
    const { popupLink } = galleryItem;
    const iconHandel = () => {
        if (popupLink) {
            if (popupLink.length > 1) {
                if (popupLink.toString().match(/youtube/g)) {
                    return <FiFolderPlus />;
                }
                return <FiFolderPlus />;
              } else if (popupLink.toString().match(/youtube/g)) {
                return <FiPlay />;
              } else {
                return <FiZoomIn />;
            }
        }
        else {
            return <FiZoomIn />;
        }
    }
    const [toggler, setToggler] = useState(false);
    return (
        <div className="rn-gallery icon-center video-gallery-content bg_image" data-black-overlay="7" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/bg-image-4.jpg)`}}>
            <div className="overlay-content">
                <button className="btn-default rounded-player sm-size" onClick={ () => setToggler(!toggler) }><span>{iconHandel()}</span></button>
                <h3 className="title">Watch the creative process behind <br /> the digital marketing.</h3>
            </div>
            <div className="video-lightbox-wrapper">
                <FsLightbox 
                toggler={ toggler } 
                sources={popupLink} />
            </div>
        </div>
    )
}
export default VideoItem;