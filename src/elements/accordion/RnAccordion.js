import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import AccordionOne from "./AccordionOne";
import Separator from "../separator/Separator";

const RnAccordion = () => {
    return (
        <>
            <SEO title="Accordion || Doob - React Business  Template" />
            <Layout>
                <BreadcrumbOne 
                    title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Accordion"
                />
                <div className="main-content">


                    {/* Start Accordion Area  */}
                    <div className="rn-accordion-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Accordion"
                                        title = "Customize All"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <div className="row mt--35 row--20">
                                <div className="col-lg-10 offset-lg-1">
                                    <AccordionOne customStyle="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Accordion Area  */}
                    <Separator />

                    {/* Start Accordion Area  */}
                    <div className="rn-accordion-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Accordion"
                                        title = "Customize All"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <div className="row mt--35 row--20">
                                <div className="col-lg-10 offset-lg-1">
                                    <AccordionOne customStyle="rn-accordion-02" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Accordion Area  */}
                    <Separator />





                    {/* Start Accordion Area  */}
                    <div className="rn-accordion-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Accordion"
                                        title = "Customize All"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <div className="row mt--35 row--20">
                                <div className="col-lg-10 offset-lg-1">
                                    <AccordionOne customStyle="rn-accordion-03" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Accordion Area  */}
                    <Separator />


                    {/* Start Accordion Area  */}
                    <div className="rn-accordion-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Accordion"
                                        title = "Customize All"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <div className="row mt--35 row--20">
                                <div className="col-lg-10 offset-lg-1">
                                    <AccordionOne customStyle="rn-accordion-04" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Accordion Area  */}
                    <Separator />



                </div>
            </Layout>
        </>
    )
}
export default RnAccordion;