import React from 'react';
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';
import HeaderTopNews from '../common/header/HeaderTopNews';
import FooterTwo from '../common/footer/FooterTwo';
import Copyright from '../common/footer/Copyright';
import { FiArrowRight } from "react-icons/fi";
import Separator from "../elements/separator/Separator";
import TimelineTwo from "../elements/timeline/TimelineTwo";
import AboutTwo from "../elements/about/AboutTwo";
import CalltoActionSix from "../elements/calltoaction/CalltoActionSix";
import PricingFive from "../elements/pricing/PricingFive";
import BrandOne from "../elements/brand/BrandOne";
import SectionTitle from "../elements/sectionTitle/SectionTitle";


const SeoAgency = () => {
    return (
        <>
            <SEO title="SEO Agency" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small btn-icon" HeaderSTyle="header-transparent" />

                {/* Start Slider Area  */}
                <div className="slider-area slider-style-6 shape-right height-750">
                    <div className="container">
                        <div className="row row--30 align-items-center">
                            <div className="order-2 order-lg-1 col-lg-6 mt_md--50 mt_sm--50 mt_lg--30">
                                <div className="inner text-left">
                                    <h1 className="title color-white">Trending <br />Business</h1>
                                    <p className="description color-white">We help our clients succeed by creating brand identities, digital experiences, and print materials.</p>
                                    <div className="button-group mt--30 mt_sm--20">
                                        <a className="btn-default btn-medium btn-icon btn-border" target="_blank" href="https://themeforest.net/checkout/from_item/33571911?license=regular">Purchase Now <i className="icon"><FiArrowRight /></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 order-1 order-lg-2">
                                <div className="thumbnail">
                                    <img src="./images/banner/banenr-image-02.png" alt="Banner Images" />
                                </div>
                            </div>
                            <div className="shape-image">
                                <img src="./images/banner/white-shape.svg" alt="Banner Images" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}
                <CalltoActionSix />

                <Separator />
                <div className="rwt-timeline-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Timeline"
                                        title = "Working Process."
                                    />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 mt--50">
                                <TimelineTwo classVar="" />
                            </div>
                        </div>
                    </div>
                </div>

                <Separator />
                <AboutTwo />
                
                <Separator />
                {/* Start Elements Area  */}
                <div className="rwt-pricing-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Take a Pricing"
                                        title = "Our Pricing Plan."
                                        description = ""
                                    />
                            </div>
                        </div>
                        <PricingFive />
                    </div>
                </div>
                {/* End Elements Area  */}

                <Separator />
                {/* Start Brand Area  */}
                <div className="rwt-brand-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Our Awesome Client"
                                    title = "Our Awesome Clients."
                                    description = ""
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 mt--40">
                                <BrandOne brandStyle="brand-style-1" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area  */}

                <FooterTwo />
                <Copyright />
            </main>
        </>
    )
}

export default SeoAgency
