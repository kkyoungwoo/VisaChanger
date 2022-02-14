import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import PortfolioOne from "./PortfolioOne";

const PortfolioFullWidth = () => {
    return (
        <>
            <SEO title="Portfolio Full Width || Doob - React Business  Template" />
            <Layout>
                <BreadcrumbOne 
                    title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Portfolio Full Width"
                />
                <div className="main-content">
                    <div className="rwt-elements-area rn-section-gap">
                        <div className="container-fluid plr--30">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Portfolio Full Width"
                                        title = "You can customize everything!"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <PortfolioOne Column="col-lg-4 col-md-6 mt--30 portfolio" />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default PortfolioFullWidth;
