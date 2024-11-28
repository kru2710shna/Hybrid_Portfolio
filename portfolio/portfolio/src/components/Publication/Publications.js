// Publications.js
import React from "react";
import PublicationData from "./PublicationData";
import "./Publications.css";
import { useNavigate } from 'react-router-dom';

const Publications = () => {

    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate('/main_page');

    }


    return (
        <div className="publications-container">
            <h1 className="publications-title">Publications</h1>
            <p className="publications-quote">
                "Write your thoughts and let the paper remember it."
            </p>
            <div className="publications-list">
                {PublicationData.map((publication) => (
                    <div key={publication.id} className="publication-card">
                        <h2 className="publication-name">{publication.name}</h2>
                        <p className="publication-topic">
                            <strong>Topic:</strong> {publication.topic}
                        </p>
                        <p className="publication-field">
                            <strong>Field:</strong> {publication.field}
                        </p>
                        <p className="publication-description">
                            {publication.description}
                        </p>
                        <div className="publication-stats">
                            <span>{publication.stats.totalReads} Reads</span>
                            <span>{publication.stats.date}</span>
                            <span>{publication.stats.readTime}</span>
                        </div>
                        <img
                            src={publication.image}
                            alt={`${publication.name} Illustration`}
                            className="publication-image"
                        />
                        <a
                            href={publication.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="publication-button"
                        >
                            View Publication
                        </a>
                    </div>
                ))}
            </div>
            <div className="back-button-container008 text-center my-4">
                <button
                    className="back-button008 animate__animated animate__pulse animate__infinite"
                    onClick={handleBackButtonClick}
                >
                    <span className="back-icon008">&#8592;</span> Back
                </button>
            </div>

            {/* Footer */}
            <footer className="footer">
                <p>Creator: Krushna Thakkar</p>
            </footer>
        </div>
    );
};

export default Publications;
