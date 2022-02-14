import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";

const Elements = () => {
    return (
        <>
            <SEO title="Elements || Doob - React Business  Template" />
            <Layout>
                <BreadcrumbOne 
                    title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Elements"
                />
                <div className="main-content">
                    {/* Start Elements Area  */}
                    <div className="rwt-elements-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "What we can do for you"
                                            title = "Services provide for you."
                                            description = "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Elements Area  */}
                </div>
            </Layout>
        </>
    )
}
export default Elements;