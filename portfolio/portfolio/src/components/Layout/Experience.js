import React from 'react';
import './Experience.css'; // Custom CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap

const experiences = [
    {
        logo: 'https://app.goodworkhub.com/static/media/logo_v4.fef60cd7.png', // Replace with your logo URL
        company: 'Good Work Hub',
        startEndDate: 'June 2024 - November 2024',
        position: 'Machine Learning Engineer',
        jobType: 'Internship',
        description:
            `Working as an ML Engineer on the AI team, developing a product that connects charities with tools, grants, and people to maximize their
impact. Utilized AI agents for web scraping and autonomous grant-matching with micro-charities. Developed and deployed LLM models
(e.g., Llama3 8B parameters) for creating ChatBot agents, automating tasks, and hyper-tuning bots for data gathering. Leveraged
open-source tools for efficient data indexing and formatting`,
        lorLink: 'https://drive.google.com/file/d/1XaN53hND9a1Aa37HqF6N2cBpyeMaFSSz/view?usp=sharing',
        expLetterLink: 'https://drive.google.com/file/d/1XaN53hND9a1Aa37HqF6N2cBpyeMaFSSz/view?usp=sharing',
    },
    {
        logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQEo9GUNP7eIsw/company-logo_200_200/company-logo_200_200/0/1706485055655/flow_global_software_technologies_logo?e=2147483647&v=beta&t=Qw3Gi9-Wb81UvA5V9peUbty-kGh_9wtimTMfNQ4_MqY',
        company: 'Global Software Technologies Flow LLC',
        startEndDate: 'December 2023 - June 2024',
        position: 'Artificial Intelligence Engineer',
        jobType: 'Internship',
        description:
            `I utilized Scrapy, Beautiful Soup, and Selenium for web scraping, gathering data for exploratory data analysis (EDA). By implementing API integration, I automated data collection from diverse sources, ensuring efficient and accurate acquisition. Additionally, I contributed to the data preprocessing pipeline by cleaning, transforming, and structuring the scraped data for downstream analysis.

-> I developed a deep learning model tailored to a specific task, managing large-scale datasets exceeding 20,000 rows and 100 columns. Utilizing TensorFlow or PyTorch frameworks, I crafted and trained the model, fine-tuning it for peak performance and accuracy. I deployed the model on AWS for scalability, tested its functionality on Azure ML for compatibility.

-> I played a pivotal role in conceptualizing, developing, and filing an AI-related patent, contributing innovative technology or methodology. Collaborating closely with legal experts, I drafted patent documentation, ensuring compliance and robust intellectual property protection.

-> I integrated HubSpot CRM into workflows, optimizing lead management and customer relationships. By creating custom filtration mechanisms, I efficiently categorized and prioritized leads, leveraging data insights for targeted engagement, driving business growth.`,
        lorLink: 'https://drive.google.com/file/d/19Triw5-4CPEJf5yvo6Z0RGjc7cLH5shP/view?usp=sharing',
        expLetterLink: 'https://drive.google.com/file/d/19Triw5-4CPEJf5yvo6Z0RGjc7cLH5shP/view?usp=sharing',
    },
];

const Experience = () => {
    return (
        <div className="experience-container container">
            <h1 className="text-center my-4">Work Experience</h1>
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
                                <span className="text-muted">{exp.startEndDate}</span>
                            </div>
                            <p className="position-title">
                                <strong>Position:</strong> {exp.position}
                            </p>
                            <p className="job-type">
                                <strong>Job Type:</strong> {exp.jobType}
                            </p>
                            <p className="description">
                                <strong>Description:</strong> {exp.description}
                            </p>
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
    );
};

export default Experience;
