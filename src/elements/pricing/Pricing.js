import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import PricingOne from "./PricingOne";
import PricingTwo from "./PricingTwo";
import PricingThree from "./PricingThree";
import PricingFour from "./PricingFour";
import PricingFive from "./PricingFive";
import Separator from "../separator/Separator";


const Pricing = () => {
    return (
        <>
            <SEO title="Pricing || Doob - React Business  Template" />
            <Layout>
                <BreadcrumbOne 
                    title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Pricing"
                />

                <div className="main-content">

                    {/* Start Elements Area  */}
                    <div className="rwt-pricing-area rn-section-gap">
                        <div className="container">
                            <div className="row mb--40 mb_sm--0">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Pricing"
                                            title = "Pricing Style One."
                                            description = ""
                                        />
                                </div>
                            </div>
                            <PricingOne />
                        </div>
                    </div>
                    {/* End Elements Area  */}

                    <Separator />

                    {/* Start Elements Area  */}
                    <div className="rwt-pricing-area rn-section-gap">
                        <div className="container">
                            <div className="row mb--40 mb_sm--0">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Pricing"
                                            title = "Pricing Style Two."
                                            description = ""
                                        />
                                </div>
                            </div>
                            <PricingTwo />
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    <Separator />

                    {/* Start Elements Area  */}
                    <div className="rwt-pricing-area rn-section-gap">
                        <div className="container">
                            <div className="row mb--40 mb_sm--0">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Pricing"
                                            title = "Pricing Style Three."
                                            description = ""
                                        />
                                </div>
                            </div>
                            <PricingThree />
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    <Separator />



                    {/* Start Elements Area  */}
                    <div className="rwt-pricing-area rn-section-gap">
                        <div className="wrapper plr--100 plr_md--15 plr_sm--15">
                            <div className="row mb--40 mb_sm--0">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Pricing"
                                            title = "Pricing Style Four."
                                            description = ""
                                        />
                                </div>
                            </div>
                            <PricingFour />
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    <Separator />

                    {/* Start Elements Area  */}
                    <div className="rwt-pricing-area rn-section-gap">
                        <div className="container">
                            <div className="row mb--40 mb_sm--0">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Pricing"
                                            title = "Pricing Style Five."
                                            description = ""
                                        />
                                </div>
                            </div>
                            <PricingFive />
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    
                </div>
            </Layout>
        </>
    )
}
export default Pricing;