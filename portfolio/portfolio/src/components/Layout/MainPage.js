import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
    const navigate = useNavigate();

    return (
        <div className="main-page">
            <div className="left" onClick={() => navigate('/left')}>
                <h1>Software Engineering</h1>
                <p>Visit! SWE Level</p>
            </div>
            <div className="divider"></div> {/* Vertical divider */}
            <div className="right" onClick={() => navigate('/right')}>
                <h1>Machine Learning</h1>
                <p>Visit! MLE Level</p>
            </div>
        </div>
    );
};

export default MainPage;
