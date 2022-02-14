import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import {Link} from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const AboutTwo = () => {
    return (
        <div className="rwt-about-area about-style-2 rn-section-gap">
            <div className="container">
                <div className="row row--30 mt--50 align-items-center">
                    <div className="col-lg-5">
                        <div className="thumbnail">
                            <img className="w-100" src="./images/about/about-1.png" alt="About Images" />
                        </div>
                    </div>
                    <div className="col-lg-7 mt_md--30 mt_sm--30">
                        <div className="content">
                            <div className="section-title">

                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <h4 className="subtitle"><span className="theme-gradient">Korean is hard? Press the refresh key F5.</span></h4>
                                    <h2 className="title mt--10">한국어가 어려우신가요?</h2>
                                </ScrollAnimation>

                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <p>홈페이지를 새로고침 하여 "언어" 바꿀 수 있습니다.<br/>* 단축키 (F5)</p>

                                    <ul className="list-icon">
                                        <li><span className="icon"><FiCheck /></span> 문제가 생기지 않도록 진행되는 비자발급 솔루션</li>
                                        <li><span className="icon"><FiCheck /></span> 상담에는 비용이 들어가지 않습니다.</li>
                                        <li><span className="icon"><FiCheck /></span> 문의내용을 온라인 접수 해주시면 순차적으로 답변 드립니다.</li>
                                    </ul>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default AboutTwo;
