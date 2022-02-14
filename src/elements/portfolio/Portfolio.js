import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import PortfolioOne from "./PortfolioOne";



const Portfolio = () => {

    return (
        <>
            <SEO title="Portfolio || Doob - React Business  Template" />
            <Layout>

                <BreadcrumbOne 
                    title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Portfolio"
                />
                
                <div className="main-content">
                    <div className="rwt-portfolio-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Portfolio Default"
                                            title = "You can customize everything!"
                                            description = ""
                                        />
                                </div>
                            </div>
                            <PortfolioOne Column="col-lg-6 col-md-6 col-sm-12 col-12 mt--30 portfolio" />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default Portfolio;
