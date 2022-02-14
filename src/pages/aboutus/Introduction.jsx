import React from 'react'
import SEO from "../../common/SEO";
import {Link} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import HeaderTopNews from '../../common/header/HeaderTopNews';
import FooterThree from '../../common/footer/FooterThree';
import Separator from "../../elements/separator/Separator";
import SectionTitle from "../../elements/sectionTitle/SectionTitle";
import TimelineTwo from '../../elements/timeline/TimelineTwo';
import TabOne from '../../elements/tab/TabOne';
import AboutThree from '../../elements/about/AboutThree';
import PricingThree from '../../elements/pricing/PricingThree';
import BlogList from "../../components/blog/itemProp/BlogList";
import BlogClassicData from '../../data/blog/BlogList.json';

import Layout from "../../common/Layout";

var BlogListData = BlogClassicData.slice(0, 3);



const Introduction = () => {
    return (
        <>
            <SEO title="korea VISA About us" />
            <Layout>
                <main className="page-wrapper">
                    {/* Start Slider Area  */}
                    <div className="slider-area slider-style-3 height-850">
                        <div className="container">
                            <div className="row row--30 align-items-center">
                                <div className="order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
                                    <div className="inner text-left">
                                        <h1 className="title theme-gradient">외국인 비자<br />컨설팅<br />전문회사</h1>
                                        <p className="description">가장 가능성이 높은 방법으로 어려운 외국인의 비자 발급 및 시간이 많이 걸리는 행정업무를 대행 및 위임하여 의뢰인의 시간과 비용을 단축 시켜 드리고 있습니다.</p>
                                    </div>
                                </div>
                                <div className="order-1 order-lg-2 col-lg-5">
                                    <div className="thumbnail">
                                        <img src="./images/about/about-2.png" alt="Banner Images" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Slider Area  */}

                    <Separator />

                    {/* Start Elements Area  */}
                    <div className="rwt-tab-area rn-section-gap">
                        <div className="container">
                            <div className="row mb--40">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Companies About."
                                        title = "THE K 컨설팅을 소개합니다."
                                        description = "우리는 고객들이 많은 경험과 체계적인 방법으로 비자를 발급할 수 있도록 도와드리고 있습니다."
                                    />
                                </div>
                            </div>
                            <TabOne />
                        </div>
                    </div>
                    {/* End Elements Area  */}

                    <Separator />
                    <div className="rwt-timeline-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Timeline"
                                            title = "THE K 작업 프로세스"
                                            description = "공기관에 온라인 질의, 유선 문의, 필요 서류 안내, 대리 발급, 서류 작성, 수정, 검토, 각종 일정 안내, 허가에 유리한 추가 자료 및 노하우를 제공합니다."
                                        />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1 mt--50">
                                    <TimelineTwo classVar="dark-line"  />
                                </div>
                            </div>
                        </div>
                    </div>

                    <Separator />
                    <FooterThree />
                </main>
            </Layout>
            
        </>
    )
}
export default Introduction;