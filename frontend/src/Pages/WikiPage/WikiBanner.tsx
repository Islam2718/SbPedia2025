import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import config from '../../config';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../LanguageContext';
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

function WikiBanner() {
    const [data, setData] = useState<WikiCategoryItem[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { languageId } = useLanguage(); // Use the current language ID from the context
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(config.API_URL_LIVE + config.WIKI_CATEGORY + `?lang=${languageId}&page=1&size=20`);
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
                <h1>Wiki</h1>
                <div className="d-flex justify-content-center breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/"><i className="fa-solid fa-house"></i>  Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page"><Link to="/news">Wiki</Link></li>
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
                    {data && ( //if status is -1 then print data 
                      <ul className="d-flex m-0 p-0 flex-wrap justify-content-center news-tab-menu">
                      {/* Static "All Wiki" Item */}
                      <li className="p-2">
                        <Link to="/wiki" className="page-sub-menu page-sub-menu-active">All Wiki</Link>
                      </li>
                      {/* Dynamically loop over the data */}
                      {data.map((item, index) => {
                        if (item.status === '1') {
                          return (
                            <li key={index} className="p-2">
                              <Link to={`/wiki/${item.alias}`} className="page-sub-menu">
                                {item.wiki_category_language[0]?.name}
                              </Link>
                            </li>
                          );
                        }
                        return null;
                      })}
                      </ul>
                    )}
                </div>
            </div>
        </section>
    </div>
  )
}

export default WikiBanner