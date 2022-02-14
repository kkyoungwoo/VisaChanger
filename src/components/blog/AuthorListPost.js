import React from 'react';
import BlogList from './itemProp/BlogList';

const AuthorListPost = ({ data, Column }) => {
    return (
        <div className="row row--15 mt_dec--30">
            {data.map((single, key) => {
                return(
                    <div key={key} className={`${Column}`}>
                        <BlogList data={single} key={key} />
                    </div>
                ); 
            })}
        </div>
    )
}
export default AuthorListPost;
