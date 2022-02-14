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
      texter: "출입국 사범 문의",
      siteaddress:"/illegalitylitigation"
    },
    {
      id: 2,
      text: "2",
      texter: "불법체류자 구제",
      siteaddress:"/immigrationlitigation"
    },
    {
      id: 3,
      text: "3",
      texter: "보호 일시해제",
      siteaddress:"/protectionlitigation"
    }
];

const data = 
{
    "id": 1,
    "title": "",
    "date": "-",
    "client": "현재 상황에 맞는 구제방안 제시",
    "month":"상담 무료",
    
    "subtitle": "상세 내용",
    "body": ["<p>원칙상 외국인 불법체류자는 불법체류의 기간에 따라 최대 3천만원의 범칙금이 부과되기도 하고, 최대 10년간 국내 재입국이 제한되기도 하며, 사안에 따라서는 영구 입국금지가 되는 경우도 있습니다.<br/>그리고 일정한 기간을 주고 그 기간내에 일정 요건을 되는 불체자는 자진출국을 하는 경우 일정한 인센티브를 주는 경우도 있습니다. 이런 기간이 있을때는 본인이 조건이 되는지 등을 잘 파악을 해봐야 합니다.</p>"],

    "content" : [
            {
                "title": "불법체류의 의미",
                "subtext": ["<p>국내에 불법체류중인 외국인들, 그리고 지금은 합법적으로 체류중이기는 하지만 그 기간이 얼마 남지 않아 귀국이나 연장을 해야 하지만 각종 사유로 인하여 그러지 못하고 불법체류를 마음먹고 있는 외국인들이 몇달부터 길게는 10여년 또는 그 이상 까지도 한국에 머물며 생활하는 것</p>"]
            },
            {
                "title": "구제 방법",
                "subtext": ["<p>THE K 컨설팅의 여러가지 사안에 대하여 많은 경험과 인프라를 가지고 해당 국가에서 제시하는 상황과 조건에 따라 최선의 방안을 찾아 한국에 있는 외국인 들도 합법적으로 보장될 수 있는 부분들을 찾아 출국이나 국내 잔류, 또는 재입국 등의 최선의 선택을 안내해주고 있습니다.</p>"]
            },
        ]
}


const Immigrationlitigation = () => {

    let history = useHistory();

    const [activeFilter, setActiveFilter] = useState("immigrationlitigation");
    const activeFilterColor = "/immigrationlitigation";
    
    const handleChange = (e) => {
        setActiveFilter(e.target.id);
    }
    
    useEffect(()=>{
        history.push(activeFilter)
    },[activeFilter])

    return (
        <>
            <SEO title="Immigrationlitigation" />
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
                        <BreadcrumbOne 
                        title="불법체류자 구제"
                        rootUrl="/"
                        parentUrl="Home"
                        currentUrl="각종 사유로 인하여 비자연장을 하지 못하고 있는 외국인 컨설팅"
                        />
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
export default Immigrationlitigation;