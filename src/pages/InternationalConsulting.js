import React from 'react';
import {Link} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';
import TabThree from '../elements/tab/TabThree';
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import SlipFour from "../elements/split/SlipFour";
import SlpitOne from "../elements/split/SlpitOne";
import AdvancePricingOne from "../elements/advancePricing/AdvancePricingOne";
import FooterTwo from '../common/footer/FooterTwo';
import Copyright from '../common/footer/Copyright';
import Separator from "../elements/separator/Separator";
import PortfolioOne from "../elements/portfolio/PortfolioOne";

import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from '../data/blog/BlogList.json';
var BlogListData = BlogClassicData.slice(0, 3);


const InternationalConsulting = () => {
    return (
        <>
            <SEO title="International Consulting" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small" HeaderSTyle="header-not-transparent" />

                {/* Start Slider Area  */}
                <div className="slider-area slider-style-1 variation-default height-850 bg_image" data-black-overlay="7" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/bg-image-18.jpg)`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-center">
                                    <h1 className="title display-one">International <br /> <span className="theme-gradient">Business</span> & <span className="theme-gradient">Consulting</span>.</h1>
                                    <p className="description">We help our clients succeed by creating brand identities, digital experiences, and print materials.</p>
                                    <div className="button-group">
                                        <Link className="btn-default btn-medium btn-icon" to="#">Purchase Now <i className="icon"><FiArrowRight /></i></Link>
                                        <Link className="btn-default btn-medium btn-border btn-icon" to="#">Contact Us <i className="icon"><FiArrowRight /></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                {/* Start Elements Area  */}
                <div className="rwt-tab-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--40">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Business Stratagy"
                                    title = "Our Business Stratagy Here."
                                    description = ""
                                />
                            </div>
                        </div>
                        <TabThree />
                    </div>
                </div>
                {/* End Elements Area  */}


                {/* Start Elements Area  */}
                <div className="rwt-split-area no-radius">
                    <div className="wrapper">
                        <SlpitOne />
                    </div>
                </div>
                {/* End Elements Area  */}

                {/* Start Elements Area  */}
                <div className="rwt-split-area">
                    <div className="wrapper">
                        <SlipFour />
                    </div>
                </div>
                {/* End Elements Area  */}


                <div className="main-content">
                    <div className="rwt-elements-area rn-section-gap">
                        <div className="container-fluid plr--30">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Portfolio Box Layout"
                                        title = "Happily Clients Complete <br /> Our Business Project!"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <PortfolioOne Column="col-lg-4 col-md-6 mt--30 box-grid-layout no-overlay" />
                        </div>
                    </div>
                </div>
                
                <Separator />
                {/* Start Elements Area  */}
                <div className="rwt-pricingtable-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Our Pricing Table"
                                    title = "Business Pricing Plan."
                                    description = ""
                                />
                            </div>
                        </div>
                        <div className="row mt--40">
                            <div className="col-lg-8 offset-lg-2">
                                <AdvancePricingOne />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Elements Area  */}

                <Separator />
                <div className="blog-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Latests News"
                                    title = "Latest News From The Digital World."
                                    description = ""
                                />
                            </div>
                        </div>
                        <div className="row row--15 mt--10">
                            {BlogListData.map((item) => (
                                <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 col-12 mt--30">
                                    <BlogList StyleVar="box-card-style-default" data={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div> 


                <FooterTwo />
                <Copyright />
            </main>
        </>
    )
}

export default InternationalConsulting
