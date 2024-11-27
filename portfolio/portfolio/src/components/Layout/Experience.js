import React from 'react';
import './Experience.css'; // Custom CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import { useNavigate } from 'react-router-dom';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />

const experiences = [
    {
        logo: 'https://app.goodworkhub.com/static/media/logo_v4.fef60cd7.png',
        company: 'Good Work Hub',
        startEndDate: 'June 2024 - November 2024',
        position: 'Machine Learning Engineer',
        jobType: 'Internship',
        description: [
            'Working as an ML Engineer on the AI team, developing a product that connects charities with tools, grants, and people to maximize their impact.',
            'Utilized AI agents for web scraping and autonomous grant-matching with micro-charities.',
            'Developed and deployed LLM models (e.g., Llama3 8B parameters) for creating ChatBot agents, automating tasks, and hyper-tuning bots for data gathering.',
            'Leveraged open-source tools for efficient data indexing and formatting.',
        ],
        lorLink: 'https://drive.google.com/file/d/1XaN53hND9a1Aa37HqF6N2cBpyeMaFSSz/view?usp=sharing',
        expLetterLink: 'https://drive.google.com/file/d/1XaN53hND9a1Aa37HqF6N2cBpyeMaFSSz/view?usp=sharing',
    },
    {
        logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQEo9GUNP7eIsw/company-logo_200_200/company-logo_200_200/0/1706485055655/flow_global_software_technologies_logo?e=2147483647&v=beta&t=Qw3Gi9-Wb81UvA5V9peUbty-kGh_9wtimTMfNQ4_MqY',
        company: 'Global Software Technologies Flow LLC',
        startEndDate: 'December 2023 - June 2024',
        position: 'Artificial Intelligence Engineer',
        jobType: 'Internship',
        description: [
            'Utilized Scrapy, Beautiful Soup, and Selenium for web scraping, gathering data for exploratory data analysis (EDA).',
            'Implemented API integration, automating data collection from diverse sources for efficient and accurate acquisition.',
            'Developed a deep learning model for specific tasks, managing large-scale datasets exceeding 20,000 rows and 100 columns.',
            'Deployed the model on AWS for scalability and tested functionality on Azure ML for compatibility.',
            'Contributed to an AI-related patent by drafting documentation and collaborating with legal experts.',
            'Integrated HubSpot CRM into workflows, optimizing lead management and customer relationships.',
        ],
        lorLink: 'https://drive.google.com/file/d/19Triw5-4CPEJf5yvo6Z0RGjc7cLH5shP/view?usp=sharing',
        expLetterLink: 'https://drive.google.com/file/d/19Triw5-4CPEJf5yvo6Z0RGjc7cLH5shP/view?usp=sharing',
    },
];

const Experience = () => {

    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate('/main_page'); // Navigate after animation

    }
    return (
        <div className="experience-container">
            {/* Title and Quote Section */}
            <div className="experience-header text-center">
                <h1 className="experience-title">Work Experience</h1>
                <p className="experience-quote ">
                    “The reward for work well done is the opportunity to do more.” – Jonas Salk
                </p>
            </div>

            {/* Arrow Section */}
            <div className="arrow-container-2">
                <div className="arrow-2"></div>
            </div>



            {/* Work Experience Section */}
            <div className="work-experience-section">
                {experiences.map((exp, index) => (
                    <div key={index}>
                        <div className="experience-item row align-items-center mb-4">
                            <div className="col-md-1 text-center">
                                <img
                                    src={exp.logo}
                                    alt={`${exp.company} Logo`}
                                    className="company-logo"
                                />
                            </div>
                            <div className="col-md-11">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h2 className="company-name">{exp.company}</h2>
                                    <span className="date">{exp.startEndDate}</span>
                                </div>
                                <p className="position-title">
                                    <strong>Position:</strong> {exp.position}
                                </p>
                                <p className="job-type">
                                    <strong>Job Type:</strong> {exp.jobType}
                                </p>
                                <div className="description">
                                    <strong>Description:</strong>
                                    <ul>
                                        {exp.description.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="links mt-2">
                                    <a href={exp.lorLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm me-2">
                                        Letter of Recommendation
                                    </a>
                                    <a href={exp.expLetterLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-success btn-sm">
                                        Experience Letter
                                    </a>
                                </div>
                            </div>
                        </div>
                        {index < experiences.length - 1 && <hr className="custom-divider" />}
                    </div>
                ))}
            </div>

            {/* Back Button */}
            <div className="back-button-container text-center my-4">
                <button
                    className="back-button animate__animated animate__pulse animate__infinite"
                    onClick={handleBackButtonClick}
                >
                    <span className="back-icon">&#8592;</span> Back
                </button>
            </div>

            {/* Footer */}
            <footer className="footer">
                <p>Creator: Krushna Thakkar</p>
            </footer>
        </div>

    );
};


export default Experience;