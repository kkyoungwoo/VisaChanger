import React from 'react';
import {Link} from "react-router-dom";
import BlogListData from "../../../data/blog/BlogList.json";

const SidebarPost = () => {
    return (
        <ul>
            {BlogListData.slice(0, 4).map((value) => {
                return(
                    <li key={value.id}>
                        <Link className="d-block" to={process.env.PUBLIC_URL + `/blog-details/${value.id}`}>{value.title}</Link>
                        <span className="cate">{value.categories.slice(0, 1)}</span>
                    </li>
                )
            })}
        </ul>
    )
}

export default SidebarPost
