import ProjectsMLDetail from './ProjectsMLDetail';
import './ProjectML.css'; // Ensure the CSS file is imported

const ProjectML = () => {
    return (
        <div className="project-ml-container">
            <h2>Machine Learning Projects</h2>
            <p>
                "True knowledge exists in knowing that you know nothing."
                <br />
                <span>- Socrates</span>
            </p>
            <div className="arrow-1"></div>
            <ProjectsMLDetail />
        </div>
    );
};

export default ProjectML;
