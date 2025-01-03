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
                                <li><a target="_blank" href="https://workvisa.co.kr" rel="noopener noreferrer">워크비자(외국인 채용 사이트)</a></li>
                                <li><a href="https://visatype.co.kr/" target="_blank" rel="noopener noreferrer">비자타입(합법취업 자가진단)</a></li>
                            </ul>
                                <ul className="ft-menu">
                                    <li style={{fontSize:"12px"}}>E-MAIL 문의하기 : workvisa@naver.com</li>
                                    <li style={{fontSize:"12px"}}>사업자등록번호 : 673-87-02961</li>
                                    <li style={{fontSize:"12px"}}>직업제공사업 신고번호 : J1400020230002</li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Copyright;