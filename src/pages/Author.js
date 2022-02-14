import React from 'react';
import BlogClassicData from '../data/blog/BlogList.json';
import AuthorListPost from '../components/blog/AuthorListPost';
import { slugify} from "../utils";
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";



const Author = ({match: {params: {slug}}}) => {
    const data = BlogClassicData.map(blog => {
        return {
            ...blog,
            author: blog.author.filter(cat => slugify(cat) === slug)
        }
    }).filter(blog => blog.author.length > 0);
    const categoryTitle = data[0].author[0];
    return (
        <>
            <SEO title="Blog Post By Author || Doob" />

            <Layout>
                <BreadcrumbOne 
                    title={categoryTitle}
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Blog Tag List"
                />

                <div className="main-content">
                    {/* Start Blog Area  */}
                    <div className="rn-blog-tag-area rn-section-gap">
                        <div className="container">
                            <AuthorListPost data={data} Column="col-lg-4" />
                        </div>
                    </div>
                    {/* End Blog Area  */}
                </div>

            </Layout>
            
        </>
    )
}

export default Author;