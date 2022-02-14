import React from 'react';
import BlogListData from "../../../data/blog/BlogList.json";

const SidebarArchive = () => {
    return (
        <ul>
            {BlogListData.map((value) => {
                return(
                    <li key={value.id}>
                        <span className="cate">{value.date}</span>
                    </li>
                )
            })}
        </ul>
    )
}
export default SidebarArchive
