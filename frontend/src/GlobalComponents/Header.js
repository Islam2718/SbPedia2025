import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
import config from '../config';
// import { SiteInfoContext } from '../SiteInfoContext';
// import TranslationComponent from './TranslationComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Header(){ 
    // const siteInfo = useContext(SiteInfoContext);
    // let location = useLocation();
    return(
        <>
            <section className='row section-topbar container-fluid'>
                <div className='col text-left'>
                    <ul>
                        <li>
                            <a href='#0'>
                                <FontAwesomeIcon icon="fa-solid fa-plus" /> Create
                            </a>
                        </li>
                        <li>
                            <a href='#0' className='border p-0 px-2 rounded'><FontAwesomeIcon icon="fa fa-moon"/> Dark Mode</a>
                            {/* <a href='#0' className='border p-0 px-2 rounded'><FontAwesomeIcon icon="fa fa-sun" /> Light Mode</a> */}
                        </li>
                        <li><a href='#0'><FontAwesomeIcon icon="fa fa-magnifying-glass" /></a></li>
                    </ul>
                </div>
                <div className='col-6 text-center'>
                    <a href="#0"><img src={config.FILE_URL + "logo1.png"} alt="" /></a>
                </div>
                <div className='col text-end'>
                    <ul>
                        <li><a href='#0'><FontAwesomeIcon icon="fa fa-list" /> Menu</a></li>
                        <li>
                            {/* <a href='#0' className='border p-0 px-2 rounded'>Lang - EN</a> */}
                            <a href='#0' className='border p-0 px-2 rounded'>Lang - BN</a>
                        </li>                        
                        <li>
                            <a href='#0'>
                                <FontAwesomeIcon icon="fa fa-sign-in" /> Sign In
                                {/* <FontAwesomeIcon icon="fa fa-user" /> Username */}
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </>      
    ) 
}
export default Header;