import React from 'react';
import config from '../../config';
// import { Link } from 'react-router-dom'; 


const Facts =  ({reportData}) => {

  return (
    <section className='facts'>
        <div className='container'>
            <div className='row'>
                <div className="title">
                    <h1>GMPF <span>Facts</span></h1>
                </div>
                <div className="fact-numbers-container">
                    <div className="fact-numbers">
                        <h6>603</h6>
                        <p>Areas</p>
                    </div>
                    <div className="fact-numbers">
                        <h6>807</h6>
                        <p>Projects</p>
                    </div>
                    <div className="fact-numbers">
                        <h6>3052</h6>
                        <p>Members</p>
                    </div>
                    <div className="fact-numbers">
                        <h6>1213</h6>
                        <p>Growth</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Facts;

