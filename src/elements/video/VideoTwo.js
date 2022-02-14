import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { FiPlay, FiZoomIn , FiFolderPlus} from "react-icons/fi";

function VideoTwo({galleryItem , imagename}) {
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
        <>
            <div className="video-popup icon-center">
                <div className="overlay-content">
                    <div className="thumbnail">
                        <img className="radius-small" src={`${imagename}`} alt="Corporate Image" />
                    </div>
                    <div className="video-icon">
                        <button className="btn-default rounded-player" onClick={ () => setToggler(!toggler) }><span>{iconHandel()}</span></button>
                    </div>
                </div>
            </div>
            <div className="video-lightbox-wrapper">
                <FsLightbox 
                toggler={ toggler } 
                sources={popupLink} />
            </div>
        </>
    )
}
export default VideoTwo;