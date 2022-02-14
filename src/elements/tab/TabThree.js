import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const callToActionData = {
    linkText: "/form",
    btnText: "비자 상담",
}

const callToActionData2 = {
    linkText: "/form",
    btnText: "유학 상담",
}

const callToActionData3 = {
    linkText: "/form",
    btnText: "출입국 상담",
}

const callToActionData4 = {
    linkText: "/form",
    btnText: "소송 상담",
}

const callToActionData5 = {
    linkText: "/form",
    btnText: "행정 상담",
}

const callToActionData6 = {
    linkText: "/form",
    btnText: "일자리 상담",
}

const dataList = [
    {
        title: '외국인 초청, 초대',
        description: '여라 나라의 외국인을 한국에 초대할 수 있습니다.'
    },
    {
        title: '퀵배달 합법 비자 발급',
        description: '유학생의 퀵배달 아르바이트 비자를 만들었습니다.'
    }
]

const dataList2 = [
    {
        title: '대학교 이후 컨설팅',
        description: '대학교를 다니면서 일을 할 수 있는 방법과 일자리를 제공해드리고 있습니다.'
    },
    {
        title: '100명 단위 유학',
        description: '해외에서 많은 인원이 유학을 원하는 경우 대학교와 협력하여 유학을 진행할 수 있습니다.'
    }
]

