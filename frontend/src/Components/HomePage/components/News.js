import React from 'react';
import config from '../../../config';
import { Link } from 'react-router-dom'; 

const News = () => {

  return (
    <section className='section-news py-5'>
        <div className="section-title text-center py-4">
          <p>Social Business &mdash; News</p>
        </div>
        <div className='container news-items'>
            <div className='row'>
              <div className='col-md-9 col-lg-9 col-sm-12'>
                <Link to="#0">
                <div class="card" >
                   <img src={config.FILE_URL + "news.png"} alt='' className="nav-cow-img img-fluid rounded"/>
                  <div class="card-body">
                    <h5 class="card-title text-center">The 14th Social Business Day 2024 kicks off in Manila, Philippines</h5>
                    <p class="card-text text-center">The 14th Social Business Day 2024, hosted by Nobel Peace Laureate Professor Muhammad Yunus and organized by Yunus Centre is being held in Manila from June 27-28, 2024 at the SMX Aura Convention Center in Philippines...</p>
                  </div>
                </div>
                </Link>
              </div>
              <div className='col-md-3 col-lg-3 col-sm-12'>
                <Link to="#0">
                <div class="card mb-4" >
                   <img src={config.FILE_URL + "news.png"} alt='' className="nav-cow-img img-fluid rounded"/>
                  <div class="card-body">
                    <p class="card-text text-center fw-bold">Prof. Muhammad Yunus felicitated in Manila on the occasion of his 40th anniversary of receiving the “Ramon Magsaysay” Award</p>
                  </div>
                </div>
                </Link>
                <Link to="#0">
                <div class="card" >
                  <img src={config.FILE_URL + "news.png"} alt='' className="nav-cow-img img-fluid rounded"/>
                  <div class="card-body">
                    <p class="card-text text-center fw-bold">Yunus Meets President of Italian Republic Sergio Mattarella</p>
                  </div>
                </div>
                </Link>
              </div>
              <div className='col-md-4 col-lg-4 col-sm-12 mt-3'>
                <Link to="#0">
                <div class="card" >
                   <img src={config.FILE_URL + "news.png"} alt='' className="nav-cow-img img-fluid rounded"/>
                  <div class="card-body">
                    <p class="card-text text-center fw-bold">Celebrating a Decade of Impact: The GENKI Program of Grameen Euglena Marks Its 10th Anniversary</p>
                  </div>
                </div>
                </Link>
              </div>
              <div className='col-md-4 col-lg-4 col-sm-12 mt-3'>
                <Link to="#0">
                <div class="card" >
                   <img src={config.FILE_URL + "news.png"} alt='' className="nav-cow-img img-fluid rounded"/>
                  <div class="card-body">
                    <p class="card-text text-center fw-bold">Yunus Meets Pope Francis: urges immediate action on Palestine and all conflicts across the world</p>
                  </div>
                </div>
                </Link>
              </div>
              <div className='col-md-4 col-lg-4 col-sm-12 mt-3'>
                <Link to="#0">
                <div class="card" >
                   <img src={config.FILE_URL + "news.png"} alt='' className="nav-cow-img img-fluid rounded"/>
                  <div class="card-body">
                    <p class="card-text text-center fw-bold">Grameen America Plans to Invest $40 Billion For Underserved Women of USA In Next Ten Years</p>
                  </div>
                </div>
                </Link>
              </div>
            </div>
        </div>
        <div className="text-center py-4">
          <Link to="#0">
            <button className='sbp25-btn'>View All</button>
          </Link>
        </div>
    </section>
  )
}

export default News;

