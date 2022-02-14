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
    "title": "친권 등록신고",
    "date": "행정 민원",
    "client": "본인이 등록",
    "month":"빠른 심사",
    
    "subtitle": "상세 내용",
    "body": ["<p>상황에 따라 심사기간이 변동될 수 있습니다</p><br/><p>※ 개인의 신분과 관련된 민원으로서 행정당국은 대리 및 대행을 매우 엄격하게 제한하고 있습니다. 당사무소는 각종 신고서, 신청서 작성만 대행하며 민원서류 제출은 고객이 직접 해야 합니다.</p>"],

    "subContent": {
        "title": "친권자",
        "subtext": ["<p>부모는 미성년자인 자녀의 친권자가 됩니다. 부모가 혼인 중에는 공동으로 친권을 행사하지만 일방이 친권을 행사할 수 없을 때에는 다른 일방이 이를 행사합니다</p>"]
    },
    "subContent2": {
        "title": "친권자 임의지정",
        "subtext": ["<p>아버지가 혼외자를 임의인지한 경우나 부모가 협의이혼한 경우에는 부모가 협의로 친권자를 지정해야 합니다. 협의가 이뤄지지 않은 경우 가정법원이 지정합니다. 보통 부모 중 일방을 단독 친권자로 지정하지만 쌍방 모두를 친권자(공동친권자)로 지정할 수도 있습니다.</p><p>친권자를 정한 후 1개월 내에 친권자 지정신고를 해야 하는데, 일반적으로 인지나 이혼의 신고서에 친권자를 기재하는 방식으로 합니다. 독립적으로 친권자 지정신고를 할 수도 있습니다.</p>"]
    },
    "subContent3": {
        "title": "친권자 직권지정",
        "subtext": ["<p>가정법원은 혼인취소재판, 재판상 이혼, 인지청구소송(강제인지)에서 직권으로 친권자를 정합니다. 혼인이 무효인 때에도 친권자를 지정해야 하는 경우가 있습니다.</p><p>친권자가 지정된 후 1개월 내에 친권자 지정신고를 해야 하는데, 그 방식은 임의지정의 경우와 같습니다.</p>"]
    },
    "subContent4": {
        "title": "친권자 청구에 의한 지정",
        "subtext": ["<p>단독 친권자로 지정된 부모 일방이 사망, 친권상실선고, 대리권과 재산관리권의 상실선고, 소재불명 등의 사유가 있는 경우 부모 타방, 미성년자 본인, 미성년자의 친족이 일정기간 내에 가정법원에 부모 타방을 친권자로 지정할 것을 가정법원에 청구할 수 있습니다.</p><p>만일 일정기간 내에 청구가 없을 경우 가정법원은 직권 또는 또다른 청구권자의 청구에 의해 미성년후견인을 선임할 수 있습니다. 이후에 자의 복리를 위해 후견을 종료하고 다시 부나 모 일방 또는 쌍방을 친권자로 지정할 수 있습니다.</p><p>친권자가 지정된 후 1개월 내에 친권자 지정신고를 해야 합니다.</p>"]
    },
    "subContent5": {
        "title": "친권자 변경신고",
        "subtext": ["<p>자의 복리를 위해서 자녀의 4촌 이내의 친족이 가정법원에 청구하면 친권자를 다른 일방으로 변경할 수 있습니다.</p><p>친권자가 변경된 후 1개월 내에 친권자 변경신고를 해야 합니다.</p>"]
    },
    "subContent6": {
        "title": "친권자임무대행자 선임신고",
        "subtext": ["<p>기타 신고 사항</p>"]
    },
    "subContent7": {
        "title": "친권의 상실, 일시정지, 일부제한에 관한 신고와 그 회복신고",
        "subtext": ["<p>기타 신고 사항</p>"]
    },
    "subContent8": {
        "title": "법률행위 대리권, 재산관리권 상실, 사퇴 신고와 그 회복신고",
        "subtext": ["<p>기타 신고 사항</p>"]
    }
}

const Parentalregistration = () => {


    let history = useHistory();

    const [activeFilter, setActiveFilter] = useState("parentalregistration");
    const activeFilterColor = "/parentalregistration";
    
    const handleChange = (e) => {
        setActiveFilter(e.target.id);
    }
    
    useEffect(()=>{
        history.push(activeFilter)
    },[activeFilter])

    return (
        <>
            <SEO title="parentalregistration" />
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
                                                    <div className="view-btn mt--50">
                                                        <h5 className="subtitle">{data.subContent8.title}</h5>
                                                        <div className="description" dangerouslySetInnerHTML={{__html: data.subContent8.subtext}}></div>
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
export default Parentalregistration;