import React from 'react'
import { Swiper, SwiperSlide  } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';
import { useEffect, useState } from 'react';

interface NewsItem {
    id: number;
    person_id: string;
    alias: string;
    is_top_news: string;
    is_featured: string;
    is_organization_news: string;
    organization_id: string;
    is_user_news: string | null;
    featured_image: string;
    tags: string | null;
    link_type: string;
    custom_link: string | null;
    is_target_blank: string | null;
    order: string;
    status: string;
    approve_status: string;
    publish_date: string;
    country_id: string;
    country_name: string | null;
    city_name: string | null;
    organization_name: string | null;
    activity_id: string;
    live_edited_by: string | null;
    is_file: string;
    file_type: string | null;
    file_name: string | null;
    created_at: string;
    updated_at: string;
    news_content_languages: NewsContentLanguage[];
  }
  // Interface for the news content languages
interface NewsContentLanguage {
    id: number;
    news_content_id: string;
    setting_language_id: string;
    title: string;
    sub_title: string;
    name: string;
    content: string;
    featured_image: string | null;
    is_default: string;
    created_by: string;
    updated_by: string;
    status: string;
    activity_id: string;
    created_at: string;
    updated_at: string;
  }
function NewsRecent() {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [newsData, setNewsData] = useState<NewsItem[] | null>(null);

    useEffect(() => {
      const fetchNews = async () => {
        try {
          const response = await axios.get(config.API_URL_LIVE + config.NEWS + '?lang=1&page=1&size=20');
          
          if (response.status === 200) {
            setNewsData(response.data.data); // Set the news data from the response
          } else {
            setError(`Error: ${response.status}`);
          }
        } catch (err) {
          setError('Failed to fetch news.');
        } finally {
          setLoading(false);
        }
      };
      fetchNews();
    }, []);
  return (
    <div>
        <section className="news-trending-area mb-5 mt-4">
            <div className="container">
                <div className="row1 news-trending rounded">
                    <div className="text-center section-title">
                        <h3>Social Business</h3>
                        <p>All about social business</p>                
                    </div>
                    <div className="news-slider">
                        <div className="swiper newsSwiper swiper-initialized swiper-horizontal swiper-backface-hidden position-relative">
                        <Swiper
                                modules={[Navigation, Pagination]}
                                navigation={{
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                }}
                                spaceBetween={10}
                                slidesPerView={3}
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
                                      slidesPerView: 2,
                                      spaceBetween: 10,
                                    },
                                    '@1.25': {
                                      slidesPerView: 3,
                                      spaceBetween: 10,
                                    },
                                    '@1.50': {
                                      slidesPerView: 3,
                                      spaceBetween: 30,
                                    },
                                    '@2.00': {
                                      slidesPerView: 3,
                                      spaceBetween: 10,
                                    },
                                  }}
                                  pagination={{
                                    clickable: true,
                                  }}
                            >
                            <SwiperSlide>
                                <div className="swiper-slide rounded-2 my-3 swiper-slide-active">
                                    <div>
                                        <div className="news-image">
                                            <img src="https://socialbusinesspedia.com/uploads/news/845x400/ua_866380892092826615092561181582.png" alt="" className="img-fluid rounded" />
                                            <span></span>
                                        </div>
                                        <div className="new-date">
                                            <i className="fa-regular fa-clock"></i> 2508                                    </div>
                                        <div className="news-title">
                                            <p className="card-title">
                                                <a href="/news/details/1420/yunus-social-business-centre-at-sunway-report-2020-2021">
                                                    Yunus Social Business Centre at Sunway Report-2020-2021...                                            </a>                                            
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide rounded-2 my-3 swiper-slide-active">
                                    <div>
                                        <div className="news-image">
                                            <img src="https://socialbusinesspedia.com/uploads/news/845x400/ua_866380892092826615092561181582.png" alt="" className="img-fluid rounded" />
                                            <span></span>
                                        </div>
                                        <div className="new-date">
                                            <i className="fa-regular fa-clock"></i> 2508                                    </div>
                                        <div className="news-title">
                                            <p className="card-title">
                                                <a href="/news/details/1420/yunus-social-business-centre-at-sunway-report-2020-2021">
                                                    Yunus Social Business Centre at Sunway Report-2020-2021...                                            </a>                                            
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide rounded-2 my-3 swiper-slide-active">
                                    <div>
                                        <div className="news-image">
                                            <img src="https://socialbusinesspedia.com/uploads/news/845x400/ua_866380892092826615092561181582.png" alt="" className="img-fluid rounded" />
                                            <span></span>
                                        </div>
                                        <div className="new-date">
                                            <i className="fa-regular fa-clock"></i> 2508                                    </div>
                                        <div className="news-title">
                                            <p className="card-title">
                                                <a href="/news/details/1420/yunus-social-business-centre-at-sunway-report-2020-2021">
                                                    Yunus Social Business Centre at Sunway Report-2020-2021...                                            </a>                                            
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide rounded-2 my-3 swiper-slide-active">
                                    <div>
                                        <div className="news-image">
                                            <img src="https://socialbusinesspedia.com/uploads/news/845x400/ua_866380892092826615092561181582.png" alt="" className="img-fluid rounded" />
                                            <span></span>
                                        </div>
                                        <div className="new-date">
                                            <i className="fa-regular fa-clock"></i> 2508                                    </div>
                                        <div className="news-title">
                                            <p className="card-title">
                                                <a href="/news/details/1420/yunus-social-business-centre-at-sunway-report-2020-2021">
                                                    Yunus Social Business Centre at Sunway Report-2020-2021...                                            </a>                                            
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide rounded-2 my-3 swiper-slide-active">
                                    <div>
                                        <div className="news-image">
                                            <img src="https://socialbusinesspedia.com/uploads/news/845x400/ua_866380892092826615092561181582.png" alt="" className="img-fluid rounded" />
                                            <span></span>
                                        </div>
                                        <div className="new-date">
                                            <i className="fa-regular fa-clock"></i> 2508                                    </div>
                                        <div className="news-title">
                                            <p className="card-title">
                                                <a href="/news/details/1420/yunus-social-business-centre-at-sunway-report-2020-2021">
                                                    Yunus Social Business Centre at Sunway Report-2020-2021...                                            </a>                                            
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            </Swiper>
                            {/* <div className="swiper-wrapper" id="swiper-wrapper-8a243e14c8bb10f1" aria-live="polite">
                                
                                <div className="swiper-slide rounded-2 my-3 swiper-slide-next">
                                    <div>
                                        <div className="news-image">
                                            <img src="https://socialbusinesspedia.com/uploads/news/845x400/ua_497427437573924774679003308771.png" alt="" className="img-fluid rounded" />
                                        </div>
                                        <div className="new-date">
                                            <i className="fa-regular fa-clock"></i> 2502 </div>
                                        <div className="news-title">
                                            <p className="card-title">
                                                <a href="/news/details/1419/ysbc-web-lecture-series---lecture#29:-grameen-trust’s-experience-of-international-replication-of-grameen-microcredit-and-nobin-programmes">
                                                    YSBC Web Lecture Series - Lecture#29: Grameen Trust’s Experience of ...                                            
                                                </a>                                            
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                    <div className="swiper-slide rounded-2 my-3">
                                    <div>
                                        <div className="news-image">
                                            <img src="/uploads/default.png" alt="n/a" className="img-fluid rounded" />
                                        </div>
                                        <div className="new-date">
                                                <i className="fa-regular fa-clock"></i> 2487                                    
                                        </div>
                                        <div className="news-title">
                                            <p className="card-title">
                                                <a href="/news/details/1414/daftar-situs-judi-slot-online-aman-dan-terpercaya">
                                                    Daftar Situs Judi Slot Online Aman dan Terpercaya...
                                                </a>                                            
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide rounded-2 my-3">
                                    <div>
                                        <div className="news-image">
                                        <img src="/uploads/default.png" alt="n/a" className="img-fluid rounded" />
                                        </div>
                                        <div className="new-date">
                                            <i className="fa-regular fa-clock"></i> 2483 </div>
                                        <div className="news-title">
                                            <p className="card-title">
                                                <a href="/news/details/1411/the-new-country-director-&quot;kishwar-imdad&quot;">
                                                    The new Country Director "Kishwar Imdad"...</a>                                            
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide rounded-2 my-3">
                                    <div>
                                        <div className="news-image">
                                        <img src="/uploads/default.png" alt="n/a" className="img-fluid rounded" />
                                        </div>
                                        <div className="new-date">
                                            <i className="fa-regular fa-clock"></i>2481 
                                        </div>
                                        <div className="news-title">
                                            <p className="card-title">
                                                <a href="/news/details/1410/duolin-inhaler">
                                                    duolin inhaler ...                                            
                                                </a>                                            
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide rounded-2 my-3">
                                    <div>
                                        <div className="news-image">
                                            <img src="/uploads/default.png" alt="n/a" className="img-fluid rounded" />
                                        </div>
                                        <div className="new-date">
                                            <i className="fa-regular fa-clock"></i>2478                                    
                                        </div>
                                        <div className="news-title">
                                            <p className="card-title">
                                                <a href="/news/details/1408/resorts-in-udaipur">
                                                    Resorts in Udaipur...                                           
                                                </a>                                            
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>*/}
                            <div className="swiper-button-next d-lg-flex d-none"  role="button" style={{width: '40px', height: '40px', position: 'absolute', right: '10px', top: '50%', zIndex: '1', padding: '12px 15px'}}><i className="fa-solid fa-angle-right"></i></div>
                            <div className="swiper-button-prev d-lg-flex d-none"  role="button" style={{width: '40px', height: '40px', position: 'absolute', left: '10px', top: '50%', zIndex: '1', padding: '12px 15px'}}><i className="fa-solid fa-angle-left"></i></div> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default NewsRecent