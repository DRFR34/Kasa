import React, { useState } from 'react';
import "./Collapse.scss"

export default function Collapse({ title, content }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleCollapse = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="collapse">
            <div className="collapseHeader" onClick={toggleCollapse}>
                <div>{title}</div>
                <div className="collapseArrow">
                    {isExpanded ? <i className="fas fa-chevron-up isExpanded"></i> : <i className="fas fa-chevron-up"></i>}
                </div>
            </div>
            <div className={`collapseContent ${isExpanded ? 'isExpanded' : ''}`}>
                {Array.isArray(content) ? (
                    content.map((element, index) => <span key={index}>{element}</span>)
                ) : (
                    content
                )}
            </div>
        </div>
    );
}


