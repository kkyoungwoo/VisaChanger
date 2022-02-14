import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import Separator from "../separator/Separator";
import ProgressbarOne from "./ProgressbarOne";
import ProgressbarTwo from "./ProgressbarTwo";
import ProgressbarThree from "./ProgressbarThree";
import CircleProgress from "./CircleProgress";
import CircleProgressTwo from "./CircleProgressTwo";

const Progressbar = () => {
    return (
        <>
            <SEO title="Progressbar || Doob - React Business  Template" />

            <Layout>
                <BreadcrumbOne 
                    title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Progressbar"
                />
                <div className="main-content">
                    
                    {/* Start Elements Area  */}
                    <div className="rwt-elements-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1">
                                    <SectionTitle
                                        textAlign = "text-left"
                                        radiusRounded = ""
                                        subtitle = "Colors, percentage types."
                                        title = "Roundness"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <div className="row row--30 mt--20">
                                <div className="col-lg-10 offset-lg-1">
                                    <div className="rbt-progress-style-1 mt--10">
                                        <ProgressbarOne />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/* End Elements Area  */}

                    <Separator /> 
                    {/* Start Elements Area  */}
                    <div className="rwt-elements-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1">
                                    <SectionTitle
                                        textAlign = "text-left"
                                        radiusRounded = ""
                                        subtitle = "Theme Color, Round types."
                                        title = "Roundness"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <div className="row row--30 mt--20">
                                <div className="col-lg-10 offset-lg-1">
                                    <div className="rbt-progress-style-1 mt--10">
                                        <ProgressbarTwo />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Elements Area  */}

                    <Separator /> 
                    {/* Start Elements Area  */}
                    <div className="rwt-elements-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1">
                                    <SectionTitle
                                        textAlign = "text-left"
                                        radiusRounded = ""
                                        subtitle = "Gradient fill, Radius free"
                                        title = "Gradient Fill"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <div className="row row--30 mt--30">
                                <div className="col-lg-10 offset-lg-1">
                                    <div className="rbt-progress-style-1 enable-gradient-fill no-radius">
                                        <ProgressbarThree />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/* End Elements Area  */}

                    <Separator /> 
                    {/* Start Elements Area  */}
                    <div className="rwt-elements-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1">
                                    <SectionTitle
                                        textAlign = "text-left"
                                        radiusRounded = ""
                                        subtitle = "Solid fill, Large"
                                        title = "Choose Styles"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <div className="row row--30 mt--30">
                                <div className="col-lg-10 offset-lg-1">
                                    <div className="rbt-progress-style-1 no-radius large-size">
                                        <ProgressbarTwo />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/* End Elements Area  */}

                    <Separator />
                    <div className="rwt-elements-area rn-section-gap">
                        <div className="container">
                            <div className="row mb--25">
                                <div className="col-lg-10 offset-lg-1">
                                    <SectionTitle
                                        textAlign = "text-left"
                                        radiusRounded = ""
                                        subtitle = "Circle, Theme Color"
                                        title = "Radial Progress Bar"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <div className="col-lg-10 offset-lg-1 mt--10">
                                <CircleProgress />
                            </div>
                        </div>
                    </div>

                    <Separator />
                    <div className="rwt-elements-area rn-section-gap">
                        <div className="container">
                            <div className="row mb--25">
                                <div className="col-lg-10 offset-lg-1">
                                    <SectionTitle
                                        textAlign = "text-left"
                                        radiusRounded = ""
                                        subtitle = "Color, Size"
                                        title = "Radial Progress Bar"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <div className="col-lg-10 offset-lg-1 mt--10">
                                <CircleProgressTwo />
                            </div>
                        </div>
                    </div>

                </div>
                 
            </Layout>
        </>
    )
}
export default Progressbar;