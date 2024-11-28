import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Volunteer.css'; // Importing the custom CSS
import VolunteerDetail from './VolunteerDetail';
import { useNavigate } from 'react-router-dom';

const Volunteer = () => {

    const navigate = useNavigate()

    const handleBackButtonClick = () => {
        navigate('/main_page'); // Navigate after animation
    }


    return (
        <div className="volunteer-page">
            <h1 className="volunteer-title">Volunteer Experience</h1>
            <p className="volunteer-quote">
                "By volunteering, you turn knowledge into impact and passion into real-world experience."
            </p>
            <div className="arrow-container404">
                <div className="arrow404"></div>
            </div>
            <h2 className='Header-title'>One of my Best Experiences...</h2>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <VolunteerDetail
                            logo="https://ymgrad.com/media/logo/sfsu.webp"
                            title="Research Fellowship"
                            organization="San Francisco State University"
                            description="Contributed to cutting-edge research in :Anomaly Detection in Networks Using Machine Learning: under the guidance of Professor Qun Wang. The project aimed to enhance network security by developing advanced methods for detecting network anomalies and zero-day attacks.  Keywords: Machine Learning, Network Security, Anomaly Detection, CICIDS2017, Research, Algorithm Optimization, Data Analysis.."
                            link="https://github.com/kru2710shna/ML_Research_-1"
                        />
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <VolunteerDetail
                            logo="https://brand.berkeley.edu/wp-content/uploads/2024/08/logo-variations-thumbnail-blue-gold.png"
                            title="Student Volunteer"
                            organization="University of California, Berkeley"
                            description="I recently had the privilege of volunteering at Cal Hacks, one of the largest hackathons in the nation, hosted by MindsDB. It's not just about learning and networking; it's about making a positive impact on the tech community. I look forward to more opportunities like this in the future!
 #CalHacks #Hackathon #Volunteer #TechCommunity #MindsDB"
                            link="https://cal-hacks-11-0.devpost.com"
                        />
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <VolunteerDetail
                            logo="https://images.ctfassets.net/4ths913quwq9/6D9c3PE8kFIiguxYFPBZUV/cbda0d976806b54c5ff731d24db20429/mlh.jpg"
                            title="Hacker (Participant)"
                            organization="Major Legue Hacking"
                            description="I have participated as a Hacker and worked on “Machine Learning Insights into Geology”. Which is based on Unsupervised learning and further depth into Clustering- K-Means Clustering."
                            link="https://github.com/kru2710shna/ml_classification_workshop_MLH_-1"
                        />
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <VolunteerDetail
                            logo="https://brand.berkeley.edu/wp-content/uploads/2024/08/logo-variations-thumbnail-blue-gold.png"
                            title="Participant"
                            organization="University of California, Berkeley"
                            description="My team and I worked on a project titled Hurricane Prediction, aiming to develop a real-time alert system to help predict and track hurricane activities with zero delay and high accuracy."
                            link="https://devpost.com/software/pre-hurricane-alarm"
                        />
                    </div>
                </div>
            </div>

            <div className="back-button-container002 text-center my-4">
                <button
                    className="back-button002 animate__animated animate__pulse animate__infinite"
                    onClick={handleBackButtonClick}
                >
                    <span className="back-icon">&#8592;</span> Back
                </button>
            </div>


            <footer className="footer">
                <p>Creator: Krushna Thakkar</p>
            </footer>
        </div>
    );
};

export default Volunteer;
