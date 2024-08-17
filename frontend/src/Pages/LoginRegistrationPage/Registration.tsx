import React from 'react'

function Registration() {
  return (
    <div>
        <section className="pt-5 body-container">   
            <div className="container">
            <div className="row login-form-area">
            <div className="col-md-4 col-lg-5 col-sm-9 mx-auto">
                <div className=" py-5 px-4">
                    <div className="form">
                         <div className="display-1">
                                    Sign up into <br/> Social Business <br/>Pedia
                        </div>
                                <p className="form-containt">
                                    If you already have an account in social business pedia, please sign in for first time to sync with google; otherwise please register.
                                </p>
                            <div className="users form mx-auto">
                                <form method="post">                           
                                    <div className="mb-2">
                                        <label htmlFor="first_name" className="form-label">First Name</label>
                                        <div className="border p-3">
                                            <div className="input text">
                                                <input type="text" name="first_name" className="form-control" placeholder="Enter First Name !" id="first_name"/>
                                            </div>                 
                                        </div>                                   
                                    </div>   
                                    <div className="mb-2">
                                        <label htmlFor="last_name" className="form-label">Last Name</label>
                                        <div className="border p-3">
                                            <div className="input text">
                                                <input type="text" name="last_name" className="form-control" placeholder="Enter Last Name !" id="last_name" />
                                            </div>                 
                                        </div>                                   
                                    </div>   
                                    <div className="mb-2">
                                        <label htmlFor="username" className="form-label">Username *</label>
                                        <div className="border p-3">
                                            <div className="input text">
                                                <input type="text" name="username" className="form-control" placeholder="Enter Username !" id="username" />
                                            </div>                 
                                        </div>                                   
                                    </div>   
                                    <div className="mb-2">
                                        <label htmlFor="email" className="form-label">Email *</label>
                                        <div className="border p-3">
                                            <div className="input text">
                                                <input type="text" name="email" className="form-control" placeholder="Enter Email !" id="email" aria-label="Enter Email !" />
                                            </div>                 
                                        </div>                                   
                                    </div>   
                                    <div className="mb-2">
                                        <label className="form-label" htmlFor="password">Password *</label>                            
                                        <div className="border p-3">
                                            <div className="input-group">
                                                <input type="password" name="password" className="form-control toggle-password" required placeholder="Password" id="password" />                                    <span className="show-password">Show</span>
                                            </div>
                                        </div>
                                    </div>                          
                                    <div className="mb-2">
                                        <label className="form-label" htmlFor="confirm_password">Confirm Password *</label>                            
                                        <div className="border p-3">
                                            <div className="input-group">
                                                <input type="password" name="confirm_password" className="form-control toggle-password" required placeholder="confirm Password" id="confirm_password" />                                    
                                                <span className="show-password">Show</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row my-3">
                                    <div className="form-check d-flex align-items-center col px-5 border-0" style={{paddingLeft:"2.3rem!important"}}>
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault" style={{margin:"3px 0 0 10px"}}>
                                            Accept the terms and conditions.
                                        </label>
                                    </div>
                                </div>
                                <div className="submit">
                                    <div className="submit">
                                        <input type="submit" className="btn btn-lg btn-block btn-login w-100 sb-btn-primary p-3" value="Sign Up Now !" />
                                    </div>                       
                                </div>                            
                                </form>                     
                                </div>
                                <div className="text-center link-dont py-2 my-2">
                                    Already have an account?
                                    <a href="/login" className="">Log in</a>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>        
            </div>
        </section>
    </div>
  )
}

export default Registration