const dataList3 = [
    {
        title: '불법체류자 구제',
        description: '불법체류기간과 현재 상황을 확인하고 구제할 수 있는 방법을 안내해드립니다.'
    },
    {
        title: '보호 일시해제',
        description: '7일 이내에 이의신청을 할 수가 있습니다. 이때 이의신청이 인용되면 보호조치 일시해제가 되므로 특별체류허가를 받게 됩니다.'
    }
]
const dataList4 = [
    {
        title: '음주운전 구제',
        description: '상담 필요'
    },
    {
        title: '국가 보훈',
        description: '상담 필요'
    }
]
const dataList5 = [
    {
        title: '행정 업무 대행',
        description: '상담 필요'
    },
    {
        title: '행정 업무 위임',
        description: '상담 필요'
    }
]
const dataList6 = [
    {
        title: 'E-7 취업',
        description: '대학교 졸업예정 또는 졸업자에게 E-7일자리를 소개시켜 드리고 있습니다.'
    },
    {
        title: '농장 취업',
        description: '짧은 시간에 많은 월급을 받고싶어하는 외국인이 선호합니다.'
    }
]
const TabThree = () => {
    return (
        <div>
            <div className="row">
                    <div className="col-lg-12">
                        <Tabs>
                            <div className="row row--30 align-items-center">
                                <div className="col-lg-12">
                                    <div className="rn-default-tab style-three">
                                        <div className="tab-button-panel">
                                            <TabList className="tab-button" style={{justifyContent:"center"}}>
                                                <Tab>
                                                    <div className="rn-tab-button">
                                                        <button><strong>비자</strong></button>
                                                    </div>   
                                                </Tab>
                                                <Tab>
                                                    <div className="rn-tab-button">
                                                        <button><strong>유학</strong></button>
                                                    </div>   
                                                </Tab>
                                                <Tab>
                                                    <div className="rn-tab-button">
                                                        <button><strong>출입국 사범</strong></button>
                                                    </div>   
                                                </Tab>
                                                <Tab>
                                                    <div className="rn-tab-button">
                                                        <button><strong>소송</strong></button>
                                                    </div>   
                                                </Tab>
                                                <Tab>
                                                    <div className="rn-tab-button">
                                                        <button><strong>행정 민원</strong></button>
                                                    </div>   
                                                </Tab>
                                                <Tab>
                                                    <div className="rn-tab-button">
                                                        <button><strong>일자리</strong></button>
                                                    </div>   
                                                </Tab>

                                            </TabList>
                                        </div>

                                        <div className="tab-content-panel">
                                            <TabPanel>
                                                <div className="rn-tab-content">
                                                    <div className="inner">
                                                        <div className="row align-items-center row--30">
                                                            <div className="col-lg-4">
                                                                <div className="section-title">
                                                                    <h4 className="title">비자의뢰 해결</h4>
                                                                    <p>상담무료</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8 mt_md--30 mt_sm--30">
                                                                <div className="row row--15 mt_dec--30 service-wrapper">
                                                                    {dataList.map( (val , i) => (
                                                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                                                            <div className="card-box card-style-1 text-left">
                                                                                <div className="inner">
                                                                                    <div className="content">
                                                                                        <h4 className="title mb--20">{val.title}</h4>
                                                                                        <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>

                                                                <div className="inner mt--30">
                                                                    <div className="content text-center">
                                                                        <ScrollAnimation 
                                                                        animateIn="fadeInUp"
                                                                        animateOut="fadeInOut"
                                                                        animateOnce={true}>
                                                                            <div className="call-to-btn text-center">
                                                                                <Link className="btn-default btn-icon" to={callToActionData.linkText}>{callToActionData.btnText} <i className="icon"></i></Link>
                                                                            </div>
                                                                        </ScrollAnimation>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            
                                            <TabPanel>
                                                <div className="rn-tab-content">
                                                    <div className="inner">
                                                        <div className="row align-items-center row--30">
                                                            <div className="col-lg-4">
                                                                <div className="section-title">
                                                                    <h4 className="title">유학의뢰 해결</h4>
                                                                    <p>상담무료</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8 mt_md--30 mt_sm--30">
                                                                <div className="row row--15 mt_dec--30 service-wrapper">
                                                                    {dataList2.map( (val , i) => (
                                                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                                                            <div className="card-box card-style-1 text-left">
                                                                                <div className="inner">
                                                                                    <div className="content">
                                                                                        <h4 className="title mb--20">{val.title}</h4>
                                                                                        <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                                
                                                                <div className="inner mt--30">
                                                                    <div className="content text-center">
                                                                        <ScrollAnimation 
                                                                        animateIn="fadeInUp"
                                                                        animateOut="fadeInOut"
                                                                        animateOnce={true}>
                                                                            <div className="call-to-btn text-center">
                                                                                <Link className="btn-default btn-icon" to={callToActionData2.linkText}>{callToActionData2.btnText} <i className="icon"></i></Link>
                                                                            </div>
                                                                        </ScrollAnimation>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                            <TabPanel>
                                                <div className="rn-tab-content">
                                                    <div className="inner">
                                                        <div className="row align-items-center row--30">
                                                            <div className="col-lg-4">
                                                                <div className="section-title">
                                                                    <h4 className="title">출입국 사범 의뢰 해결</h4>
                                                                    <p>상담무료</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8 mt_md--30 mt_sm--30">
                                                                <div className="row row--15 mt_dec--30 service-wrapper">
                                                                    {dataList3.map( (val , i) => (
                                                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                                                            <div className="card-box card-style-1 text-left">
                                                                                <div className="inner">
                                                                                    <div className="content">
                                                                                        <h4 className="title mb--20">{val.title}</h4>
                                                                                        <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                                
                                                                <div className="inner mt--30">
                                                                    <div className="content text-center">
                                                                        <ScrollAnimation 
                                                                        animateIn="fadeInUp"
                                                                        animateOut="fadeInOut"
                                                                        animateOnce={true}>
                                                                            <div className="call-to-btn text-center">
                                                                                <Link className="btn-default btn-icon" to={callToActionData3.linkText}>{callToActionData3.btnText} <i className="icon"></i></Link>
                                                                            </div>
                                                                        </ScrollAnimation>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            <TabPanel>
                                                <div className="rn-tab-content">
                                                    <div className="inner">
                                                        <div className="row align-items-center row--30">
                                                            <div className="col-lg-4">
                                                                <div className="section-title">
                                                                    <h4 className="title">소송의뢰 해결</h4>
                                                                    <p>상담무료</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8 mt_md--30 mt_sm--30">
                                                                <div className="row row--15 mt_dec--30 service-wrapper">
                                                                    {dataList4.map( (val , i) => (
                                                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                                                            <div className="card-box card-style-1 text-left">
                                                                                <div className="inner">
                                                                                    <div className="content">
                                                                                        <h4 className="title mb--20">{val.title}</h4>
                                                                                        <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                                
                                                                <div className="inner mt--30">
                                                                    <div className="content text-center">
                                                                        <ScrollAnimation 
                                                                        animateIn="fadeInUp"
                                                                        animateOut="fadeInOut"
                                                                        animateOnce={true}>
                                                                            <div className="call-to-btn text-center">
                                                                                <Link className="btn-default btn-icon" to={callToActionData4.linkText}>{callToActionData4.btnText} <i className="icon"></i></Link>
                                                                            </div>
                                                                        </ScrollAnimation>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            <TabPanel>
                                                <div className="rn-tab-content">
                                                    <div className="inner">
                                                        <div className="row align-items-center row--30">
                                                            <div className="col-lg-4">
                                                                <div className="section-title">
                                                                    <h4 className="title">행정 민원 의뢰 해결</h4>
                                                                    <p>상담무료</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8 mt_md--30 mt_sm--30">
                                                                <div className="row row--15 mt_dec--30 service-wrapper">
                                                                    {dataList5.map( (val , i) => (
                                                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                                                            <div className="card-box card-style-1 text-left">
                                                                                <div className="inner">
                                                                                    <div className="content">
                                                                                        <h4 className="title mb--20">{val.title}</h4>
                                                                                        <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                                
                                                                <div className="inner mt--30">
                                                                    <div className="content text-center">
                                                                        <ScrollAnimation 
                                                                        animateIn="fadeInUp"
                                                                        animateOut="fadeInOut"
                                                                        animateOnce={true}>
                                                                            <div className="call-to-btn text-center">
                                                                                <Link className="btn-default btn-icon" to={callToActionData5.linkText}>{callToActionData5.btnText} <i className="icon"></i></Link>
                                                                            </div>
                                                                        </ScrollAnimation>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            <TabPanel>
                                                <div className="rn-tab-content">
                                                    <div className="inner">
                                                        <div className="row align-items-center row--30">
                                                            <div className="col-lg-4">
                                                                <div className="section-title">
                                                                    <h4 className="title">일자리 의뢰 해결</h4>
                                                                    <p>상담무료</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8 mt_md--30 mt_sm--30">
                                                                <div className="row row--15 mt_dec--30 service-wrapper">
                                                                    {dataList6.map( (val , i) => (
                                                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                                                            <div className="card-box card-style-1 text-left">
                                                                                <div className="inner">
                                                                                    <div className="content">
                                                                                        <h4 className="title mb--20">{val.title}</h4>
                                                                                        <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                                
                                                                <div className="inner mt--30">
                                                                    <div className="content text-center">
                                                                        <ScrollAnimation 
                                                                        animateIn="fadeInUp"
                                                                        animateOut="fadeInOut"
                                                                        animateOnce={true}>
                                                                            <div className="call-to-btn text-center">
                                                                                <Link className="btn-default btn-icon" to={callToActionData6.linkText}>{callToActionData6.btnText} <i className="icon"></i></Link>
                                                                            </div>
                                                                        </ScrollAnimation>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tabs>
                    </div>
                </div>
        </div>
    )
}

export default TabThree
