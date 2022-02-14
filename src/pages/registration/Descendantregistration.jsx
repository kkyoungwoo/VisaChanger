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
    "title": "자녀 등록신고",
    "date": "행정 민원",
    "client": "본인이 등록",
    "month":"빠른 심사",
    
    "subtitle": "상세 내용",
    "body": ["<p>상황에 따라 심사기간이 변동될 수 있습니다</p><br/><p>※ 개인의 신분과 관련된 민원으로서 행정당국은 대리 및 대행을 매우 엄격하게 제한하고 있습니다. 당사무소는 각종 신고서, 신청서 작성만 대행하며 민원서류 제출은 고객이 직접 해야 합니다.</p>"],

    "subContent": {
        "title": "혼인 중 출생자의 신고",
        "subtext": ["<p>혼인 중에 자녀가 출생한 경우 아버지 또는 어머니(생모)가 1개월 내에 출생신고를 해야 합니다. 아버지와 어머니는 혼인 중이어야 합니다. 설령 남편의 자녀가 아닌 경우에도 원칙적으로 남편의 자녀로 출생신고를 해야 합니다.</p><p>아버지와 어머니가 출생신고를 할 수 없는 사정이 있는 경우 동거친족, 분만에 관여한 의사 등이 출생신고를 해야 합니다.</p><p>자녀의 성본은 원칙적으로 아버지의 성본을 따릅니다. 다만 아버지와 어머니가 혼인할 당시에 어머니의 성본을 따르기로 미리 협의했을 경우 어머니의 성본에 따라 출생신고를 해야 합니다.</p>"]
    },
    "subContent2": {
        "title": "혼인 외 출생자(혼외자=사생아)의 신고",
        "subtext": ["<p>미혼인 여자가 출산한 경우(미혼모) 또는 혼인 중인 여자가 외도로 출산한 경우 생모가 1개월 내에 출생신고를 해야 합니다.</p><p>생모가 출생신고를 할 수 없는 사정이 있는 경우 동거친족, 분만에 관여한 의사 등이 출생신고를 해야 합니다.</p><p>만일 생부(친아버지)가 별도의 인지신고 없이 출생신고를 한 경우 그 신고는 인지의 효력이 있습니다.</p><p>자녀의 성본은 생모의 성본을 따릅니다. 다만 생부의 성본을 알 수 있는 경우에는 생부의 성본을 따를 수 있습니다.</p>"]
    },
    "subContent3": {
        "title": "임의인지신고",
        "subtext": ["<p>생부 또는 생모가 혼외자(사생아)가 자신의 친자녀임을 인정하는 경우 인지신고를 할 수 있습니다. 생모 보다는 대부분 생부가 인지를 하게 됩니다.</p><p>인지된 자녀의 성본은 원칙적으로 아버지의 성본을 따릅니다. 다만 부모가 협의 또는 협의가 안되면 가정법원의 허가를 받아 종전의 성본을 계속 사용할 수도 있습니다.(성본계속사용신고) 다른 유형의 인지신고(아래)를 하는 경우도 이와 같습니다</p>"]
    },
    "subContent4": {
        "title": "강제인지신고",
        "subtext": ["<p>생부 또는 생모가 인지를 하지 않는 경우 혼외자 등이 가정법원에 인지청구소송을 제기하여 판결 또는 조정으로 인지를 받을 수 있습니다. 이 경우 소제기자 등이 1개월 내에 인지신고를 해야 합니다.</p><p>다만 친생자 추정을 받고 있는 경우에는 친생부인소송을 먼저 제기해야 합니다.</p>"]
    },
    "subContent5": {
        "title": "자녀의 성본변경신고",
        "subtext": ["<p>자녀의 복리를 위해 성본을 변경해야 할 경우 가정법원의 허가를 받아야 합니다.  허가를 받은 후 1개월 내에 성본변경신고를 해야 합니다.</p>"]
    },
    "subContent6": {
        "title": "자녀의 복리에 대한 판단기준",
        "subtext": ["<p>가정법원은 자녀의 성본을 변경하지 않을 경우 겪게 될 가족 사이의 정신적 고통, 사회생활에서의 불이익과 성본을 변경했을 경우 겪게 될 친부나 형제자매 등과의 유대관계 단절, 부양중단 등의 불이익을 비교형량하여 허가여부를 판단합니다.</p><p>다만 범죄은폐나 법령제한의 회피 등의 불순한 의도가 없는 한 원칙적으로 성본변경을 허가해 줍니다.</p>"]
    }
}

const Descendantregistration = () => {


    let history = useHistory();

    const [activeFilter, setActiveFilter] = useState("descendantregistration");
    const activeFilterColor = "/descendantregistration";
    
    const handleChange = (e) => {
        setActiveFilter(e.target.id);
    }
    
    useEffect(()=>{
        history.push(activeFilter)
    },[activeFilter])

    return (
        <>
            <SEO title="descendantregistration" />
            <Layout>
                <div className="rwt-portfolio-details rn-section-gap">
                    <div className="container">
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
export default Descendantregistration;