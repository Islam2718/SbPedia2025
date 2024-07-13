import React, { useEffect }  from 'react';
import config from '../../../config';
const Banner = () =>{
    useEffect(() => {  
      }, []);
    return(
        <>
            <section className='section-banner'>
                <div className='container'  style={{ backgroundImage: `url(${config.FILE_URL + 'banner.png'})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}>
                    <div className='row'>
                        <div className='col text-bottom'>
                            {/* left..  */}
                        </div>
                        <div className='col'>
                            <div class='row my-5'>                               
                                <div className='col-4 card py-1 m-2 text-center'>
                                    <a href="#0">
                                        <img src={config.FILE_URL + "icon-news.png"} alt='' className="nav-cow-img img-fluid me-1"/>
                                        Sb News & Media
                                    </a>
                                </div>
                                <div className='col-3 card py-1 m-2 text-center'>
                                    <a href="#0">
                                        <img src={config.FILE_URL + "icon-wiki.png"} alt='' className="nav-cow-img img-fluid me-1"/>
                                        SB Events
                                    </a>
                                </div>
                                <div className='col-3 card py-1 m-2 text-center'>
                                    <a href="#0">
                                        <img src={config.FILE_URL + "icon-world.png"} alt='' className="nav-cow-img img-fluid me-1"/>
                                        Sb World
                                    </a>
                                </div>
                                <div className='col-3 card py-1 m-2 text-center'>
                                    <a href="#0">
                                        <img src={config.FILE_URL + "icon-wiki.png"} alt='' className="nav-cow-img img-fluid me-1"/>
                                        Sb Wiki
                                    </a>
                                </div>
                                <div className='col-4 card py-1 m-2 text-center'>
                                    <a href="#0">
                                        <img src={config.FILE_URL + "icon-academia.png"} alt='' className="nav-cow-img img-fluid me-1"/>
                                        Sb Academia
                                    </a>
                                </div>
                                <div className='col-3 card py-1 m-2 text-center'>
                                    <a href="#0">
                                        <img src={config.FILE_URL + "icon-video.png"} alt='' className="nav-cow-img img-fluid me-1"/>
                                        Sb Video
                                    </a>
                                </div>
                                <div className='col-3 card py-1 m-2 text-center'>
                                    <a href="#0">
                                        <img src={config.FILE_URL + "icon-design-lab.png"} alt='' className="nav-cow-img img-fluid me-1"/>
                                        Design Lab
                                    </a>
                                </div>
                                <div className='col-3 card py-1 m-2 text-center'>
                                    <a href="#0">
                                        <img src={config.FILE_URL + "icon-book.png"} alt='' className="nav-cow-img img-fluid me-1"/>
                                        Publications
                                    </a>
                                </div>
                                <div className='col-4 card py-1 m-2 text-center'>
                                    <a href="#0">
                                        <img src={config.FILE_URL + "icon-sb.png"} alt='' className="nav-cow-img img-fluid me-1"/>
                                        Social Business
                                    </a>
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