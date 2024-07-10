import React from 'react';

// import axios from 'axios';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
// globals 
import Footer from './GlobalComponents/Footer';
import Header from './GlobalComponents/Header';
// pages 
import HomePage from './Components/HomePage/HomePage';

function App() {

  useEffect(() => {
    // fetchSiteInfo();
  }, []);

  return (
    <div>
    {/* <SiteInfoProvider> */}
      <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/about-company" element={<AboutPage />} />
            <Route path="/vision-mission" element={<AboutPage />} />
            <Route path="/#board-of-director" element={<AboutPage />} />
            <Route path="/md-message" element={<AboutPage />} />
            <Route path="/social-business" element={<AboutPage />} /> */}
          </Routes>
          <Footer />
      </Router>
    {/* </SiteInfoProvider> */}
    </div>
  );
}

export default App;
