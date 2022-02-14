import React from 'react';
import { FiPhone, FiMapPin, FiFile } from "react-icons/fi";


const AboutFive = () => {
    return (
        <div className="about-style-5 rn-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="row row--0 about-wrapper align-items-center theme-shape">
                            <div className="col-lg-6">
                                <div className="thumbnail">
                                    <img src="./images/about/about-5.png" alt="About Images" />
                                </div>
                            </div>
                            <div className="col-lg-6 mt_md--30 mt_sm--30">
                                <div className="content">
                                    <div className="inner">
                                        <h4 className="title">I'm Web Dedeloper</h4>
                                        <p>Web designer and developer working for envato.com in Paris, France.</p>
                                        <ul className="contact-address">
                                            <li><FiFile /> Web designer & developer</li>
                                            <li><FiPhone /> +01916395965</li>
                                            <li><FiMapPin /> Dhaka, Bangladesh</li>
                                        </ul>
                                        <div className="download-button mt--20">
                                            <a className="btn-read-more" href="#"><span>Download My CV</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutFive;