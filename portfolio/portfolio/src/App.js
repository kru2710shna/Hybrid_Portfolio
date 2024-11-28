import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/Layout/MainPage.js'
import LeftComponent from './components/LeftComponent/LeftComponent.js'
import RightComponent from './components/RightComponent/RightComponent.js'
import HomePage from './components/Layout/Home_Page.js'
import Projects from './components/LeftComponent/Projects.js';
import Experience from './components/Layout/Experience.js';
import ProjectML from './components/RightComponent/ProjectML.js'
import ProjectsMLDetail from './components/RightComponent/ProjectsMLDetail.js';
import Volunteer from './components/Volunteer/Volunteer.js'
import Certificate from './components/Certificate/Certificate.js'
import Publications from './components/Publication/Publications.js';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path="/main_page" element={<MainPage />} />
                <Route path="/left" element={<LeftComponent />} />
                <Route path="/right" element={<RightComponent />} />
                <Route path="*" element={<HomePage />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projectml" element={<ProjectML />} />
                <Route path="/project-detail" element={<ProjectsMLDetail />} />
                <Route path="/volunteer" element={<Volunteer />} />
                <Route path="/Certificate" element={<Certificate />} />
                <Route path="/Publication" element={<Publications />} />

            </Routes>
        </Router>
    );
};

export default App;
