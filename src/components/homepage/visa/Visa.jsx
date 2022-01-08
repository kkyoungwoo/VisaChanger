import React, { useEffect, useState, useRef } from 'react'
import Header from '../header/Header'
import './visa.css'

function Visa(props) {

    const visatDataNum = [
        {
            careerE: "E(취업비지)",
            careerD: "D(학생비자)",
            careerF: "F거주비자",
        }
    ]

    const visaData = [
        {
            skilltext: "- E1111mail.js, kakao, naver 등 웹 개발에 필요한 API 개발!"
        },
        {
            skilltext: "- Em22222ail.js, kakao, naver 등 웹 개발에 필요한 API 개발!"
        },
        {
            skilltext: "- Emai3333l.js, kakao, naver 등 웹 개발에 필요한 API 개발!"
        },
        
    ]

    const [position,setPosition] = useState(0)
    const [visaNum,setVisaNum] = useState(0)

    function onScroll(){
        setPosition(window.scrollY)
    }

    const bannerRef = useRef(null)

    const [bannerPosition,setBannerPosition] = useState(0)
    const [bannerMainHeight,setBannerMainHeight] = useState(0)
    const [bannerHeight,setBannerHeight] = useState(0)

    useEffect(()=>{
        window.addEventListener('scroll', onScroll)
        setBannerPosition(props.useref.current.offsetHeight)
        setBannerHeight(props.bannerHeightRef.current.offsetHeight)
        setBannerMainHeight(bannerRef.current.offsetHeight)
        return()=>{
            window.addEventListener('scroll', onScroll)
        }
    },[])

    return (
        <div className='visa_warp'>
            <Header />
            <div className='visa_cards'>
                <div className="about_warp">
            <div className="about_inner">
                <div className="aboutbanner" style={{
                    border : "1px solid black", 
                    boxShadow: "5px 5px 20px rgba(0,0,0,.3)",
                    maxHeight: bannerPosition *1.5 + "px",
                    transform: position < (bannerHeight - bannerMainHeight) ? "translateY("+(position) + "px)" : "translateY("+(bannerHeight - bannerMainHeight) + "px)",
                }}
                ref={bannerRef}
                >
                    <div className="careerdata">
                        <h3>비자 종류</h3>
                        {visatDataNum.map((item,idx)=>{
                            return(
                                <div key={idx} className="aboutdata_inner"  style={{
                                    border : "1px solid black",
                                }}>
                                    <div className="position">
                                        <div onClick={()=> setVisaNum(0)}>
                                            {item.careerE}
                                        </div>
                                        <div onClick={()=> setVisaNum(1)}>
                                            {item.careerD}
                                        </div>
                                        <div onClick={()=> setVisaNum(2)}>
                                            {item.careerF}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="project_footer">
                    </div>
                </div>
                <div className="aboutcards" ref={props.bannerHeightRef}>
                    <div className="aboutcard todo" style={{
                        border : "1px solid black", 
                    }}
                    ref={props.useref}
                    >
                        <div className="todowarp">
                            <div>
                                {visaData[visaNum].skilltext}
                            </div>
                            <div>
                                {visaData[visaNum].skilltext}
                            </div>
                            <div>
                                {visaData[visaNum].skilltext}
                            </div>
                            <div>
                                {visaData[visaNum].skilltext}
                            </div><div>
                                {visaData[visaNum].skilltext}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
            </ div>
        </div>
    )
}

export default Visa
