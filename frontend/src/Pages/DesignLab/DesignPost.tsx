import React from 'react'
import axios from 'axios'
import config from '../../config'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../../LanguageContext';
interface DesignApiResponse {
  data: DesignItem[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  status: number;
}

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

interface PaginationProps {
    currentPage: number;
    lastPage: number;
  }
  
  
function DesignPost() {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [designData, setDesignData] = useState<DesignItem[] | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const location = useLocation();
    const [hookpageNumbers, setPageNumbers] = useState<PaginationProps[]>([]);
    const { languageId } = useLanguage(); // Use the current language ID from the context
    useEffect(() => {
      const fetchDesign = async () => {
        try {
            const response = await axios.get(config.API_URL_LIVE + config.DESIGN + `?type=executive&size=10&page=${currentPage}`);
          
          if (response.status === 200) {
            setDesignData(response.data.data); // Set the news data from the response
          } else {
            setError(`Error: ${response.status}`);
          }
        } catch (err) {
          setError('Failed to fetch news.');
        } finally {
          setLoading(false);
        }
      };
  
      fetchDesign();
    }, [currentPage, languageId]);
      // Extract the page number from the URL query parameters
      const pageNumbers = [];

      // Always show the first 3 pages, the last 3 pages, and the current page with its neighbors.
      // if (lastPage <= 10) {
      //   // If less than 10 pages, show them all
      //   for (let i = 1; i <= lastPage; i++) {
      //     pageNumbers.push(i);
      //   }
      // } else {
      //   // Add the first three pages
      //   pageNumbers.push(1, 2, 3);
    
      //   // Add '...' if current page is far from the first few pages
      //   if (currentPage > 5) {
      //     pageNumbers.push('...');
      //   }
    
      //   // Add the neighboring pages around the current page
      //   if (currentPage > 3 && currentPage < lastPage - 3) {
      //     pageNumbers.push(currentPage - 1, currentPage, currentPage + 1);
      //   }
    
      //   // Add '...' if current page is far from the last few pages
      //   if (currentPage < lastPage - 4) {
      //     pageNumbers.push('...');
      //   }
    
      //   // Add the last three pages
      //   pageNumbers.push(lastPage - 2, lastPage - 1, lastPage);
      // } 
       return (
    <div>
        <section className="content py-5 section-top-news">
            <div className="container">
                <div className="col-lg-12 col-md-12 col-sm-12 my-2 text-center">
                    <div className="btn-group btn-switch-reg-to-exe">
                        <Link to="" className="btn btn-sm mx-0 px-5 active">Regular — Design Lab</Link>
                        <Link to="" className="btn btn-sm mx-0 px-5" aria-disabled>Executive — Design Lab</Link>
                    </div>
                </div>
                <div className="row design-lab-page">
                {loading && <p>Loading...</p>}
                    {!loading && designData && designData.length > 0 && designData.map((designItem) => (
                        <div className="col-lg-4 col-md-4 col-sm-12 my-3" key={designItem.id}>
                        <div className="card design-lab-items p-3 border-0 sb-shadow bg-box">
                            <div className="card-title text-center py-5">
                            <Link to={`design-lab/${designItem.id}`}>{designItem.title}</Link>
                            </div>
                            <div className="card-body p-0" style={{ height: '147px' }}>
                            <p className="card-text">
                                <i className="fa-solid fa-calendar-days"></i> {new Date(designItem.created_at).toLocaleDateString()} <br />
                                <i className="fa-solid fa-location-dot"></i> {designItem.venue || 'N/A'}<br />
                                <i className="fa-solid fa-clock"></i> 11:30 - 14:00
                            </p>
                            <Link to={`design-lab/${designItem.id}`} className="btn btn-sm btn-primary">Explore</Link>
                            </div>
                        </div>                
                        </div> 
                    ))}
                                        
                </div>
                <div className="row text-center">
                {/* Pagination */}
                {/* <nav aria-label="Page navigation example">
                    <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <Link
                        className="page-link"
                        to={`/designlab?page=${currentPage - 1}`}
                        aria-disabled={currentPage === 1}
                        aria-label="Previous"
                        onClick={() => handlePageChange(currentPage - 1)}
                        >
                        <span aria-hidden="true">&lt;</span>
                        </Link>
                    </li>

                    {Array.from({ length: Math.min(10, totalPages) }).map((_, index) => {
                        const page = currentPage + index;
                        return (
                        <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                            <Link
                            className="page-link"
                            to={`/designlab?page=${page}`}
                            onClick={() => handlePageChange(page)}
                            >
                            {page}
                            </Link>
                        </li>
                        );
                    })}

                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <Link
                        className="page-link"
                        to={`/designlab?page=${currentPage + 1}`}
                        rel="next"
                        aria-label="Next"
                        onClick={() => handlePageChange(currentPage + 1)}
                        >
                        <span aria-hidden="true">&gt;</span>
                        </Link>
                    </li>
                    </ul>
                </nav>           */}
                </div>
            </div>
        </section>
    </div>
  )
}

export default DesignPost