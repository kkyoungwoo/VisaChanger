import React from "react";
import SEO from "../common/SEO";
import {Link} from "react-router-dom";

import HeaderTopNews from '../common/header/HeaderTopNews';
import HeaderOne from '../common/header/HeaderOne';
import FooterTwo from '../common/footer/FooterTwo';
import Copyright from '../common/footer/Copyright';
import Slider from "react-slick";
import { BannerActivation } from "../utils/script";
import Separator from "../elements/separator/Separator";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import ServiceOne from '../elements/service/ServiceOne';
import AboutFour from '../elements/about/AboutFour';
import GalleryOne from "../elements/gallery/GalleryOne";
import TestimonialThree from "../elements/testimonial/TestimonialThree";
import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from '../data/blog/BlogList.json';
var BlogListData = BlogClassicData.slice(0, 3);

const BannerData = [
    {
        image: "/images/bg/bg-image-7.jpg",
        title: "Summer Season.",
        description: "We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials."
    },
    {
        image: "/images/bg/bg-image-8.jpg",
        title: "Winter Season.",
        description: "We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials."
    },
    {
        image: "/images/bg/bg-image-9.jpg",
        title: "Travel Agency.",
        description: "We help our clients succeed by creating brand identities, <br />  digital experiences, and print materials."
    },
]


const PopupData = [
    {
        id: "01",
        image: "./images/portfolio/portfolio-01.jpg",
        popupLink: [
            './images/portfolio/portfolio-01.jpg',
            'https://www.youtube.com/watch?v=xshEZzpS4CQ',
            './images/portfolio/portfolio-03.jpg',
            './images/portfolio/portfolio-04.jpg',
            'https://www.youtube.com/watch?v=xshEZzpS4CQ',
            './images/portfolio/portfolio-05.jpg',
        ],
    },
    {
        id: "02",
        image: "./images/portfolio/portfolio-02.jpg",
        popupLink: [
            'https://www.youtube.com/watch?v=xshEZzpS4CQ',
        ],
    },
    {
        id: "03",
        image: "./images/portfolio/portfolio-03.jpg",
        popupLink: [
            './images/portfolio/portfolio-03.jpg',
        ],
    },
    {
        id: "04",
        image: "./images/portfolio/portfolio-04.jpg",
        popupLink: [
            './images/portfolio/portfolio-04.jpg',
        ],
    },
    {
        id: "05",
        image: "./images/portfolio/portfolio-04.jpg",
        popupLink: [
            'https://www.youtube.com/watch?v=xshEZzpS4CQ',
        ],
    },
    {
        id: "06",
        image: "./images/portfolio/portfolio-05.jpg",
        popupLink: [
            './images/portfolio/portfolio-05.jpg',
        ],
    },
]

const TravelAgency = () => {
    return (
        <>
            <SEO title="Travel Agency" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small" HeaderSTyle="header-transparent" />
                
                {/* Start Slider Area  */}
                <Slider className="slider-area slider-style-4 slider-dot rn-slick-dot rn-slick-arrow" {...BannerActivation}>
                    {BannerData.map((data, index) => (
                        <div key={index} className="single-slide">
                            <div className="height-950 bg_image" data-black-overlay="5" style={{backgroundImage: `url(${process.env.PUBLIC_URL} ${data.image})`}}>
                                <div className="container">
                                    <div className="row row--30 align-items-center">
                                        <div className="col-12">
                                            <div className="inner text-center">
                                                <h1 className="title" dangerouslySetInnerHTML={{__html: data.title}}></h1>
                                                <p className="description" dangerouslySetInnerHTML={{__html: data.description}}></p>
                                                <div className="button-group mt--30">
                                                    <Link className="btn-default" to="#">PURCHASE NOW</Link>
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
                
                <AboutFour image="./images/about/contact-image.jpg" />

                {/* Start Elements Area  */}
                <div className="rwt-gallery-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row mt_dec--30 row--15">
                            {PopupData.map((item) => (
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30" key={item.id}>
                                    <GalleryOne galleryItem={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Elements Area  */}


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
                                    title = "Blogs On Travellings."
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

export default TravelAgency;
