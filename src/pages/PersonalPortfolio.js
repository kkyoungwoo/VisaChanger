import React from 'react';
import {Link} from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';
import FooterTwo from '../common/footer/FooterTwo';
import Copyright from '../common/footer/Copyright';
import AboutFive from '../elements/about/AboutFive';
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import PortfolioOne from "../elements/portfolio/PortfolioOne";
import TestimonialOne from "../elements/testimonial/TestimonialOne";
import Separator from "../elements/separator/Separator";
import ProgressbarTwo from "../elements/progressbar/ProgressbarTwo";
import BrandFour from "../elements/brand/BrandFour";
import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from '../data/blog/BlogList.json';
var BlogListData = BlogClassicData.slice(0, 3);


const PersonalPortfolio = () => {
    return (
        <>
            <SEO title="Personal Portfolio" />
            <main className="page-wrapper">
                
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-transparent" />

                {/* Start Slider Area  */}
                <div className="slider-perosonal-portfolio height-750 bg_image" data-black-overlay="1" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/bg-image-11.jpg)`}}>
                    <div className="container">
                        <div className="row row--30 align-items-center">
                            <div className="col-12">
                                <div className="inner text-center">
                                    <h1 className="title">Hey! I'm <br /> <span className="theme-gradient">Jonnin Arra</span></h1>
                                    <div className="button-group mt--30">
                                        <Link className="btn-default round btn-border btn-large" to="#">Contact Me</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                <AboutFive />

                {/* Start Brand Area  */}
                <div className="rwt-brand-area pb--90 mt_dec--30">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <BrandFour brandStyle="brand-style-2 variation-2" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area  */}


                {/* Start Portfolio Area  */}
                <div className="rwt-portfolio-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Project"
                                    title = "Check My Recent Works!"
                                    description = "We provide company and finance service for <br /> startups and company business."
                                />
                            </div>
                        </div>
                        <PortfolioOne Column="col-lg-4 col-md-6 col-12 mt--30 portfolio"  />
                    </div>
                </div>
                {/* End Portfolio Area  */}


                <Separator />
                {/* Start Elements Area  */}
                <div className="rwt-about-area rn-section-gap">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <SectionTitle
                                    textAlign = "text-left"
                                    radiusRounded = ""
                                    subtitle = "See my All Skill."
                                    title = "My Working Skill"
                                    description = "We provide company and finance service for <br /> startups and company business."
                                />
                            </div>
                            <div className="col-lg-6">
                                <div className="rbt-progress-style-1">
                                    <ProgressbarTwo />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                {/* End Elements Area  */}


                <Separator />
                {/* Start Elements Area  */}
                <div className="rwt-testimonial-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mb--10">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Client Feedback"
                                    title = "Awesome Clients Feedback."
                                    description = "We provide company and finance service for <br /> startups and company business."
                                />
                            </div>
                        </div>
                        <TestimonialOne column="col-lg-4 col-md-6 col-12 mt--30" teamStyle="card-style-default testimonial-style-one" />
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
                                    title = "Read from the Blog."
                                    description = "We provide company and finance service for <br /> startups and company business."
                                />
                            </div>
                        </div>
                        <div className="row row--15">
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
export default PersonalPortfolio;