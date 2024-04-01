import React, { useState } from 'react';
import "./Collapse.scss"

export default function Collapse({ title, content }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleCollapse = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="collapse">
            <div className="collapse__header" onClick={toggleCollapse}>
                {title}
                {/* <h2 className='collapse__header__title'></h2> */}
                <div className="collapse__header__arrowBox">
                    {isExpanded ? <i className="fas fa-chevron-up isExpanded"></i> : <i className="fas fa-chevron-up"></i>}
                </div>
            </div>
            <div className={`collapse__content ${isExpanded ? 'isExpanded' : ''}`}>
                {Array.isArray(content) ? (
                    content.map((element, index) => <span key={index}>{element}</span>)
                ) : (
                    content
                )}
            </div>
        </div>
    );
}


