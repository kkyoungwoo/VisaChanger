import React from 'react';
import VideoTwo from '../elements/video/VideoTwo';
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';
import HeaderTopNews from '../common/header/HeaderTopNews';
import FooterTwo from '../common/footer/FooterTwo';
import Copyright from '../common/footer/Copyright';
import ServiceThree from '../elements/service/ServiceThree';
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import Separator from "../elements/separator/Separator";
import AboutFour from '../elements/about/AboutFour';
import SlipThree from '../elements/split/SlipThree';
import BrandThree from '../elements/brand/BrandThree';
import TeamThree from '../elements/team/TeamThree';
import PricingTwo from '../elements/pricing/PricingTwo';

import {Link} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
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



const EventConference = () => {
    return (
        <>
            <SEO title="Event Conference" />

            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small btn-icon" HeaderSTyle="header-not-transparent" />

                {/* Start Slider Area  */}
                <div className="slider-area slider-style-6 shape-left inheader-not-transparent height-750">
                    <div className="container">
                        <div className="row row--30 align-items-center">
                            <div className="order-2 order-lg-1 col-lg-6 mt_md--50 mt_sm--50 mt_lg--30">
                                <div className="inner text-left">
                                    <h1 className="title color-white">Doob event conference.</h1>
                                    <p className="description color-white">We help our clients succeed by creating brand identities, digital experiences, and print materials.</p>
                                    <div className="button-group mt--30 mt_sm--20">
                                        <a className="btn-default btn-medium btn-icon btn-border" target="_blank" href="https://themeforest.net/checkout/from_item/33571911?license=regular">Purchase Now <i className="icon"><FiArrowRight /></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2">
                                {PopupData.map((item) => (
                                    <div className="video-btn" key={item.id}>
                                        <VideoTwo imagename="./images/about/about-6.png" galleryItem={item} />
                                    </div>
                                ))}
                            </div>
                            <div className="shape-image">
                                <img src="./images/banner/white-shape.svg" alt="Banner Images" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}


                {/* Start Service Area  */}
                <div className="rn-service-area rn-section-gap ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "What we can do for you"
                                    title = "Main Goal Our Event Conference."
                                    description = ""
                                />
                            </div>
                        </div>
                        <ServiceThree 
                            serviceStyle = "service__style--2"
                            textAlign = "text-center"
                            />
                    </div>
                </div>
                {/* End Service Area  */}

                <Separator />

                <AboutFour image="./images/about/about-4.png" />

                {/* Start Elements Area  */}
                <div className="rwt-split-area">
                    <div className="wrapper">
                        <SlipThree />
                    </div>
                </div>
                {/* End Elements Area  */}



                {/* Start Brand Area  */}
                <div className="rwt-brand-area ptb--90">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandThree brandStyle="brand-style-2" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area  */}



                <Separator />
                {/* Start Elements Area  */}
                <div className="rwt-team-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mb--15">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Our Experts."
                                    title = "Our Experts Team."
                                    description = ""
                                />
                            </div>
                        </div>
                        <TeamThree column="col-lg-3 col-md-6 col-12 mt--30" teamStyle="team-style-two" />
                    </div>
                </div>
                {/* End Elements Area  */}


                <Separator />
                {/* Start Elements Area  */}
                <div className="rwt-pricing-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--40 mb_sm--0">
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


                <Separator />
                <div className="blog-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Latests News"
                                    title = "Our Event News."
                                    description = ""
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
                <Copyright />
            </main>

        </>
    )
}

export default EventConference;
