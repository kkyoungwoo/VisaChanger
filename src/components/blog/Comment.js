import React from 'react';
import PropTypes from "prop-types";
import { DiscussionEmbed } from 'disqus-react';

const Comment = ({url, id, title}) => {
    const disqusShortname = 'Doob';
    const disqusConfig = {
        url: url,
        identifier: `${id}`,
        title: title
    };
    return (
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    )
}


Comment.propTypes = {
    url: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string
};

export default Comment
