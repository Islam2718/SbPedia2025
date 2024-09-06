import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import config from '../../config';
import { useLanguage } from '../../LanguageContext';
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
function WikiOrganization() {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [wikiData, setWikiData] = useState<WikiItem[] | null>(null);
    const { languageId } = useLanguage(); // Use the current language ID from the context
    useEffect(() => {
      const fetchNews = async () => {
        try {
          const response = await axios.get(config.API_URL_LIVE + config.WIKI + `?lang=${languageId}&page=1&size=2`);
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
        <section className="wiki-area my-0">
            <div className="container">
                <div className="section-header">
                    <h4>SB Wiki</h4>
                    <div className="see-more">
                        <Link to="/wiki/" className="" id="link-id">See All<i className="fa-solid fa-angle-right"></i> </Link>                   
                    </div>
                </div>
                <div className="row py-4">
                    {wikiData && wikiData.length > 0 && (
                        <>
                        {/* Rest of the Items */}
                        {wikiData.slice(0, 2).map((wikiItem) => (
                                <div className="col-md-6 col-sm-12 mb-3" key={wikiItem.id}>                    
                                    <div className="m-2 p-3 wiki-context sb-shadow rounded">
                                        <div className="block-head my-3">
                                            <span className="title">Resources</span>
                                        </div>
                                        <h4>{wikiItem.wiki_content_language[0]?.title}</h4>
                                        <div className="mb-3">
                                            <small className="btn-sm btn-outline-primary">
                                                <i className="fa-solid fa-calendar-day"></i> 
                                                {wikiItem.publish_date}
                                            </small>
                                            &nbsp; 
                                            <small className="btn-sm btn-outline-primary">
                                                <i className="fa-solid fa-user"></i> 
                                                Muhammad Yunus
                                            </small>
                                        </div>
                                        <p className="card-text my-1 py-2" dangerouslySetInnerHTML={{__html: wikiItem.wiki_content_language[0]?.content}}
                                        style={{  display: '-webkit-box',
                                            WebkitLineClamp: '2',
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',}}
                                        >
                                        </p> 
                                        <p>
                                            <Link to={`/wiki/details/${wikiItem.id}/${wikiData[0]?.wiki_content_language[0]?.title}`}  className="btn-link"> Read More </Link>
                                        </p>
                                        <div className="mt-5">
                                            <div className="mb-3">
                                                <a className="btn btn-sm btn-outline-success my-1"> Startup Guide</a>
                                                <a className="btn btn-sm btn-outline-success my-1"> Funds</a>
                                                <a className="btn btn-sm btn-outline-success my-1"> FAQ</a>
                                                <a className="btn btn-sm btn-outline-success my-1"> Nobin Udyokta (Young Entrepreneur)</a>
                                                <a className="btn btn-sm btn-outline-success my-1"> Social Business</a>
                                                <a className="btn btn-sm btn-outline-success my-1"> Guidelines</a>
                                            </div>                        
                                        </div>                        
                                    </div>
                                </div>
                                // <div className="swiper-slide rounded-2 my-3" role="group" aria-label="5 / 9" ><Link to={`/wiki/details/${wikiItem.id}/${wikiData[0]?.wiki_content_language[0]?.title}`} className="wiki-link"><div><div className="news-image">
                                //     <img src={`https://socialbusinesspedia.com/uploads/news/845x400/${wikiItem.featured_image}`} alt="n/a" className="img-fluid" /><span> Social Business </span></div><div className="new-date"> <i className="fa-regular fa-clock"></i> {wikiItem.publish_date}</div><div className="news-title"><p>{wikiItem.wiki_content_language[0]?.title}</p></div></div></Link>
                                // </div>
                        ))}  
                        </>     
                    )}
                </div>       
            </div>       
        </section>
        {/* call to action  */}
        <div className="container my-5 c2a-people-register-1" style={{backgroundImage: 'url("./images/c2a-reg-background.png")', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'}}>
            <div className="mx-3 px-3">
                <h1>Register to join <span>SB World!</span></h1>
                <div className="small">
                    Be a member of <span>Social Business Pedia</span>
                </div>
                <div className="my-2 mt-5">
                    <a href="/rbac/security/create">Sign Up </a>               
                </div>
            </div>              
        </div>

        {/* organizations */}
        <section className="organization-area">
            <div className="container">
                <div className="section-header">
                    <h4>Organizations</h4>
                    <div className="see-more">
                        <Link to="/organization/" className="" id="link-id">See All <i className="fa-solid fa-angle-right"></i> </Link>                     
                    </div>
                </div>
                <div className="row my-4">
                <div className="col-md-2 my-2 text-center">
                        <Link to="">
                        <div className="sb-box-secondary sb-shadow">
                            <div className="row p-2">
                                <div className="col-12">
                                    <img src="./images/gkl.png" className="rounded img-fluid img" alt="n/a" />
                                </div>
                                <div className="col-12 px-3 mt-2">
                                    <h5>G. Knitwear Ltd.</h5>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>                
                    <div className="col-md-2 my-2 text-center">
                        <Link to="">
                        <div className="sb-box-secondary sb-shadow">
                            <div className="row p-2">
                                <div className="col-12">
                                    <img src="./images/yc.png" className="rounded img-fluid img" alt="" />
                                </div>
                                <div className="col-12 px-3 mt-2">
                                    <h5>Yunus Centre</h5>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-md-2 my-2 text-center">
                        <Link to="">
                        <div className="sb-box-secondary sb-shadow">
                            <div className="row p-2">
                                <div className="col-12">
                                    <img src="./images/gchina.png" className="rounded img-fluid img" alt="" />                                
                                </div>
                                <div className="col-12 px-3 mt-2">
                                    <h5>Grameen China</h5>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-md-2 my-2 text-center">
                        <Link to="">
                        <div className="sb-box-secondary sb-shadow">
                            <div className="row p-2">
                                <div className="col-12">
                                    <img src="./images/ysh.png" className="rounded img-fluid img" alt="" />
                                </div>
                                <div className="col-12 px-3 mt-2">
                                    <h5>Yunus Sports Hub</h5>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-md-2 my-2 text-center">
                        <Link to="">
                        <div className="sb-box-secondary sb-shadow">
                            <div className="row p-2">
                                <div className="col-12">
                                    <img src="./images/yc.png" className="rounded img-fluid img" alt="" />                                
                                </div>
                                <div className="col-12 px-3 mt-2">
                                    <h5>YT Foundation</h5>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>                
                    <div className="col-md-2 my-2 text-center">
                        <Link to="">
                        <div className="sb-box-secondary sb-shadow">
                            <div className="row p-2">
                                <div className="col-12">
                                    <img src="./images/gkl.png" className="rounded img-fluid img" alt="" />
                                </div>
                                <div className="col-12 px-3 mt-2">
                                    <h5>US Malaysia</h5>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>       
        </section>

    </div>
  )
}

export default WikiOrganization