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
    "title": "주민 등록",
    "date": "행정 민원",
    "client": "본인이 등록",
    "month":"빠른 심사",
    
    "subtitle": "상세 내용",
    "body": ["<p>상황에 따라 심사기간이 변동될 수 있습니다</p><br/><p>※ 개인의 신분과 관련된 민원으로서 행정당국은 대리 및 대행을 매우 엄격하게 제한하고 있습니다. 당사무소는 각종 신고서, 신청서 작성만 대행하며 민원서류 제출은 고객이 직접 해야 합니다.</p>"],

    "subContent": {
        "title": "거주자(내국인)의 주민등록 신고",
        "subtext": ["<p>국내에 거주하는 한국인(귀화자 포함), 영주귀국신고를 한 재외국민은 다음과 같은 신고를 할 수 있습니다.</p><p>ⓐ 주민등록신고: 거주자가 귀화한 자 등 종전에 주민등록을 한 적이 없는 경우<br/>ⓑ 주민등록 정정신고: 주민등록 신고사항에 변동이 있는 경우<br/>ⓒ 주민등록 말소신고: 거주자 본인이 주민등록 말소를 원하는 경우 말소신고를 할 수 있습니다.<br/>ⓓ 거주불명등록신고: 거주자 본인이 실종, 가출한 경우 세대주 등이 신고할 수 있습니다.<br/>ⓔ 전입신고: 세대의 전부 또는 일부가 이사한 경우 14일 내에 신고해야 합니다.<br/>ⓕ 재등록 및 전입신고: 주민등록 말소자는 재등록을 할 수 있으며, 거주불명으로 등록된 자는 전입신고를 할 수 있습니다.</p><p>신고하지 않아도 처벌은 받지 않으나 이중으로 또는 허위사실을 신고한 경우 처벌 받을 수 있습니다.</p>"]
    },
    "subContent2": {
        "title": "주민등록번호 정정·변경신청",
        "subtext": ["<p>주민등록번호가 오류가 있는 경우 정정신청을 할 수 있습니다.</p><p>생명, 신체, 재산, 기타 일정한 범죄(성범죄, 사이버 명예훼손)로 피해를 입거가 입을 우려가 있는 경우 주민등록번호의 변경신청을 할 수 있습니다.</p><p>변경신청에 대해 시장, 군수, 구청장이 변경할 수 없다고 통지시 이에 대해 이의신청을 할 수 있습니다.</p>"]
    },
    "subContent4": {
        "title": "주민등록표 열람, 교부 신청",
        "subtext": ["<p>주민등록표의 열람 또는 그 등본(세대별), 초본(개인별)의 교부를 받으려는 경우 시청, 군청, 구청, 읍면동사무소에 신청할 수 있습니다.</p><p>신청권자는 본인, 세대원, 위임을 받은 자이나, 일정한 경우 위임이 없는 경우에도 증명자료를 첨부해 신청할 수 있습니다.</p>"]
    },
    "subContent5": {
        "title": "이해관계 사실확인서 발급",
        "subtext": ["<p>50만원을 초과하는 채권·채무 관계자(금융회사 제외)는 지금 당장 변제해야 하는 경우에 위임 없이 당사자의 주민등록표 초본의 열람 및 교부를 신청할 수 있는데, 이를 위해서는 계약서와 반송된 내용증명 우편을 첨부자료로 제출해야 합니다.</p><p>또는 계약서 대신 행정사 등이 작성한 이해관계사실확인서와 반송된 내용증명 우편을 첨부자료로 제출할 수도 있습니다.</p><p>당사무소는 이해관계 사실확인서를 발급할 수 있습니다.</p>"]
    },
    "subContent6": {
        "title": "전입세대 열람신청",
        "subtext": ["<p>경매참가자, 건물의 매매계약자, 건물의 임대차계약자 등 일정한 경우 해당 물건(건물)의 소재지에 주민등록이 되어 있는 세대주와 동거인의 성명과 전입일자의 열람을 신청할 수 있습니다.</p>"]
    },
    "subContent7": {
        "title": "열람·교부 제한신청, 해제신청",
        "subtext": ["<p>가정폭력피해자는 특정 가해자가 피해자 자신과 세대원의 주민등록표의 열람, 등초본 교부를 할 수 없도록 신청할 수 있습니다. 그 해제를 신청할 수도 있습니다.</p>"]
    },
    "subContent3": {
        "title": "직권조치와 이의신청",
        "subtext": ["<p>대상자가 주민등록에 관한 의무적인 신고를 하지 않거나 허위로 신고한 경우에는 시청, 군청, 구청에서 사실조사를 할 수 있습니다. 사실조사 결과 이를 확인한 경우 일정한 기간 내에 사실대로 신고할 것을 최고하거나 공고를 합니다. 그 기간 내에 제대로 신고하지 않을 경우 직권으로 주민등록을 하거나 등록사항을 정정, 말소, 거주불명등록을 합니다.</p><p>위와 같은 직권조치에 대해 당사자는 이의가 있으면 처분일 또는 통지, 공고된 날부터 30일 내에 행정기관에 이의신청을 할 수 있습니다.</p>"]
    }
}

const Residentregistration = () => {


    let history = useHistory();

    const [activeFilter, setActiveFilter] = useState("residentregistration");
    const activeFilterColor = "/residentregistration";
    
    const handleChange = (e) => {
        setActiveFilter(e.target.id);
    }
    
    useEffect(()=>{
        history.push(activeFilter)
    },[activeFilter])
    return (
        <>
            <SEO title="residentregistration" />
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
                                                        <h5 className="subtitle">{data.subContent.title}</h5>
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
                                                        <h5 className="subtitle">{data.subContent4.title}</h5>
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
                                                    <div className="view-btn mt--50">
                                                        <h5 className="subtitle">{data.subContent7.title}</h5>
                                                        <div className="description" dangerouslySetInnerHTML={{__html: data.subContent7.subtext}}></div>
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
export default Residentregistration;