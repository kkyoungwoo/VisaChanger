import React from 'react';
import {Link} from "react-router-dom";
import { FiArrowRight , FiPlay } from "react-icons/fi";
import ScrollAnimation from "react-animate-on-scroll";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import Separator from "../separator/Separator";


const Button = () => {
    return (
        <>
            <SEO title="Button || Doob - React Business  Template" />
            <Layout>
                <BreadcrumbOne 
                title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
                rootUrl="/"
                parentUrl="Home"
                currentUrl="Button"
                />
                <div className="main-content">
                    {/* Start Elements Area  */}
                    <div className="rwt-button-area rn-section-gap">
                        <div className="container">
                            <div className="row row--30">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <SectionTitle
                                        textAlign = "text-left"
                                        radiusRounded = ""
                                        subtitle = "Easily switchable"
                                        title = "Button Sizes"
                                        description = ""
                                    />

                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group">
                                        <Link className="btn-default btn-small" to="#">Button Solid</Link>
                                    </ScrollAnimation>


                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group mt--20">
                                        <Link className="btn-default" to="#">Button Solid</Link>
                                    </ScrollAnimation>

                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group mt--20">
                                        <Link className="btn-default btn-large" to="#">Button Solid</Link>
                                    </ScrollAnimation>

                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group mt--20">
                                        <Link className="btn-default btn-extra-large" to="#">Button Solid</Link>
                                    </ScrollAnimation>

                                </div>

                                <div className="col-lg-6 col-md-6 col-12 mt_sm--40">
                                    <SectionTitle
                                        textAlign = "text-left"
                                        radiusRounded = ""
                                        subtitle = "Include borders"
                                        title = "Outlined Buttons"
                                        description = ""
                                    />

                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group">
                                        <Link className="btn-default btn-small btn-border" to="#">Button Outlined</Link>
                                    </ScrollAnimation>
                            


                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group mt--20">
                                        <Link className="btn-default btn-border" to="#">Button Outlined</Link>
                                    </ScrollAnimation>
                                

                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group mt--20">
                                        <Link className="btn-default btn-large btn-border" to="#">Button Outlined</Link>
                                    </ScrollAnimation>
                                

                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group mt--20">
                                        <Link className="btn-default btn-extra-large btn-border" to="#">Button Outlined</Link>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    <Separator />

                    {/* Start Elements Area  */}
                    <div className="rwt-button-area rn-section-gap">
                        <div className="container">
                            <div className="row row--30">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <SectionTitle
                                        textAlign = "text-left"
                                        radiusRounded = ""
                                        subtitle = "Easily switchable icon"
                                        title = "Button Icon"
                                        description = ""
                                    />

                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group">
                                        <Link className="btn-default btn-small btn-icon" to="#">Button Solid <i className="icon"><FiArrowRight /></i></Link>
                                    </ScrollAnimation>
                            

                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group mt--20">
                                        <Link className="btn-default btn-icon" to="#">Button Solid <i className="icon"><FiArrowRight /></i></Link>
                                    </ScrollAnimation>
                        

                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group mt--20">
                                        <Link className="btn-default btn-large btn-icon" to="#">Button Solid <i className="icon"><FiArrowRight /></i></Link>
                                    </ScrollAnimation>
                            

                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group mt--20">
                                        <Link className="btn-default btn-extra-large btn-icon" to="#">Button Solid <i className="icon"><FiArrowRight /></i></Link>
                                    </ScrollAnimation>
                                </div>

                                <div className="col-lg-6 col-md-6 col-12 mt_sm--40">
                                    <SectionTitle
                                        textAlign = "text-left"
                                        radiusRounded = ""
                                        subtitle = "Include Icon"
                                        title = "Outlined Buttons"
                                        description = ""
                                    />
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group">
                                        <Link className="btn-default btn-small btn-border btn-icon" to="#">Button Outlined <i className="icon"><FiArrowRight /></i></Link>
                                    </ScrollAnimation>
                        
                        

                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group mt--20">
                                        <Link className="btn-default btn-border btn-icon" to="#">Button Outlined <i className="icon"><FiArrowRight /></i></Link>
                                    </ScrollAnimation>
                            

                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group mt--20">
                                        <Link className="btn-default btn-large btn-border btn-icon" to="#">Button Outlined <i className="icon"><FiArrowRight /></i></Link>
                                    </ScrollAnimation>
                            

                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group mt--20">
                                        <Link className="btn-default btn-extra-large btn-border btn-icon" to="#">Button Outlined <i className="icon"><FiArrowRight /></i></Link>
                                    </ScrollAnimation>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    <Separator />

                    {/* Start Elements Area  */}
                    <div className="rwt-button-area rn-section-gap">
                        <div className="container">
                            <div className="row row--30">
                                <div className="col-lg-12 col-md-6 col-12">
                                    <SectionTitle
                                        textAlign = "text-left"
                                        radiusRounded = ""
                                        subtitle = "Button Extra"
                                        title = "Button Variation"
                                        description = ""
                                    />

                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group">
                                        <Link className="btn-default text-underline" to="#"><span>View More</span></Link>
                                        <Link className="btn-read-more" to="#"><span>View More</span></Link>
                                        <Link className="btn-default round" to="#"><span>View More</span></Link>
                                        <Link className="btn-default square" to="#"><span>View More</span></Link>
                                        <Link className="btn-default rounded-player" to="#"><span><FiPlay /></span></Link>
                                        <Link className="btn-default rounded-player btn-border" to="#"><span><FiPlay /></span></Link>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Elements Area  */}

                </div>
            </Layout>
        </>
    )
}
export default Button;
