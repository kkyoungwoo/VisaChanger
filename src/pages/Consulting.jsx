import React from 'react'
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';
import HeaderTopBar from '../common/header/HeaderTopBar';
import AboutFour from '../elements/about/AboutFour';
import TabTwo from '../elements/tab/TabThree';

import CounterUpOne from '../elements/counterup/CounterUpOne';
import CalltoActionFive from '../elements/calltoaction/CalltoActionFive';
import TeamFour from '../elements/team/TeamFour';
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import Separator from "../elements/separator/Separator";
import FooterOne from '../common/footer/FooterOne';
import Copyright from '../common/footer/Copyright';

import CalltoActionOne from "../elements/calltoaction/CalltoActionOne";
import ScrollAnimation from "react-animate-on-scroll"


const Consulting = () => {
    return (
        <>
            <SEO title="Consulting" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small" HeaderSTyle="header-transparent" />

                {/* Start Slider area  */}
                <div className="slider-area slider-style-2 variation-2  height-850 bg_image" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/main_bg.png)`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-xl-6">
                                <div className="inner text-left">
                                    <h6 className="title display-one">
                                        <ScrollAnimation 
                                            animateIn="fadeInUp"
                                            animateOut="fadeInOut"
                                            animateOnce={true}>
                                                <span style={{color:"#059DFF"}}>외국인</span>을 위한<br/><strong style={{color:"#059DFF"}}>서류 대행</strong>부터<br/><strong style={{color:"#059DFF"}}>비자 발급</strong>까지
                                            </ScrollAnimation>
                                    </h6>
                                    <h6 className="tag-title">The best solution for visa issuance</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider area  */}

                <AboutFour image="./images/about/contact-image.jpg" />

                {/* Start Elements Area  */}
                <div className="rwt-counterup-area rn-section-gapBottom mt_dec--30">
                    <div className="container">
                        <CounterUpOne column="col-lg-3 col-md-6 col-sm-6 col-12" counterStyle="counter-style-4" textALign="text-center" />   
                    </div>
                </div>
                {/* End Elements Area  */}


                <Separator />

                {/* Start Elements Area  */}
                <div className="rwt-advance-tab-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--40">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Consulting Report"
                                    title = "해결된 사례의 요약"
                                    description = ""
                                />
                            </div>
                        </div>
                        <TabTwo />
                    </div>
                </div>
                {/* End Elements Area  */}


                <Separator />


                {/* Start Elements Area  */}
                <div className="rwt-callto-action-area rn-section-gapBottom">
                    <div className="wrapper">
                        <CalltoActionFive />
                    </div>
                </div>
                {/* End Elements Area  */}

                <FooterOne />
                <Copyright />
            </main>

        </>
    )
}

export default Consulting
