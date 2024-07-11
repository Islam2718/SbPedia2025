import React from 'react';
import config from '../../../config';
// import { Link } from 'react-router-dom'; 
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Autoplay } from "swiper"; // Import SwiperCore and Autoplay module
import "swiper/css";
import "swiper/css/autoplay";

// Install the Autoplay module to Swiper
// SwiperCore.use([Autoplay]);

const Organization = () => {

  return (
    <section className='section-news py-5'>
        <div className="section-title text-center py-4">
          <p>Organizations</p>
          <span>Organizations are listed in Social Business Pedia</span>
        </div>
        <div className='container news-items'>
            {/* swipper slide  */}
            <div className="slider-area">
                <Swiper
                    spaceBetween={15}
                    slidesPerView={2}                            
                    loop={true}
                    speed={500}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        },
                        }}
                        className="swiper mySwiper"
                    >
                    {/* {Array.isArray(countryJsonData) && countryJsonData.map(item => ( */}
                        <SwiperSlide className="swiper-slide">
                            <img src={config.FILE_URL + "gkl.png"	 } alt='' className="img img-fluid"/>
                            <h6 className='text-center'>G. Knitwear Ltd.</h6>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={config.FILE_URL + "yc.png"	 } alt='' className="img img-fluid"/>
                            <h6 className='text-center'>Yunus Centre</h6>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={config.FILE_URL + "gchina.png"	 } alt='' className="img img-fluid"/>
                            <h6 className='text-center'>Grameen China</h6>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={config.FILE_URL + "ysh.png"	 } alt='' className="img img-fluid"/>
                            <h6 className='text-center'>Younus Sports Hub</h6>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={config.FILE_URL + "yc.png"	 } alt='' className="img img-fluid"/>
                            <h6 className='text-center'>Yunus Centre</h6>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={config.FILE_URL + "gchina.png"	 } alt='' className="img img-fluid"/>
                            <h6 className='text-center'>GKL</h6>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={config.FILE_URL + "ysh.png"	 } alt='' className="img img-fluid"/>
                            <h6 className='text-center'>Younus Sports Hub</h6>
                        </SwiperSlide>
                    {/* ))}*/}
                </Swiper> 
                <div>   
                </div>
            </div>
        </div>
        <div className="text-center py-4">
          <a href="#0">
            <button className='sbp25-btn'>View All</button>
          </a>
        </div>
    </section>
  )
}

export default Organization;
