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
                                <h1 style={{fontSize: "40px"}}>구인구직 및 상담을 빠르게 할 수 있습니다</h1>
                                <h2 className="title" style={{fontSize: "30px"}}>Come into the service</h2>
                                <div className="view-more-button">
                                    <a className="btn-default" target="_blank" href="http://pf.kakao.com/_qiXpxj/chat" style={{marginRight:"10px"}}>Go to KakaoTalk</a>
                                    <a className="btn-default" target="_blank" href="https://workvisa.co.kr/">Go to Job Site</a>
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