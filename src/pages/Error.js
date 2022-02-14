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
                                <h1>404</h1>
                                <h2 className="title">Something’s not right.</h2>
                                <p className="description"> Page not found.</p>
                                <div className="view-more-button">
                                    <a className="btn-default" href="/">Go Back Home</a>
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