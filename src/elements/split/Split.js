import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import SlpitOne from "./SlpitOne";
import SlipTwo from "./SlipTwo";
import SlipThree from "./SlipThree";
import SlipFour from "./SlipFour";
import Separator from "../separator/Separator";

const Split = () => {
    return (
        <>
            <SEO title="Split Text || Doob - React Business  Template" />
            <Layout>
                <BreadcrumbOne 
                    title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Split Text"
                />
                <div className="main-content">

                    {/* Start Elements Area  */}
                    <div className="rwt-split-area rn-section-gap">
                        <div className="wrapper">
                            <div className="row">
                                <div className="col-lg-12 mb--40">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Split"
                                        title = "Split Style One"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <SlpitOne />
                        </div>
                    </div>
                    {/* End Elements Area  */}

                    <Separator />
                    {/* Start Elements Area  */}
                    <div className="rwt-split-area rn-section-gap">
                        <div className="wrapper">
                            <div className="row">
                                <div className="col-lg-12 mb--40">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Split"
                                        title = "Split Style Two"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <SlipTwo />
                        </div>
                    </div>
                    {/* End Elements Area  */}

                    <Separator />
                    {/* Start Elements Area  */}
                    <div className="rwt-split-area rn-section-gap">
                        <div className="wrapper">
                            <div className="row">
                                <div className="col-lg-12 mb--40">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Split"
                                        title = "Split Style Three"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <SlipThree />
                        </div>
                    </div>
                    {/* End Elements Area  */}

                    <Separator />
                    
                    {/* Start Elements Area  */}
                    <div className="rwt-split-area rn-section-gap">
                        <div className="wrapper">
                            <div className="row">
                                <div className="col-lg-12 mb--40">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Split"
                                        title = "Split Style Four"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <SlipFour />
                        </div>
                    </div>
                    {/* End Elements Area  */}



                </div>
            </Layout>
        </>
    )
}
export default Split;