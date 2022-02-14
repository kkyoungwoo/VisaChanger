import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import CalltoActionOne from "./CalltoActionOne";
import CalltoActionTwo from "./CalltoActionTwo";
import CalltoActionThree from "./CalltoActionThree";
import CalltoActionFour from "./CalltoActionFour";
import CalltoActionFive from "./CalltoActionFive";
import CalltoActionSix from "./CalltoActionSix";
import CalltoActionSeven from "./CalltoActionSeven";
import CalltoActionEight from "./CalltoActionEight";
import Separator from "../separator/Separator";


const CalltoAction = () => {
    return (
        <>
            <SEO title="Call To Action || Doob - React Business  Template" />
            <Layout>
                <BreadcrumbOne 
                    title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Call To Action"
                />
                <div className="main-content">

                    {/* Start Elements Area  */}
                    <div className="rwt-callto-action-area rn-section-gap">
                        <div className="wrapper">
                            <div className="row">
                                <div className="col-lg-12 mb--40">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Call To Action"
                                        title = "Style One"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <CalltoActionOne />
                        </div>
                    </div>
                    {/* End Elements Area  */}

                    {/* Start Elements Area  */}
                    <div className="rwt-callto-action-area rn-section-gapBottom">
                        <div className="wrapper">
                            <div className="row">
                                <div className="col-lg-12 mb--40">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Call To Action"
                                        title = "Style Two"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <CalltoActionTwo />
                        </div>
                    </div>
                    {/* End Elements Area  */}

                    {/* Start Elements Area  */}
                    <div className="rwt-callto-action-area rn-section-gapBottom">
                        <div className="wrapper">
                            <div className="row">
                                <div className="col-lg-12 mb--40">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Call To Action"
                                        title = "Style Three"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <CalltoActionThree />
                        </div>
                    </div>
                    {/* End Elements Area  */}

                    {/* Start Elements Area  */}
                    <div className="rwt-callto-action-area rn-section-gapBottom">
                        <div className="wrapper">
                            <div className="row">
                                <div className="col-lg-12 mb--40">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Call To Action"
                                        title = "Style Four"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <CalltoActionFour />
                        </div>
                    </div>
                    {/* End Elements Area  */}

                    {/* Start Elements Area  */}
                    <div className="rwt-callto-action-area rn-section-gapBottom">
                        <div className="wrapper">
                            <div className="row">
                                <div className="col-lg-12 mb--40">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Call To Action"
                                        title = "Style Five"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <CalltoActionFive />
                        </div>
                    </div>
                    {/* End Elements Area  */}

                    {/* Start Elements Area  */}
                    <div className="rwt-callto-action-area rn-section-gapBottom">
                        <div className="wrapper">
                            <div className="row">
                                <div className="col-lg-12 mb--40">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Call To Action"
                                        title = "Style Six"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <CalltoActionSix />
                        </div>
                    </div>
                    {/* End Elements Area  */}

                    <Separator />

                    {/* Start Elements Area  */}
                    <div className="rwt-callto-action-area rn-section-gap">
                        <div className="wrapper">
                            <div className="row">
                                <div className="col-lg-12 mb--40">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Call To Action"
                                        title = "Style Seven"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <CalltoActionSeven />
                        </div>
                    </div>
                    {/* End Elements Area  */}

                    {/* Start Elements Area  */}
                    <div className="rwt-callto-action-area ">
                        <div className="wrapper">
                            <div className="row">
                                <div className="col-lg-12 mb--40">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Call To Action"
                                        title = "Style Eight"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <CalltoActionEight />
                        </div>
                    </div>
                    {/* End Elements Area  */}


                </div>
            </Layout>
        </>
    )
}
export default CalltoAction;