import React from 'react';
import BlogClassicData from '../data/blog/BlogList.json';
import { slugify} from "../utils"
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import CategoryListPost from '../components/blog/CategoryListPost';

const TagList = ({match: {params: {slug}}}) => {
    const data = BlogClassicData.map(blog => {
        return {
            ...blog,
            tags: blog.tags.filter(data => slugify(data) === slug)
        }
    }).filter(blog => blog.tags.length > 0);

    const tagTitle = data[0].tags[0];

    return (
        <>
            <SEO title="Blog Tag List || Doob" />
            <Layout>
                <BreadcrumbOne 
                    title={tagTitle}
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Blog Tag List"
                />
                <div className="main-content">
                    {/* Start Blog Area  */}
                    <div className="rn-blog-tag-area rn-section-gap">
                        <div className="container">
                            <CategoryListPost Column="col-lg-4 mt--30" data={data} />
                        </div>
                    </div>
                    {/* End Blog Area  */}
                </div>
            </Layout>
        </>
    )
}
export default TagList;