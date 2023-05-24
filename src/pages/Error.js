import React from 'react'
import Layout from "../common/Layout";

const Error = () => {
    return (
        <Layout>
            <div className="error-area ptb--200 ptb_sm--60 ptb_md--80">
                <div className="container">
                    <div className="row align-item-center">
                        <div className="col-lg-12">
                            <div className="error-inner">
                                <h1 style={{fontSize: "40px"}}>Success !</h1>
                                <h1 style={{fontSize: "40px"}}>E7 비자가 필요하신가요?</h1>
                                <h2 className="title" style={{fontSize: "30px"}}>Come into the chat room</h2>
                                <p className="description"> 여러가지 공유하는 카카오 채널을 만들었습니다</p>
                                <p className="description"> I made a Kakao channel that shares various things</p>
                                <div className="view-more-button">
                                    <a className="btn-default" target="_blank" href="http://pf.kakao.com/_qiXpxj/chat">Go to KakaoTalk</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Error;