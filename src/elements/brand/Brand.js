import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import BrandOne from "./BrandOne";
import BrandTwo from "./BrandTwo";
import BrandThree from "./BrandThree";
import BrandFour from "./BrandFour";
import Separator from "../separator/Separator";

const Brand = () => {
    return (
        <>
            <SEO title="Brand || Doob - React Business  Template" />
            <Layout>
                <BreadcrumbOne 
                    title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Brand"
                />
                <div className="main-content">

                    {/* Start Brand Area  */}
                    <div className="rwt-brand-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Our Awesome Client"
                                        title = "Brand Style."
                                        description = ""
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 mt--40">
                                    <BrandOne brandStyle="brand-style-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Brand Area  */}

                    <Separator />

                    {/* Start Brand Area  */}
                    <div className="rwt-brand-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Our Awesome Client"
                                        title = "Brand Style."
                                        description = ""
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 mt--10">
                                    <BrandTwo brandStyle="brand-style-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Brand Area  */}

                    <Separator />

                    {/* Start Brand Area  */}
                    <div className="rwt-brand-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Our Awesome Client"
                                        title = "Brand Style."
                                        description = ""
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 mt--10">
                                    <BrandThree brandStyle="brand-style-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Brand Area  */}

                    <Separator />

                    {/* Start Brand Area  */}
                    <div className="rwt-brand-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Our Awesome Client"
                                        title = "Brand Style."
                                        description = ""
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 mt--10">
                                    <BrandFour brandStyle="brand-style-2 variation-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Brand Area  */}




                </div>
            </Layout>
        </>
    )
}
export default Brand;