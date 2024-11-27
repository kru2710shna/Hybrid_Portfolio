import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "JobEngine_OnBoard",
            date: "Ongoing",
            description: "Creating a Job-Board for User to Enhance Networking and connect with Future Jobs Opportunites",
            link: "https://github.com/kru2710shna/aboutus",
            techStack: ["MongoDB", "Express", "React", "NodeJS"],
            side: "left",
        },
        {
            title: "Real-Time Hurricane Prediction",
            date: "October 2024",
            description: "Application to track Hurricane all over US from Nothern Atlantic Basin.",
            link: "https://github.com/kru2710shna/Pre_Hurricane",
            techStack: ["Google Cloud Platform", "Google Drive","Gimini", "Google Maps", "Google Earth Engine"],
            side: "right",
        },
        {
            title: "iNotebook",
            date: "September 2024",
            description: "Self-Notes Taking Application + WORD Application Functionalities",
            link: "https://github.com/kru2710shna/iNotebook",
            techStack: ["React","Node","Express"],
            side: "left",
        },
        {
            title: "News WebApp",
            date: "August-September 2024",
            description: "Your own News Application. Full-Stack Application that provides News from all corners of the world",
            link: "https://github.com/kru2710shna/NewsBreakApp-React",
            techStack: ["React","Node","Express"],
            side: "right",
        },
        {
            title: "Book-App",
            date: "August 2024",
            description: "book Management System- Keep track of books To-Read, To-Buy and Completed. User can Read from anywhere.",
            link: "https://github.com/kru2710shna/JAVA_basedProject/tree/main/Beginner%20Project%20/Book%20App",
            techStack: ["JAVA", "Spring Framework", "JUnit"],
            side: "left",
        },
        {
            title: "Grocery App",
            date: "August 2024",
            description: "Keep Track of your Groceries and reminds of things to carry way back home. Allow Other users to add to list with permissions to read and write.",
            link: "https://github.com/kru2710shna/JAVA_basedProject/tree/main/Beginner%20Project%20/Grocery%20Shopping",
            techStack: ["JAVA", "Spring Framework", "JUnit"],
            side: "left",
        }
    ];

    return (
        <div className="timeline">
            <div className="arrow"></div>
            <div class="timeline-container">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`timeline-item ${project.side}`}
                    >
                        <div className="timeline-content">
                            <h3 className="project-title">{project.title}</h3>
                            <h4 className="project-date">{project.date}</h4>
                            <p className="project-description">{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                <i className="fab fa-github"></i> Visit GitHub
                            </a>
                            <p className="tech-stack">
                                <strong>Tech Stack:</strong> {project.techStack.join(", ")}
                            </p>
                        </div>
                    </div>
                ))}
                <div className="timeline-line"></div>
            </div>
        </div>
    );
};

export default Projects;
