import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';
import AnimatedNumber from './AnimatedNumber'; // Import the AnimatedNumber component
import Experience from './Experience';


const MainPage = () => {
    const navigate = useNavigate();


    // Placeholder data, could be dynamically passed as props or state
    const name = "Krushna Thakkar";
    const role = "Machine Learning";
    const education = "Bachlores in Computer Science";

    return (
        <div className="main-page">
            <section className="intro-section">
                <h1>{name}</h1> {/* Display Name dynamically */}
                <p>Hi, Thanks for taking some time off to visit my Website. I'm  Software Engineer + {role} practitioner. </p>
            </section>

            <section className="education-section">
                <h1>Education</h1>
                <p>San Francisco State University</p>
                <p>{education} - May'25</p>
            </section>

            <section className="stats-section">
                <h2>Achievements Stats</h2>
                <p className='p_ss'>Click Each to checkout in Detail</p>
                <p></p>
                <div className="stats">
                    <div className="stat-item">
                        <AnimatedNumber target={34} speed={500} />
                        <p>Certifications & Licenses</p>
                    </div>
                    <div className="stat-item">
                        <AnimatedNumber target={25} speed={500} />
                        <p>Projects</p>
                    </div>
                    <div className="stat-item">
                        <AnimatedNumber target={4} speed={500} />
                        <p>Volunteering Experience</p>
                    </div>
                    <div className="stat-item">
                        <AnimatedNumber target={100} speed={500} />
                        <p>Skills</p>
                    </div>
                    <div className="stat-item">
                        <AnimatedNumber target={2} speed={500} />
                        <p>Work Experience</p>
                    </div>
                    <div className="stat-item">
                        <AnimatedNumber target={2} speed={500} />
                        <p>Recommendations</p>
                    </div>
                    <div className="stat-item">
                        <AnimatedNumber target={25} speed={500} />
                        <p>Publications</p>
                    </div>
                </div>
            </section>

            {/* I do section */}
            <section className="i-do-section">
                <h1>I-Do, I-Am</h1>
                <div className="arrow-container">
                    <div className="arrow"></div>
                </div>
            </section>

            {/* Left and Right sections */}
            <section className="left-right">

                <div className="left" onClick={() => navigate('/left')}>
                    <h2>Software Engineering</h2>
                    <p>Open! SWE Door</p>
                </div>
                <div className="right" onClick={() => navigate('/right')}>
                    <h2>Machine Learning</h2>
                    <p>Open! MLE Door</p>
                </div>
            </section>

            <div className="arrow-container-2">
                <div className="arrow-2"></div>
            </div>

            <Experience/>

            


            {/* Footer */}
            <footer className="footer">
                <p>Creator: Krushna Thakkar</p>
            </footer>
        </div>
    );
};

export default MainPage;
