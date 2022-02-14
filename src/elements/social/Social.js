import React from 'react';
import {Link} from "react-router-dom";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import Separator from "../separator/Separator";



const Social = () => {
    return (
        <>
            <SEO title="Social Share || Doob - React Business  Template" />
            <Layout>
                <BreadcrumbOne 
                    title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Social Share"
                />
                <div className="main-content">
                    {/* Start Elements Area  */}
                    <div className="rwt-social-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Our Social Share"
                                            title = "You can Customize All."
                                            description = ""
                                        />
                                </div>
                            </div>
                            <div className="row mt--30">
                                <div className="col-lg-12">
                                    <ul className="social-icon social-default">
                                        <li><Link to="facebook.com"><FiFacebook /></Link></li>
                                        <li><Link to="twitter.com"><FiTwitter /></Link></li>
                                        <li><Link to="instagram.com"><FiInstagram /></Link></li>
                                        <li><Link to="linkdin.com"><FiLinkedin /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    <Separator />  


                    {/* Start Elements Area  */}
                    <div className="rwt-social-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Transparent With Border"
                                            title = "Social Share."
                                            description = ""
                                        />
                                </div>
                            </div>

                            <div className="row mt--30">
                                <div className="col-lg-12">
                                    <ul className="social-icon social-default transparent-with-border">
                                        <li><Link to="facebook.com"><FiFacebook /></Link></li>
                                        <li><Link to="twitter.com"><FiTwitter /></Link></li>
                                        <li><Link to="instagram.com"><FiInstagram /></Link></li>
                                        <li><Link to="linkdin.com"><FiLinkedin /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    <Separator />  



                    {/* Start Elements Area  */}
                    <div className="rwt-social-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Gradient Style"
                                            title = "Social Share."
                                            description = ""
                                        />
                                </div>
                            </div>

                            <div className="row mt--30">
                                <div className="col-lg-12">
                                    <ul className="social-icon social-default with-gradient">
                                        <li><Link to="facebook.com"><FiFacebook /></Link></li>
                                        <li><Link to="twitter.com"><FiTwitter /></Link></li>
                                        <li><Link to="instagram.com"><FiInstagram /></Link></li>
                                        <li><Link to="linkdin.com"><FiLinkedin /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    <Separator />  

                    {/* Start Elements Area  */}
                    <div className="rwt-social-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Bg Primary Color"
                                            title = "Social Share."
                                            description = ""
                                        />
                                </div>
                            </div>

                            <div className="row mt--30">
                                <div className="col-lg-12">
                                    <ul className="social-icon social-default with-bg-primary">
                                        <li><Link to="facebook.com"><FiFacebook /></Link></li>
                                        <li><Link to="twitter.com"><FiTwitter /></Link></li>
                                        <li><Link to="instagram.com"><FiInstagram /></Link></li>
                                        <li><Link to="linkdin.com"><FiLinkedin /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    <Separator />  

                    {/* Start Elements Area  */}
                    <div className="rwt-social-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Bg Primary Color"
                                            title = "Social Share."
                                            description = ""
                                        />
                                </div>
                            </div>

                            <div className="row mt--30">
                                <div className="col-lg-12">
                                    <ul className="social-icon social-default icon-naked">
                                        <li><Link to="facebook.com"><FiFacebook /></Link></li>
                                        <li><Link to="twitter.com"><FiTwitter /></Link></li>
                                        <li><Link to="instagram.com"><FiInstagram /></Link></li>
                                        <li><Link to="linkdin.com"><FiLinkedin /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    <Separator />  



                </div>
            </Layout>
        </>
    )
}
export default Social;