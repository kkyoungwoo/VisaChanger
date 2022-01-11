import React, { useEffect,useCallback, useState, useRef } from 'react'
import {Link} from 'react-router-dom'
import Header from '../header/Header'
import './visa.css'

function Visa(props) {

    const visatDataNum = [
        {
            careerE: "E (취업비자)",
            careerD: "D (학생비자)",
            careerF: "F (거주비자)",
        }
    ]

    const visaData = [
        {
            maintext:
            <>우리나라에 취업해 있는 해외인력의 약 90%가 비전문직의 단순기능으로 중소기업의 노동력 부족을 해결하는 분야에 주로 활용되고 있습니다.
                <br /><br />전문직은 약 10%로 체류자격은 E-1~E-7비자로 구분할 수 있는데, 대학교수(E-1), 원어민 강사(E-2), 연구∙개발하는 연구원(E-3), 기술전수를 위한 기술자(E-4), 전문 자격사(E-5), 예술종사자(E-6) 및 전문업종의 종사자(E-7) 등이 있습니다.
            </>,
            subtext:
            <>
               <div>
                   <div>
                       <span>
                           <img src="./assets/check.png" alt="" />
                            대상
                        </span>
                   </div>
                    <div>
                        대한민국 내의 공․사기관 등 과의 계약에 따라 특정 활동에 종사하려는 전문직종에게 주어지는 외국인 취업비자
                    </div>
               </div>
               <br />
               <div>
                   <div>
                       <span>
                            <img src="./assets/check.png" alt="" />
                            <span>일반자격요건</span>
                        </span>
                   </div>
                    <div>
                        도입직종과 연관성이 있는 분야의 석사 이상 학위 소지
                        <br />도입직종과 연관성이 있는 학사학위 소지 + 1년 이상의 해당분야 경력
                        <br />도입직종과 연관성이 있는 분야에 5년 이상의 근무경력
                    </div>
               </div>
               <br />
               <div>
                   <div>
                       <span>
                           <img src="./assets/check.png" alt="" />
                            <span>특별자격요건</span>
                       </span>
                   </div>
                    <div>
                        세계 500대 기업 1년 이상 전문직종 근무경력자
                        <br />세계 상위 200개 대학을 졸업한 자
                        <br />한국에서 학사 이상의 학위를 취득한 자
                        <br />한국에서 대학교 졸업 예정인 자
                        <br />KOTRA(대한무역투자진흥공사), 한국 중소기업 혹은 스타트업 회사로부터 추천받은 자
                    </div>
               </div>
            </>
        },
        {
            maintext:
            <>
                한국 유학 및 어학연수를 위해 입국을 하려고 할 때 외국인유학비자를 발급받아야 합니다. 외국인 유학 비자에는 D-4비자, D-2비자로 총 2가지 종류로 나누어져 있습니다.
                <br /><br />한국어공부를 위해 어학당에 입학을 하고자 하는 경우에는 일반연수(D-4)비자를, 국내에서 학사, 석사, 박사 과정을 수료하기 위한 경우는 유학(D-2)비자를 신청해야 합니다.
            </>,
            subtext:
            <>
               <div>
                   <div>
                        <span>
                            <img src="./assets/check.png" alt="" />
                            <span>D-2 visa<br />활동범위 및 해당자</span>
                        </span>
                    </div>
                    <div>
                        전문대학 이상의 교육·학술연구 기관에서의 유학 또는 연구활동 - 고등교육법의 규정에 의하여 설립된 전문대학, 대학, 대학원 또는 특별법의 규정에 의하여 설립된 전문대학 이상의 학술기관에서 정규과정(학사·석사·박사)의 교육을 받거나 특정의 연구를 하고자 하는 자
                    </div>
               </div>
                   <br />
               <div>
                   <div>
                       <div>
                           <span>
                               <img src="./assets/check.png" alt="" />
                                <span>일반연수(D-4)<br />활동범위 및 해당자</span>
                           </span>
                       </div>
                   </div>
                    <div>
                        유학(D-2) 자격에 해당하는 교육기관 또는 학술연구기관 외에 교육기관이나 기업체·단체등에서 교육 또는 연수를 받거나 연구하는 활동
                        <br />- 대학부설 어학원에서 한국어를 연수하는 자(D-4-1)
                        <br />- 유학(D-2) 자격에 해당하는 기관 또는 학술연구기간 이외의 교육기관에서 교육을 받는 자
                        <br />- 국·공립 연구기관이나 연수원 등에서 기술,기능 등을 연수하는 자
                        <br />- 외국인투자기업 또는 외국에 투자한 기업체 등에서 인턴(실습사원)으로 교육 또는 연수를 받거나 연구활동에 종사하는 자
                        <br />
                    </div>
               </div>
               <br />
               <div>
                   <div>
                        <div>
                            <span>
                            </span>
                        </div>
                   </div>
                    <div>
                        * 어학 기관에서 한국어를 배우고자 하는 학생들에게는 6개월 단위로 신청이 가능함
                    </div>
               </div>
            </>
        },
        {
            maintext:
            <>
                F비자의 종류에는 방문동거(F-1), 거주(F-2), 동반(F-3), 재외동포(F-4), 영주(F-5), 결혼이민(F-6)이 있습니다.
                <br /><br />F비자는 다른 비자에 비해 장기 체류 및 영구 체류가 가능하기 때문에 장기적으로 한국에 거주하려는 목적을 가지고 있다면 매우 유용한 비자입니다.
                <br /><br />또한 취업활동에 대한 제한이 적어 큰 불편함이 없습니다.
            </>,
            subtext:
            <>
               <div>
                   <div>
                        <div>
                            <span>
                                <img src="./assets/check.png" alt="" />
                                <span>거주(F2-7)<br />활동범위 및 해당자 (유형 1)</span>
                            </span>
                        </div>
                    </div>
                    <div>
                        전문직, 준전문직 종사자 등에서 체류자격 교수(E-1)부터 특정활동(E-7)까지, 또는 취재(D-5)부터 무역경영(D-9)까지 중의 어느 하나를 가진 등록외국인
                    </div>
               </div>
               <div>
                    <div>
                        <div>
                            <span>
                                <img src="./assets/check.png" alt="" />
                                <span>활동범위 및 해당자 (유형 2)</span>
                            </span>
                        </div>
                    </div>
                    <div>
                        유학(D-2) 또는 구직(D-10) 체류자격을 가진 등록외국인
                    </div>
               </div>
                <div>
                   <div>
                       <div>
                           <span>
                               <img src="./assets/check.png" alt="" />
                                <span>영주(F-5)</span>
                           </span>
                       </div>
                   </div>
                    <div>
                        체류자격의 구분에 따른 활동의 제한을 받지 않음
                    </div>
               </div>
               <div>
                   <div>
                       <div>
                           <span>
                                <img src="./assets/check.png" alt="" />
                                <span>결혼이민(F-6)</span>
                           </span>
                       </div>
                   </div>
                   <div>
                       한국에서 혼인이 유효하게 성립되어 있고, 우리 국민과 결혼생활을 지속하기 위해 국내 체류를 하고자 하는 사람
                   </div>
               </div>
            </>
        },
        
    ]

    const [position,setPosition] = useState(0)
    const [visaNum,setVisaNum] = useState(0)
    const [visaNumText,setVisaNumText] = useState('first')

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

    const dataNumChangefirst = useCallback(()=>{
        setVisaNum(0)
        setVisaNumText("first")
        window.scrollTo({
            top: 0,
            behavior: "smooth"})
    },[])

    const dataNumChangeSecound = useCallback(()=>{
        setVisaNum(1)
        setVisaNumText("secound")
        window.scrollTo({
            top: 0,
            behavior: "smooth"})
    },[])
        
    const dataNumChangeThird = useCallback(()=>{
        setVisaNum(2)
        setVisaNumText("third")
        window.scrollTo({
            top: 0,
            behavior: "smooth"})
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
                    height: "200px",
                    transform: position < (bannerHeight - bannerMainHeight) ? "translateY("+(position) + "px)" : "translateY("+(bannerHeight - bannerMainHeight) + "px)",
                }}
                ref={bannerRef}
                >
                    <div className="careerdata">
                        <h3>비자 종류</h3>
                        {visatDataNum.map((item,idx)=>{
                            return(
                                <div key={idx} className={'aboutdata_inner ' + visaNumText}  style={{
                                    border : "1px solid black",
                                }}>
                                    <div className="position" style={{width: "100%"}}>
                                        <div onClick={dataNumChangefirst} className='first'>
                                            {item.careerE}
                                        </div>
                                        <div onClick={dataNumChangeSecound}  className='secound'>
                                            {item.careerD}
                                        </div>
                                        <div onClick={dataNumChangeThird}  className='third'>
                                            {item.careerF}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <div className={ 'background_img ' + visaNumText }></div>
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
                                {visaData[visaNum].maintext}
                            </div>
                        </div>
                    </div>
                    <div className="aboutcard todo" style={{
                        border : "1px solid black", 
                    }}
                    ref={props.useref}
                    >
                        <div className="subtext">
                            <div className="subtext_warp">
                                {visaData[visaNum].subtext}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Link to="/visaform" className='visa_form_btn'>
            상담신청
        </Link>
        </ div>
        </div>
    )
}

export default Visa
