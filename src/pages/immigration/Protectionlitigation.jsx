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
    "client": "보호 일시해제",
    "month":"상담 무료",
    
    "subtitle": "상세 내용",
    "body": ["<p>보호조치 해제 및 강제 출국 이의제기 절차를 진행하여 부당한 문제를 해결할 수 있습니다.</p>"],

    "content" : [
            {
                "title": "보호조치를 실시하는 이유",
                "subtext": ["<p>강제퇴거 명령을 받게 된 외국인 중에서 도주할 우려가 있는 외국인에 대해서는 보호조치를 할 수 있습니다. 강제퇴거 명령 대상은 주로 불법체류자와 형사사범입니다.<br/>이러한 외국인이 도주를 하지 못하도록 방지하는 것이 바로 보호조치이며, 출국 전까지 외국인 보호소에 수감됩니다.<br/>보통 10일 이내로 보호기간이 지정되지만 부득이한 사유가 있다면 10일을 초과하지 않는 범위 내에서 1회 연장할 수 있고 강제퇴거 명령을 받은 외국인은 본국으로 송환이 가능해질 때까지 보호조치를 받게 됩니다</p>"]
            },
            {
                "title": "일시해제 청구 사유",
                "subtext": ["<p>1. 외국인의 생명과 신체에 중대한 위협이 생긴 상황<br/>2. 상당한 금액의 보증금이나 임금을 돌려받지 못한 상황<br/>3. 중대한 인도적 사유가 있는 경우에도 일시해제를 청구가능 (한국에서 가정을 만든 외국인 등)<br/>4. 기타</p>"]
            },
            {
                "title": "일시해제 신청 방법",
                "subtext": ["<p>강제퇴거 명령을 받게 되어 외국인 보호소에서 보호조치를 받게 되었다면 7일 이내에 이의신청을 할 수가 있습니다.<br/>이때 이의신청이 인용되면 보호조치 일시해제가 되므로 특별체류허가를 받을 수 있게 됩니다.<br/>그러나 만약 이의신청이 인용되지 않았다면 절차가 까다롭고 복잡해 지게 됩니다.</p>"]
            },
        ]
}


const Protectionlitigation = () => {

    let history = useHistory();

    const [activeFilter, setActiveFilter] = useState("protectionlitigation");
    const activeFilterColor = "/protectionlitigation";
    
    const handleChange = (e) => {
        setActiveFilter(e.target.id);
    }
    
    useEffect(()=>{
        history.push(activeFilter)
    },[activeFilter])

    return (
        <>
            <SEO title="Protectionlitigation" />
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
                        title="보호 일시해제"
                        rootUrl="/"
                        parentUrl="Home"
                        currentUrl="외국인 보호조치를 일시해제를 통해 해결할 수 있습니다."
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
export default Protectionlitigation;