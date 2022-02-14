import React from 'react'

const SectionTitleTwo = ({Title, textAlign}) => {
    return (
        <div className={`section-title-2 ${textAlign}`}>
            <h2 className="title">{Title}</h2>
        </div>
    )
}
export default SectionTitleTwo;
