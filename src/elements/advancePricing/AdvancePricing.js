import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import AdvancePricingOne from "./AdvancePricingOne";

const AdvancePricing = () => {
    return (
        <>
            <SEO title="Advance Pricing || Doob - React Business  Template" />
            <Layout>
                <BreadcrumbOne 
                    title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Advance Pricing"
                />
                <div className="main-content">

                    {/* Start Elements Area  */}
                    <div className="rwt-pricingtable-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Our Pricing Table"
                                        title = "Advance Pricing Table."
                                        description = "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                    />
                                </div>
                            </div>
                            <div className="row mt--30">
                                <div className="col-lg-8 offset-lg-2">
                                    <AdvancePricingOne />
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
export default AdvancePricing;
