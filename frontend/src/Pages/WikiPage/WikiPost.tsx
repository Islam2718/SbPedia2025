import React from 'react'
import axios from 'axios'
import config from '../../config'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Data {
  id: number;
  parent_id: string;
  alias: string;
  status: string;
  is_default: string;
  order: string;
  created_at: string | null;
  updated_at: string | null;
  wiki_category_language: WikiCategoryLanguage[];
}
interface WikiCategoryLanguage {
  id: number;
  news_category_id: string;
  setting_language_id: string;
  name: string;
  description: string;
  is_default: string;
  created_by: string;
  updated_by: string;
  created_at: string | null;
  updated_at: string | null;
}
export interface WikiItem {
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
    wiki_content_languages: WikiContentLanguage[];
  }
  // Interface for the news content languages
export interface WikiContentLanguage {
    id: number;
    wiki_content_id: string;
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
  
function WikiPost() {
    const [data, setData] = useState<Data[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [, setError] = useState<string | null>(null);
    const [, setWikiData] = useState<WikiItem[] | null>(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(config.API_URL_LIVE + config.WIKI_CATEGORY + '?lang=1&page=1&size=20');
          // Check for status
          if (response.status === 200) {
            setData(response.data.data); // Set the data from the API response
            console.log(response.data.data);
          } else {
            setError(`Error: ${response.status}`);
          }
        } catch (err) {
          setError('Failed to fetch data.');
        } finally {
          setLoading(false);
        }
      };
      const fetchNews = async () => {
        try {
          const response = await axios.get(config.API_URL_LIVE + config.WIKI + '?lang=1&page=1&size=20');
          
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
      fetchData();
    }, []);
  return (
    <div>
        <section className="page-content-top-menu">
            <div className="shadow border-top pt-2">
                <div className="container py-2">
                    {loading && <p>Loading...</p>}
                    {/* {error && <p>{error}</p>} */}
                    {data && (
                        <ul className="d-flex m-0 p-0 flex-wrap justify-content-center news-tab-menu">
                        {/* Static "All News" Item */}
                        <li className="p-2">
                            <Link to="/wiki" className="page-sub-menu page-sub-menu-active">All News</Link>
                        </li>
                        {/* Dynamically loop over the data */}
                        {data.map((item, index) => (
                            <li key={index} className="p-2">
                            <Link to={`/news/${item.alias}`} className="page-sub-menu">
                                {item.wiki_category_language[0]?.name}
                            </Link>
                            </li>
                        ))}
                        </ul>
                    )}
                </div>
            </div>
        </section>
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

                </div>
            </div>
        </section>
    </div>
  )
}

export default WikiPost