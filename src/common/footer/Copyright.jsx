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
                                <li><a target="_blank" href="https://thekvisa.com" rel="noopener noreferrer">채용 문의</a></li>
                            </ul>
                                <ul className="ft-menu">
                                    <li style={{fontSize:"12px"}}>TEL : 053-965-0516 | FAX : 053-965-0514</li>
                                    <li style={{fontSize:"12px"}}>E-MAIL : bizdb@kakao.com</li>
                                    <li style={{fontSize:"12px"}}>대구광역시 동구 동내로 76 한국메디컬벤처센터 1층 103호</li>
                                    <li style={{fontSize:"12px"}}>(대구 외국인출입국사무소 맞은편)</li>
                                    <li style={{fontSize:"12px"}}>사업자등록번호 : 658-74-00358</li>
                                    <li style={{fontSize:"12px"}}>유료직업소개서 신고번호 : 제 대구-동-유-22-2 호</li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Copyright;