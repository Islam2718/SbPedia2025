import React, { useEffect }  from 'react';
import config from '../../../config';
import { Link } from 'react-router-dom';
const Banner = () =>{
    useEffect(() => {  
      }, []);
    return(
        <>
<<<<<<< HEAD
            <section className='section-banner' style={{ backgroundImage: `url(${config.FILE_URL + 'banner.png'})` , backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'inherit' }}>
                <div className='container'>
=======
            <section className='section-banner'>
                <div className='container'  style={{ backgroundImage: `url(${config.FILE_URL + 'banner.png'})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}>
>>>>>>> 2862246f504b0e8e36031cd07cb4de1d8e002ccd
                    <div className='row'>
                        <div className='col text-bottom'>
                            {/* left..  */}
                        </div>
                        <div className='col'>
                            <div class='row my-5'>                               
                                <div className='col-4 card py-1 m-2 text-center'>
                                    <Link to="#0">
                                        <img src={config.FILE_URL + "icon-news.png"} alt='' className="nav-cow-img img-fluid me-1"/>
                                        Sb News & Media
                                    </Link>
                                </div>
                                <div className='col-3 card py-1 m-2 text-center'>
                                    <Link to="#0">
                                        <img src={config.FILE_URL + "icon-wiki.png"} alt='' className="nav-cow-img img-fluid me-1"/>
                                        SB Events
                                    </Link>
                                </div>
                                <div className='col-3 card py-1 m-2 text-center'>
                                    <Link to="#0">
                                        <img src={config.FILE_URL + "icon-world.png"} alt='' className="nav-cow-img img-fluid me-1"/>
                                        Sb World
                                    </Link>
                                </div>
                                <div className='col-3 card py-1 m-2 text-center'>
                                    <Link to="#0">
                                        <img src={config.FILE_URL + "icon-wiki.png"} alt='' className="nav-cow-img img-fluid me-1"/>
                                        Sb Wiki
                                    </Link>
                                </div>
                                <div className='col-4 card py-1 m-2 text-center'>
                                    <Link to="#0">
                                        <img src={config.FILE_URL + "icon-academia.png"} alt='' className="nav-cow-img img-fluid me-1"/>
                                        Sb Academia
                                    </Link>
                                </div>
                                <div className='col-3 card py-1 m-2 text-center'>
                                    <Link to="#0">
                                        <img src={config.FILE_URL + "icon-video.png"} alt='' className="nav-cow-img img-fluid me-1"/>
                                        Sb Video
                                    </Link>
                                </div>
                                <div className='col-3 card py-1 m-2 text-center'>
                                    <Link to="#0">
                                        <img src={config.FILE_URL + "icon-design-lab.png"} alt='' className="nav-cow-img img-fluid me-1"/>
                                        Design Lab
                                    </Link>
                                </div>
                                <div className='col-3 card py-1 m-2 text-center'>
                                    <Link to="#0">
                                        <img src={config.FILE_URL + "icon-book.png"} alt='' className="nav-cow-img img-fluid me-1"/>
                                        Publications
                                    </Link>
                                </div>
                                <div className='col-4 card py-1 m-2 text-center'>
                                    <Link to="#0">
                                        <img src={config.FILE_URL + "icon-sb.png"} alt='' className="nav-cow-img img-fluid me-1"/>
                                        Social Business
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Banner;