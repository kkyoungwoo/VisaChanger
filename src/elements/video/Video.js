import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import VideoOne from "./VideoOne";

const Video = () => {
    return (
        <>
            <SEO title="Video Popup || Doob - React Business  Template" />
            <Layout>
                <BreadcrumbOne 
                    title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Video Popup"
                />
                <div className="main-content">
                    {/* Start Elements Area  */}
                    <div className="rwt-video-popup-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Popup Video"
                                            title = "Style One."
                                            description = ""
                                        />
                                </div>
                            </div>
                            <VideoOne />
                        </div>
                    </div>
                    {/* End Elements Area  */}
                </div>
            </Layout>
        </>
    )
}
export default Video;