

import React from 'react';
import placeholderImage from './news.jpg'; // Import a placeholder image

export const NewsItem = ({ title, description, src, url }) => {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block ms-4 mt-3 my-1 mx-1 px-1 py-1 pt-1" style={{ maxWidth: "345px" }}>
            <img src={src || placeholderImage} style={{ height: "200px", width: "335px" }} className="card-img-top" alt="Placeholder" />
            <div className="card-body" >
                <h5 className="card-title">
                    {title ? title.slice(0, 50) : <span className="text">Title not available</span>}
                </h5>
                <p className="card-text">
                    {description ? description.slice(0, 100) : "Providing insightful analysis and up-to-the-minute reporting on the issues shaping our world today."}
                </p>
                <a href={url} className="btn btn-primary">Read more</a>
            </div>
        </div>
    );
};

export default NewsItem;
