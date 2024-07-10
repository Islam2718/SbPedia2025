import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import config from '../../config';
const WellcomeSection = () =>{
    // const [shortInfoJasonData, setShortInfoJasonData] = useState([]);

    // async function fetchShortInfo() {
    //     try {
    //         const response = await axios.get(config.API_URL_LIVE + config.PAGES_URL);
    //         if(response.status === 200){
    //             setShortInfoJasonData(response.data.data[0]);
    //        }
    //        else {
    //            console.error('Unexpected status code:', response.status);
    //        }
    //     } catch (error) {
    //         console.error('Error reading JSON file:', error);
    //     }
    // }
    useEffect(() => {
        // fetchShortInfo();
      }, []);
    return(
        <>
            <section className="wellcome-section">
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-md-6 col-lg-6 col-sm-12">
                            <div className="section-header">
                                <h5>Explore Us</h5>
                                <h3>Welcome to GMPF</h3>
                                <p>The Grameen Fisheries and Livestock Foundation (GMPF) was founded in 1994 to tackle poverty through aquaculture, fisheries, and integrated farming. Originally focused on fisheries, it now includes livestock development. GMPF empowers rural individuals, particularly women, providing access to resources and promoting modern, sustainable practices. It advocates for women's rights and strives for food security and sustainable livelihoods in rural areas.</p>
                                <p>
                                    <ul>
                                        <li>Provide rural landless poor, especially women, access to common resource properties</li>
                                        <li>Replace exploitation with community empowerment.</li>
                                        <li>Foster social and economic growth in rural areas.</li>
                                        <li>Promote the transition from traditional practices to modern solutions.</li>
                                        <li>Advocate for women's legal and gender rights.</li>
                                        <li>Ensure food security in rural communities.</li>
                                        <li>Promote sustainable livelihoods through integrated farming systems.</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-12">
                            <div className="welcome-img">
                                <img src={config.FILE_URL + "welcome-img.png"} alt='' className="img-fluid w-70"/>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
        </>        
    )
}
export default WellcomeSection;