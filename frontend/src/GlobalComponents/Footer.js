import React from 'react';
import { Link } from 'react-router-dom';
import config from '../config';
// import { SiteInfoContext } from '../SiteInfoContext';
const Footer = () =>{
    // const siteInfo = useContext(SiteInfoContext);
    return(
        <>
            <section className='section-footer py-5'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-3 text-center'>
                            <h5>Social Business</h5>
                            <ul>
                                <li><Link to='/'>Social Business Introduction</Link></li>
                                <li><Link to='/about'>Dr. Younus - Social Business</Link></li>
                                <li><Link to='/contact'>7P of Social Business</Link></li>
                                <li><Link to='/contact'>Impacts of Social Business</Link></li>
                            </ul>
                        </div>
                        <div className='col-3 text-center'>
                            <h5>Pages</h5>
                            <ul>
                                <li><Link to='/'>About Social Business Pedia</Link></li>
                                <li><Link to='/about'>SB Wiki</Link></li>
                                <li><Link to='/about'>SB News & Updates</Link></li> 
                                <li><Link to='/contact'>Site Maps</Link></li>
                            </ul>
                        </div>
                        <div className='col-3 text-center'>
                                <h5>Links</h5>
                            <ul>
                                <li><Link to='/'>SB Events</Link></li>
                                <li><Link to='/about'>SB Academia</Link></li>
                                <li><Link to='/contact'>Idea Bank</Link></li> 
                                <li><Link to='/contact'>SB Design Lab</Link></li>
                            </ul>
                        </div>
                        <div className='col-3 text-center'>
                            <div><Link to="#0"><img src={config.FILE_URL + "logoF.png"} alt="" /></Link></div>
                            <div className='mt-2'><Link to="#0" className='py-2'>www.socialbusinesspedia.com</Link></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-copyright'>
                <div className='col text-center py-2'>
                    <p>Copyright &copy; 2024. All Rights Reserved.</p>
                </div>
            </section>
        </>
    )
}
export default Footer;
