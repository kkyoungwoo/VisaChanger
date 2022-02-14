import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import AdvanceTabOne from "./AdvanceTabOne";
import AdvanceTabTwo from "./AdvanceTabTwo";
import AdvanceTabThree from "./AdvanceTabThree";
import Separator from "../separator/Separator";


const AdvanceTab = () => {
    return (
        <>
            <SEO title="Advance Tab || Doob - React Business  Template" />
            <Layout>
                <BreadcrumbOne 
                    title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Advance Tab"
                />

                <div className="main-content">

                    
                    {/* Start Elements Area  */}
                    <div className="rwt-advance-tab-area rn-section-gap">
                        <div className="container">
                            <div className="row mb--40">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "You can Customize All"
                                        title = "Advance Tab Style One."
                                        description = ""
                                    />
                                </div>
                            </div>
                            <AdvanceTabOne />
                        </div>
                    </div>
                    {/* End Elements Area  */}

                    <Separator />
                    
                    {/* Start Elements Area  */}
                    <div className="rwt-advance-tab-area rn-section-gap">
                        <div className="container">
                            <div className="row mb--40">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "You can Customize All"
                                        title = "Advance Tab Style One."
                                        description = ""
                                    />
                                </div>
                            </div>
                            <AdvanceTabTwo />
                        </div>
                    </div>
                    {/* End Elements Area  */}

                    <Separator />

                    {/* Start Elements Area  */}
                    <div className="rwt-advance-tab-area rn-section-gap">
                        <div className="container">
                            <div className="row mb--40">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "You can Customize All"
                                        title = "Advance Tab Style One."
                                        description = ""
                                    />
                                </div>
                            </div>
                            <AdvanceTabThree />
                        </div>
                    </div>
                    {/* End Elements Area  */}




                </div>
            </Layout>
        </>
    )
}
export default AdvanceTab;


