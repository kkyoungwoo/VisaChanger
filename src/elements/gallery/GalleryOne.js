import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { FiPlay, FiZoomIn , FiFolderPlus} from "react-icons/fi";

function GalleryOne({galleryItem}) {
    const { image, popupLink } = galleryItem;
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
        <div className="rn-gallery icon-center">
            <div className="thumbnail">
                <img className="radius-small" src={`${image}`} alt="Corporate Image" />
            </div>
            <div className="video-icon">
                <button className="btn-default rounded-player sm-size" onClick={ () => setToggler(!toggler) }><span>{iconHandel()}</span></button>
            </div>
            <FsLightbox 
            toggler={ toggler } 
            sources={popupLink} />
        </div>
    )
}
export default GalleryOne;