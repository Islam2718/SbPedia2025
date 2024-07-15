import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
import config from '../config';
// import { SiteInfoContext } from '../SiteInfoContext';
// import TranslationComponent from './TranslationComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
function Header(){ 
    // const siteInfo = useContext(SiteInfoContext);
    // let location = useLocation();
    return(
        <>
            <section className='section-topbar'>
                <div className=''>
                    <div className=''>   
                        <div className='d-flex justify-content-between'>
                            <div className='text-start'>
                                <ul>
                                    <li>
                                        <Link to='#0'>
                                            <FontAwesomeIcon icon="fa-solid fa-plus" /> Create
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='#0' className='border p-0 px-2 rounded'><FontAwesomeIcon icon="fa fa-moon"/> Dark Mode</Link>
                                        {/* <a href='#0' className='border p-0 px-2 rounded'><FontAwesomeIcon icon="fa fa-sun" /> Light Mode</a> */}
                                    </li>
                                    <li><Link to='#0'><FontAwesomeIcon icon="fa fa-magnifying-glass" /></Link></li>
                                </ul>
                            </div>
                            <div className='text-center'>
                                <Link to="#0"><img src={config.FILE_URL + "logo1.png"} alt="" /></Link>
                            </div>
                            <div className='text-end'>
                                <ul>
                                    <li><Link to='#0'><FontAwesomeIcon icon="fa fa-list" /> Menu</Link></li>
                                    <li>
                                        {/* <a href='#0' className='border p-0 px-2 rounded'>Lang - EN</a> */}
                                        <Link to='#0' className='border p-0 px-2 rounded'>Lang - BN</Link>
                                    </li>                        
                                    <li>
                                        <Link to='#0'>
                                            <FontAwesomeIcon icon="fa fa-sign-in" /> Sign In
                                            {/* <FontAwesomeIcon icon="fa fa-user" /> Username */}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>      
    ) 
}
export default Header;