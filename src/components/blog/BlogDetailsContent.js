import React from 'react';
import SidebarTag from './sidebar/SidebarTag';
import SideCategories from './sidebar/SideCategories';
import Comment from './Comment';
import {slugify} from "../../utils";
import {Link} from "react-router-dom";
import { FiUser, FiCalendar } from "react-icons/fi";



const BlogDetailsContent = ({ data }) => {
    return (
        <>
            <div className="post-page-banner rn-section-gapTop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="content text-center">
                                <div className="page-title">
                                    <h1 className="theme-gradient">{data.title}</h1>
                                </div>
                                <ul className="rn-meta-list">
                                    <li><FiUser /><Link to={process.env.PUBLIC_URL + `/archive/${slugify(data.author)}`}>{data.author}</Link></li>
                                    <li><FiCalendar />{data.date}</li>
                                </ul>
                                <div className="thumbnail alignwide mt--60">
                                    <img className="w-100 radius" src={`${process.env.PUBLIC_URL}/${data.largeImage}`} alt="Blog Images" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog-details-content pt--60 rn-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="content">
                                {data.body.map((value, i) => {
                                    return(
                                        <div key={i} dangerouslySetInnerHTML={{__html: value}} />
                                    )
                                })}
                            
                                <div className="category-meta">
                                    <span className="text">Tags:</span>
                                    <SidebarTag />
                                </div>

                                <div className="rn-comment-form pt--60">
                                    <div className="comment-respond">
                                        <h4 className="title mb--40">Leave a Reply</h4>
                                        <Comment 
                                            url=""
                                            id={data.id}
                                            title={data.title}
                                        />
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

                              



        </>
    )
}
export default BlogDetailsContent;
