import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import SectionTitle from "../../elements/sectionTitle/SectionTitle";
import PortfolioOne from "../../elements/portfolio/PortfolioOne";

const Typeofvisa = () => {
    return (
        <>
            <SEO title="korea visa" />
            <Layout>
                <div className="main-content">
                    <div className="rwt-portfolio-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 mb--50">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "비자발급 안내 문서"
                                            title = "한국 체류 비자 솔루션 제공"
                                            description = ""
                                        />
                                </div>
                            </div>
                            <PortfolioOne  Column="col-lg-4 col-md-6 mt--30 box-grid-layout no-overlay" />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default Typeofvisa;
