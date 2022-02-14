import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import TabOne from "./TabOne";
import TabTwo from "./TabTwo";
import TabThree from "./TabThree";
import Separator from "../separator/Separator";

const Tab = () => {
    return (
        <>
            <SEO title="Tab || Doob - React Business  Template" />
            <Layout>
                
                <BreadcrumbOne 
                    title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Tab"
                />
                <div className="main-content">

                    {/* Start Elements Area  */}
                    <div className="rwt-tab-area rn-section-gap">
                        <div className="container">
                            <div className="row mb--40">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "You can Change Easily"
                                        title = "tab Style One"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <TabOne />
                        </div>
                    </div>
                    {/* End Elements Area  */}

                    <Separator />

                    {/* Start Elements Area  */}
                    <div className="rwt-tab-area rn-section-gap">
                        <div className="container">
                            <div className="row mb--40">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "You can Change Easily"
                                        title = "Tab Style Three"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <TabTwo />
                        </div>
                    </div>
                    {/* End Elements Area  */}

                    <Separator />

                    {/* Start Elements Area  */}
                    <div className="rwt-tab-area rn-section-gap">
                        <div className="container">
                            <div className="row mb--40">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "You can Change Easily"
                                        title = "Tab Style Two"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <TabThree />
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    

                </div>
            </Layout>
        </>
    )
}
export default Tab;