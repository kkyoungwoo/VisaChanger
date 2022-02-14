import React from 'react'
import {Link} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';
import HeaderTopNews from '../common/header/HeaderTopNews';
import FooterOne from '../common/footer/FooterOne';
import Copyright from '../common/footer/Copyright';
import ServiceOne from '../elements/service/ServiceOne';
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import PortfolioOne from "../elements/portfolio/PortfolioOne";
import Separator from "../elements/separator/Separator";
import TimelineOne from "../elements/timeline/TimelineOne";
import VideoItem from "../elements/video/VideoItem";
import TestimonialThree from "../elements/testimonial/TestimonialThree";
import CalltoActionFive from "../elements/calltoaction/CalltoActionFive";
import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from '../data/blog/BlogList.json';
var BlogListData = BlogClassicData.slice(0, 3);


const PopupData = [
    {
        id: "01",
        image: "./images/bg/bg-image-4.jpg",
        popupLink: [
            'https://www.youtube.com/watch?v=xshEZzpS4CQ',
        ],
    }
]

const HomeDefault = () => {
    
    return (
        <>
            <SEO title="Business Consulting" />
            <main className="page-wrapper">
                <HeaderOne  btnStyle="btn-small round btn-icon" HeaderSTyle="header-transparent" />

                {/* Start Slider Area  */}
                <div className="slider-area slider-style-1 variation-default height-850 bg_image" data-black-overlay="7" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/bg-image-3.jpg)`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-center">
                                    <span className="subtitle">DIGITAL CONSULTING AGENCY</span>
                                    <h1 className="title display-one">Unique Business <span>Consulting</span>.</h1>
                                    <p className="description">We help our clients succeed by creating brand identities, digital experiences, and print materials.</p>
                                    <div className="button-group">
                                        <a className="btn-default btn-medium round btn-icon" target="_blank" href="https://themeforest.net/checkout/from_item/33571911?license=regular">Purchase Now <i className="icon"><FiArrowRight /></i></a>
                                        <Link className="btn-default btn-medium btn-border round btn-icon" to="#">Contact Us <i className="icon"><FiArrowRight /></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}


                {/* Start Service Area  */}
                <div className="rn-service-area rn-section-gapBottom pt--100">
                    <div className="container">
                        <ServiceOne 
                            serviceStyle = "service__style--1 icon-circle-style"
                            textAlign = "text-center"
                            />
                    </div>
                </div>
                {/* End Service Area  */}

                <Separator />
                {/* Start Portfolio Area  */}
                <div className="rwt-portfolio-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Business Projects"
                                    title = "Business Case Studies.!"
                                    description = "We provide company and finance service for <br /> startups and company business."
                                />
                            </div>
                        </div>
                        <PortfolioOne Column="col-lg-4 col-md-6 col-12 mt--30 portfolio"  />
                    </div>
                </div>
                {/* End Portfolio Area  */}

                <Separator />
                {/* Start Timeline Area  */}
                <div className="rwt-timeline-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Working Process"
                                        title = "Business Working Process."
                                        description = "We provide company and finance service for <br /> startups and company business."
                                    />
                            </div>
                        </div>
                        <div className="row mt_dec--20">
                            <div className="col-lg-12">
                                <TimelineOne />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Timeline Area  */}

                {/* Start Video Area  */}
                <div className="rwt-video-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            {PopupData.map((item) => (
                                <div className="col-lg-12" key={item.id}>
                                    <VideoItem galleryItem={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Video Area  */}


                <Separator />

                {/* Start Elements Area  */}
                <div className="rwt-testimonial-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--20">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Client Feedback"
                                    title = "Our Clients Feedback."
                                    description = "We provide company and finance service for <br /> startups and company business."
                                />
                            </div>
                        </div>
                        <TestimonialThree teamStyle="" />
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
                                    title = "Our Latest News."
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
export default HomeDefault

