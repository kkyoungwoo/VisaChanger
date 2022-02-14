import React from 'react';
import { FaSistrix } from "react-icons/fa";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../elements/breadcrumb/BreadcrumbOne";
import BlogPropTwo from './itemProp/BlogPropTwo';
import SideCategories from './sidebar/SideCategories';
import SidebarPost from './sidebar/SidebarPost';
import SidebarTag from './sidebar/SidebarTag';
import SidebarArchive from './sidebar/SidebarArchive';


const BlogListSidebar = () => {
    return (
        <>
            <SEO title="Blog List Sidebar || Doob - React Business  Template" />
            <Layout>
                <BreadcrumbOne 
                    title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Blog List Sidebar"
                />
                <div className="main-content">
                    {/* Start Blog Area  */}
                    <div className="rn-blog-area rn-section-gap">
                        <div className="container">
                            <div className="row row--30">
                                <div className="col-lg-8">
                                    <div className="row mt_dec--30">
                                        <BlogPropTwo column="col-lg-12 mt--30" StyleVarProp="box-card-style-default card-list-view" />
                                    </div>
                                </div>
                                <div className="col-lg-4 mt_md--40 mt_sm--40">
                                    <aside className="rwt-sidebar">

                                        <div className="rbt-single-widget widget_search mt--40">
                                            <div className="inner">
                                                <form className="blog-search" action="#">
                                                    <input type="text" placeholder="Search ..." />
                                                    <button className="search-button"><FaSistrix /></button>
                                                </form>
                                            </div>
                                        </div>

                                        {/* Start Single Widget  */}
                                        <div className="rbt-single-widget widget_categories mt--40">
                                            <h3 className="title">Categories</h3>
                                            <div className="inner">
                                                <SideCategories />
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}

                                        {/* Start Single Widget  */}
                                        <div className="rbt-single-widget widget_recent_entries mt--40">
                                            <h3 className="title">Post</h3>
                                            <div className="inner">
                                                <SidebarPost />
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}

                                       

                                        {/* Start Single Widget  */}
                                        <div className="rbt-single-widget widget_archive mt--40">
                                            <h3 className="title">Archives</h3>
                                            <div className="inner">
                                                <SidebarArchive />
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}


                                        {/* Start Single Widget  */}
                                        <div className="rbt-single-widget widget_tag_cloud mt--40">
                                            <h3 className="title">Tags</h3>
                                            <div className="inner mt--20">
                                                <SidebarTag />
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}


                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Blog Area  */}
                </div>

            </Layout>
        </>
    )
}

export default BlogListSidebar
