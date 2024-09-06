import React from 'react'
import { Link } from 'react-router-dom'
import config from '../../config'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import DesignBanner from './DesignBanner';
import DesignSidebar from './DesignSidebar';
import { useLanguage } from '../../LanguageContext';
interface DesignItem {
    id: number;
    person_id: string;
    activity_id: string;
    organization_id: string;
    event_schedule_id: string;
    yc_dl_number: string;
    organization_dl_number: string;
    type: string;
    design_lab_code: string;
    title: string;
    sub_title: string;
    alias: string;
    description: string;
    serial_no: string | null;
    venue: string;
    general_participant_fee: string;
    student_participant_fee: string;
    is_live_stream: string;
    live_stream_code: string | null;
    registration_last_date: string | null;
    order: string;
    status: string;
    is_approved: string;
    created_by: string;
    updated_by: string;
    created_at: string;
    updated_at: string;
  }
function DesignDetails() {
    const { id } = useParams();
    console.log(id);
    //params title and id
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<DesignItem | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const { languageId } = useLanguage(); // Use the current language ID from the context
    useEffect(() => {
        const fetchNews = async () => {
          try {
            const response = await axios.get(config.API_URL_LIVE + config.DESIGN + '/' + id);
            
            if (response.status === 200) {
                setData(response.data.data); // Set the news data from the response
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
        <DesignBanner />
        <section className="news-search-section">
            <div className="container">
                <div className="row my-4">
                    <div className="col-md-9 col-sm-12">
                        <div className="mt-4 p-4 sb-shadow bg-box rounded">
                                                    <img src="https://socialbusinesspedia.com/uploads/news/845x400/ua_300844088509068813070624533273.png" alt="" className="img-fluid w-100 Card image cap rounded" />
                                                <div className="card-body py-4">
                                <h5 className="card-title">{data?.title} </h5>
                                <div className="my-1 py-1 news-status-bar">
                                    <small className="link-text"> <i className="fa-solid fa-calendar"></i> {data?.created_at} </small> &nbsp; 
                                    <small className="link-text"> <i className="fa-solid fa-folder"></i> {data?.created_by}</small> &nbsp; 
                                    <small className="link-text"> <i className="fa-solid fa-user-large"></i> SBP</small>
                                </div>                        
                                <p className="card-text my-1 py-2">
                                </p>                      
                            </div>
                        </div>                  
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <DesignSidebar />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default DesignDetails