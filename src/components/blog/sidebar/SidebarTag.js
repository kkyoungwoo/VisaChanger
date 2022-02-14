import React from 'react';
import {flatDeep, slugify, containsObject} from '../../../utils';
import BlogListData from "../../../data/blog/BlogList.json";
import {Link} from "react-router-dom";


const SidebarTag = () => {
    const tags = BlogListData.map(item => {
        return item.tags;
    });
    let singleTagArray = flatDeep(tags);
    let tagsData = [];
    singleTagArray.forEach(tag => {
        const obj = {
            title: tag.trim(),
            slug: slugify(tag)
        }
        const objIndex = containsObject(obj, tagsData);
        if(objIndex !== -1){
            tagsData[objIndex] = {
                title: tag.trim(),
                slug: slugify(tag)
            }
        } else {
            tagsData.push(obj);
        }
    })
    return (
        <ul className="tagcloud">
            {tagsData.map((tag) => {
                return(
                    <Link key={tag.slug} to={process.env.PUBLIC_URL + `/tag/${tag.slug}`}>{tag.title}</Link>
                )
            })}
        </ul>
    )
}

export default SidebarTag
