import React from 'react';
import config from '../../config';
// import { Link } from 'react-router-dom'; 

const BackgroundStory = () => {

  return (
    <section className='background-story'>
        <div className='container'>
            <div className='row'>
                <div className="page-title2 text-center">
                    <p>Background Story</p>
                </div>
              
              <div className='col-md-6 col-lg-6 col-sm-12 card-container'>
                <div class="card flex-card" >
                    <img src={config.FILE_URL + "cow-farm.png"} alt='' className="nav-cow-img img-fluid"/>
                  <div class="card-body">
                    <h5 class="card-title text-center">Cow Farm</h5>
                    <p class="card-text text-center">Cows are valuable livestock for several reasons. They provide nutritious milk, which is a staple food for many people and serves as a source of essential nutrients like calcium and protein. </p>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-lg-6 col-sm-12 card-container'>
                <div class="card flex-card" >
                    <img src={config.FILE_URL + "poultry-firm.png"} alt='' className="nav-cow-img img-fluid"/>
                  <div class="card-body">
                    <h5 class="card-title text-center">Poultry Firm </h5>
                    <p class="card-text text-center">Cows are valuable livestock for several reasons. They provide nutritious milk, which is a staple food for many people and serves as a source of essential nutrients like calcium and protein. </p>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-lg-6 col-sm-12 card-container'>
                <div class="card flex-card" >
                    <img src={config.FILE_URL + "catch-fishing.png"} alt='' className="nav-cow-img img-fluid"/>
                  <div class="card-body">
                    <h5 class="card-title text-center">Catch Fishing</h5>
                    <p class="card-text text-center">Cows are valuable livestock for several reasons. They provide nutritious milk, which is a staple food for many people and serves as a source of essential nutrients like calcium and protein. </p>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-lg-6 col-sm-12 card-container'>
                <div class="card flex-card" >
                    <img src={config.FILE_URL + "cow-milk.png"} alt='' className="nav-cow-img img-fluid"/>
                  <div class="card-body">
                    <h5 class="card-title text-center">Cow's milk</h5>
                    <p class="card-text text-center">Cows are valuable livestock for several reasons. They provide nutritious milk, which is a staple food for many people and serves as a source of essential nutrients like calcium and protein. </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default BackgroundStory;

