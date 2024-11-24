import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/Layout/MainPage.js'
import LeftComponent from './components/LeftComponent/LeftComponent.js'
import RightComponent from './components/RightComponent/RightComponent.js'
import HomePage from './components/Layout/Home_Page.js'


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element= {<HomePage />}/> 
                <Route path="/main_page" element= {<MainPage />}/>
                <Route path="/left" element={<LeftComponent />} />
                <Route path="/right" element={<RightComponent />} />
            </Routes>
        </Router>
    );
};

export default App;
