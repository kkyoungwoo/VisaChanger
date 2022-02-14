import React from 'react';
import {flatDeep, slugify, containsObject} from '../../../utils';
import BlogListData from "../../../data/blog/BlogList.json";
import {Link} from "react-router-dom";


const SideCategories = () => {
    const cats = BlogListData.map(item => {
        return item.categories;
    });

    let singleCatArray = flatDeep(cats);
    let categories = [];
    singleCatArray.forEach(cat => {
        const obj = {
            title: cat.trim(),
            slug: slugify(cat),
            count: 1
        }
        const objIndex = containsObject(obj, categories);
        if(objIndex !== -1){
            const prevCount = categories[objIndex].count;
            categories[objIndex] = {
                title: cat.trim(),
                slug: slugify(cat),
                count: prevCount + 1
            }
        } else {
            categories.push(obj);
        }
    })

    return (
        <ul className="category-list ">
            {categories.map(cat => {
                return (
                    <li key={cat.slug}>
                        <Link to={process.env.PUBLIC_URL + `/category/${cat.slug}`}>
                            <span className="left-content">{cat.title}</span> 
                            <span className="count-text">{cat.count}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default SideCategories
