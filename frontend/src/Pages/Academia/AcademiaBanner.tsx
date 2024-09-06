import React from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import config from '../../config';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../LanguageContext';
interface AcademiaCategoryLanguage {
  id: number;
  academia_category_id: string;
  setting_language_id: string;
  name: string;
  description: string | null;
  is_default: string;
  created_by: string;
  updated_by: string;
  created_at: string;
  updated_at: string;
}

interface AcademiaCategory {
  id: number;
  parent_id: string;
  alias: string;
  status: string;
  order: string;
  created_at: string | null;
  updated_at: string | null;
  academia_category_language: AcademiaCategoryLanguage[];
}

interface AcademiaCategoryResponse {
  data: AcademiaCategory[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  status: number;
}


function AcademiaBanner() {
    const [data, setData] = useState<AcademiaCategory[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { languageId } = useLanguage(); // Use the current language ID from the context
    let { details } = useParams();
    if(details == 'sb-academia') {
      details = 'sb-academia'
    }
    else{
      details = 'sb-academia/' + details
    }
    console.log(details);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(config.API_URL_LIVE + config.ACADEMIA_CATEGORY + `?lang=${languageId}&page=1&size=20`);
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
                <h1>Academia</h1>
                <div className="d-flex justify-content-center breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/"><i className="fa-solid fa-house"></i>  Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page"><Link to="/sb-academia">Academia</Link></li>
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
                      <Link
                        to="/sb-academia"
                        className={`page-sub-menu ${details && data.find(item => details === 'sb-academia') ? 'page-sub-menu-active' : ''}`}
                      >
                        All Academia
                      </Link>
                      </li>
                      {/* Dynamically loop over the data */}
                      {data.map((item, index) => {
                        if (item.status === '1') {
                          return (
                            <li key={index} className="p-2">
                              <Link
                                to={`/sb-academia/${item.alias}`}
                                className={`page-sub-menu ${details === item.alias ? 'page-sub-menu-active' : ''}`}
                              >
                                {item.academia_category_language[0]?.name}
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

export default AcademiaBanner