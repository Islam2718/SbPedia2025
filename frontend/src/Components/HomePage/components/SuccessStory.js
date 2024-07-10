import React from 'react';
import config from '../../config';
// import { Link } from 'react-router-dom'; 

const SuccessStory =  () => {

  return (
    <section className="success-story">
        <div className="page-title text-center">
          <p>Success Story</p>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-12">
                    <div className="section-header">
                        <h5>Explore Us</h5>
                        <h3>Successfully Entrepreneur Story</h3>
                        <p>The Grameen Fisheries and Livestock Foundation (GMPF) was founded in 1994 to tackle poverty through aquaculture, fisheries, and integrated farming. Originally focused on fisheries, it now includes livestock development. GMPF empowers rural individuals, particularly women, providing access to resources and promoting modern, sustainable practices. It advocates for women's rights and strives for food security and sustainable livelihoods in rural areas.</p>
                        <p>
                            <ol>
                                <li>Provide rural landless poor, especially women, access to common resource properties</li>
                                <li>Replace exploitation with community empowerment.</li>
                                <li>Foster social and economic growth in rural areas.</li>
                                <li>Promote the transition from traditional practices to modern solutions.</li>
                                <li>Advocate for women's legal and gender rights.</li>
                                <li>Ensure food security in rural communities.</li>
                                <li>Promote sustainable livelihoods through integrated farming systems.</li>
                            </ol>
                        </p>
                        <a href="#0" className="btn-theme">Read More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                    <div className="success-img">
                        <img src={config.FILE_URL + "success-story.png"} alt='' className="img-fluid w-70"/>
                    </div> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default SuccessStory;

