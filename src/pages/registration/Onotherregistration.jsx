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
    "title": "기타 절차 안내",
    "date": "행정 민원",
    "client": "본인이 등록",
    "month":"빠른 심사",
    
    "subtitle": "상세 내용",
    "body": ["<p>상황에 따라 심사기간이 변동될 수 있습니다</p><br/><p>※ 개인의 신분과 관련된 민원으로서 행정당국은 대리 및 대행을 매우 엄격하게 제한하고 있습니다. 당사무소는 각종 신고서, 신청서 작성만 대행하며 민원서류 제출은 고객이 직접 해야 합니다.</p>"],

    "subContent": {
        "title": "등록기준지 변경신고",
        "subtext": ["<p>누구든지 자유롭게 등록기준지를 변경할 수 있으며 새로운 등록기준지의 시읍면장에게 변경신고를 합니다.</p>"]
    },
    "subContent2": {
        "title": "가족관계등록부 존재신고",
        "subtext": ["<p>가족관계등록부가 없거나 불불명한 자(고아, 기아 등)에 관한 어떤 신고가 수리된 후에 → 가족관계등록이 되어 있거나 등록이 가능하다는 사실이 판명된 경우 → 그 사실을 안날로부터 1개월 내에 그 신고를 수리한 관공서에 신고해야 합니다.</p>"]
    },
    "subContent3": {
        "title": "가족관계등록 창설신고",
        "subtext": ["<p>가족관계등록부의 기록에 흠결이 있는 경우 본인이나 이해관계인은 시읍면장에 정정신청을 할 수 있습니다.</p><p>다만 중대한 사항인 경우 가정법원의 허가나 판결을 받아야 합니다.</p>"]
    },
    "subContent4": {
        "title": "가족관계등록부 정정신청",
        "subtext": ["<p>단독 친권자로 지정된 부모 일방이 사망, 친권상실선고, 대리권과 재산관리권의 상실선고, 소재불명 등의 사유가 있는 경우 부모 타방, 미성년자 본인, 미성년자의 친족이 일정기간 내에 가정법원에 부모 타방을 친권자로 지정할 것을 가정법원에 청구할 수 있습니다.</p><p>만일 일정기간 내에 청구가 없을 경우 가정법원은 직권 또는 또다른 청구권자의 청구에 의해 미성년후견인을 선임할 수 있습니다. 이후에 자의 복리를 위해 후견을 종료하고 다시 부나 모 일방 또는 쌍방을 친권자로 지정할 수 있습니다.</p><p>친권자가 지정된 후 1개월 내에 친권자 지정신고를 해야 합니다.</p>"]
    },
    "subContent5": {
        "title": "가족관계등록부 재작성신청",
        "subtext": ["<p>이해관계인은 일정한 사유에 해당하는 경우 시읍면장에 등록부 재작성을 신청할 수 있습니다.</p><p>가족관계등록부의 재작성은 등록부에 정정 사실이 나타나는 것을 완전히 삭제하기 위한 절차입니다.</p>"]
    },
    "subContent6": {
        "title": "추후보완신고",
        "subtext": ["<p>등록신고를 관공서에 수리했으나 기록 하기 전에 흠결이 있음을 발견한 경우 추후보완신고를 할 수 있습니다.</p><p>등록부에 기록한 후에도 예외적으로 추후보완신고를 할 수 있습니다. 예) 명 미정의 출생신고</p>"]
    },
    "subContent7": {
        "title": "변경된 주민등록번호 공시제한 신청",
        "subtext": ["<p>유출된 주민등록번호로 인해 생명, 신체, 재산에 피해를 입었거나 입을 우려가 있어 주민등록번호의 변경을 한 경우에 그 변경된 주민등록번호가 특정인(비공시 대상자)에 대해 공시되지 않도록 신청할 수 있습니다.</p>"]
    }
}

const Onotherregistration = () => {


    let history = useHistory();

    const [activeFilter, setActiveFilter] = useState("onotherregistration");
    const activeFilterColor = "/onotherregistration";
    
    const handleChange = (e) => {
        setActiveFilter(e.target.id);
    }
    
    useEffect(()=>{
        history.push(activeFilter)
    },[activeFilter])

    return (
        <>
            <SEO title="onotherregistration" />
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
export default Onotherregistration;