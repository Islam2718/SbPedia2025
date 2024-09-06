import React from 'react'
import config from '../../config'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useLanguage } from '../../LanguageContext';
interface Data {
    id: number;
    parent_id: string;
    alias: string;
    status: string;
    is_default: string;
    order: string;
    created_at: string | null;
    updated_at: string | null;
    news_category_language: NewsCategoryLanguage[];
  }
  interface NewsCategoryLanguage {
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
function NewsBanner() {
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<Data[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const { languageId } = useLanguage(); // Use the current language ID from the context
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(config.API_URL_LIVE + config.NEWS_CATEGORY + `?lang=${languageId}&page=1&size=20`);
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
      fetchData();
    }, [languageId]);
  return (
    <div>
        <section className="news-page-banner text-center">
            <div className="news-banner py-5" style={{backgroundImage: "url(/ThemePublic/images/news-banner.png)"}}>
                <h1>News</h1>
                <div className="d-flex justify-content-center breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/"><i className="fa-solid fa-house"></i>  Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page"><a href="/news">News</a></li>
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
        <section className="page-content-top-menu">
            <div className="shadow border-top pt-2">
                <div className="container py-2">
                    {loading && <p>Loading...</p>}
                    {/* {error && <p>{error}</p>} */}
                    {data && (
                        <ul className="d-flex m-0 p-0 flex-wrap justify-content-center news-tab-menu">
                        {/* Static "All News" Item */}
                        <li className="p-2">
                            <Link to="/news" className="page-sub-menu page-sub-menu-active">All News</Link>
                        </li>
                        {/* Dynamically loop over the data */}
                        {data.map((item, index) => (
                            <li key={index} className="p-2">
                            <Link to={`/news/${item.alias}`} className="page-sub-menu">
                                {item.news_category_language[0]?.name}
                            </Link>
                            </li>
                        ))}
                        </ul>
                    )}
                </div>
            </div>
        </section>
    </div>
  )
}

export default NewsBanner