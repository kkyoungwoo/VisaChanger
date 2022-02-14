import React from 'react';
import { FiArrowRight } from "react-icons/fi";

const callToActionData = {
    title: "Ready to start creating a standard website?",
    subtitle: "Finest choice for your home & office",
    btnText: "Purchase Doob",
}

const CalltoActionTwo = () => {
    return (
        <div className="rn-callto-action clltoaction-style-default style-2 bg_image bg_image_fixed"  style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/bg-image-1.jpg)`}} data-black-overlay="8">
            <div className="container">
                <div className="row row--30 align-items-center">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="inner">
                            <div className="content text-center">
                                <h2 className="title mb--0">{callToActionData.title}</h2>
                                <p>We help our clients succeed by creating brand identities, digital experiences, and print materials that communicate clearly.</p>
                                <div className="call-to-btn text-center">
                                    <a className="btn-default btn-icon" href="#">{callToActionData.btnText} <i className="icon"><FiArrowRight /></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CalltoActionTwo;