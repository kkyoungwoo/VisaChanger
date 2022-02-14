import React, { useState, useEffect } from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import FooterThree from '../../common/footer/FooterThree';

import { useHistory } from 'react-router-dom'

const filters = [
    {
      id: 1,
      text: "1",
      texter: "주민등록",
      siteaddress:"/residentregistration"
    },
    {
      id: 2,
      text: "2",
      texter: "본인 등록 신고",
      siteaddress:"/myselfregistration"
    },
    {
      id: 3,
      text: "3",
      texter: "친권 등록신고",
      siteaddress:"/parentalregistration"
    },
    {
      id: 4,
      text: "4",
      texter: "자녀 등록신고",
      siteaddress:"/descendantregistration"
    },
    {
      id: 5,
      text: "5",
      texter: "기아,고아 등록신고",
      siteaddress:"/orphanregistration"
    },
    {
      id: 6,
      text: "6",
      texter: "기타 절차 안내",
      siteaddress:"/onotherregistration"
    }
];


const data = 
{
    "id": 1,
    "title": "기아,고아 등록신고",
    "date": "행정 민원",
    "client": "본인이 등록",
    "month":"빠른 심사",
    
    "subtitle": "상세 내용",
    "body": ["<p>상황에 따라 심사기간이 변동될 수 있습니다</p><br/><p>※ 개인의 신분과 관련된 민원으로서 행정당국은 대리 및 대행을 매우 엄격하게 제한하고 있습니다. 당사무소는 각종 신고서, 신청서 작성만 대행하며 민원서류 제출은 고객이 직접 해야 합니다.</p>"],

    "subContent": {
        "title": "기아",
        "subtext": ["<p>기아란 부모를 모두 알 수 없는 어린아이(幼兒)를 말합니다.</p>"]
    },
    "subContent2": {
        "title": "기아 가족관계등록부 직권 창설",
        "subtext": ["<p>기아를 발견한 경우 시읍면장은 가정법원의 허가를 받아 성본을 만들고 이름과 등록기준지를 직접 정해 가족관계등록부를 작성해야 합니다.</p>"]
    },
    "subContent3": {
        "title": "기아 출생신고",
        "subtext": ["<p>아버지나 어머니를 찾은 경우 1개월 내에 출생신고를 해야 합니다.</p><p>만일 출생신고의 내용과 기존에 창설된 가족관계등록부가 다른 점이 있을 경우 시읍면장에 가족관계등록부의 정정을 신청해야 합니다.</p><p>아버지나 어머니의 성본을 따를 경우에도 등록부를 정정해야 합니다.</p>"]
    },"subContent4": {
        "title": "고아",
        "subtext": ["<p>고아란 부모를 모두 알 수 없는 자를 말하며, 기아를 제외합니다.</p>"]
    },
    "subContent5": {
        "title": "고아 가족관계등록부 창설신고",
        "subtext": ["<p>가족관계등록부가 없는 경우 본인 또는 법정대리인(후견인)이 가정법원의 허가를 받아 성본을 만든 후에 → 다시 가정법원의 허가를 받아 1개월 내에 가족관계등록부 창설신고를 해야 합니다.</p>"]
    },
    "subContent6": {
        "title": "고아 가족관계등록부 정정",
        "subtext": ["<p>아버지나 어머니를 찾은 경우 가정법원의 허가를 받아 가족관계등록부를 정정해야 합니다. 아버지나 어머니의 성본을 따를 경우에도 등록부를 정정해야 합니다.</p>"]
    }
}

const Orphanregistration = () => {


    let history = useHistory();

    const [activeFilter, setActiveFilter] = useState("orphanregistration");
    const activeFilterColor = "/orphanregistration";
    
    const handleChange = (e) => {
        setActiveFilter(e.target.id);
    }
    
    useEffect(()=>{
        history.push(activeFilter)
    },[activeFilter])

    return (
        <>
            <SEO title="orphanregistration" />
            <Layout>
                <div className="rwt-portfolio-details rn-section-gap">
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
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="inner">
                                    <div className="details-list">
                                        <div className="thumbnail alignwide">
                                        </div>
                                        <div className="row mt--40 row--30">
                                            <div className="col-lg-12">
                                                <div className="content-left">
                                                    <h4 className="title">{data.title}</h4>
                                                    <div className="single-list-wrapper">
                                                        <div className="single-list">
                                                            <label>분류:</label>
                                                            <span>{data.date}</span>
                                                        </div>
                                                        <div className="single-list">
                                                            <label>요약:</label>
                                                            <span>{data.client}</span>
                                                        </div>
                                                        <div className="single-list">
                                                            <label>심사 기간:</label>
                                                            <span>{data.month}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mt--120">
                                                    <h3 className="subtitle">{data.subtitle}</h3>
                                                    <div className="description" dangerouslySetInnerHTML={{__html: data.body}}></div>
                                                    
                                                    <div className="view-btn mt--50">
                                                        <h4 className="subtitle">{data.subContent.title}</h4>
                                                        <div className="description" dangerouslySetInnerHTML={{__html: data.subContent.subtext}}></div>
                                                    </div>
                                                    <div className="view-btn mt--50">
                                                        <h5 className="subtitle">{data.subContent2.title}</h5>
                                                        <div className="description" dangerouslySetInnerHTML={{__html: data.subContent2.subtext}}></div>
                                                    </div>
                                                    <div className="view-btn mt--50">
                                                        <h5 className="subtitle">{data.subContent3.title}</h5>
                                                        <div className="description" dangerouslySetInnerHTML={{__html: data.subContent3.subtext}}></div>
                                                    </div>
                                                    <div className="view-btn mt--50">
                                                        <h4 className="subtitle">{data.subContent4.title}</h4>
                                                        <div className="description" dangerouslySetInnerHTML={{__html: data.subContent4.subtext}}></div>
                                                    </div>
                                                    <div className="view-btn mt--50">
                                                        <h5 className="subtitle">{data.subContent5.title}</h5>
                                                        <div className="description" dangerouslySetInnerHTML={{__html: data.subContent5.subtext}}></div>
                                                    </div>
                                                    <div className="view-btn mt--50">
                                                        <h5 className="subtitle">{data.subContent6.title}</h5>
                                                        <div className="description" dangerouslySetInnerHTML={{__html: data.subContent6.subtext}}></div>
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
                <FooterThree />
            </Layout>
        </>
    )
}
export default Orphanregistration;