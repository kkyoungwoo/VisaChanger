import React, { useState, useEffect } from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../elements/breadcrumb/BreadcrumbOne";
import CountUp from 'react-countup';
import TrackVisibility from "react-on-screen";
import CounterUpTwo from '../../elements/counterup/CounterUpTwo';
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
        "title": "THE K 형사업무 솔루션",
        "date": "법무법인과 협력하여 진행",
        "client": "전국 가능",
        "category": "무료 상담",
        "subtitle": "진행 가능한 형사 업무",
        "body": ["<p>1. 구속사건<br/>(1-1)구속영장실질심사<br/>(1-2)구속적부심사<br/>(1-3)보석<br/>(1-4)집행유예<br/>(1-5)감형<br/><br/><br/>2. 형사재판<br/>(2-1) 형사재판의 시작<br/>(2-2) 형사재판절차<br/>(2-3) 변호사선임</p>"],

        "largeImage": "images/portfolio/portfolio-05.jpg"
        
    }

const Criminallitigation = () => {

    let history = useHistory();

    const [activeFilter, setActiveFilter] = useState("criminallitigation");
    const activeFilterColor = "/criminallitigation";
    
    const handleChange = (e) => {
        setActiveFilter(e.target.id);
    }
    
    useEffect(()=>{
        history.push(activeFilter)
    },[activeFilter])

    return (
        <>
            <SEO title="criminallitigation" />
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
                        title="형사사건 구제 및 심판"
                        rootUrl="/"
                        parentUrl="Home"
                        currentUrl="형법의 적용을 받게 되는 사건"
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
                                                    <CounterUpTwo column="col-lg-6 col-md-6 mt--50 col-sm-6 col-12" counterStyle="counter-style-4" textALign="text-center" />
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
export default Criminallitigation;