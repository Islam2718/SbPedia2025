import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import config from '../../config';
import { useEffect, useState } from 'react';
interface WikiCategoryItem {
    id: number;
    parent_id: string;
    alias: string;
    status: string;
    order: string;
    created_at: string | null;
    updated_at: string | null;
    wiki_category_language: WikiCategoryLanguage[];
  }
  
  interface WikiCategoryLanguage {
    id: number;
    wiki_category_id: string;
    setting_language_id: string;
    name: string;
    description: string;
    is_default: string;
    created_by: string;
    updated_by: string;
    created_at: string;
    updated_at: string;
  }

function DesignBanner() {
    const [data, setData] = useState<WikiCategoryItem[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await axios.get(config.API_URL_LIVE + config.DESIGN + '?lang=1&page=1&size=20');
    //         // Check for status
    //         if (response.status === 200) {
    //           setData(response.data.data); // Set the data from the API response
    //           console.log(response.data.data);
    //         } else {
    //           setError(`Error: ${response.status}`);
    //         }
    //       } catch (err) {
    //         setError('Failed to fetch data.');
    //       } finally {
    //         setLoading(false);
    //       }
    //     };
    //     fetchData();
    //   }, []);
  return (
    <div>
        <section className="news-page-banner text-center">
            <div className="news-banner py-5" style={{backgroundImage: "url(/ThemePublic/images/news-banner.png)"}}>
                <h1>Design Lab</h1>
                <div className="d-flex justify-content-center breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/"><i className="fa-solid fa-house"></i>  Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page"><Link to="/designlab">Design Lab</Link></li>
                    </ol>
                </div>
                <div className="search-input col-5 mx-auto border-bottom">
                    <form action="/news/search/" method="GET">
                        <div className="input-group mb-1">
                            <input type="text" className="form-control border-0" name="kw" value="" placeholder="Search here..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <button type="submit" className="input-group-text border-0" id="basic-addon2"> <i className="fa-solid fa-magnifying-glass"></i> 
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    </div>
  )
}

export default DesignBanner