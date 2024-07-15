import React, { useEffect }  from 'react';
import config from '../../../config';
const Banner = () =>{
    useEffect(() => {  
      }, []);
    return(
        <>
            <section className='section-event-banner py-5'>
                <div className='col-8 mx-auto'>
                    <div className='row'>
                        <img src={config.FILE_URL + "event.png"} alt='' className="img-fluid rounded m-0 p-0" style={{maxWidth: '1200px'}}/>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Banner;