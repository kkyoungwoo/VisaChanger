import React, { useState, useEffect } from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../elements/breadcrumb/BreadcrumbOne";
import CountUp from 'react-countup';
import TrackVisibility from "react-on-screen";
import CounterUpFive from '../../elements/counterup/CounterUpFive';
import FooterThree from '../../common/footer/FooterThree';

import { useHistory } from 'react-router-dom'


const filters = [
    {
      id: 1,
      text: "1",
      texter: "형사 사건",
      siteaddress:"/criminallitigation"
    },
    {
      id: 2,
      text: "2",
      texter: "민사 사건",
      siteaddress:"/civillitigation"
    },
    {
      id: 3,
      text: "3",
      texter: "가사 사건",
      siteaddress:"/familylitigation"
    },
    {
      id: 4,
      text: "4",
      texter: "행정 사건",
      siteaddress:"/administrativelitigation"
    }
];

const Data = 
{
        "id": 1,
        "title": "THE K 행정업무 솔루션",
        "date": "행정사 자격, 사설 탐정사 자격 보유",
        "client": "전국 가능",
        "category": "무료 상담",
        "subtitle": "진행 가능한 행정 업무",
        "body": ["<p>1. 운전면허 관련 구제<br/>(1-1) 단순음주<br/>(1-2) 음주사고<br/>2. 국가 보훈 (장애 여부)<br/>3. 영업정지 과징금 해결<br/>4. 내용증명<br/>5. 토지보상금 증액<br/>6. 학교폭력구제<br/>7. 협회설립 / 민간자격<br/>8. 외국인초청 / 비자변경<br/>9. 국제결혼서류 대행<br/>10. 사실조사 및 증거수집<br/>11. 사람 찾기<br/>12. 녹취록 등 민원서류<br/>13. 기타 문제 행정사 직접 상담</p>"],

        "largeImage": "images/portfolio/portfolio-07.jpg"

    }

const Administrativelitigation = () => {

    let history = useHistory();

    const [activeFilter, setActiveFilter] = useState("administrativelitigation");
    const activeFilterColor = "/administrativelitigation";
    
    const handleChange = (e) => {
        setActiveFilter(e.target.id);
    }
    
    useEffect(()=>{
        history.push(activeFilter)
    },[activeFilter])

    return (
        <>
            <SEO title="administrativelitigation" />
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
                    <BreadcrumbOne 
                        title="행정사건 구제 및 심판"
                        rootUrl="/"
                        parentUrl="Home"
                        currentUrl="행정 관청이 행하는 위법한 처분의 취소, 변경 또는 공법에서 법율에 관한 소송 사건"
                    />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="inner">
                                    <div className="details-list">
                                        <div className="thumbnail alignwide">
                                            <img className="radius w-100" src={`${process.env.PUBLIC_URL}/${Data.largeImage}`} alt="Corporate Image" />
                                        </div>
                                        <div className="row mt--40 row--30">
                                            <div className="col-lg-6">
                                                <div className="content-left">
                                                    <h4 className="title">{Data.title}</h4>
                                                    <div className="single-list-wrapper">
                                                        <div className="single-list">
                                                            <label>요약:</label>
                                                            <span>{Data.date}</span>
                                                        </div>
                                                        <div className="single-list">
                                                            <label>업무 지역:</label>
                                                            <span>{Data.client}</span>
                                                        </div>
                                                        <div className="single-list">
                                                            <label>요금:</label>
                                                            <span>{Data.category}</span>
                                                        </div>
                                                    </div>
                                                    <CounterUpFive column="col-lg-6 col-md-6 mt--50 col-sm-6 col-12" counterStyle="counter-style-4" textALign="text-center" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mt_md--30 mt_sm--30">
                                                <div className="content-right">
                                                    <h5 className="subtitle">{Data.subtitle}</h5>
                                                    <div className="description" dangerouslySetInnerHTML={{__html: Data.body}}></div>
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
export default Administrativelitigation;