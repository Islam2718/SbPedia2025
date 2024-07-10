import React from 'react';
import config from '../../config';
// import { Link } from 'react-router-dom'; 

const BoardMembers =  ({reportData}) => {

  return (
    <section className='board-members py-4' id="#board-of-director">
          <div className="page-title text-center">
              <p>Board of<span> Directors</span></p>
          </div>
        <div className='container'>
            <div className='chairman'>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <div className='chairman-img'>
                    <img src={config.FILE_URL + '../uploads/chairman.jpg'} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className='col-md-8 col-sm-12'>
                  <div className='chairman-text'>
                        <p className='name'><span>Prof. Dr.</span> <span>Muhammad Yunus</span></p>
                        <p className='designation'>Chairman</p>
                        <p className='content'>Nobel Laureate and Olympic Laurel Professor Muhammad Yunus is the father of both Social Business and Microcredit, the founder of Grameen Bank, and many other Grameen companies in Bangladesh. For his constant innovation and enterprise, Fortune Magazine named Professor Yunus in March 2012 as “one of the greatest entrepreneurs of our time.” In 2006, Professor Yunus and Grameen Bank were jointly awarded the Nobel Peace Prize. He is the recipient of 61 honorary degrees from universities across 24 countries. He has received 136 awards from 33 countries including state honors from 10 countries. He is one of only seven individuals to have received the Nobel Peace Prize, the United States Presidential Medal of Freedom, and the United States Congressional Gold Medal. He has appeared on the cover of Time Magazine, Newsweek, and Forbes Magazine</p>
                  </div>
                </div>
                
              </div>
            </div>

            <div className='members'>
                <div className='row'>
                  <div className='col-md-6 col-sm-12'>
                      <div className='member d-flex'>
                        <div className='member-img'>
                            <img src={config.FILE_URL + '../uploads/huzzatul_islam.webp'} alt="" className="img-fluid" />
                        </div>
                        <div className='member-text text-center w-100'>
                            <p className='name'>Prof: H.I Latifee</p>
                            <p className='profession'>Board Member</p>
                        </div>
                      </div>
                  </div>
                  <div className='col-md-6 col-sm-12'>
                      <div className='member d-flex'>
                        <div className='member-img'>
                            <img src={config.FILE_URL + '../uploads/shahjahan.png'} alt="" className="img-fluid" />
                        </div>
                        <div className='member-text text-center w-100'>
                            <p className='name'>MD Shajahan</p>
                            <p className='profession'>President, Management Committee</p>
                        </div>
                      </div>
                  </div>
                  <div className='col-md-6 col-sm-12'>
                      <div className='member d-flex'>
                        <div className='member-img'>
                            <img src={config.FILE_URL + '../uploads/nurjahan_begum.webp'} alt="" className="img-fluid" />
                        </div>
                        <div className='member-text text-center w-100'>
                            <p className='name'>Nurjahan Begum</p>
                            <p className='profession'>Board Member</p>
                        </div>
                      </div>
                  </div>
                  <div className='col-md-6 col-sm-12'>
                      <div className='member d-flex'>
                        <div className='member-img'>
                            <img src={config.FILE_URL + '../uploads/naznin.jpg'} alt="" className="img-fluid" />
                        </div>
                        <div className='member-text text-center w-100'>
                            <p className='name'>Najneen Sultana</p>
                            <p className='profession'>Board Member</p>
                        </div>
                      </div>
                  </div>
                  <div className='col-md-6 col-sm-12'>
                      <div className='member d-flex'>
                        <div className='member-img'>
                            <img src={config.FILE_URL + '../uploads/ashraful_hassan.png'} alt="" className="img-fluid" />
                        </div>
                        <div className='member-text text-center w-100'>
                            <p className='name'>MD Ashraful Hasan</p>
                            <p className='profession'>President, Management Committee</p>
                        </div>
                      </div>
                  </div>
                  <div className='col-md-6 col-sm-12'>
                      <div className='member d-flex'>
                        <div className='member-img'>
                            <img src={config.FILE_URL + '../uploads/sohel_ahmed.webp'} alt="" className="img-fluid" />
                        </div>
                        <div className='member-text text-center w-100'>
                            <p className='name'>Sohel Ahmed</p>
                            <p className='profession'>Board Member</p>
                        </div>
                      </div>
                  </div>
                  <div className='col-md-6 col-sm-12'>
                      <div className='member d-flex'>
                        <div className='member-img'>
                            <img src={config.FILE_URL + '../uploads/tasnima_rahman.jpg'} alt="" className="img-fluid" />
                        </div>
                        <div className='member-text text-center w-100'>
                            <p className='name'>Tasmina Rahman</p>
                            <p className='profession'>Board Member</p>
                        </div>
                      </div>
                  </div>
                  <div className='col-md-6 col-sm-12'>
                      <div className='member d-flex'>
                        <div className='member-img'>
                            <img src={config.FILE_URL + '../uploads/rk_nag.jpg'} alt="" className="img-fluid" />
                        </div>
                        <div className='member-text text-center w-100'>
                            <p className='name'>Ratan Kumar Nag</p>
                            <p className='profession'>Managing Director</p>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BoardMembers;

