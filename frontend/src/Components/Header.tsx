import axios from 'axios';
import config from '../config';
import React from 'react'
import { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

export interface LanguageItem {
    id: number;
    language_name: string;
    language_code: string;
    status: string;
  }

function Header() {
      // State to track whether to add the "fixed" class or not
  const [isFixed, setIsFixed] = useState(false);
  const [languageData, setLanguageData] = useState<LanguageItem[] | null>(null);
  const { languageId } = useLanguage(); // Use the current language ID from the context

  useEffect(() => {
    const fetchLanguage = async () => {
        try {
          const response = await axios.get(config.API_URL_LIVE + 'language');
          
          if (response.status === 200) {
            setLanguageData(response.data.data);
          }
        } catch (err) {
          console.log('_err', err);
        }
      };  
      fetchLanguage();  

    // Function to handle scroll events
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsFixed(true); // Add the class when scrolled down
            } else {
                setIsFixed(false); // Remove the class when scrolled to the top
            }
        };

        // Attach the event listener to the window object
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures this runs once after initial render
    // Function to toggle the 'dark' class on the body tag
    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-theme');
      };
    // State to track if the div is active or not
    const [isActive, setIsActive] = useState(false);
    // Function to toggle the active class
    const toggleActiveClass = () => {
        setIsActive(!isActive); // Toggle the state between true and false
    };
    const [isSearchActive, setIsSearchActive] = useState(false);
    // Function to toggle the active class
    const toggleSearchClass = () => {
        setIsSearchActive(!isSearchActive); // Toggle the state between true and false
    };


    const { setLanguageId } = useLanguage();

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedLanguageId = parseInt(event.target.value, 10);
      setLanguageId(selectedLanguageId);
    };
  return (
    <div>
        <header className={`header ${isFixed ? 'fixed' : ''}`}>
            <div className="container-fluid">
                <div className="menu-area ">
                    <div className="left-side-menu">
                        <div className="left-menu ">
                            {/* <!-- Example single danger button --> */}
                            <div className="dropdow d-flex align-items-center">
                                <a className="drop-btn dropdown-toggle" href="#0" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Create
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="/news" className="dropdown-item"><img src="./images/event.png" alt="n/a" className="img-fluid" /> Events</a>                                 
                                    </li>
                                    <li>
                                        <a href="/news" className="dropdown-item"><img src="./images/event.png" alt="n/a" className="img-fluid" /> Organization Profile</a>                                 
                                    </li>
                                    <li>
                                        <a href="/news" className="dropdown-item"><img src="./images/news.png" alt="n/a" className="img-fluid" /> News</a>                                 
                                    </li>
                                    <li>
                                        <a href="/news" className="dropdown-item"><img src="./images/event.png" alt="n/a" className="img-fluid" /> Ideas</a>                                 
                                    </li>
                                </ul>
                            </div>
                            <div className="language d-flex align-items-center">
                            <select className="form-select form-select-sm " aria-label="Small select example" onChange={handleLanguageChange} style={{textTransform: 'uppercase', fontSize: '1rem', border: 'none', forcedColorAdjust: 'none' }}> 
                                <option value="1">EN</option>
                                <option value="2">BN</option>
                                <option value="3">JP</option>
                                <option value="4">SPN</option>
                            </select>
                                    {/* <a
                                        className="drop-btn dropdown-toggle"
                                        href="#0"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        EN
                                    </a> 
                           
                                {languageData && languageData.length > 0 && ( 
                                    languageData.map((language) => ( 
                                    <ul className="dropdown-menu" >
                                        <li><a className="dropdown-item" href="#0" key={language.id}>{language.language_code}</a></li>
                                   </ul>
                                   ))
                                    
                                )} */}
                            
                                {/* <a className="drop-btn dropdown-toggle" href="#0" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    EN
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#0">EN</a></li>
                                </ul> */}
                            </div>
                            <div className="search">
                                {/* <a href="#0" onclick="toggleSearch(); return false;"><img src="./images/search.png" alt="n/a" className="img-fluid search-icon theme-light" /></a>                        <a href="#0" onclick="toggleSearch(); return false;"><img src="./images/search_dark.png" alt="n/a" className="img-fluid search-icon theme-dark"></a>                        <div className="input-group  search-form"> */}
                                <button style={{background: 'transparent'}} onClick={toggleSearchClass} ><img src="./images/search.png" alt="n/a" className="img-fluid search-icon theme-light" /></button>
                                <button style={{background: 'transparent'}} onClick={toggleSearchClass}><img src="./images/search_dark.png" alt="n/a" className="img-fluid search-icon theme-dark" />
                                </button>                        
                                <div className={`input-group  search-form ${isSearchActive ? 'active' : ''}`}>
                                    <button type="submit" className="input-group-text px-4"><i className="fa-solid fa-magnifying-glass"></i></button>
                                    <input className="form-control" type="text" placeholder="Search"/>
                                    {/* <button type="button" className="input-group-tex px-4" onclick="toggleSearch()"><svg className="svg-inline--fa fa-circle-xmark" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path></svg><!-- <i className="fa-solid fa-circle-xmark"></i> Font Awesome fontawesome.com --></button> */}
                                    <button type="button" className="input-group-tex px-4" onClick={toggleSearchClass} ><i className="fa-solid fa-circle-xmark"></i> </button>
                                </div>
                            </div>
                            <div className="theme-light-dark  position-inherit d-flex align-items-center">
                                {/* <a href="#0" onclick="toggleTheme(); return false;"><img src="./images/sun.png" alt="n/a" className="img-fluid sun-icon theme-light" /></a>                        <a href="#0" onclick="toggleTheme(); return false;"><img src="./images/sun_dark.png" alt="n/a" className="img-fluid sun-icon theme-dark"></a>                    </div> */}
                                <button onClick={toggleDarkMode} style={{background: 'transparent'}}><img src="./images/sun.png" alt="n/a" className="img-fluid sun-icon theme-light" /></button>                        
                                <button onClick={toggleDarkMode} style={{background: 'transparent'}}><img src="./images/sun_dark.png" alt="n/a" className="img-fluid sun-icon theme-dark" /></button>                    
                                </div>
                        </div>
                    </div>
                    <div className="middle-menu">
                        <div className="d-flex justify-content-center pt-3 site-title">
                        <a href="/"><img src="./images/logo.png" alt="n/a" className="img-fluid" /> Social Business <span>Pedia</span></a>                
                    </div>
                    </div>
                    <div>
                        <div className="right-side-menu">
                            <a href="/rbac/security/login"><img src="./images/login.png" alt="n/a" className="img-fluid theme-dark"/> LOGIN</a>                        
                            <a href="/rbac/security/create"><img src="./images/registration.png" alt="n/a" className="img-fluid theme-dark"/> REGISTER</a> 
                                            {/* <a href="#0" onclick="toggleSidebar(); return false;"><img src="./images/menubar.png" alt="n/a" className="img-fluid theme-light" /></a>                </div> */}
                            <button onClick={toggleActiveClass} style={{background: 'transparent', padding: '15px 25px'}} ><img src="./images/menubar.png" alt="n/a" className="img-fluid theme-light" /></button>
                        </div>
                    </div>
                </div>
                <div className="mobile-menu-area">
                    <div className="row">
                        <div className="col">
                            <div className="left-side-menu">
                                {/* <a href="#0" onclick="toggleSidebar(); return false;"><img src="./images/menubar.png" alt="n/a" className="img-fluid" /></a>                    </div> */}
                                <a href="#0" onClick={toggleActiveClass} ><img src="./images/menubar.png" alt="n/a" className="img-fluid" /></a> </div>
                        </div>
                        <div className="col">
                            <div className="logo d-flex justify-content-center align-items-center h-100">
                                <img src="./images/logo.png" alt="n/a" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <div className="right-side-menu justify-content-end d-flex">
                                    {/* <a href="#0" className="search-icon" onclick="toggleTheme()"><img src="ThemePublic/images/sun.png" alt="n/a" className="img-fluid" /></a>   */}
                                    <a href="#0" className="search-icon"><img src="./images/sun.png" alt="n/a" className="img-fluid" /></a>  
                                    <a className="drop-btn dropdown-toggle" href="#0" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="./images/login.png" alt="n/a" className="img-fluid m-0 p-0"/>                            </a>
                                    <ul className="dropdown-menu login-drop-menu">
                                        <li className="px-2 text-center">
                                            <a href="/rbac/security/login">Login</a>                                     
                                        </li>
                                        {/* <img src="./images/login.png" alt="n/a" className="img-fluid theme-light px-2 text-center">  */}
                                        <li className="px-2 text-center">
                                            <a href="/rbac/security/registration">Registration</a>                                     
                                        </li>

                                    </ul>                                                     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`sidebar-menu ${isActive ? 'active' : ''}`}>
                <div className="top-bar pt-3 d-none">
                    {/* <div className="d-flex justify-content-center pt-4 mb-2"><img src="ThemePublic/images/logo.png" alt="n/a" className="img-fluid" /></div> */}
                    <div className="d-flex justify-content-center align-items-center mb-3">
                        <select className="form-select form-select-sm me-3" aria-label="Small select example">
                            {/* <option selected="">Create Now</option> */}
                            <option value="1">Action</option>
                            <option value="2">Link 1</option>
                            <option value="3">Link 2</option>
                        </select>
                        <select className="form-select form-select-sm" aria-label="Small select example">
                            {/* <option selected="">ENG</option> */}
                            <option value="1">BN</option>
                            <option value="1">BN</option>
                            <option value="1">BN</option>
                        </select>
                        <div className="search-sidebar">
                            {/* <div className="search-icon" onclick="toggleSearch()"><img src="ThemePublic/images/search-mobile.png" alt="" className="img-fluid" /></div> */}
                            <div className="search-icon" ><img src="ThemePublic/images/search-mobile.png" alt="" className="img-fluid" /></div>
                            <div className="input-group mb-3 search-form">
                                <button type="submit" className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i> </button>
                                <input className="form-control" type="text" placeholder="serach" />
                                <span className="input-group-text">×</span>
                                {/* <span className="input-group-text" onclick="toggleSearch()">×</span> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sidebar-main-menu container-fluid">
                    {/* <div className="text-end"><button className="close-btn btn btn-sm" onclick="toggleSidebar()"> <svg className="svg-inline--fa fa-xmark" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path></svg><!-- <i className="fa-solid fa-xmark"></i> Font Awesome fontawesome.com --></button></div> */}
                    <div className="text-end"><button className="close-btn btn btn-sm" onClick={toggleActiveClass}> <i className="fa-solid fa-xmark"></i></button></div>
                    <div className="container">
                        <div className="row">

                            {/* <!--menu items start -->  */}
                            <div className="col-md-3 col-12">
                                <a href="/sbworld"><p className="pt-4">Sb World</p></a>
                                <ul className="main-menu col">
                                    <li>
                                        <a href="/sbworld"><img src="./images/home.png" alt="n/a" className="img-fluid" />Country-Wise SB</a>                           
                                    </li>
                                    <li>
                                        <a href="/sbworld"><img src="./images/world.png" alt="n/a" className="img-fluid" />Sector-Wise SB</a>                                 
                                    </li>
                                    <li>

                                        <a href="/sbworld"><img src="./images/academi.png" alt="n/a" className="img-fluid" />Category Wise SB</a>                             
                                    </li>
                                </ul>
                                
                            
                                <a href="/events"><p className="pt-4">Sb Event</p></a>
                                <ul className="main-menu col">
                                    <li>
                                        <a href="/events"><img src="./images/update.png" alt="n/a" className="img-fluid" />Upcoming Events</a>                                  
                                    </li>
                                    <li>
                                        <a href="/events"><img src="./images/network.png" alt="n/a" className="img-fluid" />Recent Events</a>                                  
                                    </li>
                                    <li>                                
                                        <a href="/events"><img src="./images/book.png" alt="n/a" className="img-fluid" />Social Business Day</a>                                  
                                    </li>
                                    <li>
                                        <a href="/events"><img src="./images/help.png" alt="n/a" className="img-fluid" />GSBS</a>                                  
                                    </li>
                                    <li>
                                        <a href="/events"><img src="./images/help.png" alt="n/a" className="img-fluid" />Design Labs</a>                                  
                                    </li>
                                </ul>

                            </div>
                            {/* <!--menu items end --> 

                            <!--menu items start -->  */}
                            <div className="col-md-3 col-12">
                                <a href="/sb-academia"><p className="pt-4">Academia</p></a>
                                <ul className="main-menu col">
                                    <li>
                                        <a href="/sb-academia"><img src="./images/design.png" alt="n/a" className="img-fluid" />Academia Resources</a>                                 
                                    </li>
                                    <li>
                                        <a href="/sb-academia"><img src="./images/news.png" alt="n/a" className="img-fluid" />SB Academia Conference</a>                               
                                    </li>
                                    <li>                                
                                        <a href="/sb-academia"><img src="./images/wiki.png" alt="n/a" className="img-fluid" />Yunus SB Centre</a>                                 
                                    </li>
                                    <li>                                
                                        <a href="/sb-academia"><img src="./images/wiki.png" alt="n/a" className="img-fluid" />Books</a>                                 
                                    </li>
                                    <li>                                
                                        <a href="/sb-academia"><img src="./images/wiki.png" alt="n/a" className="img-fluid" />Publications</a>                                 
                                    </li>
                                    <li>                                
                                        <a href="/sb-academia"><img src="./images/wiki.png" alt="n/a" className="img-fluid" />Tutorials</a>                                 
                                    </li>
                                    <li>                                
                                        <a href="/sb-academia"><img src="./images/wiki.png" alt="n/a" className="img-fluid" />Academic Programs</a>                                 
                                    </li>
                                    <li>
                                        <a href="/sb-academia"><img src="./images/wiki.png" alt="n/a" className="img-fluid" />Activities</a>                                 
                                    </li>
                                    <li>
                                        <a href="/sb-academia"><img src="./images/wiki.png" alt="n/a" className="img-fluid" />Reports</a>                                 
                                    </li>
                                </ul>
                            </div>
                            {/* <!--menu items end --> 

                            <!--menu items start -->  */}
                            <div className="col-md-3 col-12">
                                {/* <!-- sb media  --> */}
                                <a href="/news"><p className="pt-4">Sb Media</p></a>
                                <ul className="main-menu col">
                                    <li>
                                        <a href="/news"><img src="./images/update.png" alt="n/a" className="img-fluid" />All News</a>                                  
                                    </li>
                                    <li>
                                        <a href="/news"><img src="./images/network.png" alt="n/a" className="img-fluid" />Social Business</a>                                  
                                    </li>
                                    <li>                                
                                        <a href="/news"><img src="./images/book.png" alt="n/a" className="img-fluid" />Press Release</a>                                  
                                    </li>
                                    <li>
                                        <a href="/news"><img src="./images/help.png" alt="n/a" className="img-fluid" />YSBC News Feeds</a>                                  
                                    </li>
                                    <li>
                                        <a href="/news"><img src="./images/help.png" alt="n/a" className="img-fluid" />Print Media</a>                                  
                                    </li>
                                    <li>
                                        <a href="/news"><img src="./images/help.png" alt="n/a" className="img-fluid" />Online Media</a>                                  
                                    </li>
                                </ul>

                                {/* <!-- videos  --> */}
                                <a href="/videos"><p className="pt-4">Sb Videos</p></a>
                                <ul className="main-menu col">
                                    <li>
                                        <a href="/gallery/videos"><img src="./images/network.png" alt="n/a" className="img-fluid" />Recent Videos</a>                            </li>
                                    <li>
                                        <a href="/gallery/videos"><img src="./images/book.png" alt="n/a" className="img-fluid" />Top Viewed</a>                            </li>
                                    <li>
                                        <a href="/gallery/videos"><img src="./images/help.png" alt="n/a" className="img-fluid" />Event Videos</a>                            </li>
                                    <li>
                                        <a href="/gallery/videos"><img src="./images/help.png" alt="n/a" className="img-fluid" />Photos</a>                            </li>
                                </ul>
                            </div>
                            {/* <!--menu items end --> 

                            <!--menu items start -->  */}
                            <div className="col-md-3 col-12">
                                {/* <!-- design lab  --> */}
                                <a href="/designlab"><p className="pt-4">Design Lab</p></a>
                                <ul className="main-menu col">
                                    <li>
                                        <a href="/designlab"><img src="./images/update.png" alt="n/a" className="img-fluid" />About Design Lab</a>                            </li>
                                    <li>
                                        <a href="/designlab"><img src="./images/network.png" alt="n/a" className="img-fluid" />SB Design Lab</a>                                  
                                    </li>
                                    <li>
                                        <a href="/designlab"><img src="./images/book.png" alt="n/a" className="img-fluid" />Archives</a>                                  
                                    </li>
                                    <li>
                                        <a href="/designlab"><img src="./images/help.png" alt="n/a" className="img-fluid" />All Projets</a>                                  
                                    </li>
                                    <li>
                                        <a href="/designlab"><img src="./images/help.png" alt="n/a" className="img-fluid" />FAQ</a>                                  
                                    </li>
                                </ul>

                                {/* <!-- sb wiki  --> */}
                                <a href="/wiki"><p className="pt-4">SB Wiki</p></a>
                                <ul className="main-menu col">
                                    <li>
                                        <a href="/wiki"><img src="./images/network.png" alt="n/a" className="img-fluid" />Resources</a>                                  
                                    </li>
                                    <li>                                
                                        <a href="/wiki"><img src="./images/book.png" alt="n/a" className="img-fluid" />Yunus Library</a>                                  
                                    </li>
                                </ul>
                            </div>
                            {/* <!--menu items end -->  */}

                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header
