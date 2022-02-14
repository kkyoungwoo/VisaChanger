import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../elements/breadcrumb/BreadcrumbOne";

import SectionTitle from "../../elements/sectionTitle/SectionTitle";
import AccordionOne from "../../elements/accordion/AccordionOne";
import Separator from "../../elements/separator/Separator";
import FooterThree from '../../common/footer/FooterThree';

const Visainquiry = () => {
    return (
        <>
            <SEO title="VISA inquiry" />
            <Layout>
                <BreadcrumbOne 
                    title="외국인 비자 발급 서비스"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="비자를 한 번에 받을 수 있도록 도와드립니다"
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
                                        subtitle = "비자 문의"
                                        title = "자주하는 질문"
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
                </div>
                <FooterThree />
            </Layout>
        </>
    )
}
export default Visainquiry;