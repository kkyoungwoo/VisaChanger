import React from 'react'
import {Link} from "react-router-dom";

const Copyright = () => {
    return (
        <div className="copyright-area copyright-style-one">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                        <div className="copyright-left">
                            <ul className="ft-menu link-hover">
                                <li><Link to="/price">요금 안내</Link></li>
                                <li><a target="_blank" href="https://workvisa.co.kr" rel="noopener noreferrer">채용사이트</a></li>
                                <li><Link to="/form">문의하기</Link></li>
                                <li><a target="_blank" href="http://pf.kakao.com/_qiXpxj/chat" rel="noopener noreferrer">카카오톡</a></li>
                            </ul>
                                <ul className="ft-menu">
                                    <li style={{fontSize:"12px"}}>워크비자</li>
                                    <li style={{fontSize:"12px"}}>대표 : 고경우</li>
                                    <li style={{fontSize:"12px"}}>E-MAIL : workvisa@naver.com</li>
                                    <li style={{fontSize:"12px"}}>사업자등록번호 : 884-18-01907</li>
                                    <li style={{fontSize:"12px"}}>직업제공사업 신고번호 : J1400020230002</li>
                                    <li style={{fontSize:"12px"}}>Tel : 010-2727-3088</li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Copyright;