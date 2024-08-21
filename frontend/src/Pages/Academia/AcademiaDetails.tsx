import React from 'react'
import { Link } from 'react-router-dom'
import config from '../../config'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AcademiaBanner from './AcademiaBanner';
import AcademiaSidebar from './AcademiaSidebar';

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
function AcademiaDetails() {
    const { id } = useParams();
    console.log(id);
    //params title and id
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<AcademiaContent | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchNews = async () => {
          try {
            const response = await axios.get(config.API_URL_LIVE + config.ACADEMIA + '/' + id);
            
            if (response.status === 200) {
                setData(response.data.data); // Set the news data from the response
            } else {
              setError(`Error: ${response.status}`);
            }
          } catch (err) {
            setError('Failed to fetch wiki.');
          } finally {
            setLoading(false);
          }
        };
    
        fetchNews();
      }, []);

  return (
    <div>
        <AcademiaBanner />
        <section className="news-search-section">
            <div className="container">
                <div className="row my-4">
                    <div className="col-md-9 col-sm-12">
                        <div className="mt-4 p-4 sb-shadow bg-box rounded">
                            <img src="https://socialbusinesspedia.com/uploads/news/845x400/ua_300844088509068813070624533273.png" alt="" className="img-fluid w-100 Card image cap rounded" />
                            <div className="card-body py-4">
                                <h5 className="card-title">{data?.academia_content_language[0].title} </h5>
                                <div className="my-1 py-1 news-status-bar">
                                    <small className="link-text"> <i className="fa-solid fa-calendar"></i> {data?.publish_date} </small> &nbsp; 
                                    <small className="link-text"> <i className="fa-solid fa-folder"></i> {data?.academia_content_language[0].name}</small> &nbsp; 
                                    <small className="link-text"> <i className="fa-solid fa-user-large"></i> SBP</small>
                                </div>                        
                                <p dangerouslySetInnerHTML={{__html: data?.academia_content_language[0].content ?? ''}} className="card-text my-1 py-2"></p>                   
                            </div>
                        </div>                  
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <AcademiaSidebar />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AcademiaDetails