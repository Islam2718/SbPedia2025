import React from 'react'
import { Link } from 'react-router-dom'
function WikiOrganization() {
  return (
    <div>
        <section className="wiki-area my-0">
            <div className="container">
                <div className="section-header">
                    <h4>SB Wiki</h4>
                    <div className="see-more">
                        <Link to="/wiki/" className="" id="link-id">See All<i className="fa-solid fa-angle-right"></i> </Link>                   
                    </div>
                </div>
                <div className="row py-4">
                </div>
            </div>       
        </section>
        {/* call to action  */}
        {/* <div className="container-fluid py-5 c2a item-align-center text-center" style="background-image: url('ThemePublic/images/event-ads-bg.png'); background-repeat: no-repeat; background-size: 100% 100%;"> */}
        <div className="container-fluid py-5 c2a item-align-center text-center">
            <div className="col-lg-10 col-mg-10 col-sm-12 mx-auto">
                <h3>Social Business Day-2024</h3> 
                <h2><span>Save</span> The Date</h2>
                <div className="col-md-4 col mx-auto p-3">
                    <Link to="https://socialbusinesspedia.com/events/sbd2024" target="_blank" className="btn btn-register btn-lg text-nowrap">Register Now <i className="fa-solid fa-chevron-right"></i> </Link>
                </div>  
            </div>              
        </div>
        {/* organizations */}
        <section className="organization-area">
            <div className="container">
                <div className="section-header">
                    <h4>Organizations</h4>
                    <div className="see-more">
                        <Link to="/organization/" className="" id="link-id">See All <i className="fa-solid fa-angle-right"></i> </Link>                     
                    </div>
                </div>
                <div className="row my-4">
                <div className="col-md-2 my-2 text-center">
                        <Link to="">
                        <div className="sb-box-secondary sb-shadow">
                            <div className="row p-2">
                                <div className="col-12">
                                    <img src="/../uploads/gkl.png" className="rounded img-fluid img" alt="" />                            </div>
                                <div className="col-12 px-3 mt-2">
                                    <h5>G. Knitwear Ltd.</h5>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>                
                    <div className="col-md-2 my-2 text-center">
                        <Link to="">
                        <div className="sb-box-secondary sb-shadow">
                            <div className="row p-2">
                                <div className="col-12">
                                    <img src="/../uploads/yc.png" className="rounded img-fluid img" alt="" />                            </div>
                                <div className="col-12 px-3 mt-2">
                                    <h5>Yunus Centre</h5>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-md-2 my-2 text-center">
                        <Link to="">
                        <div className="sb-box-secondary sb-shadow">
                            <div className="row p-2">
                                <div className="col-12">
                                    <img src="/../uploads/gchina.png" className="rounded img-fluid img" alt="" />                                
                                </div>
                                <div className="col-12 px-3 mt-2">
                                    <h5>Grameen China</h5>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-md-2 my-2 text-center">
                        <Link to="">
                        <div className="sb-box-secondary sb-shadow">
                            <div className="row p-2">
                                <div className="col-12">
                                <img src="/../uploads/ysh.png" className="rounded img-fluid img" alt="" />                            </div>
                                <div className="col-12 px-3 mt-2">
                                    <h5>Yunus Sports Hub</h5>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-md-2 my-2 text-center">
                        <Link to="">
                        <div className="sb-box-secondary sb-shadow">
                            <div className="row p-2">
                                <div className="col-12">
                                    <img src="/../uploads/yc.png" className="rounded img-fluid img" alt="" />                                
                                </div>
                                <div className="col-12 px-3 mt-2">
                                    <h5>YT Foundation</h5>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>                
                    <div className="col-md-2 my-2 text-center">
                        <Link to="">
                        <div className="sb-box-secondary sb-shadow">
                            <div className="row p-2">
                                <div className="col-12">
                                    <img src="/../uploads/gkl.png" className="rounded img-fluid img" alt="" />                            </div>
                                <div className="col-12 px-3 mt-2">
                                    <h5>US Malaysia</h5>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>       
        </section>

    </div>
  )
}

export default WikiOrganization