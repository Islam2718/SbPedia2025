import React from 'react'
import axios from 'axios'
import config from '../../config'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
interface AcademiaContentLanguage {
    id: number;
    academia_content_id: string;
    setting_language_id: string;
    title: string;
    name: string;
    content: string;
    is_default: string;
    created_by: string;
    updated_by: string;
    status: string;
    created_at: string;
    updated_at: string;
  }
  
  interface AcademiaContent {
    id: number;
    person_id: string;
    alias: string;
    featured_image: string | null;
    tags: string | null;
    link_type: string;
    custom_link: string | null;
    is_target_blank: string | null;
    order: string;
    status: string;
    activity_id: string;
    live_edited_by: string | null;
    is_file: string;
    file_type: string | null;
    file_name: string | null;
    country_id: string | null;
    is_top_news: string;
    is_featured: string;
    is_organization: string;
    publish_date: string | null;
    created_at: string;
    updated_at: string | null;
    academia_content_language: AcademiaContentLanguage[];
  }
  
  interface AcademiaContentResponse {
    data: AcademiaContent[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    status: number;
  }
  


  
function AcademiaPost() {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [academiaData, setAcademiaData] = useState<AcademiaContent[] | null>(null);
    let { details } = useParams();
    if(details == 'sb-academia') {
      details = 'academia'
    }
    else{
      details = 'academia/' + details
    }
    useEffect(() => {
      const fetchNews = async () => {
        try {
            const response = await axios.get(config.API_URL_LIVE + (details ?? '') + '?lang=1&page=1&size=20');
          if (response.status === 200) {
            setAcademiaData(response.data.data); // Set the news data from the response
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
    }, [details]);
  return (
    <div>
        <section className="section-top-news py-5">
            <div className="container">
                <div className="row">
                {loading && <p>Loading...</p>}
                {/* {error && <p>{error}</p>} */}
                {academiaData && academiaData.length > 0 && (
                    <>
                    {/* First Item */}
                    <div className="col-md-8 col-lg-8 col-sm-12">
                        <div className="mt-4 p-4 sb-shadow bg-box rounded">
                        <img
                            src={`https://socialbusinesspedia.com/uploads/news/845x400/${academiaData[0]?.featured_image}`}
                            alt=""
                            className="img-fluid w-100 card-image cap rounded"
                        />
                        <div className="card-body py-4">
                            <h5 className="card-title">
                            <Link to={`/sb-academia/details/${academiaData[0]?.id}/${academiaData[0]?.alias}`}>
                                {academiaData[0]?.academia_content_language[0]?.title}
                            </Link>
                            </h5>
                            <div className="my-1 py-1 news-status-bar">
                            <small className="link-text">
                                <i className="fa-solid fa-calendar"></i> {academiaData[0]?.publish_date}
                            </small>
                            &nbsp;
                            <small className="link-text">
                                <i className="fa-solid fa-folder"></i> By - {academiaData[0]?.person_id}
                            </small>
                            &nbsp;
                            <small className="link-text">
                                <i className="fa-solid fa-user-large"></i> SBP
                            </small>
                            </div>
                            <p className="card-text my-1 py-2" dangerouslySetInnerHTML={{__html: academiaData[0]?.academia_content_language[0]?.content}}
                                style={{  display: '-webkit-box',
                                    WebkitLineClamp: '2',
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',}}
                            >
                            </p>
                            <Link
                            to={`/sb-academia/details/${academiaData[0]?.id}/${academiaData[0]?.alias}`}
                            className="btn-sb-primary btn btn-primary border-0 news-btn py-2 px-4"
                            >
                            Read More <i className="fa-solid fa-angle-right"></i>
                            </Link>
                        </div>
                        </div>
                    </div>

                    {/* Second and Third Items */}
                    {academiaData.slice(1, 3).map((newsItem, index) => (
                        <div className="col-md-4 col-lg-4 col-sm-12" key={newsItem.id}>
                        <div className="p-4 sb-shadow bg-box rounded mt-4">
                            <img
                            src={`https://socialbusinesspedia.com/uploads/news/845x400/${newsItem.featured_image}`}
                            alt=""
                            className="img-fluid w-100 card-image cap rounded"
                            />
                            <div className="my-1 py-1 news-status-bar-onright">
                            <small className="link-text">
                                <i className="fa-solid fa-clock"></i> {newsItem.publish_date}
                            </small>
                            </div>
                            <div className="card-body">
                            <h5 className="card-title">
                                <Link to={`/sb-academia/details/${newsItem.id}/${newsItem.alias}`}>
                                {newsItem.academia_content_language[0]?.title}
                                </Link>
                            </h5>
                            <p className="card-text my-1 py-2" dangerouslySetInnerHTML={{__html: newsItem.academia_content_language[0]?.content}}
                            style={{  display: '-webkit-box',
                                WebkitLineClamp: '2',
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',}}
                            >
                            
                            </p>
                            <Link
                                to={`/sb-academia/details/${newsItem.id}/${newsItem.alias}`}
                                className="btn-link"
                            >
                                Read More <i className="fa-solid fa-angle-right"></i>
                            </Link>
                            </div>
                        </div>
                        </div>
                    ))}

                    {/* Rest of the Items */}
                    {academiaData.slice(3).map((newsItem) => (
                        <div className="col-md-4 col-lg-4 col-sm-12" key={newsItem.id}>
                        <div className="p-4 sb-shadow bg-box rounded mt-4">
                            <img
                            src={`https://socialbusinesspedia.com/uploads/news/845x400/${newsItem.featured_image}`}
                            alt=""
                            className="img-fluid w-100 card-image cap rounded"
                            />
                            <div className="my-1 py-1 news-status-bar-onright">
                            <small className="link-text">
                                <i className="fa-solid fa-clock"></i> {newsItem.publish_date}
                            </small>
                            </div>
                            <div className="card-body">
                            <h5 className="card-title">
                                <Link to={`/sb-academia/details/${newsItem.id}/${newsItem.alias}`}>
                                {newsItem.academia_content_language[0]?.title}
                                </Link>
                            </h5>
                            <p className="card-text my-1 py-2" dangerouslySetInnerHTML={{__html: newsItem.academia_content_language[0]?.content}} 
                                style={{  display: '-webkit-box',
                                WebkitLineClamp: '2',
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',}}
                                >
                            </p>
                            <Link
                                to={`/sb-academia/details/${newsItem.id}/${newsItem.alias}`}
                                className="btn-link"
                            >
                                Read More <i className="fa-solid fa-angle-right"></i>
                            </Link>
                            </div>
                        </div>
                        </div>
                    ))}
                    </>
                )}
                </div>
            </div>
        </section>
    </div>
  )
}

export default AcademiaPost