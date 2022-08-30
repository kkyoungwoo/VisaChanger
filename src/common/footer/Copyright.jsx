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
                                <li><Link to="/price">요금</Link></li>
                                <li><Link to="/visainquiry">비자 문의</Link></li>
                                <li><Link to="/workinquiry">일자리 문의</Link></li>
                                <li><a target="_blank" href="/form" rel="noopener noreferrer">채용 문의</a></li>
                            </ul>
                                <ul className="ft-menu">
                                    <li style={{fontSize:"12px"}}>E-MAIL : bizdb@kakao.com</li>
                                    <li style={{fontSize:"12px"}}>행정사사무실ㅣ전국 출입국사무소 서류 대행</li>
                                    <li style={{fontSize:"12px"}}>Tel : 010-4243-3088ㅣ*부재시 상담중임으로 문자를 남겨주세요</li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Copyright;