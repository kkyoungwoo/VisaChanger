import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import Separator from "../separator/Separator";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import TeamOne from "./TeamOne";
import TeamTwo from "./TeamTwo";
import TeamThree from "./TeamThree";
import TeamFour from "./TeamFour";

const Team = () => {
    return (
        <>
            <SEO title="Team || Doob - React Business  Template" />
            <Layout>
                <BreadcrumbOne 
                    title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Team"
                />
                <div className="main-content">

                    {/* Start Elements Area  */}
                    <div className="rwt-team-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Our Experts."
                                            title = "Our Expert Team."
                                            description = ""
                                        />
                                </div>
                            </div>
                            <TeamOne column="col-lg-4 col-md-6 col-12 mt--30" teamStyle="team-style-default" />
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    
                    <Separator />

                    {/* Start Elements Area  */}
                    <div className="rwt-team-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Our Experts."
                                            title = "Team Style Two"
                                            description = ""
                                        />
                                </div>
                            </div>
                            <TeamTwo column="col-lg-4 col-md-6 col-12 mt--10" teamStyle="team-style-default style-two" />
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    <Separator />

                    {/* Start Elements Area  */}
                    <div className="rwt-team-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 mb--15">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Our Experts."
                                            title = "Team Style Three"
                                            description = ""
                                        />
                                </div>
                            </div>
                            <TeamThree column="col-lg-3 col-md-6 col-12 mt--30" teamStyle="team-style-two" />
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    <Separator />

                    {/* Start Elements Area  */}
                    <div className="rwt-team-area rn-section-gap">
                        <div className="wrapper plr--65 plr_sm--15">
                            <div className="row mb--20">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Our Experts."
                                            title = "Team Style Four"
                                            description = ""
                                        />
                                </div>
                            </div>
                            <TeamFour column="col-lg-6 col-xl-3 col-md-6 col-12 mt--30" teamStyle="team-style-three" />
                        </div>
                    </div>
                    {/* End Elements Area  */}


                </div>
            </Layout>
        </>
    )
}
export default Team;