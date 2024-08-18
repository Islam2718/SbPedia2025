import React from 'react'
import { Swiper, SwiperSlide  } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
function Banner() {
  return (
    <div>
        <section className="banner-area">
        <div className="container">
            <div className="banner-logo-area text-center py-5 my-3">
                <img src="./images/logo_full.png" alt="n/a" className="img-fluid light-theme-logo" />
                <img src="./images/banner_dark_logo.png" alt="n/a" className="img-fluid dark-theme-logo" />
            </div>
        </div>
        <div className="container">
            <div className="people-slider-area d-flex mb-5 position-relative">
                <div className='row' style={{overflow: 'hidden'}}>
                    <div className='col-lg-1'>
                        <div className="swiper1 mySwiper1 border1 d-lg-flex d-none align-items-center" >
                            <br />                   
                            <span className="myswiper-button-prev btn btn-sm btn-primary1"  role="button"><i className="fa-solid fa-angle-left"></i></span>
                            <span className="myswiper-button-next btn btn-sm btn-primary1" ><i className="fa-solid fa-angle-right"></i> </span>
                        </div>
                    </div>
                    <div className='col-lg-11'>
                        <div className="swiper mySwiper flex-grow-1">
                            <Swiper
                                modules={[Navigation, Pagination]}
                                navigation={{
                                    nextEl: '.myswiper-button-next',
                                    prevEl: '.myswiper-button-prev',
                                }}
                                spaceBetween={10}
                                slidesPerView={4.2}
                                onSlideChange={() => console.log('slide change')}
                                breakpoints={{
                                    '@0.00': {
                                      slidesPerView: 1.5,
                                      spaceBetween: 10,
                                    },
                                    '@0.75': {
                                      slidesPerView: 1.5,
                                      spaceBetween: 10,
                                    },
                                    '@1.00': {
                                      slidesPerView: 2.5,
                                      spaceBetween: 10,
                                    },
                                    '@1.25': {
                                      slidesPerView: 3.2,
                                      spaceBetween: 10,
                                    },
                                    '@1.50': {
                                      slidesPerView: 4.2,
                                      spaceBetween: 30,
                                    },
                                    '@2.00': {
                                      slidesPerView: 4.5,
                                      spaceBetween: 10,
                                    },
                                  }}
                                  pagination={{
                                    clickable: true,
                                  }}
                            >
                            <SwiperSlide>
                                <div className="swiper-slide swiper-slide-item rounded-2 my-3 py-2 sb-shadow d-flex align-items-center">
                                    <div className="icon-area ps-2">
                                        <a href="/news"><img src="./images/slider_news.png" alt="n/a" className="img-fluid light-theme-logo" /></a>
                                    </div>
                                    <div className="slider-content px-2">
                                        <a href="/news" className="btn-menu-default"><strong>SB News &amp; Media</strong><small><br />Photo &amp; Video Gallary</small></a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="swiper-slide swiper-slide-item rounded-2 my-3 py-2 sb-shadow d-flex align-items-center">
                                    <div className="icon-area ps-2">
                                        <a href="/events"><img src="./images/sb-event-slide.png" alt="n/s" className="img-fluid light-theme-logo" /></a>
                                    </div>
                                    <div className="slider-content px-2">
                                        <a href="/events" className="btn-menu-default"><strong>SB Events</strong><small><br />Social Business Events</small></a>
                                    </div>
                                </div>    
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide swiper-slide-item rounded-2 my-3 py-2 sb-shadow d-flex align-items-center">                            
                                    <div className="icon-area ps-2">
                                        <a href="/sbworld"><img src="./images/slider_world.png" alt="n/s" className="img-fluid light-theme-logo" /></a>
                                    </div>
                                    <div className="slider-content px-2">
                                        <a href="/sbworld" className="btn-menu-default"><strong>SB World</strong><small><br />Social Business World</small></a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide swiper-slide-item rounded-2 my-3 py-2 sb-shadow d-flex align-items-center">
                                    <div className="icon-area ps-2">
                                        <a href="/wiki"><img src="./images/slider_wiki.png" alt="n/s" className="img-fluid light-theme-logo" /></a>
                                    </div>
                                    <div className="slider-content px-2">
                                        <a href="/wiki" className="btn-menu-default"><strong>SB Wiki</strong><small><br/>Future of Human Beings</small></a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide swiper-slide-item rounded-2 my-3 py-2 sb-shadow d-flex align-items-center">
                                    <div className="icon-area ps-2">
                                        <a href="/sb-academia"><img src="./images/slider_wiki.png" alt="n/s" className="img-fluid light-theme-logo" /></a>
                                    </div>
                                    <div className="slider-content px-2">
                                        <a href="/sb-academia" className="btn-menu-default"><strong>SB Academia</strong><small><br/>Publishing Research</small></a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide swiper-slide-item rounded-2 my-3 py-2 sb-shadow d-flex align-items-center">
                                    <div className="icon-area ps-2">
                                        <a href="/designlab"><img src="./images/slider_design.png" alt="n/s" className="img-fluid light-theme-logo" /></a>
                                    </div>
                                    <div className="slider-content px-2">
                                        <a href="/designlab" className="btn-menu-default"><strong>Design Lab</strong><small><br/>Betterment of society</small></a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            </Swiper>
                        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
        <div className="banner-img-area">
            <a href="https://socialbusinesspedia.com/events/sbd2024" target="_blank" rel="noreferrer">
                <img src="./images/hot-banner.png" alt="n/a" className="img-fluid w-100" />
            </a>
        </div>
    </section>
    </div>
  )
}

export default Banner