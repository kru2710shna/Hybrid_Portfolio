import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/Layout/MainPage.js'
import LeftComponent from './components/LeftComponent/LeftComponent.js'
import RightComponent from './components/RightComponent/RightComponent.js'
import HomePage from './components/Layout/Home_Page.js'
import Projects from './components/LeftComponent/Projects.js';
import Experience from './components/Layout/Experience.js';

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


            </Routes>
        </Router>
    );
};

export default App;
