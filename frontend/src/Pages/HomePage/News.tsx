import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
function News() {
  return (
    <div>
        <section className="news-area my-2 mt-5">
        <div className="container">
            <div className="section-header">
                <h4>News</h4>
                <div className="see-more">
                    <Link to="/news" className="" id="link-id">See All<i className="fa-solid fa-angle-right"></i></Link>                    
                </div>
            </div>            
            <div className="py-4">
                <div className="row focus-news p-3 pt-5 rounded">
                    <div className="col-md-6">
                    <Link to="">
                        <img src="https://socialbusinesspedia.com/uploads/news/845x400/ua_300844088509068813070624533273.png" alt="n/a" className="img-fluid news-banner" />                        
                    </Link>
                    </div>
                    <div className="col-md-6">
                        <div className="news-content-area d-flex h-100 align-items-center">
                            <div>
                                <Link to="/news/details/1427/12th-social-business-day-sponsored-by-yunus-centre-kicks-off-on-june-27th" className="news-title-link">
                                <span className="news-date">
                                    <img src="ThemePublic/images/clock.png" alt="n/a" className="img-fluid" /> 6/27/22                                </span>
                                </Link>
                                <div className="news-title">
                                    <Link to="/news/details/1427/12th-social-business-day-sponsored-by-yunus-centre-kicks-off-on-june-27th">
                                        <h3>12th Social Business Day sponsored by Yunus Centre  kicks off on June 27th</h3>
                                    </Link>
                                </div>
                                <div className="news-content">
                                    <p>Yunus Centre Press Release ( 27 june 2022 )&nbsp;&amp;...</p>                                </div>
                                <div className="read-more">
                                    <Link className="btn btn-secondary" to="/news/details/1427/12th-social-business-day-sponsored-by-yunus-centre-kicks-off-on-june-27th">
                                        Read More  <i className="fa-solid fa-angle-right"></i>
                                    </Link>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <section className="news-trending-area mb-5">
        <div className="container">
            <div className="row news-trending rounded">
                <div className="text-center section-title">
                    <h3>Trending News</h3>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</p>
                </div>
                <div className="news-slider">
                    <div className="swiper newsSwiper swiper-initialized swiper-horizontal swiper-backface-hidden position-relative">
                    <Swiper
                    // install Swiper modules
                        modules={[Navigation]}
                        className='swiper newsSwiper'
                        spaceBetween={20}
                        slidesPerView={3}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        breakpoints={{
                            '@0.00': {
                              slidesPerView: 1,
                              spaceBetween: 10,
                            },
                            '@0.75': {
                              slidesPerView: 1,
                              spaceBetween: 20,
                            },
                            '@1.00': {
                              slidesPerView: 2,
                              spaceBetween: 20,
                            },
                            '@1.50': {
                              slidesPerView: 3,
                              spaceBetween: 20,
                            },
                          }}
                    >
                        <SwiperSlide>
                            <div className="swiper-slide rounded-2 my-3 swiper-slide-active" role="group" aria-label="1 / 9"><Link to="/news/details/1426/yunus-invited-to-rome-to-discuss-the-theme-for-expo-2030." className="news-link"><div><div className="news-image"><img src="https://socialbusinesspedia.com/uploads/news/845x400/ua_720117561433900406238098467708.jpg" alt="n/a" className="img-fluid" /><span>  Social Business</span></div><div className="new-date"> <i className="fa-regular fa-clock"></i> 6/11/22</div><div className="news-title"><p>Yunus Invited to Rome to Discuss the Theme for Expo 2030.</p></div></div></Link></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide rounded-2 my-3 swiper-slide-next" role="group" aria-label="2 / 9" ><Link to="/news/details/1425/yunus-warns-about-the-disaster-path-of-present-civilization.-urges-to-build-a-new-civilization." className="news-link"><div><div className="news-image"><img src="https://socialbusinesspedia.com/uploads/news/845x400/ua_740050820538470201770617162458.jpg" alt="n/a" className="img-fluid" /><span>  Social Business</span></div><div className="new-date"><i className="fa-regular fa-clock"></i> 6/6/22</div><div className="news-title"><p>Yunus Warns About the Disaster Path of Present Civilization. Urges to Build a New Civilization.</p></div></div></Link></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide rounded-2 my-3" role="group" aria-label="3 / 9" ><Link to="/news/details/1424/yunus-speaks-at-parliamentary-breakfast-in-the-german-parliament" className="news-link"><div><div className="news-image"><img src="https://socialbusinesspedia.com/uploads/news/845x400/ua_819607783770282277797056793077.jpg" alt="n/a" className="img-fluid" /><span>  Social Business</span></div><div className="new-date"> <i className="fa-regular fa-clock"></i>  6/4/22</div><div className="news-title"><p>Yunus Speaks at Parliamentary Breakfast in the German Parliament</p></div></div></Link></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide rounded-2 my-3" role="group" aria-label="5 / 9" ><Link to="/news/details/1422/mahathir-mohammad-invites-professor-yunus-for-a-discussion" className="news-link"><div><div className="news-image"><img src="https://socialbusinesspedia.com/uploads/news/845x400/ua_601106589216667601937708371722.jpg" alt="n/a" className="img-fluid" /><span>  Social Business</span></div><div className="new-date"> <i className="fa-regular fa-clock"></i> 3/30/22</div><div className="news-title"><p>Mahathir Mohammad Invites Professor Yunus for a Discussion</p></div></div></Link></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide rounded-2 my-3" role="group" aria-label="5 / 9" ><Link to="/news/details/1422/mahathir-mohammad-invites-professor-yunus-for-a-discussion" className="news-link"><div><div className="news-image"><img src="https://socialbusinesspedia.com/uploads/news/845x400/ua_601106589216667601937708371722.jpg" alt="n/a" className="img-fluid" /><span>  Social Business</span></div><div className="new-date"> <i className="fa-regular fa-clock"></i> 3/30/22</div><div className="news-title"><p>Mahathir Mohammad Invites Professor Yunus for a Discussion</p></div></div></Link></div>
                        </SwiperSlide>
                    </Swiper>
                        <div className="swiper-button-next d-lg-flex d-none" role="button" style={{width: '40px', height: '40px', position: 'absolute', right: '10px', top: '50%', zIndex: '1', padding: '12px 15px'}} ><i className="fa-solid fa-angle-right"></i></div>
                        <div className="swiper-button-prev d-lg-flex d-none " role="button" style={{width: '40px', height: '40px', position: 'absolute', left: '10px', top: '50%', zIndex: '1', padding: '12px 15px'}}><i className="fa-solid fa-angle-left"></i></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="see-more-section text-center my-5">
            <Link to="/news" className="btn btn-secondary" id="link-id">See More</Link>             
        </div>
    </section>
    </div>
  )
}

export default News