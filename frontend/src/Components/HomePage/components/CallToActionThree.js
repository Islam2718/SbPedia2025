import React from 'react';
import { Link } from 'react-router-dom';
const CallToActionThree = () =>{
    return(
        <>
            <section className='section-call2actionOne py-5'>
                <div className='col-10 mx-auto text-center bg-warning py-5 rounded'>
                    <h4 className='text-center fw-bold'>11<sup>th</sup> Social Business Academic Conference</h4>
                    <p className='text-center'>Register to join the 11th Social Business Academic Conference.</p>
                    <div className='text-center'>
                        <Link to='/contact' className='sbp25-btn'>Register Now</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
export default CallToActionThree;
