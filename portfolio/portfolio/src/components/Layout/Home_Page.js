import React from 'react';
import './Home_Page.css';

const Home_Page = () => {
    return (
        <div className="home-page">
            <header className="home-header">
                <h1>Welcome to My Portfolio</h1>
                <p>Explore my journey in technology.</p>
            </header>
            <div className="home-content">
                <button className="portfolio-button" onClick={() => window.location.href='/main_page'}>
                    Enter Portfolio
                </button>
            </div>
        </div>
    );
};

export default Home_Page;
