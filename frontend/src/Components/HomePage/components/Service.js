import React from 'react';
import config from '../../config';
// import { Link } from 'react-router-dom'; 

const Service = () => {

  return (
    <section className='service py-4'>
        <div className="page-title text-center">
          <p>Our Service</p>
        </div>
        <div className='container'>
            <div className='row'>
              <div className='col-md-3 col-lg-3 col-sm-12'>
                <div class="card" style={{backgroundColor: "transparent"}}>
                   <img src={config.FILE_URL + "ser1.png"} alt='' className="nav-cow-img img-fluid"/>
                  <div class="card-body">
                    <h5 class="card-title text-center">Research</h5>
                    <p class="card-text text-center">Grass is a fundamental component of the diet for cows and other ruminant animals. It provides...</p>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-lg-3 col-sm-12'>
                <div class="card" >
                   <img src={config.FILE_URL + "ser2.png"} alt='' className="nav-cow-img img-fluid"/>
                  <div class="card-body">
                    <h5 class="card-title text-center">Community</h5>
                    <p class="card-text text-center">Shrimp farming, also known as prawn farming, is the aquaculture practice of cultivating shrimp for ...</p>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-lg-3 col-sm-12'>
                <div class="card" >
                   <img src={config.FILE_URL + "ser3.png"} alt='' className="nav-cow-img img-fluid"/>
                  <div class="card-body">
                    <h5 class="card-title text-center">Entrepreneur Networking</h5>
                    <p class="card-text text-center">Women entrepreneurs are reshaping the business landscape worldwide....</p>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-lg-3 col-sm-12'>
                <div class="card" >
                   <img src={config.FILE_URL + "ser4.png"} alt='' className="nav-cow-img img-fluid"/>
                  <div class="card-body">
                    <h5 class="card-title text-center">Farming Consultation</h5>
                    <p class="card-text text-center">Cow farming, also known as cattle farming, is a vital component of agricultural...</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Service;

