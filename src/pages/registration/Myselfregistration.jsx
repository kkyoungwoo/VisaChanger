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
    "title": "본인 등록신고",
    "date": "행정 민원",
    "client": "본인이 등록",
    "month":"빠른 심사",
    
    "subtitle": "상세 내용",
    "body": ["<p>상황에 따라 심사기간이 변동될 수 있습니다</p><br/><p>※ 개인의 신분과 관련된 민원으로서 행정당국은 대리 및 대행을 매우 엄격하게 제한하고 있습니다. 당사무소는 각종 신고서, 신청서 작성만 대행하며 민원서류 제출은 고객이 직접 해야 합니다.</p>"],

    "subContent": {
        "title": "혼인신고",
        "subtext": ["<p>혼인당사자 쌍방은  원할 경우 언제든지 혼인신고를 할 수 있습니다.</p><p>혼인신고를 할 때 쌍방은 장래 태어날 자녀의 성본에 대해 협의할 수 있으며 혼인신고시 그 협의서를 제출해야 합니다.</p>"]
    },
    "subContent2": {
        "title": "혼인신고 수리불가신고",
        "subtext": ["<p>6개월 범위 내에서 특정인(스토커)이 자신과의 혼인신고를 할 수 없도록 할 수 있습니다. 이는 스토커 피해 방지를 위한 것입니다</p>"]
    },
    "subContent3": {
        "title": "협의이혼",
        "subtext": ["<p>부부가 이혼하기로 합의한 경우 쌍방 또는 일방이 이혼신고를 할 수 있습니다. 다만 이혼신고를 위해서는 반드시 가정법원의 확인절차를 거쳐야 하며, 가정법원의 이혼의사 확인 후 3개월 내에 이혼신고를 해야 합니다.</p><p>가정법원의 확인절차가 시작되기 전에 자녀의 양육사항, 친권자에 관한 협의 또는 가정법원의 심판확정이 필요합니다.</p><p>미성년 자녀가 있는 경우에는 이혼신고와 함께 친권자지정신고도 해야 합니다.</p><p>가정법원의 이혼의사 확인 후 일방 또는 쌍방이 이혼의사를 철회할 수 있습니다. 이 경우 이혼의사철회서를 시읍면장에 제출해야 합니다.</p>"]
    },
    "subContent4": {
        "title": "재판상 이혼",
        "subtext": ["<p>민법에 정해진 이혼사유에 해당하는 경우 부부 일방의 청구로 가정법원의 재판에 의해 이혼할 수 있습니다. 재판 또는 조정이 끝난 날부터 1개월 내에 이혼신고를 해야 합니다.</p>"]
    },
    "subContent5": {
        "title": "사망신고",
        "subtext": ["<p>동거친족(같이 살았던 친족)이 1개월 내에 사망신고를 해야 합니다. 병원, 교도소 기타 시설에서 사망한 때에 친족이 신고할 수 없는 경우에는 그 시설의 장이 신고해야 합니다.</p><p>그 외의 친족(비동거친족), 친족이 아니지만 같이 살았던 자(동거인 *예: 사실혼), 사망장소의 관리자/동장/통장/이장도 신고할 수 있습니다.</p>"]
    },
    "subContent6": {
        "title": "실종선고신고, 취소신고",
        "subtext": ["<p>법원의 실종선고, 실종선고의 취소선고 재판이 있는 경우 1개월 내에 이를 신고해야 합니다.</p>"]
    },
    "subContent7": {
        "title": "개명신고",
        "subtext": ["<p>가정법원에 개명허가신청을 하여 허가를 받은 후에 개명신고를 할 수 있습니다.</p><p>가정법원은 범죄경력조회, 신용정보조회 등을 먼저 하게 되는데 대체로 범죄, 법령 회피 등의 나쁜 의도가 없는 한 개명허가를 내어 줍니다.</p>"]
    }
}

const Myselfregistration = () => {

    let history = useHistory();

    const [activeFilter, setActiveFilter] = useState("myselfregistration");
    const activeFilterColor = "/myselfregistration";
    
    const handleChange = (e) => {
        setActiveFilter(e.target.id);
    }
    
    useEffect(()=>{
        history.push(activeFilter)
    },[activeFilter])

    return (
        <>
            <SEO title="myselfregistration" />
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
export default Myselfregistration;