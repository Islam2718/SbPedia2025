import React from 'react';
import { Link } from 'react-router-dom';
import config from '../../../config';
const CallToActionTwo = () =>{
    return(
        <>
            <section className='section-call2actionTwo py-5' >
                <div className='col-lg-10 col-xl-10 mx-auto py-5 px-5 rounded sbp25-bg-primary' style={{ backgroundImage: `url(${config.FILE_URL + "c2atwo.png"})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundRepeatX: 'no-repeat', backgroundRepeatY: 'no-repeat', maxWidth: '1200px'}}>
                    <h4 className='fw-bold'><span>Register to Join</span> Sb World !</h4>
                    <p>Be a member of Social Business Pedia.</p>
                    <div>
                        <Link to='#0' className='sbp25-btn'>Sign Up</Link>
                    </div>
                </div>
            </section>           
        </>
    )
}
export default CallToActionTwo;
    