import React, { useState, useEffect } from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import ScrollAnimation from "react-animate-on-scroll";

import SectionTitle from "../../elements/sectionTitle/SectionTitle";
import ServiceOne from "../../elements/service/ServiceOne";
import { FiArrowRight } from "react-icons/fi";

import {Link} from "react-router-dom";

import BreadcrumbOne from "../../elements/breadcrumb/BreadcrumbOne";

import { useHistory } from 'react-router-dom'

const filters = [
    {
      id: 1,
      text: "1",
      texter: "입학문의",
      siteaddress:"/entrance"
    },
    {
      id: 2,
      text: "2",
      texter: "D-4 (어학원)",
      siteaddress:"/d4"
    },
    {
      id: 3,
      text: "3",
      texter: "D-2 (대학)",
      siteaddress:"/d2"
    }
];



const callToActionData = {
    title: "유학생활 준비가 되셨나요?",
    subtitle: "유학을 위한 최고의 선택",
    btnText: "Contact Us",
}

const TimelineData = [
    {
        id: "1",
        date: "Step-1",
        title: "해외거주 외국인",
        description: "D-2 또는 D-4 비자를 발급받을 수 있습니다.",
        image: "blog-03",
        workingStep: [
            {
                stepTitle: "D-4 어학원 (신입학)",
                stepDescription: "한국어를 잘 모르거나 대학교를 나오지 않았을 때 신청",
            },
            {
                stepTitle: "D-2 대학교 (신입학, 편입학)",
                stepDescription: "TOPIK 3급 이상 등, 그리고 입학하려는 학교마다 기준이 다릅니다.",
            },
        ]
    },
    {
        id: "2",
        date: "Step-2",
        title: "국내거주 외국인",
        description: "국내에서 대학교 신입학 및 편입학을 진행할 수 있습니다.",
        image: "blog-04",
        workingStep: [
            {
                stepTitle: "D-2 대학교 (신입학, 편입학)",
                stepDescription: "어학원 성적증명서( 80점 ) 또는 TOPIK 등급 및 어학원 출석 80% 이상 등과 입학하려는 학교마다 기준이 다릅니다.",
            }
        ]
    },
]

