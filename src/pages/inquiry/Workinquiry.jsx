import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../elements/breadcrumb/BreadcrumbOne";
import { FiArrowRight , FiPlay } from "react-icons/fi";

import ScrollAnimation from "react-animate-on-scroll";
import SectionTitle from "../../elements/sectionTitle/SectionTitle";
import AccordionJob from "../../elements/accordion/AccordionJob";
import Separator from "../../elements/separator/Separator";
import FooterThree from '../../common/footer/FooterThree';

const Workinquiry = () => {
    return (
        <>
            <SEO title="VISA Work inquiry" />
            <Layout>
                <BreadcrumbOne 
                    title="외국인 구인,구직 서비스"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="외국인 취업 희망자들에게 일자리를 홍보해드립니다."
                />
                <div className="main-content">
                    {/* Start Accordion Area  */}
                    <div className="rn-accordion-area rn-section-gap">
                        <div className="container">
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}
                                className="button-group mb--50" style={{
                                    display:"flex",
                                    justifyContent:"center",
                                    flexDirection:"column",
                                    textAlign:"center"
                                }}>
                                    <div>혹시 기업이신가요?</div>
                                    <div>외국인을 채용하고 싶으시다면 아래 버튼을 눌러주세요</div>
                                <a target="_blank" href="https://workvisa.co.kr/" rel="noopener noreferrer">
                                    <button className="btn-default btn-large btn-icon" to="#">외국인 채용 공고 등록<i className="icon"><FiArrowRight /></i></button>
                                </a>
                            </ScrollAnimation>
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "일자리 문의"
                                        title = "자주하는 질문"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <div className="row mt--35 row--20">
                                <div className="col-lg-10 offset-lg-1">
                                    <AccordionJob customStyle="" />
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
export default Workinquiry;