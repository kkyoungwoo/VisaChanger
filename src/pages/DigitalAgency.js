import React from 'react'
import SEO from "../common/SEO";
import {Link} from "react-router-dom";
import HeaderOne from '../common/header/HeaderOne';
import FooterFour from '../common/footer/FooterFour';

import Slider from "react-slick";
import { BannerActivation } from "../utils/script";
import Separator from "../elements/separator/Separator";
import ServiceFive from '../elements/service/ServiceFive';
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import PortfolioOne from "../elements/portfolio/PortfolioOne";
import CircleProgress from "../elements/progressbar/CircleProgress";
import TestimonialOne from "../elements/testimonial/TestimonialOne";
import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from '../data/blog/BlogList.json';
var BlogListData = BlogClassicData.slice(0, 3);



const BannerData = [
    {
        image: "/images/bg/bg-image-6.jpg",
        title: "Digital Agency.",
        description: "We help our clients succeed by creating brand identities, digital experiences, and print materials."
    },
    {
        image: "/images/bg/bg-image-14.jpg",
        title: "Creative Agency.",
        description: "We help our clients succeed by creating brand identities, digital experiences, and print materials."
    },
    {
        image: "/images/bg/bg-image-15.jpg",
        title: "Startup Agency.",
        description: "We help our clients succeed by creating brand identities, digital experiences, and print materials."
    },
]


const DigitalAgency = () => {
    return (
        <>
            <SEO title="Digital Agency" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small" HeaderSTyle="header-not-transparent" />

                {/* Start Slider Area  */}
                <Slider className="slider-area slider-style-4 slider-dot rn-slick-dot rn-slick-arrow" {...BannerActivation}>
                    {BannerData.map((data, index) => (
                        <div key={index} className="single-slide">
                            <div className="height-950 bg-overlay bg_image" style={{backgroundImage: `url(${process.env.PUBLIC_URL} ${data.image})`}}>
                                <div className="container">
                                    <div className="row row--30 align-items-center">
                                        <div className="order-2 order-lg-1 col-lg-7">
                                            <div className="inner text-left">
                                                <h1 className="title" dangerouslySetInnerHTML={{__html: data.title}}></h1>
                                                <p className="description" dangerouslySetInnerHTML={{__html: data.description}}></p>
                                                <div className="button-group mt--30">
                                                    <a className="btn-default" target="_blank" href="https://themeforest.net/checkout/from_item/33571911?license=regular">PURCHASE NOW</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                {/* End Slider Area  */}


                {/* Start Service Area  */}
                <div className="rn-service-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "About Our Company."
                                    title = "Services provide for you."
                                    description = "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                    />
                            </div>
                        </div>
                        <ServiceFive 
                            serviceStyle = "gallery-style"
                            textAlign = "text-left"
                        />
                    </div>
                </div>
                {/* End Service Area  */}

                <Separator />
                <div className="rwt-portfolio-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Why Choose Us"
                                        title = "Companies Choose us!"
                                        description = "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                    />
                            </div>
                        </div>
                        <PortfolioOne Column="col-lg-6 col-md-6 col-sm-6 col-12 mt--30 portfolio no-overlay"  />
                    </div>
                </div>

                <Separator />            
                <div className="rwt-progressbar-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--25">
                            <div className="col-lg-10 offset-lg-1">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Our Expertise."
                                    title = "Compnanies Expertise."
                                    description = "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                />
                            </div>
                        </div>
                        <div className="col-lg-10 offset-lg-1">
                            <CircleProgress />
                        </div>
                    </div>
                </div>


                <Separator />            
                {/* Start Testimonial Area  */}
                <div className="rwt-testimonial-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Client Feedback"
                                        title = "What People Are Saying."
                                        description = "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                    />
                            </div>
                        </div>
                        <TestimonialOne column="col-lg-4 col-md-6 col-sm-6 col-12 mt--30" teamStyle="card-style-default testimonial-style-one style-two" />
                    </div>
                </div>
                {/* End Testimonial Area  */}

                <Separator />          
                <div className="blog-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Get The Latest News"
                                    title = "What Our Trending News."
                                    description = "We provide company and finance service for <br /> startups and company business."
                                />
                            </div>
                        </div>
                        <div className="row row--15">
                            {BlogListData.map((item) => (
                                <div key={item.id} className="col-lg-4 col-md-6 col-12 mt--30">
                                    <BlogList StyleVar="box-card-style-default" data={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <FooterFour />
            </main>
        </>
    )
}
export default DigitalAgency;