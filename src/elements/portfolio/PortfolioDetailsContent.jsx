import React, { useState, useEffect } from "react";
import PortfolioItem from "./PortfolioItem";
import PortfolioOne from "./PortfolioOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import PortfolioData from "../../data/portfolio/PortfolioData.json";
import FooterThree from '../../common/footer/FooterThree';

const filters = [
    {
      id: 1,
      text: "all",
      texter: "모든 비자",
    },
    {
      id: 2,
      text: "2",
      texter: "취업",
    },
    {
      id: 3,
      text: "3",
      texter: "거주",
    },
    {
      id: 4,
      text: "4",
      texter: "초대",
    },
    {
      id: 5,
      text: "5",
      texter: "결혼 / 이혼",
    },
    {
      id: 6,
      text: "6",
      texter: "재외동포",
    },
    {
      id: 7,
      text: "7",
      texter: "투자",
    }
];

const alldata = PortfolioData;

const PortfolioDetailsContent = ({ data }) => {

    const [getAllItems] = useState(alldata);
        const [dataVisibleCount, setDataVisibleCount] = useState(50);
        const [dataIncrement] = useState(6) ;
        const [noMorePost, setNoMorePost] = useState(false);
        const [activeFilter, setActiveFilter] = useState("");
        const [visibleItems, setVisibleItems] = useState([]);
        useEffect(() => {
            setActiveFilter(filters[0].text.toLowerCase());
            setVisibleItems(getAllItems.filter((item) => item.id <= dataVisibleCount));
        }, []);

        const handleChange = (e) => {
            e.preventDefault();
            setActiveFilter(e.target.className);
            let tempData;
            if (e.target.className === filters[0].text.toLowerCase()) {
              tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
            } else {
              tempData = getAllItems.filter(
                (data) =>
                  data.category === e.target.className &&
                  data.id <= dataVisibleCount
              );
            }
            setVisibleItems(tempData);
        };

    
    return (
        <div className="rwt-portfolio-details rn-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="inner">
                            <div className="details-list">
                                <div className="thumbnail alignwide">
                                </div>
                                <div className="row mt--40 row--30" >
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
                                            <div className="view-btn mt--50">
                                                {data.content.map((item,idx) => (
                                                <div className="view-btn mt--50" key={idx}>
                                                    <h5 className="subtitle">{data.content[idx].title}</h5>
                                                    <div className="description" dangerouslySetInnerHTML={{__html: data.content[idx].subtext}}></div>
                                                </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mt_md--30 mt_sm--30">
                                        <div className="content">
                                            <h5 className="subtitle">{data.subtitle}</h5>
                                            <div className="description" dangerouslySetInnerHTML={{__html: data.body}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/**하단 비자 종류 */}
                        <div className="main-content">
                            <div className="rwt-portfolio-area rn-section-gap">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                                <SectionTitle
                                                    textAlign = "text-center"
                                                    radiusRounded = ""
                                                    subtitle = "한국 체류 비자 솔루션 제공"
                                                    title = "원하는 비자를 선택해 주세요"
                                                    description = ""
                                                />
                                        </div>
                                    </div>
                                    <div Column="col-lg-4 col-md-6 mt--30 portfolio " >
                                        <div className="col-lg-12">
                                            <ul className="rwt-portfolio-filter filter-button-default liststyle mb--20">
                                                {filters.map((filter) => (
                                                <li className="list-item" key={filter.id} >
                                                    <button
                                                    onClick={handleChange}
                                                    className={
                                                        filter.text.toLowerCase() === activeFilter
                                                        ? "current"
                                                        : filter.text
                                                    }
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

                                    <div className="row row--15">
                                        {visibleItems.map((item) => (
                                            <div key={item.id} className="col-lg-4 col-md-6 mt--30 portfolio box-grid-layout no-overlay" >
                                                <PortfolioItem portfolio={item} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/**상단 비자 종류 */}
                    </div>
                </div>
            </div>
            <FooterThree />
        </div>
    )
}

export default PortfolioDetailsContent;
