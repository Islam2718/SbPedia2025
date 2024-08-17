import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="footer mt-5">
            <div className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="px-sm-0 px-2 pb-4">
                                <a href="/"><img src="https://gdhsystem.com/ThemePublic/images/footer_logo.png" alt="n/a" className="img-fluid light-theme-logo"/></a>                                 
                                <a href="/"><img src="https://gdhsystem.com/ThemePublic/images/footer_dark_logo.png" alt="n/a" className="img-fluid dark-theme-logo"/></a>                                 
                                <h4 className="mt-5">
                                    Connect With Us
                                </h4>
                                <ul className="social-link">
                                    <li><a href="#0" className="facebook"> <i className="fa-brands fa-facebook-f"></i> </a></li>
                                    <li><a href="#0" className="twitter"><i className="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="#0" className="google"><i className="fa-brands fa-google-plus-g"></i> </a></li>
                                    <li><a href="#0" className="linkedin"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="px-sm-0 px-2 pb-4">
                                        <p className="footer-title">SB Events</p>
                                        <ul className="footer-link">
                                            <li><a href="#0">Upcoming Events</a></li>
                                            <li><a href="#0">Recent Events</a></li>
                                            <li><a href="#0">Social Business Day(SBD)</a></li>
                                            <li><a href="#0">Global Social Business Summit(GSBS)</a></li>
                                            <li><a href="#0">SB Academia Conference(SBAC)</a></li>
                                        </ul>
                                        <p className="footer-title pt-4 ">Gallery</p>
                                        <ul className="footer-link">
                                            <li><a href="#0">Videos</a></li>
                                            <li><a href="#0">Recent Videos</a></li>
                                            <li><a href="#0">Top Viewed</a></li>
                                            <li><a href="#0">Event Videos</a></li>
                                            <li><a href="#0">Photos</a></li>
                                        </ul>
                                    </div>
                                    
                                </div>
                                <div className="col-md-6">
                                    <div className="px-sm-0 px-2 pb-4">
                                        <p className="footer-title">SB World</p>
                                        <ul className="footer-link">
                                            <li><a href="#0">SB Promotional organizations</a></li>
                                            <li><a href="#0">Grameen Organizations Bangladesh</a></li>
                                            <li><a href="#0">Funds</a></li>
                                            <li><a href="#0">Social Business Cities</a></li>
                                            <li><a href="#0">Social Business Villages</a></li>
                                            <li><a href="#0">NU Program Bangladesh</a></li>
                                            <li><a href="#0">Social Business Ventures</a></li>
                                        </ul>
                                        <p className="footer-title pt-4">Design Lab</p>
                                        <ul className="footer-link">
                                            <li><a href="#0">SB Design Labs</a></li>
                                            <li><a href="#0">Upcoming Design Labs</a></li>
                                            <li><a href="#0">Recent Design Labs</a></li>
                                        </ul> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            <div className=" footer-bottom">
                <div className="container-fluid">
                    <div className="mx-4 d-flex justify-content-between flex-wrap">
                        <div className="d-flex flex-wrap">
                        <a href="/"><img src="https://gdhsystem.com/ThemePublic/images/logo.png" alt="n/a" className="img-fluid" /></a>                            <p>©2023 SbPedia</p>
                            <ul className="d-flex flex-wrap">
                                <li><a href="#0"> Idea Bank </a></li>
                                <li><a href="#0"> SB Updated </a></li>
                                <li><a href="#0"> SB Networks </a></li>
                                <li><a href="#0"> User Agreement </a></li>
                                <li><a href="#0"> Privacy Policy </a></li>
                                <li><a href="#0"> Terms &amp; Condition </a></li>
                            </ul>
                        </div>
                        <div className="footer-language d-lg-block d-none">
                            <select className="form-select form-select-sm" aria-label="Small select example">
                                {/* <option selected="">Language</option> */}
                                <option value="0">EN</option>
                                <option value="1">BN</option>
                                <option value="2">CH</option>
                                <option value="3">JP</option>
                            </select>
                        </div>
                    </div> 
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer