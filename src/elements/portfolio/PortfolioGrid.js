import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import PortfolioOne from "./PortfolioOne";



const PortfolioGrid = () => {
    return (
        <>
            <SEO title="Portfolio Grid Layout || Doob - React Business  Template" />
            <Layout>
                <BreadcrumbOne 
                    title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Portfolio Grid Layout"
                />
                <div className="main-content">

                    <div className="rwt-portfolio-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Portfolio Grid Layout"
                                            title = "You can customize everything!"
                                            description = ""
                                        />
                                </div>
                            </div>
                            <PortfolioOne Column="col-lg-6 col-md-6 mt--30 portfolio no-overlay"  />
                        </div>
                    </div>
                    
                </div>
            </Layout>
        </>
    )
}
export default PortfolioGrid;
