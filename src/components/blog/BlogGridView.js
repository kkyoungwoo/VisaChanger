import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../elements/breadcrumb/BreadcrumbOne";
import BlogProp from './itemProp/BlogProp';


const BlogGridView = () => {
    return (
        <>
            <SEO title="Blog List || Doob - React Business  Template" />
            <Layout>
                <BreadcrumbOne 
                    title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Blog List"
                />
                <div className="main-content">
                    {/* Start Blog Area  */}
                    <div className="rn-blog-area rn-section-gap">
                        <div className="container">
                            <div className="row mt_dec--30">
                                <BlogProp column="col-lg-4 col-md-6 col-12 mt--30" StyleVarProp="box-card-style-default" />
                            </div>
                        </div>
                    </div>
                    {/* End Blog Area  */}
                </div>
            </Layout>
        </>
    )
}
export default BlogGridView;