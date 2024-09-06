import React from 'react'
import axios from 'axios'
import config from '../../config'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../LanguageContext';
interface WikiApiResponse {
  data: WikiItem[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  status: number;
}

interface WikiItem {
  id: number;
  person_id: string;
  alias: string;
  featured_image: string | null;
  tags: string | null;
  link_type: string;
  custom_link: string;
  is_target_blank: string;
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
  updated_at: string;
  wiki_content_language: WikiContentLanguage[];
}

interface WikiContentLanguage {
  id: number;
  wiki_content_id: string;
  setting_language_id: string;
  title: string;
  name: string;
  content: string;
  is_default: string;
  created_by: string;
  updated_by: string;
  status: string;
  activity_id: string;
  created_at: string;
  updated_at: string;
}


  
function WikiPost() {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [wikiData, setWikiData] = useState<WikiItem[] | null>(null);
    const { languageId } = useLanguage(); // Use the current language ID from the context
    useEffect(() => {
      const fetchNews = async () => {
        try {
          const response = await axios.get(config.API_URL_LIVE + config.WIKI + `?lang=${languageId}&page=1&size=20`);
          
          if (response.status === 200) {
            setWikiData(response.data.data); // Set the news data from the response
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
        <section className="section-top-news py-5">
            <div className="container">
                {/* <div className="row">             */}
                    {/* <div className="col-md-8 col-lg-8 col-sm-12">
                        <div className="mt-4 p-4 sb-shadow bg-box rounded">                    
                            <img src="https://socialbusinesspedia.com/uploads/news/845x400/ua_300844088509068813070624533273.png" alt="" className="img-fluid w-100 Card image cap rounded" />
                            <div className="card-body py-4">
                                <h5 className="card-title">
                                    <a href="/news/details/1427/12th-social-business-day-sponsored-by-yunus-centre-kicks-off-on-june-27th">
                                        12th Social Business Day sponsored by Yunus Centre  kicks off on June ...                            </a>
                                </h5>
                                <div className="my-1 py-1 news-status-bar">
                                    <small className="link-text"> <i className="fa-solid fa-calendar"></i>  6/27/22 </small> &nbsp; 
                                    <small className="link-text"><i className="fa-solid fa-folder"></i> By - Jon Doe</small> &nbsp; 
                                    <small className="link-text"><i className="fa-solid fa-user-large"></i> SBP</small>
                                </div>                        
                                <p className="card-text my-1 py-2">
                                    Yunus Centre Press Release ( 27 june 2022 )&nbsp;&nbsp;The 12th SOCIAL BUSINESS DAY, hosted by Nobel Laureate Professor Muhammad Yunus will be held from June 27- 30, 2022. The theme of SOCIAL BUSINESS DAY 2022 will be: Building a New Civilisation—Before the Current Civilisation Destroys Us. This year a series of African universities such as Catholic University of Zimbabwe along with Kampala International University and Makerere University Business School, Uganda, Tangaza University College, Kenya, Abomey Calavi of Benin, CAM School of Business from Central African Republic will be arranging for on the ground parallel events in light of this global arrangement that looks to showcase all regional social business practitioners, academics, promoters, and friends. It provides a platform which brings all of us together to engage in dialogue, exchange ideas and gain energy from one another by inspiring each other.&nbsp;There will be 150+ speakers, which includes 30 globally prominent speakers, 14 country forums, 16 plenary sessions during the four days. More than 700 registered participants from 66 countries are joining globally.&nbsp;There will be keynote speeches from President H. E. José Ramos-Horta, 1996 Nobel Peace Laureate and President of East Timor, Thomas Bach, Pre...                        </p>
                                <a href="/news/details/1427/12th-social-business-day-sponsored-by-yunus-centre-kicks-off-on-june-27th" className="btn-sb-primary btn btn-primary border-0 news-btn py-2 px-4">Read More <i className="fa-solid fa-angle-right"></i></a>
                            </div>
                        </div>            
                    </div>
                    <div className="col-md-4 col-ld-4 col-sm-12 top-right">
                        <div className="p-4 sb-shadow bg-box rounded mt-4">
                            <div className="">
                                <img src="https://socialbusinesspedia.com/uploads/news/845x400/ua_720117561433900406238098467708.jpg" alt="" className="img-fluid w-100 Card image cap rounded" /> 
                                <div className="my-1 py-1 news-status-bar-onright">
                                    <small className="link-text"> <i className="fa-solid fa-clock"></i> 6/11/22 </small>
                                </div> 
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <a href="/news/details/1426/yunus-invited-to-rome-to-discuss-the-theme-for-expo-2030.">
                                        Yunus Invited to Rome to Discuss the Theme for Expo 2030....                            </a>
                                </h5>                       
                                <p className="card-text my-1 py-2">
                                    Yunus Centre Press Release (11 June 2022)&nbsp;Nobel laureate Professor Muhammad Yunus came to Rome on June 5, 2022 at the invitation of Mayor of Rome, Robe...                        </p>
                                <a href="/news/details/1426/yunus-invited-to-rome-to-discuss-the-theme-for-expo-2030." className="btn-link">
                                    Read More <i className="fa-solid fa-angle-right"></i>
                                </a>
                            </div>
                        </div>                 
                        <div className="p-4 sb-shadow bg-box rounded mt-4">
                            <div className="">
                                <img src="https://socialbusinesspedia.com/uploads/news/845x400/ua_740050820538470201770617162458.jpg" alt="" className="img-fluid w-100 Card image cap rounded" /> 
                                <div className="my-1 py-1 news-status-bar-onright">
                                    <small className="link-text"> <i className="fa-solid fa-clock"></i> 6/6/22 </small>
                                </div> 
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <a href="/news/details/1425/yunus-warns-about-the-disaster-path-of-present-civilization.-urges-to-build-a-new-civilization.">
                                        Yunus Warns About the Disaster Path of Present Civilization. Urges to ...                            </a>
                                </h5>                       
                                <p className="card-text my-1 py-2">
                                    Yunus Centre Press Release (06 June 2022)&nbsp;Nobel Laureate Professor Muhammad Yunus was invited as a keynote speaker at the Trento Festival of Economics ...                        </p>
                                <a href="/news/details/1425/yunus-warns-about-the-disaster-path-of-present-civilization.-urges-to-build-a-new-civilization." className="btn-link">
                                    Read More <i className="fa-solid fa-angle-right"></i>
                                </a>
                            </div>
                        </div>                 
                                        
                    </div> */}
                    
                {/* </div> */}
                <div className="row">
                {loading && <p>Loading...</p>}
                {/* {error && <p>{error}</p>} */}
                {wikiData && wikiData.length > 0 && (
                    <>
                    {/* First Item */}
                    <div className="col-md-8 col-lg-8 col-sm-12">
                        <div className="mt-4 p-4 sb-shadow bg-box rounded">
                        <img
                            src={`https://socialbusinesspedia.com/uploads/news/845x400/${wikiData[0]?.featured_image}`}
                            alt=""
                            className="img-fluid w-100 card-image cap rounded"
                        />
                        <div className="card-body py-4">
                            <h5 className="card-title">
                            <Link to={`/wiki/details/${wikiData[0]?.id}/${wikiData[0]?.alias}`}>
                                {wikiData[0]?.wiki_content_language[0]?.title}
                            </Link>
                            </h5>
                            <div className="my-1 py-1 news-status-bar">
                            <small className="link-text">
                                <i className="fa-solid fa-calendar"></i> {wikiData[0]?.publish_date}
                            </small>
                            &nbsp;
                            <small className="link-text">
                                <i className="fa-solid fa-folder"></i> By - {wikiData[0]?.person_id}
                            </small>
                            &nbsp;
                            <small className="link-text">
                                <i className="fa-solid fa-user-large"></i> SBP
                            </small>
                            </div>
                            <p className="card-text my-1 py-2" dangerouslySetInnerHTML={{__html: wikiData[0]?.wiki_content_language[0]?.content}}
                                style={{  display: '-webkit-box',
                                    WebkitLineClamp: '2',
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',}}
                            >
                            </p>
                            <Link
                            to={`/wiki/details/${wikiData[0]?.id}/${wikiData[0]?.alias}`}
                            className="btn-sb-primary btn btn-primary border-0 news-btn py-2 px-4"
                            >
                            Read More <i className="fa-solid fa-angle-right"></i>
                            </Link>
                        </div>
                        </div>
                    </div>

                    {/* Second and Third Items */}
                    {wikiData.slice(1, 3).map((newsItem, index) => (
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
                                <Link to={`/wiki/details/${newsItem.id}/${newsItem.alias}`}>
                                {newsItem.wiki_content_language[0]?.title}
                                </Link>
                            </h5>
                            <p className="card-text my-1 py-2" dangerouslySetInnerHTML={{__html: newsItem.wiki_content_language[0]?.content}}
                            style={{  display: '-webkit-box',
                                WebkitLineClamp: '2',
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',}}
                            >
                            
                            </p>
                            <Link
                                to={`/wiki/details/${newsItem.id}/${newsItem.alias}`}
                                className="btn-link"
                            >
                                Read More <i className="fa-solid fa-angle-right"></i>
                            </Link>
                            </div>
                        </div>
                        </div>
                    ))}

                    {/* Rest of the Items */}
                    {wikiData.slice(3).map((newsItem) => (
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
                                <Link to={`/news/details/${newsItem.id}/${newsItem.alias}`}>
                                {newsItem.wiki_content_language[0]?.title}
                                </Link>
                            </h5>
                            <p className="card-text my-1 py-2" dangerouslySetInnerHTML={{__html: newsItem.wiki_content_language[0]?.content}} 
                                style={{  display: '-webkit-box',
                                WebkitLineClamp: '2',
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',}}
                                >
                            </p>
                            <Link
                                to={`/wiki/details/${newsItem.id}/${newsItem.alias}`}
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

export default WikiPost