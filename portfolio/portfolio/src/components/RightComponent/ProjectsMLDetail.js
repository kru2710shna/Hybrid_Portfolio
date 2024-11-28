import React from 'react';
import './ProjectsMLDetail.css';
import { useNavigate } from 'react-router-dom';


const ProjectsMLDetail = () => {
    const projects = [
        {
            image: '/Images/Screenshot 2024-11-27 at 1.40.35 AM.png',
            name: 'Self Made Nueral Network',
            date: 'November 2024',
            description: 'This project demonstrates the implementation of a simple neural network from scratch in Python. It covers fundamental components like dense layers, activation functions, and normalization techniques. The code is modular and easy to understand, making it a great resource for learning and experimenting with basic neural network concepts.',
            techStack: 'Python',
            link: 'https://github.com/kru2710shna/Self_Made_Nueral_Network/tree/main',
            length: '3 Weeks',
        },
        {
            image: 'Images/Screenshot 2024-08-24 at 1.21.19 PM.png',
            name: 'Document Text Translation',
            date: 'October 2024',
            description: 'The Document-Text-Detection project is a sophisticated application designed to detect and extract text from documents and images using advanced machine learning and deep learning algorithms. This project is focused on ensuring user privacy while providing accurate and efficient text extraction services.',
            techStack: 'Python,NumPy, Matplotlib,Scikit-learn, OpenCV, Tesseract,Scikit-learn metric, Flask, Render with Gunicorn as WSGI server, OpenCV, Pillow, Tesseract,HTML, CSS and JavaScript ',
            link: 'https://github.com/kru2710shna/Document-Text-Detection',
            length: '1 month',
        },
        {
            image: 'Images/Screenshot 2024-10-12 at 12.31.35 PM.png',
            name: 'Kidney-Tumor Image Classification',
            date: 'September 2024',
            description: 'A kidney tumor is an abnormal growth of tissue in the kidneys. These tumors can be benign (non-cancerous) or malignant (cancerous). Understanding kidney tumors is essential for early diagnosis and effective treatment.',
            techStack: 'TensorFlow, Pandas, DVC, MLflow, Jupyter Notebook, NumPy, Matplotlib, Seaborn, Python-box, PyYAML, TQDM, Ensure, Joblib, Types-PyYAML, SciPy, Flask, Flask-CORS, Gdown',
            link: 'https://github.com/kru2710shna/Kidney-Disease-Classification',
            length: '1 month',
        },
        {
            image: 'Images/output_73_1.png',
            name: 'Chest X-ray Image Classification Project',
            date: 'Augsut 2024',
            description: 'This project focuses on developing a binary classification model to predict 14 different pathological conditions based on frontal-view chest X-ray images. Utilizing the ChestX-ray8 dataset, which contains 108,948 images from 32,717 unique patients, we aim to provide accurate predictions that can assist physicians in diagnosing various diseases. Each image in the dataset comes with multiple text-mined labels, enabling the classification of eight different diseases.',
            techStack: 'numpy, pandas, seaborn, matplotlib.pyplot, keras.preprocessing.image, keras.applications.densenet, keras.layers, keras.models, keras, tensorflow, util, public_tests, test_utils',
            link: 'https://github.com/example/chatbot',
            length: '2 months',
        },
        {
            image: 'Images/Screenshot 2024-11-27 at 2.18.18 AM.png',
            name: 'CureTrack - Personalized Medical Recommendation System by IdontKnow',
            date: 'October 2024',
            description: 'CureTrack is a web-based platform designed to assist individuals in managing their health and wellness. By inputting their symptoms, users receive tailored recommendations for medication, diet, workout routines, and precautions. The system also provides detailed information about potential diseases, including descriptions to help users understand their conditions better. After diagnosis, users can download a PDF version of their prescription and recommendations, allowing them to easily access and share their personalized health plan with healthcare providers.',
            techStack: 'HTML5, CSS3, JavaScript, Gunicorn, Flask, Python-dotenv, Python, NumPy, Matplotlib, SciPy, Joblib, Threadpoolctl, Scikit-learn, SVM, Scikit-learn metrics, Render, Blinker, Click, FPDF, Itsdangerous, Jinja2',
            link: 'https://github.com/kru2710shna/Medicine_Recommendation_System?tab=readme-ov-file',
            length: '2 months',
        },
        {
            image: 'Images/IMG_6993.jpg',
            name: 'Real-Time End To End Flightfare Prediction',
            date: 'January 2024',
            description: 'The End_To_End_Flightfare_Prediction project is an advanced machine learning application designed to predict flight fares with high accuracy. This project leverages cutting-edge data science techniques and a robust deployment infrastructure to deliver predictions that can assist users in planning their travel expenses effectively..',
            techStack: 'Python, NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, Flask, GCP, HTML, CSS, JavaScript',
            link: 'https://github.com/kru2710shna/End_To_End_Flightfare_Prediction',
            length: '1 month',
        },
        {
            image: 'Images/Screenshot 2024-11-27 at 2.05.29 AM.png',
            name: 'Olympic Medal Predictor',
            date: 'November 2023',
            description: 'Predicting the exact number of medals a country will win in the Olympics with low mean absolute error (MAE)',
            techStack: 'pandas, seaborn, sklearn.linear_model, sklearn.metrics, numpy',
            link: 'https://github.com/kru2710shna/Olympic-Medal-Predictor--Machine-Learning',
            length: '20 Days',
        },
        {
            image: 'Images/Screenshot 2024-11-27 at 2.07.43 AM.png',
            name: 'Fraud Detection with BigQuery ML',
            date: 'October 2023',
            description: 'This project focuses on leveraging BigQuery ML, a powerful machine learning tool on Google Cloud, to analyze public financial transactions data for fraud detection. The dataset includes essential features such as transaction type, amount transferred, account IDs of origin and destination, new and old balances, and the relative time of the transaction. The target variable, isfraud, indicates whether a transaction is fraudulent..',
            techStack: 'BigQuery, BigQuery ML, AI Platform Notebooks, Google Cloud AutoML, logistic regression, boosted trees, unsupervised machine learning, feature engineering, fraud detection, model evaluation',
            link: 'https://github.com/kru2710shna/Fraud-Detection',
            length: '1 month',
        },
        {
            image: 'Images/Screenshot 2024-11-27 at 2.10.20 AM.png',
            name: 'ANN and CNN Project',
            date: 'August 2024',
            description: 'This project involves building two types of neural networks for classification tasks: Artificial Neural Networks (ANN) and Convolutional Neural Networks (CNN). For the ANN, the goal is churn prediction, where we preprocess the dataset by applying Standard Scaling, splitting the data into training and testing sets, and then constructing and training the ANN. The model achieves 87% accuracy in predicting customer churn. For the CNN, we work with the CIFAR10 dataset, preparing and verifying the data before building the convolutional base, adding dense layers, and training the model. The CNN also achieves 87% accuracy in classifying images from the CIFAR10 dataset..',
            techStack: 'Python, Flask, Dialogflow',
            link: 'https://github.com/example/chatbot',
            length: '1 month',
        },
        {
            image: 'Images/Screenshot 2024-11-27 at 2.12.47 AM.png',
            name: 'News Research Tool ',
            date: 'May 2024',
            description: 'RockyBot is an AI-powered tool designed to search and retrieve insights from news articles. Utilizing advanced Natural Language Processing (NLP) techniques, FAISS for vector storage, and OpenAIs language models, RockyBot can quickly answer user queries based on news articles while providing source references.',
            techStack: 'Python, Langchain, Streamlit, Sentence-Transformers, FAISS, Unstructured, OpenAI API, Pickle, Dotenv',
            link: 'https://github.com/kru2710shna/Bot-News-Research-Tool',
            length: '2 months',
        },
        {
            image: 'Images/Screenshot 2024-09-20 at 9.30.20 PM.png',
            name: 'End-to-End Machine Learning Project: Understanding Student Performance',
            date: 'June 2024',
            description: 'This project aims to analyze and understand how various factors such as Gender, Ethnicity, Parental Level of Education, Lunch, and Test Preparation Course affect students academic performance based on their test scores. By building a predictive model, we can determine the impact of these factors on students’ overall performance.',
            techStack: 'numpy, pandas, matplotlib, seaborn, scikit-learn, Flask, gunicorn',
            link: 'https://github.com/example/chatbot',
            length: '3 Days',
        },
        {
            image: 'Images/Screenshot 2024-09-20 at 9.03.42 PM.png',
            name: 'Height-Weight Prediction Linear Regression Algorithm',
            date: 'July 2024',
            description: 'Scenario: Healthcare System for Monitoring Growth in Children- In a pediatric clinic, doctors monitor the growth patterns of children over time to ensure they are developing normally. A large dataset of childrens heights and weights, categorized by age, gender, and other factors, is collected to help predict future growth trends.',
            techStack: 'numpy, pandas, matplotlib, seaborn, scikit-learn, Flask, gunicorn',
            link: 'https://github.com/kru2710shna/Height-Weight-Prediction-Linear-Regression-Algorithm',
            length: '2 Weeks',
        },
        {
            image: 'Images/Screenshot 2024-11-27 at 2.32.32 AM.png',
            name: 'Automated Plant Species Identification System',
            date: 'Feburary 2024',
            description: 'A botanical research center is working on a system to automatically classify different species of flowers based on their physical characteristics. The center collects data on various flower species and needs a robust model to classify new samples based on measurements like petal length, petal width, sepal length, and sepal width.',
            techStack: 'Python, Scikit-learn, Pandas, NumPy, Matplotlib, Seaborn, Jupyter Notebook/IDE',
            link: 'https://github.com/kru2710shna/Automated-Plant-Species-Identification-System',
            length: '1 month',
        },
        {
            image: 'Images/Screenshot 2024-10-02 at 2.44.31 PM.png',
            name: 'Audio Classification Project Using Deep Learning',
            date: 'November 2023',
            description: 'This project aims to develop a deep learning model for audio classification, with the goal of accurately categorizing audio data into predefined classes such as genres, speech types, or environmental sounds. The project utilizes a variety of Python packages for data analysis, visualization, and model development.',
            techStack: 'Python 3.x, Librosa, IPython.display, Matplotlib, Scipy, Pandas, Numpy, sklearn, Keras, TensorFlow, TQDM',
            link: 'https://github.com/kru2710shna/Audio-Classification',
            length: '3 Days',
        },
        {
            image: 'Images/Screenshot 2024-11-27 at 2.47.05 AM.png',
            name: 'Real-Time Sign Language Detection with TensorFlow Object Detection and Python',
            date: 'December 2023',
            description: 'This project aims to develop a real-time sign language detection system using TensorFlow Object Detection and Python. Sign language is a crucial means of communication for individuals with hearing impairments, and automating its interpretation can enhance accessibility and communication.',
            techStack: 'TensorFlow, Python, OpenCV',
            link: 'https://github.com/kru2710shna/Sign-lang_detection_Model',
            length: '5 Days',
        }

        // Add more projects here
    ];

    const getCardClass = (length) => {
        const months = parseInt(length);
        if (months > 2) return 'project-card red-border';
        if (months === 2) return 'project-card green-border';
        return 'project-card yellow-border';
    };

    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate('/main_page');

    }

    return (

        <div className="projects-detail-container">

            <h2>
                <span className="spaced-word">Projects:     Machine Learning +</span>
                <span className="spaced-word">Reinforcement Learning +</span>
                <span className="spaced-word">Deep Learning +</span>
                <span className="spaced-word">Computer Vision</span>
            </h2>
            <br></br>
            {projects.map((project, index) => (
                <div key={index} className={getCardClass(project.length.split(' ')[0])}>
                    <img src={project.image} alt={project.name} className="project-image" />
                    <div className="project-detail-info">
                        <div className="project-header">
                            <h3>{project.name}</h3>
                            <span className="project-date">{project.date}</span>
                        </div>
                        <p><strong>Description:</strong> {project.description}</p>
                        <p><strong>Tech Stack:</strong> {project.techStack}</p>
                        <p><strong>Project Length:</strong> {project.length}</p>
                        <div className="project-link-container">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                View Project
                            </a>
                        </div>
                    </div>
                </div>
            ))}
            <div className="back-button-container007 text-center my-4">
                <button
                    className="back-button007 animate__animated animate__pulse animate__infinite"
                    onClick={handleBackButtonClick}
                >
                    <span className="back-icon007">&#8592;</span> Back
                </button>
            </div>

            {/* Footer */}
            <footer className="footer">
                <p>Creator: Krushna Thakkar</p>
            </footer>
        </div>
    );
};

export default ProjectsMLDetail;
