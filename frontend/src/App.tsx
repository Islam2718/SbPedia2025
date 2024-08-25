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
import NewsDetails from './Pages/NewsPage/NewsDetails';
import WikiPage from './Pages/WikiPage/WikiPage';
import WikiDetails from './Pages/WikiPage/WikiDetails';
import DesignPage from './Pages/DesignLab/DesignPage';
import DesignDetails from './Pages/DesignLab/DesignDetails';
import Academia from './Pages/Academia/AcademiaPage';
import AcademiaDetails from './Pages/Academia/AcademiaDetails';
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
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/details/:id/:title" element={<NewsDetails />} />
          <Route path="/wiki" element={<WikiPage />} />
          <Route path="/wiki/details/:id/:title" element={<WikiDetails />} />
          <Route path="/wiki" element={<WikiPage />} />
          <Route path="/wiki/details/:id/:title" element={<WikiDetails />} />
          <Route path="/designlab" element={<DesignPage />} />
          <Route path="/desginlab/details/:id/:title" element={<DesignDetails />} />
          <Route path="/sb-academia?/:details" element={<Academia />} />
          <Route path="/sb-academia/details/:id/:title" element={<AcademiaDetails />} />
        </Routes>
    <Footer />
  </div>
  );
}

export default App;
