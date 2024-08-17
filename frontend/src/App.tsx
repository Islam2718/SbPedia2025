import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/HomePage/Home';
import About from './Pages/AboutPage/About';
import Contact from './Pages/ContactPage/Contact';
import LoginPage from './Pages/LoginRegistrationPage/LoginPage';
import Registration from './Pages/LoginRegistrationPage/Registration';
import NewsPage from './Pages/NewsPage/NewsPage';
import WikiPage from './Pages/WikiPage/WikiPage';
function App() {
  return (
    <div>
      <Header />
      	<Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/news?/:slug" element={<NewsPage />} />
          <Route path="/wiki" element={<WikiPage />} />
        </Routes>
    <Footer />
  </div>
  );
}

export default App;
