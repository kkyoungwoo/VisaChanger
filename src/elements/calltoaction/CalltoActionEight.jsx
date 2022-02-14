import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import {Link} from "react-router-dom";

const callToActionData = {
    title: "온라인 상담 신청",
    subtitle: "쉽고 빠르게 상담을 진행하세요",
    btnText: "문의",
}

const CalltoActionEight = () => {
    return (
        <div className="rn-callto-action rn-call-to-action style-8 content-wrapper">
            <div className="container">
                <div className="row row--0 align-items-center ">
                    <div className="col-lg-12">
                        <div className="inner">
                            <div className="content text-center">
                                <h2 className="title">{callToActionData.title}</h2>
                                <h6 className="subtitle">{callToActionData.subtitle}</h6>
                                <div className="call-to-btn text-center mt--30">
                                    <Link className="btn-default btn-icon" to="/form">{callToActionData.btnText} <i className="icon"><FiArrowRight /></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CalltoActionEight;