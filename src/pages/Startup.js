import React from 'react';
import Slider from "react-slick";
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';
import { BannerActivation } from "../utils/script";
import Separator from "../elements/separator/Separator";
import CircleProgress from "../elements/progressbar/CircleProgress";
import PortfolioOne from "../elements/portfolio/PortfolioOne";
import ServiceFour from "../elements/service/ServiceFour";
import TimelineTwo from "../elements/timeline/TimelineTwo";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import FooterTwo from '../common/footer/FooterTwo';
import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from '../data/blog/BlogList.json';
var BlogListData = BlogClassicData.slice(0, 3);

const BannerData = [
    {
        image: "/images/bg/bg-image-12.jpg",
        title: "Startup Your <br /> Business Agency.",
        description: "We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials."
    },
    {
        image: "/images/bg/bg-image-18.jpg",
        title: "Startup Your <br /> Creative Agency.",
        description: "We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials."
    },
]


const Startup = () => {
    return (
        <>
            <SEO title="Startup Agency" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small btn-icon round" HeaderSTyle="header-transparent" />

                {/* Start Slider Area  */}
                <Slider className="slider-area slider-style-4 variation-2 slider-dot rn-slick-dot rn-slick-arrow" {...BannerActivation}>
                    {BannerData.map((data, index) => (
                        <div key={index} className="single-slide">
                            <div className="height-950 bg-overlay bg_image" style={{backgroundImage: `url(${process.env.PUBLIC_URL} ${data.image})`}}>
                                <div className="container">
                                    <div className="row row--30 align-items-center">
                                        <div className="col-lg-12">
                                            <div className="inner text-center">
                                                <h1 className="title" dangerouslySetInnerHTML={{__html: data.title}}></h1>
                                                <p className="description" dangerouslySetInnerHTML={{__html: data.description}}></p>
                                                <div className="button-group mt--30">
                                                    <a className="btn-default btn-large round" target="_blank" href="https://themeforest.net/checkout/from_item/33571911?license=regular">Get started now</a>
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


                <Separator />
                <div className="rwt-elements-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--25">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Our Experience"
                                    title = "25+ years work Experience"
                                    description = ""
                                />
                            </div>
                        </div>
                        <div className="col-lg-10 offset-lg-1 mt--10">
                            <CircleProgress />
                        </div>
                    </div>
                </div>


                <Separator />
                <div className="rwt-timeline-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Working Process"
                                        title = "Our Working Process."
                                    />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 mt--50">
                                <TimelineTwo classVar="no-gradient"  />
                            </div>
                        </div>
                    </div>
                </div>

                <Separator />
                <div className="rwt-elements-area rn-section-gap">
                    <div className="container-fluid plr--30">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Portfolio"
                                    title = "Our Completed Project!"
                                    description = ""
                                />
                            </div>
                        </div>
                        <PortfolioOne Column="col-lg-4 col-md-6 mt--30 box-grid-layout no-overlay" />
                    </div>
                </div>

                <Separator />
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
                                    description = ""
                                    />
                            </div>
                        </div>
                        <ServiceFour 
                            serviceStyle = "service__style--1 icon-circle-style with-working-process"
                            textAlign = "text-center"
                            />
                    </div>
                </div>
                {/* End Service Area  */}


                

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
                                <div key={item.id} className="col-lg-4 col-md-6 col-12 mt--30">
                                    <BlogList StyleVar="box-card-style-default" data={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div> 

                <FooterTwo />
            </main>
        </>
    )
}

export default Startup;
