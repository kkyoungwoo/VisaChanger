import React from 'react';
import {Link} from "react-router-dom";

const CopyrightTwo = () => {
    return (
        <div className="copyright-area copyright-style-one variation-two">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-7 col-sm-12 col-12">
                        <div className="copyright-left">
                            <ul className="ft-menu link-hover">
                                <li><a target="_blank" href="http://pf.kakao.com/_qiXpxj" rel="noopener noreferrer">문의</a></li>
                            </ul>
                        </div>
                    </div>
                    {/*<div className="col-lg-4 col-md-5 mt_sm--20">
                        <div className="copyright-center text-center">
                            <ul className="social-icon social-default color-lessdark justify-content-center">
                                <li><Link to="facebook.com"><FiFacebook /></Link></li>
                                <li><Link to="twitter.com"><FiTwitter /></Link></li>
                                <li><Link to="instagram.com"><FiInstagram /></Link></li>
                                <li><Link to="linkdin.com"><FiLinkedin /></Link></li>
                            </ul>
                        </div>
                    </div>*/}
                </div>
            </div>
        </div>
    )
}
export default CopyrightTwo;