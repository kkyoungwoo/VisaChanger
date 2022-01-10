import React, { useState,useCallback } from 'react';
import { Link } from 'react-router-dom';
import './header.css'

function Header() {

    const [navBtn,setNavBtn] = useState("")

    const getSiteTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const useCallbackBtn = useCallback(()=>{
        if(navBtn === ""){
            setNavBtn("checked")
        }else if (navBtn === "checked"){
            setNavBtn("")
            window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        }
    })

    return (
        <div className='header'>
            <header>
                    <Link to="/" onClick={getSiteTop}>
                        <div className="logo_text">
                            THE K <span>컨설팅</span>
                        </div>
                    </Link>
                    <nav>
                    <input type="checkbox" id="mobile_nav" onClick={useCallbackBtn} checked={navBtn}/>
                        <label htmlFor="mobile_nav" className="mobile_btn">
                            <span style={{background: "white" }}></span>
                            <span style={{background: "white" }}></span>
                            <span style={{background: "white" }}></span>
                        </label>
                        <ul className="navi_menu">
                                <li>
                                    <label className="mobileclose" htmlFor="mobile_nav" >
                                        <span style={{background: "white" }}></span>
                                        <span style={{background: "white" }}></span>
                                    </label>
                                </li>
                                <li>
                                    <Link to="/" className="linkbtn" onClick={useCallbackBtn} checked={navBtn}>
                                        <div>메인페이지</div>
                                        <div className='sub_header_text'>MainPage</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/companyform" className="linkbtn" onClick={useCallbackBtn} checked={navBtn}>
                                        <div>직원모집 의뢰</div>
                                        <div className='sub_header_text'>Company</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/foreigner" className="linkbtn" onClick={useCallbackBtn} checked={navBtn}>
                                        <div>외국인 구직</div>
                                        <div className='sub_header_text'>Foreigner</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/visa" className="linkbtn" onClick={useCallbackBtn} checked={navBtn}>
                                        <div>비자 상담</div>
                                        <div className='sub_header_text'>Advice</div>
                                    </Link>    
                                </li>
                                <li>
                                    <Link to="/admin" className="linkbtn" onClick={useCallbackBtn} checked={navBtn}>
                                        <div>　</div>
                                    </Link>
                                </li>
                        </ul>
                    </nav>
                </header>
        </div>
    )
}

export default Header
