import React from 'react';
import VideoTwo from '../video/VideoTwo';
import { FiCheck } from "react-icons/fi";


const PopupData = [
    {
        id: "01",
        image: "./images/bg/bg-image-4.jpg",
        popupLink: [
            'https://www.youtube.com/watch?v=xshEZzpS4CQ',
        ],
    }
]

const AboutFour = ({image}) => {
    return (
        <div className="about-area about-style-4 rn-section-gap">
            <div className="container">
                <div className="row row--40 align-items-center">
                    <div className="col-lg-12 mt_md--40 mt_sm--40">
                        <div className="content">
                            <div className="inner" style={{
                                display: "flex",
                                justifyContent:"center",
                                alignItems: "center",
                                flexDirection: "column"
                            }}>
                                <h3 className="title" style={{
                                    textAlign:"center"
                                }}>믿을 수 있는 회사<br /> 당신을 위한 <strong>최고의 선택</strong></h3>
                                <ul className="feature-list col-lg-8" >
                                    <li>
                                        <div className="icon">
                                            <FiCheck />
                                        </div>
                                        <div className="title-wrapper" style={{width: "100%"}}>
                                            <h4 className="title">높은 성공률</h4>
                                            <p className="text" style={{maxWidth: "100%"}}>누구나 비자를 신청할 수 있지만, 모든 사람이 비자를 발급받는 것은 아닙니다.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <FiCheck />
                                        </div>
                                        <div className="title-wrapper" style={{width:"100%"}}>
                                            <h4 className="title">시간이 다소 걸릴 수 있습니다.</h4>
                                            <p className="text" style={{maxWidth: "100%"}}>빠르게 진행하게 된다면 더 큰 문제가 생길 수있습니다. 그래서 다양한 상황에서의 문제들을 파악하고 업무를 진행합니다.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <FiCheck />
                                        </div>
                                        <div className="title-wrapper" style={{width: "100%"}}>
                                            <h4 className="title">상담 후 불가능한 업무는 진행하지 않습니다.</h4>
                                            <p className="text" style={{maxWidth: "100%"}}>거짓 신고(허위 난민신청 / G-1)등의 거짓 비자신청 또는 정상적으로 해결이 불가능한 의뢰는 받지 않습니다.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFour
