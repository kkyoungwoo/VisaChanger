import React from 'react';
import Separator from "../separator/Separator";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import TimelineOne from "./TimelineOne";
import TimelineTwo from "./TimelineTwo";



const Timeline = () => {
    return (
        <>
            <SEO title="Timeline || Doob - React Business  Template" />
            <Layout>
                <BreadcrumbOne 
                    title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Timeline"
                />

                <div className="main-content">

                    {/* Start Timeline Area  */}
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
                                <div className="col-lg-12">
                                    <TimelineOne />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Timeline Area  */}



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
                                    <TimelineTwo classVar="no-gradient"  />
                                </div>
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
                                            subtitle = "Timeline"
                                            title = "Working Process."
                                        />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1 mt--50">
                                    <TimelineTwo classVar="dark-line"  />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Separator />




                </div>
            </Layout>
        </>
    )
}
export default Timeline;