const Entrance = () => {

    let history = useHistory();

    const [activeFilter, setActiveFilter] = useState("entrance");
    const activeFilterColor = "/entrance";
    
    const handleChange = (e) => {
        setActiveFilter(e.target.id);
    }
    
    useEffect(()=>{
        history.push(activeFilter)
    },[activeFilter])

    return (
        <>
            <SEO title="International student" />
            <Layout>
                <div className="main-content">
                    <div className="rwt-portfolio-area rn-section-gap">
                        {/**cards start */}
                            <div Column="col-lg-4 col-md-6 mt--30 portfolio " >
                                <div className="col-lg-12">
                                    <ul className="rwt-portfolio-filter filter-button-default liststyle mb--20">
                                        {filters.map((filter) => (
                                        <li className="list-item" key={filter.id} >
                                            <button
                                            onClick={handleChange}
                                            className={
                                                filter.siteaddress === activeFilterColor
                                                ? "current"
                                                : " "
                                            }
                                            id={filter.siteaddress}
                                            >
                                            <div className="none_pointer">
                                                {filter.texter}
                                            </div>
                                            </button>
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {/**cards end */}
                            <BreadcrumbOne 
                                title="대한민국에서 유학생활을 시작하시고 싶으신가요?"
                                rootUrl="/"
                                parentUrl="Home"
                                currentUrl="입학문의"
                            />
                        {/* Start Service Area  */}
                        <div className="rn-service-area rn-section-gap ">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Difference"
                                            title = "다른 회사와 다릅니다."
                                            description = "유학생활이 시작된 이후에도 우리는 한국에서 필요한 다양한 서비스를 제공할 수 있습니다."
                                         />
                                    </div>
                                </div>
                                <ServiceOne 
                                    serviceStyle = "service__style--1 bg-color-blackest radius mt--25 rbt-border"
                                    textAlign = "text-left"
                                 />
                            </div>
                        </div>
                        {/* End Service Area  */}
                        <div className="container">
                            <div className="rn-timeline-wrapper timeline-style-one position-relative">
                                <div className="timeline-line"></div>
                                {/* Start Single Timeline  */}

                                    {TimelineData.map((data, index) =>(
                                        <div className="single-timeline mt--50" key={index}>
                                            <div className="timeline-dot">
                                                <div className="time-line-circle"></div>
                                            </div>
                                            <div className="single-content">
                                                <div className="inner">
                                                    <div className="row row--30 align-items-center">
                                                        <div className="order-2 order-lg-1 col-lg-6 mt_md--40 mt_sm--40">
                                                            <div className="content">
                                                                <ScrollAnimation 
                                                                animateIn="fadeInUp"
                                                                animateOut="fadeInOut"
                                                                animateOnce={true}>
                                                                    <span className="date-of-timeline">{data.date}</span>
                                                                                    </ScrollAnimation>
                                    
                                                                <ScrollAnimation 
                                                                animateIn="fadeInUp"
                                                                animateOut="fadeInOut"
                                                                animateOnce={true}>
                                                                    <h2 className="title">{data.title}</h2>
                                                                                    </ScrollAnimation>
                                    
                                                                <ScrollAnimation 
                                                                animateIn="fadeInUp"
                                                                animateOut="fadeInOut"
                                                                animateOnce={true}>
                                                                    <p className="description">{data.description}</p>
                                                                                    </ScrollAnimation>
                                    
                                                                <div className="row row--30">
                                                                    {data.workingStep.map((data, index)=>(
                                                                        <div className="col-lg-6 col-md-6 col-12" key={index}>
                                                                            <div className="working-list">
                                                                                <ScrollAnimation 
                                                                                animateIn="fadeInUp"
                                                                                animateOut="fadeInOut"
                                                                                animateOnce={true}>
                                                                                    <h5 className="working-title">{data.stepTitle}</h5>
                                                                                                    </ScrollAnimation>
                                                                    
                                                                                <ScrollAnimation 
                                                                                animateIn="fadeInUp"
                                                                                animateOut="fadeInOut"
                                                                                animateOnce={true}>
                                                                                    <p>{data.stepDescription}</p>
                                                                                </ScrollAnimation>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                                <div className="read-morebtn">
                                                                    <ScrollAnimation 
                                                                    animateIn="fadeInUp"
                                                                    animateOut="fadeInOut"
                                                                    animateOnce={true}>
                                                                    </ScrollAnimation>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="order-1 order-lg-2 col-lg-6">
                                                            <div className="thumbnail">
                                                                <img className="w-100" src={`./images/blog/${data.image}.jpg`} alt="Corporate React Template" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                {/* End Single Timeline  */}
                                </div>
                                <div className="rn-service-area rn-section-gap ">
                                    <div className="container">
                                        <div className="rn-callto-action clltoaction-style-default style-5">
                                            <div className="container">
                                                <div className="row row--0 align-items-center content-wrapper theme-shape">
                                                    <div className="col-lg-12">
                                                        <div className="inner">
                                                            <div className="content text-center">
                                                                <ScrollAnimation 
                                                                animateIn="fadeInUp"
                                                                animateOut="fadeInOut"
                                                                animateOnce={true}>
                                                                    <h2 className="title">{callToActionData.title}</h2>
                                                                </ScrollAnimation>
                                                                <ScrollAnimation 
                                                                animateIn="fadeInUp"
                                                                animateOut="fadeInOut"
                                                                animateOnce={true}>
                                                                    <h6 className="subtitle">{callToActionData.subtitle}</h6>
                                                                </ScrollAnimation>
                                                                                                    
                                                                <ScrollAnimation 
                                                                animateIn="fadeInUp"
                                                                animateOut="fadeInOut"
                                                                animateOnce={true}>
                                                                    <div className="call-to-btn text-center">
                                                                        <Link className="btn-default btn-icon" to="/form">{callToActionData.btnText} <i className="icon"><FiArrowRight /></i></Link>
                                                                    </div>
                                                                </ScrollAnimation>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default Entrance;