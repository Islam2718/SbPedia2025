import React from 'react';
import config from '../../config';
// import { Link } from 'react-router-dom'; 

const VisionMission =  ({reportData}) => {

  return (
    <section className='vision-mission'>
        <div className='entrepreneurs-leaf1'>
            <img src={config.FILE_URL + '../uploads/leaf-1.png'} alt="" className='' />
        </div>
        <div className='container'>
            <div className='row'>
              <div className='col-md-4 col-sm-12'>
                  <div className='vision-mission-title d-flex'>
                      <p>Vision</p>
                  </div>
              </div>
              <div className='col-md-8 col-sm-12'>
                <div className='vision-mission-content'>
                      <ul>
                          <li>Enhancing job givers instead of job seekers.</li>
                          <li>Developing social business and working toward fulfilling basic human needs.</li>
                          <li>Creating a world without unemployment.</li>
                          <li>Readjusting economic concepts to build up new social arrangement.</li>
                      </ul>
                </div>
              </div>
              <div className='col-md-8 col-sm-12'>
                <div className='vision-mission-content'>
                      <p>Recruit potential innovative unemployed youths, train them and provide technical, financial and business development support in order to make them successful entrepreneurs and make a world free from unemployment.</p> 
                </div>
              </div>
              <div className='col-md-4 col-sm-12'>
                  <div className='vision-mission-title d-flex'>
                      <p>Mission</p>
                  </div>
              </div>
              <div className='col-md-4 col-sm-12'>
                  <div className='vision-mission-title d-flex'>
                      <p>Objectives</p>
                  </div>
              </div>
              <div className='col-md-8 col-sm-12'>
                <div className='vision-mission-content'>
                      <ul>
                          <li>Creating self -employment and jobs for others.</li>
                          <li>Allowing creative entrepreneurs to start their company with a small or without initial investment.</li>
                          <li>Enhance socio-economic status of the poor families in the country.</li>
                          <li>To help and accompany new entrepreneurs to develop and establish their business.</li>
                          <li>Empower poor entrepreneurs (Especially women) through financial and technical support as well as promotion.</li>
                          <li>Organizing training and workshops.</li>
                          <li>Creating social business villages.</li>
                      </ul>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default VisionMission;

