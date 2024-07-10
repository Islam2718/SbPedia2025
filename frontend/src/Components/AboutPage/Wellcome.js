import React from "react";
import config from '../../config';
const WellcomeSection = () =>{
    return(
        <>
            <section className="wellcome-section-2">
                <div className="leaf-position-right">
                    <img src={config.FILE_URL + '../uploads/leaf-1.png'} alt="" className="img-fluid py-5" />
                </div>
                <div className="container">
                    <div className="page-title">
                        <p>About <span>Us</span></p>
                    </div>
                    <div className="wellcome-content">
                        <p><span>Grameen Shakti</span> <span>Samajik Byabosha</span> <span>ltd.</span> is working towards poverty eradication and bringing social equity by creating new entrepreneurs (Nobin Udyokta). Though the Nobin program GSSBL is identifying and fostering new entrepreneurial people who want to reshape their lives. GSSBL has a dedicated team who work to implement the Nobin program by polishing entrepreneurs’ business ideas, helping them prepare projects to present in the Social Business Design Lab for investors’ approval. GSSBL is currently working in several areas of Bangladesh, financing the needy young people who want to start new business or expand their existing business with their family. With the support of GSSBL, many local entrepreneurs (Nobin Program) have shown their eagerness to start up independent ventures in village areas to solve their own problems. 
                           <br/><br/> GSSBL is also working to create “Social Business Village”, an autonomous, and economically viable entity with a successful Social Business Fund and a social business incubation company.</p>
                    </div>
                </div>
            </section>
        </>
        
    )
}
export default WellcomeSection;