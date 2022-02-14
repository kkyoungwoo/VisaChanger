import React from 'react';
import {Link} from "react-router-dom";
import CalltoActionSeven from "../../elements/calltoaction/CalltoActionSeven";
import footerOne from "../../data/footer/footerOne.json";
import ScrollTop from "./ScrollTop";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import Logo from "../../elements/logo/Logo";

const footerIntem =  footerOne[0];
const footerIntemOne =  footerOne[1];
const footerIntemTwo =  footerOne[2];
const footerIntemThree =  footerOne[3];
const footerIntemFour =  footerOne[4];
const footerIntemFive =  footerOne[5];
const footerIntemSix =  footerOne[6];
const footerIntemSeven = footerOne[7];

const indexOneLink = (footerIntemOne.quicklink);
const indexTwoLink = (footerIntemTwo.quicklink);
const indexThreeLink = (footerIntemThree.quicklink);
const indexFourLink = (footerIntemFour.quicklink);
const indexFiveLink = (footerIntemFive.quicklink);
const indexSixLink = (footerIntemSix.quicklink);
const indexSevenLink = (footerIntemSeven.quicklink);

const FooterTwo = () => {
    return (
        <>
            <footer className="rn-footer footer-style-default variation-two">
                <CalltoActionSeven />
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            {/* Start Single Widget  */}
                            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <div className="logo">
                                        <Logo 
                                            image={`${process.env.PUBLIC_URL}/images/logo/logo.png`}
                                            image2={`${process.env.PUBLIC_URL}/images/logo/logo-dark.png`}
                                        />
                                    </div>
                                    <h3 className="text-big">{footerIntem.title}</h3>
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
                            {/* End Single Widget  */}

                            {/* Start Single Widget  */}
                            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <div className="widget-menu-top">
                                        <h4 className="title">{footerIntemOne.title}</h4>
                                        <div className="inner">
                                            <ul className="footer-link link-hover">
                                                {indexOneLink.map((data, index) => (
                                                    <li key={index}><Link to={`${data.url}`}>{data.text}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="widget-menu-bottom">
                                        <h4 className="title">{footerIntemTwo.title}</h4>
                                        <div className="inner">
                                            <ul className="footer-link link-hover">
                                                {indexTwoLink.map((data, index) => (
                                                    <li key={index}><Link to={`${data.url}`}>{data.text}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>
                            {/* End Single Widget  */}

                            {/* Start Single Widget  */}
                            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <div className="widget-menu-top">
                                        <h4 className="title">{footerIntemFour.title}</h4>
                                        <div className="inner">
                                            <ul className="footer-link link-hover">
                                                {indexFourLink.map((data, index) => (
                                                    <li key={index}><Link to={`${data.url}`}>{data.text}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="widget-menu-bottom">
                                        <h4 className="title">{footerIntemFive.title}</h4>
                                        <div className="inner">
                                            <ul className="footer-link link-hover">
                                                {indexFiveLink.map((data, index) => (
                                                    <li key={index}><Link to={`${data.url}`}>{data.text}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>
                            {/* End Single Widget  */}

                            {/* Start Single Widget  */}
                            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    
                                    <div className="widget-menu-top">
                                        <h4 className="title">{footerIntemSix.title}</h4>
                                        <div className="inner">
                                            <ul className="footer-link link-hover">
                                                {indexSixLink.map((data, index) => (
                                                    <li key={index}><Link to={`${data.url}`}>{data.text}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Widget  */}

                            {/* Start Single Widget  */}
                            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <div className="widget-menu-top">
                                        <h4 className="title">{footerIntemThree.title}</h4>
                                        <div className="inner">
                                            <ul className="footer-link link-hover">
                                                {indexThreeLink.map((data, index) => (
                                                    <li key={index}><Link to={`${data.url}`}>{data.text}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Widget  */}

                            {/* Start Single Widget  */}
                            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    
                                    <div className="widget-menu-top">
                                        <h4 className="title">{footerIntemSeven.title}</h4>
                                        <div className="inner">
                                            <ul className="footer-link link-hover">
                                                {indexSevenLink.map((data, index) => (
                                                    <li key={index}><Link to={`${data.url}`}>{data.text}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Widget  */}

                        </div>
                    </div>
                </div>
            </footer>
            <ScrollTop />
        </>
    )
}

export default FooterTwo;
