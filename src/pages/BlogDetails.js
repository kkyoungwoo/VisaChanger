import React from 'react';
import BlogClassicData from '../data/blog/BlogList.json';
import BlogDetailsContent from '../components/blog/BlogDetailsContent';
import SEO from "../common/SEO";
import Layout from "../common/Layout";

const BlogDetails = ({match: {params: {id}}}) => {
    const blogId = parseInt(id, 10)
    const data = BlogClassicData.filter(blog => blog.id === blogId);
    return (
        <>
            <SEO title="Blog Details || Doob" />
            <Layout>
                <div className="rn-blog-details-area">
                    <BlogDetailsContent data={data[0]}  />
                </div>
            </Layout>
        </>
    )
}
export default BlogDetails;