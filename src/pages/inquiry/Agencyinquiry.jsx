import React, { useState, useEffect } from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../elements/breadcrumb/BreadcrumbOne";
import { useHistory } from 'react-router-dom'
import FooterThree from '../../common/footer/FooterThree';

const filters = [
    {
      id: 1,
      text: "1",
      texter: "위임 / 대행",
      siteaddress:"/agencyinquiry"
    }
];

const data = 
{
    "id": 1,
    "title": "",
    "date": "-",
    "client": "각종 외국인 출입국 관련 서류의 대행을 진행하고 있습니다.",
    "month":"상담 무료",
    
    "subtitle": "상세 내용",
    "body": ["<p>출입국 근처에 사무실이 위치하고 있기 때문에 여러가지의 서류 대행업무를 빠르고 저렴하게 진행이 가능합니다.</p>"],

    "content" : [
            {
                "title": "방문위임",
                "subtext": ["<p></p>"]
            },
            {
                "title": "1. 사전교섭",
                "subtext": ["<p>사무소를 방문하기 전에 이메일, 채팅, 전화 등을 통해 충분한 사전교섭을 거칩니다.</p>"]
            },
            {
                "title": "2. 위임계약 체결",
                "subtext": ["<p>위임계약 체결을 위해서는 신분증, 특히 외국인은 여권과 외국인등록증(또는 국내거소신고증)을 지참해 방문해야 합니다.<br/>* 한국인은 한국여권을 신분증으로 사용 불가<br/><br/>위임계약서 2매와 개인정보 제공 동의서, 위임장을 작성하여 각각 서명합니다.<br/><br/>부가세(vat), 관공서 납부 수수료와 제3자 대행 수수료를 제외한 요금이 10만원 이하인 소액위임사건은 구두계약으로 대체하며, 다만 고객이 원할 경우 간략화된 위임계약서 및 개인정보 제공 동의서를 이용합니다.<br/><br/>* 관공서 납부 수수료: 수입인지, 수입증지<br/>* 제3자 대행 수수료: 배송, 아포스티유, 영사확인, 공증, 번역을 담당하는 업체에 지급하는 수수료</p>"]
            },
            {
                "title": "3. 요금 결제",
                "subtext": ["<p>요금 = 당사무소가 받는 수수료 + 관공서에 납부하는 수수료 + 제3자 대행 수수료(배송, 아포스티유, 공증 등)<br/>* 당사무소에서 작성만 대행하고 신청서류를 고객이 직접 관공서에 제출하는 경우에는 관공서 납부 수수료를 제외합니다.<br/><br/>신용카드, 체크카드 결제를 원칙으로 합니다. 휴대폰을 이용한 즉석 계좌이체, 현금 결제도 가능합니다. 다만 수표와 어음, 외국통화는 받지 않습니다.<br/>* 현금영수증(소득공제용/지출증빙용) 발급</p>"]
            },
            {
                "title": "무방문 인터넷 위임",
                "subtext": ["<p></p>"]
            },
            {
                "title": "1. 사전교섭",
                "subtext": ["<p>이메일, 채팅, 전화 등을 통해 충분한 사전교섭을 거칩니다.</p>"]
            },
            {
                "title": "2. 위임계약 체결",
                "subtext": ["<p>대략적으로 다음과 같은 절차를 거칩니다. (자세한 절차는 개별 협의)<br/>1. 사진촬영 또는 영상통화로 신분확인<br/>2. 당사무소에서 위임계약서 2매와 개인정보 제공 동의서, 위임장 서식을 고객에게 이메일 전송<br/>3. 고객은 위임계약서, 개인정보 제공 동의서, 위임장을 작성하여 파일을 이메일 전송 또는 출력한 서류를 우편발송<br/>4. 부가세(vat), 관공서 납부 수수료와 제3자 대행 수수료를 제외한 요금이 10만원 이하인 소액위임사건은 고객이 원할 경우에 한하여 위 절차(1 ~ 3)를 진행하되, 간략화된 위임계약서를 이용합니다.</p>"]
            },
            {
                "title": "3. 요금 결제",
                "subtext": ["<p>요금은 방문위임의 경우와 같습니다.<br/><br/>고객은 계약 관련 서류의 이메일 전송/ 우편발송 직후에 결제를 해야 합니다.<br/><br/>계좌이체(무통장입금)를 원칙으로 합니다. 다만 신청서류를 관공서에 제출하지 않고 고객에게 배송하는 경우에는 에스크로를 이용할 수 있습니다.<br/>*현금영수증(소득공제용/지출증빙용)은 요청시 이메일로 전송합니다.<br/>*당사무소에서 실시간으로 입금을 확인하므로 고객은 입금 후 전화나 메일로 당사무소에 통지할 필요가 없습니다.<br/><br/>외국인, 해외에 거주하는 한국인은 카드결제(credit and check card) 및 PAYPAL을 이용해 결제할 수 있습니다.<br/>*계좌이체는 원화(KRW), 카드 및 페이팔 결제는 달러(USD) 이용</p>"]
            },
            {
                "title": "전자신청(온라인 민원)",
                "subtext": ["<p>당사무소는 고객이 원할 경우 인터넷 민원신청을 대리 및 대행할 수 있습니다.</p>"]
            }
        ]
}


const Agencyinquiry = () => {

    let history = useHistory();

    const [activeFilter, setActiveFilter] = useState("agencyinquiry");
    const activeFilterColor = "/agencyinquiry";
    
    const handleChange = (e) => {
        setActiveFilter(e.target.id);
    }
    
    useEffect(()=>{
        history.push(activeFilter)
    },[activeFilter])

    return (
        <>
            <SEO title="VISA agencyinquiry" />
            <Layout>
                <BreadcrumbOne 
                    title="위임 / 대행"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="출입국 관련 업무를 위임받거나 대행합니다."
                />
                <div className="rwt-portfolio-details rn-section-gap">
                    {/*
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
                    </div>*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="inner">
                                    <div className="details-list">
                                        <div className="thumbnail alignwide">
                                        </div>
                                        <div className="row mt--0 row--30">
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
                                                            <label>요금:</label>
                                                            <span>{data.month}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mt--120">
                                                    <h3 className="subtitle">{data.subtitle}</h3>
                                                    <div className="description" dangerouslySetInnerHTML={{__html: data.body}}></div>
                                                    
                                                    {data.content.map((item,idx) => (
                                                    <div className="view-btn mt--50" key={idx}>
                                                        <h5 className="subtitle">{data.content[idx].title}</h5>
                                                        <div className="description" dangerouslySetInnerHTML={{__html: data.content[idx].subtext}}></div>
                                                    </div>
                                                    ))}
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
export default Agencyinquiry;