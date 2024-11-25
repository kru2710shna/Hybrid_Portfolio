import React from 'react';
import './LeftComponent.css';
import Projects from './Projects';

const LeftComponent = () => {
    return (
        <>
        <div className="left-page">
            <h1>Software Engineering</h1>
            <p>Welcome to the Software Engineering section of my portfolio!</p>
            <button
                className="portfolio-button"
                onClick={() => window.location.href = 'https://idontknowpw.netlify.app'}
            >
                Enter my JavaScript World
            </button>
        </div>
        <Projects />
        </>
        
    );
};

export default LeftComponent;
