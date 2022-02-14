import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import TestimonialOne from "./TestimonialOne";
import TestimonialTwo from "./TestimonialTwo";
import TestimonialThree from "./TestimonialThree";
import Separator from "../separator/Separator";

const Testimonial = () => {
    return (
        <>
            <SEO title="Testimonial || Doob - React Business  Template" />
            
            <Layout>
                <BreadcrumbOne 
                    title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Elements"
                />

                <div className="main-content">

                    {/* Start Elements Area  */}
                    <div className="rwt-testimonial-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 mb--10">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Client Feedback"
                                        title = "Testimonial."
                                    />
                                </div>
                            </div>
                            <TestimonialOne column="col-lg-4 col-md-6 col-12 mt--30" teamStyle="card-style-default testimonial-style-one" />
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    <Separator />

                    {/* Start Elements Area  */}
                    <div className="rwt-elements-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Client Feedback"
                                        title = "Testimonial."
                                    />
                                </div>
                            </div>
                            <TestimonialOne column="col-lg-4 col-md-6 col-12" teamStyle="card-style-default testimonial-style-one style-two" />
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    <Separator />

                    {/* Start Elements Area  */}
                    <div className="rwt-elements-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Client Feedback"
                                        title = "Testimonial."
                                    />
                                </div>
                            </div>
                            <TestimonialOne column="col-lg-4 col-md-6 col-12" teamStyle="card-style-default testimonial-style-one style-two border-gradient" />
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    <Separator />


                    {/* Start Elements Area  */}
                    <div className="rwt-elements-area rn-section-gap">
                        <div className="container">
                            <div className="row mb--20">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Client Feedback"
                                        title = "Testimonial."
                                    />
                                </div>
                            </div>
                            <TestimonialTwo column="col-lg-12 mt--30" teamStyle="" />
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    <Separator />


                    {/* Start Elements Area  */}
                    <div className="rwt-elements-area rn-section-gap">
                        <div className="container">
                            <div className="row mb--20">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Client Feedback"
                                        title = "Testimonial."
                                    />
                                </div>
                            </div>
                            <TestimonialThree teamStyle="" />
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    <Separator />



                </div>

            </Layout>
        </>
    )
}
export default Testimonial;