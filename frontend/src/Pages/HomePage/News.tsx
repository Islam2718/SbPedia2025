import React, { useEffect, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';
import { useLanguage } from '../../LanguageContext';
export interface NewsItem {
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
export interface NewsContentLanguage {
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
function News() {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [newsData, setNewsData] = useState<NewsItem[] | null>(null);
    const { languageId } = useLanguage(); // Use the current language ID from the context
    useEffect(() => {
      const fetchNews = async () => {
        try {
          const response = await axios.get(config.API_URL_LIVE + config.NEWS + `?lang=${languageId}&page=1&size=10`);
          
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
    }, [languageId]);
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
                {newsData && newsData.length > 0 && (
                    <>
                    {/* First Item */}
                    <div className="col-md-6">
                    <Link to={`/news/details/${newsData[0]?.id}/${newsData[0]?.alias}`}>
                        <img src={`https://socialbusinesspedia.com/uploads/news/845x400/${newsData[0]?.featured_image}`} alt="n/a" className="img-fluid news-banner" />                        
                    </Link>
                    </div>
                    <div className="col-md-6">
                        <div className="news-content-area d-flex h-100 align-items-center">
                            <div>
                                <Link to={`/news/details/${newsData[0]?.id}/${newsData[0]?.alias}`} className="news-title-link">
                                <span className="news-date">
                                    <img src="./images/clock.png" alt="n/a" className="img-fluid" /> {newsData[0]?.publish_date}                               </span>
                                </Link>
                                <div className="news-title">
                                    <Link to={`/news/details/${newsData[0]?.id}/${newsData[0]?.alias}`}>
                                        <h3>{newsData[0]?.news_content_languages[0]?.title}</h3>
                                    </Link>
                                </div>
                                <div className="news-content">
                                    <p className="card-text my-1 py-2" dangerouslySetInnerHTML={{__html: newsData[0]?.news_content_languages[0]?.content}}
                                    style={{  display: '-webkit-box',
                                        WebkitLineClamp: '2',
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',}}
                                    >
                                    </p>    
                                </div>
                                <div className="read-more">
                                    <Link className="btn btn-secondary" to={`/news/details/${newsData[0]?.id}/${newsData[0]?.alias}`}>
                                        Read More  <i className="fa-solid fa-angle-right"></i>
                                    </Link>
                                </div>
                            </div>                            
                        </div>
                    </div>
                    </>
                )}
                    
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
                    {newsData && newsData.length > 0 && (
                        <>
                        {/* Rest of the Items */}
                        {newsData.slice(2).map((newsItem) => (
                            <SwiperSlide key={newsItem.id}>
                                <div className="swiper-slide rounded-2 my-3" role="group" aria-label="5 / 9" ><Link to={`/news/details/${newsItem.id}/${newsItem.news_content_languages[0]?.title}`} className="news-link"><div><div className="news-image">
                                    <img src={`https://socialbusinesspedia.com/uploads/news/845x400/${newsItem.featured_image}`} alt="n/a" className="img-fluid" /><span> Social Business </span></div><div className="new-date"> <i className="fa-regular fa-clock"></i> {newsItem.publish_date}</div><div className="news-title"><p>{newsItem.news_content_languages[0]?.title}</p></div></div></Link>
                                </div>
                            </SwiperSlide>
                        ))}
                        </>
                    )}
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