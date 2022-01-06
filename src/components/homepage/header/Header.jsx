import React, { useState,useCallback } from 'react';
import { Link } from 'react-router-dom';
import './header.css'

function Header() {

    const [navBtn,setNavBtn] = useState("")

    const useCallbackBtn = useCallback(()=>{
        if(navBtn === ""){
            setNavBtn("checked")
        }else if (navBtn === "checked"){
            setNavBtn("")
        }
    })
    return (
        <div className='header'>
            <header>
                    <Link to="/">
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
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/form" className="linkbtn" onClick={useCallbackBtn} checked={navBtn}>
                                        <div>외국인구인</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/foreigner" className="linkbtn" onClick={useCallbackBtn} checked={navBtn}>
                                        <div>외국인구직</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/visa" className="linkbtn" onClick={useCallbackBtn} checked={navBtn}>
                                        <div>VISA</div>
                                    </Link>    
                                </li>
                                <li>
                                    <Link to="/abroad" className="linkbtn" onClick={useCallbackBtn} checked={navBtn}>
                                        <div>유학</div>
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
