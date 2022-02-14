import React from 'react';
import SEO from "../common/SEO";
import {Link} from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import HeaderTopBar from '../common/header/HeaderTopBar';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import Copyright from '../common/footer/Copyright';
import ServiceTwo from '../elements/service/ServiceTwo';
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import AboutTwo from "../elements/about/AboutTwo";
import CounterUpTwo from "../elements/counterup/CounterUpTwo";

import Separator from "../elements/separator/Separator";
import TeamFour from '../elements/team/TeamFour';
import PricingTwo from '../elements/pricing/PricingTwo';
import CalltoActionFive from '../elements/calltoaction/CalltoActionFive';


const Corporate = () => {
    return (
        <>
            <SEO title="Corporate" />
            <main className="page-wrapper">
                
                <div className="header-transparent-with-topbar">
                    <HeaderOne btnStyle="btn-small btn-icon" HeaderSTyle="header-not-transparent" />
                </div>

                {/* Start Slider area  */}
                <div className="slider-area slider-style-2 height-950 bg_image" data-black-overlay="2" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/bg-image-5.jpg)`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-left">
                                    <h4 className="subtitle"><span className="theme-gradient">DIGITAL CONSULTING AGENCY</span></h4>
                                    <h1 className="title display-one">Join Corporate Meeting.</h1>
                                    <ul className="list-icon">
                                        <li><span className="icon"><FiCheck /></span> Track your teams progress with mobile app.</li>
                                        <li><span className="icon"><FiCheck /></span> Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                                        <li><span className="icon"><FiCheck /></span> Your teams progress with mobile app.</li>
                                    </ul>
                                    <div className="button-group mt--40 mt_sm--20">
                                        <button className="btn-default btn-icon" target="_blank" href="https://themeforest.net/checkout/from_item/33571911?license=regular">Purchase Now <i className="icon"><FiArrowRight /></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider area  */}


                {/* Start Service Area  */}
                <div className="rn-service-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "What we can do for you"
                                    title = "Services provide for you."
                                    description = "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                    />
                            </div>
                        </div>
                        <ServiceTwo 
                            cardStyle = "card-style-1"
                            textAlign = "text-left"
                            />
                    </div>
                </div>
                {/* End Service Area  */}

                <Separator />

                <AboutTwo />

                <Separator />
                {/* Start Elements Area  */}
                <div className="rwt-counterup-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Clients Feedback."
                                    title = "Global Clients Around the World."
                                    description = ""
                                />
                            </div>
                        </div>
                        <CounterUpTwo column="col-lg-4 col-md-6 col-sm-6 col-12" counterStyle="counter-style-2" textALign="text-center" />     
                    </div>
                </div>
                {/* End Elements Area  */}

                <Separator />
                {/* Start Elements Area  */}
                <div className="rwt-team-area rn-section-gap">
                    <div className="wrapper plr--65 plr_md--15 plr_sm--15">
                        <div className="row mb--20">
                            <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Our Experts."
                                        title = "Our Experts Team"
                                        description = ""
                                    />
                            </div>
                        </div>
                        <TeamFour column="col-lg-6 col-xl-3 col-md-6 col-12 mt--30" teamStyle="team-style-three" />
                    </div>
                </div>
                {/* End Elements Area  */}

                <Separator />
                {/* Start Elements Area  */}
                <div className="rwt-pricing-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--35">
                            <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Pricing"
                                        title = "Our Pricing Plan."
                                        description = ""
                                    />
                            </div>
                        </div>
                        <PricingTwo />
                    </div>
                </div>
                {/* End Elements Area  */}

                {/* Start Call To Action Area  */}
                <div className="rwt-callto-action-area rn-section-gapBottom">
                    <div className="wrapper">
                        <CalltoActionFive />
                    </div>
                </div>
                {/* End Call To Action Area  */}

                <FooterOne />
                <Copyright />
            </main>
        </>
    )
}

export default Corporate
