import React from 'react';
// import { Link } from 'react-router-dom';
import config from '../../../config';
const Wiki = () =>{
    return(
        <>
    <section className='section-wiki py-5'>
        <div className="section-title text-center py-4">
          <p>Social Business &mdash; Wiki</p>
          <span>All the resources in the SB Wiki shows two types of information. Resources & Yunus Library</span>
        </div>
        <div className='container news-items py-5' style={{ backgroundImage: `url(${config.FILE_URL + 'wiki.png'})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '25%' }}>
            <div className='row'>
            <div className='col-6 text-start'>
                <h3>Resources</h3>
                <p><a href="#0">About the Activities of the Yunus Social Business Research Center at Ryukoku University</a></p>
                <p><a href="#0">Turkish Grameen Microfinance Program (TGMP) Earthquake Appeal</a></p>
                <p><a href="#0">YYSA - The Social Business in Yamagata, Japan</a></p>
                <p><a href="#0">Yunus Social Business Center</a></p>
                <p><a href="#0">Yunus Social Business (YSB) Updates - January - September 2022</a></p>
                <p><a href="#0">Professor Muhammad Yunus join hands with Yoshimoto Kogyo a leading entertainment company in Japan to form yunus-yoshimoto Social Action (yySA)</a></p>
            </div>
            <div className='col-6 text-end'>
                <h3>Yunus Library</h3>
                <p><a href="#0">Professor Muhammad Yunus' Acceptance Speech in the Congressional Gold Medal Ceremony.</a></p>
                <p><a href="#0">Is it possible to centralized the proverty? - Dr. Muhammad Yunus</a></p>
                <p><a href="#0">Pariser platz rede lecture</a></p>
                <p><a href="#0">Growing Up With Two Giants</a></p>
                <p><a href="#0">7th Nelson Mandela Annual Lecture</a></p>
                <p><a href="#0">Egon Zehnder International Speech</a></p>
                <p><a href="#0">British Council Talking Without Borders Lecture</a></p>
            </div>
            </div>
        </div>
        <div className="text-center">
          <a href="#0">
            <button className='sbp25-btn'>View All</button>
          </a>
        </div>
    </section>        
            {/* <section className='row section-call2actionOne container-fluid py-5' style={{ backgroundColor: '#F8FBFF' }}>
                <div className='col-12 text-center'>
                    <div className="section-title text-center py-4">
                        <p>Social Business &mdash; News</p>
                    </div>
                    <div className='text-center py-5' style={{ backgroundImage: `url(${config.FILE_URL + 'wiki.png'})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '10%' }}>
                        Register to join the 11th Social Business Academic Conference.
                    </div>
                    <div className='text-center'>
                        <Link to='/contact' className='btn btn-primary'>See All</Link>
                    </div>
                </div>
            </section> */}
        </>
    )
}
export default Wiki;
