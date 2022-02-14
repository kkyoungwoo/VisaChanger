import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

const callToActionData = {
    title: "높은 성공률",
    subtitle: "누구나 비자를 신청할 수 있지만, 모든 사람이 비자를 발급받는 것은 아닙니다."
}

const CalltoActionOne = () => {
    return (
        <div className="rn-callto-action clltoaction-style-default bg_image bg_image_fixed"  style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/bg-image-1.jpg)`}} data-black-overlay="7">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="inner">
                            <div className="content text-center">
                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <h2 className="title">{callToActionData.title}</h2>
                                </ScrollAnimation>

                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <h6 className="subtitle">{callToActionData.subtitle}</h6>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CalltoActionOne;