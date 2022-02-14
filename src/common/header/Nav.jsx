import { useState,useCallback } from 'react';
import {Link} from "react-router-dom";

const Nav = () => {

    const [plusA,setPlusA] = useState("+");
    const [plusB,setPlusB] = useState("+");
    const [plusC,setPlusC] = useState("+");
    const [plusD,setPlusD] = useState("+");
    const [plusE,setPlusE] = useState("+");

    const plusHandlerA = useCallback(()=>{
        plusA === "+" ? setPlusA("-") : setPlusA("+")
    },[plusA])
    const plusHandlerB = useCallback(()=>{
        plusB === "+" ? setPlusB("-") : setPlusB("+")
    },[plusB])
    const plusHandlerC = useCallback(()=>{
        plusC === "+" ? setPlusC("-") : setPlusC("+")
    },[plusC])
    const plusHandlerD = useCallback(()=>{
        plusD === "+" ? setPlusD("-") : setPlusD("+")
    },[plusD])
    const plusHandlerE = useCallback(()=>{
        plusE === "+" ? setPlusE("-") : setPlusE("+")
    },[plusE])

    return (
        <ul className="mainmenu">
            <li><Link to="/introduction">About us</Link></li>
            <li><Link to="/typeofvisa">비자</Link></li>
            {/*
            <li className="has-droupdown"><Link to="#">비자 안내</Link>
                {<ul className="submenu">
                    <li><Link to="/typeofvisa">비자 종류</Link></li>
                    <li><Link to="/employmentvisa">취업</Link></li>
                    <li><Link to="/investmentvisa">투자</Link></li>
                    <li><Link to="/residencevisa">거주 / 초대</Link></li>
                    <li><Link to="/marriagevisa">결혼 / 이혼</Link></li>
                    <li><Link to="/overseaskoreansvisa">재외동포</Link></li>
                </ul>}
            </li>
             */}

            <li className="has-droupdown" onClick={plusHandlerA}><Link to="#">유학<span className='mobile_header'> {plusA} </span></Link>
                <ul className="submenu">
                    <li><Link to="/entrance">입학문의</Link></li>
                    <li><Link to="/d4">D-4 (어학원)</Link></li>
                    <li><Link to="/d2">D-2 (대학)</Link></li>
                </ul>
            </li>

            <li className="has-droupdown" onClick={plusHandlerB}><Link to="#">출입국 사범<span className='mobile_header'> {plusB} </span></Link>
                <ul className="submenu">
                    <li><Link to="/illegalitylitigation">출입국 사범 문의</Link></li>
                    <li><Link to="/immigrationlitigation">불법체류자 구제</Link></li>
                    <li><Link to="/protectionlitigation">보호 일시해제</Link></li>
                </ul>
            </li>

            <li className="has-droupdown" onClick={plusHandlerC}><Link to="#">소송<span className='mobile_header'> {plusC} </span></Link>
                <ul className="submenu">
                    <li><Link to="/criminallitigation">형사 사건</Link></li>
                    <li><Link to="/civillitigation">민사 사건</Link></li>
                    <li><Link to="/familylitigation">가사 사건</Link></li>
                    <li><Link to="/administrativelitigation">행정 사건</Link></li>
                </ul>
            </li>

            <li className="has-droupdown" onClick={plusHandlerD}><Link to="#">행정 민원<span className='mobile_header'> {plusD} </span></Link>
                <ul className="submenu">
                    <li><Link to="/residentregistration">주민등록</Link></li>
                    <li><Link to="/myselfregistration">본인 등록신고</Link></li>
                    <li><Link to="/parentalregistration">친권 등록신고</Link></li>
                    <li><Link to="/descendantregistration">자녀 등록신고</Link></li>
                    <li><Link to="/orphanregistration">기아,고아 등록신고</Link></li>
                    <li><Link to="/onotherregistration">기타 절차 안내</Link></li>
                </ul>
            </li>

            <li className="has-droupdown" onClick={plusHandlerE}><Link to="#">고객센터<span className='mobile_header'> {plusE} </span></Link>
                <ul className="submenu">
                    <li><Link to="/visainquiry">비자 문의</Link></li>
                    <li><Link to="/workinquiry">일자리 문의</Link></li>
                    <li><Link to="/agencyinquiry">위임 / 대행</Link></li>
                    <li><Link to="/Price">요금</Link></li>
                    <li><Link to="/paidinquiry">상담</Link></li>
                </ul>
            </li>
        </ul>
    )
}
export default Nav;
