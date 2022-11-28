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
                                <li><a target="_blank" href="https://jobs-sigma.vercel.app/" rel="noopener noreferrer">채용사이트</a></li>
                                <li><Link to="/form">구직 문의</Link></li>
                                <li><a target="_blank" href="https://thekvisa.kr/companyform" rel="noopener noreferrer">구인 문의</a></li>
                            </ul>
                                <ul className="ft-menu">
                                    <li style={{fontSize:"12px"}}>E-MAIL : bizdb@kakao.com</li>
                                    <li style={{fontSize:"12px"}}>행정사사무실ㅣ전국 출입국사무소 서류 대행</li>
                                    <li style={{fontSize:"12px"}}>Tel : 010-4243-3088</li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Copyright;