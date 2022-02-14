import React from 'react';
import {Link} from "react-router-dom";
import ProgressbarOne from "../progressbar/ProgressbarOne";
import SectionTitleTwo from "../sectionTitle/SectionTitleTwo";

const AboutSix = () => {
    return (
        <div className="about-style-6 rn-section-gap">
            <div className="plr_md--30 plr_sm--30">
                <div className="wrapper theme-shape">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="thumbnail text-left text-lg-center">
                                <img src="./images/about/about-logo.png" alt="About images" />
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6 col-12 mt_sm--30">
                            <div className="inner">
                                <span className="theme-gradient subtitle">I have completed 50+ project.</span>
                                <h4 className="color-white maintitle">Have More Projects Complete in My Carreer Life.</h4>
                                <div className="read-more-btn">
                                    <Link className="btn-default btn-border" to="#">View More Projects</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row row--15">
                    <div className="col-lg-12">
                        <div className="rbt-progress-style-1 mt--60">
                            <SectionTitleTwo
                                Title= "My Working Experience."
                                textAlign= "text-left mb--40"
                            />
                            <ProgressbarOne />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSix
