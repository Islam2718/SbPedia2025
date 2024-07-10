import React from 'react';
import config from '../../../config';
// import { Link } from 'react-router-dom'; 

const News = () => {

  return (
    <section className='section-news py-5'>
        <div className="section-title text-center py-4">
          <p>Social Business &mdash; News</p>
        </div>
        <div className='container news-items'>
            <div className='row'>
              <div className='col-md-9 col-lg-9 col-sm-12'>
                <div class="card" >
                   <img src={config.FILE_URL + "news.png"} alt='' className="nav-cow-img img-fluid"/>
                  <div class="card-body">
                    <h5 class="card-title text-center">Donation form us</h5>
                    <p class="card-text text-center">Grass is a fundamental component of the diet for cows and other ruminant the diet for cows and other ruminant other ruminant the diet for cows and other ruminant other ruminant the diet for cows and other ruminant ...</p>
                    {/* <a href="#0" class="text-center"> <i class="fa-regular fa-eye"></i>129 views</a> */}
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-lg-3 col-sm-12'>
                <div class="card mb-4" >
                   <img src={config.FILE_URL + "news.png"} alt='' className="nav-cow-img img-fluid"/>
                  <div class="card-body">
                    <h5 class="card-title text-center">Beneficial Family  </h5>
                    <p class="card-text text-center">Shrimp farming, also known as prawn farming, is the aquaculture practice...</p>
                    {/* <a href="#0" class=""> <i class="fa-regular fa-eye"></i>129 views</a> */}
                  </div>
                </div>
                <div class="card" >
                   <img src={config.FILE_URL + "news.png"} alt='' className="nav-cow-img img-fluid"/>
                  <div class="card-body">
                    <h5 class="card-title text-center">Beneficial Family  </h5>
                    <p class="card-text text-center">Shrimp farming, also known as prawn farming, is the aquaculture practice...</p>
                    {/* <a href="#0" class=""> <i class="fa-regular fa-eye"></i>129 views</a> */}
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-lg-4 col-sm-12 mt-3'>
                <div class="card" >
                   <img src={config.FILE_URL + "news.png"} alt='' className="nav-cow-img img-fluid"/>
                  <div class="card-body">
                    <h5 class="card-title text-center">Survey on ground </h5>
                    <p class="card-text text-center">Women entrepreneurs are reshaping the business landscape worldwide...</p>
                    {/* <a href="#0" class=""> <i class="fa-regular fa-eye"></i>129 views</a> */}
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-lg-4 col-sm-12 mt-3'>
                <div class="card" >
                   <img src={config.FILE_URL + "news.png"} alt='' className="nav-cow-img img-fluid"/>
                  <div class="card-body">
                    <h5 class="card-title text-center">Survey on ground </h5>
                    <p class="card-text text-center">Cow farming, also known as cattle farming, is a vital component of agricultural...</p>
                    {/* <a href="#0" class=""> <i class="fa-regular fa-eye"></i>129 views</a> */}
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-lg-4 col-sm-12 mt-3'>
                <div class="card" >
                   <img src={config.FILE_URL + "news.png"} alt='' className="nav-cow-img img-fluid"/>
                  <div class="card-body">
                    <h5 class="card-title text-center">Survey on ground </h5>
                    <p class="card-text text-center">Cow farming, also known as cattle farming, is a vital component of agricultural...</p>
                    {/* <a href="#0" class=""> <i class="fa-regular fa-eye"></i>129 views</a> */}
                  </div>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default News;

