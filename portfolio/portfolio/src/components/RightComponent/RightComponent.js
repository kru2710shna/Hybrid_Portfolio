import React from 'react';
import { Link } from 'react-router-dom';
import './RightComponent.css';

const RightComponent = () => {
    return (
        <div className="right-page-container">
            <div className="right-page">
                <h1>Machine Learning</h1>
                <p>Welcome to the Machine Learning section of my portfolio!</p>
                <Link to="/projectml" className="project-link">
                    Explore Projects
                </Link>
            </div>
        </div>
    );
};

export default RightComponent;
