import React, { useState, useEffect } from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import ScrollAnimation from "react-animate-on-scroll";

import SectionTitle from "../../elements/sectionTitle/SectionTitle";
import ServiceOne from "../../elements/service/ServiceOne";
import { FiArrowRight } from "react-icons/fi";

import { useHistory } from 'react-router-dom'

import {Link} from "react-router-dom";

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
    title: "어학원 입학 준비가 되셨나요?",
    subtitle: "대한민국 어학원 입학을 위한 최고의 선택",
    btnText: "Contact Us",
}

const TimelineData = [
    {
        id: "1",
        date: "Step-1",
        title: "한국어를 배우는 과정입니다.",
        description: "한국 대학교 어학원을 통해 체계적으로 한국어를 배울 수 있습니다. 어학연수를 위한 비자 D-4는 최대 2년 연장이 가능하며 구직 비자는 D-10, 대학 진학 비자는 D-2로 전환 가능합니다.",
        image: "timeline-01",
        workingStep: [
            {
                stepTitle: "D-4 비자 설명",
                stepDescription: "해외거주 외국인이 한국어를 배우기 위해 대한민국으로 들어올 수 있는 비자",
            },
            {
                stepTitle: "D-4 비자 안내",
                stepDescription: "고등학교 일정 성적이상인 해외거주 외국인이 대한민국 어학원을 선택하여 초대장 및 입학허가서를 수령하고 비자를 신청할 수 있습니다.",
            },
        ]
    }
]

const D4 = () => {

    let history = useHistory();

    const [activeFilter, setActiveFilter] = useState("d4");
    const activeFilterColor = "/d4";
    
    const handleChange = (e) => {
        setActiveFilter(e.target.id);
    }
    
    useEffect(()=>{
        history.push(activeFilter)
    },[activeFilter])

    return (
        <>
            <SEO title="d4 visa" />
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
                        {/* Start Service Area  */}
                        <div className="rn-service-area rn-section-gap ">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "What we can do for you"
                                            title = "어학원 입학 후 취업 컨설팅이 가능합니다."
                                            description = "어학원 입학이 된 이후에도 우리는 한국에서 필요한 다양한 서비스를 제공할 수 있습니다."
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
                                                                <img className="w-100" src={`./images/timeline/${data.image}.jpg`} alt="Corporate React Template" />
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
export default D4;