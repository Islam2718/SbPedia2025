import React from 'react'

function LoginPage() {
  return (
    <div>
        <section className="pt-5 body-container">
            <div className="container">
                <div className="row login-form-area">
                    <div className="col-md-4 col-lg-5 col-sm-9 mx-auto">
                        <div className=" py-5 px-4">
                            <div className="form">
                                <div className="display-1">
                                    Login into <br/> Social Business <br/>Pedia
                                </div>
                                <p className="form-containt">
                                    If you already have an account in social business pedia, please sign in for first time to sync with google; otherwise please register.
                                </p>
                                <div className="users form mx-auto">
                                    <form method="post" >
                                    <div className="mb-2">
                                        <label htmlFor='email' className="form-label">Email *</label>
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

                                    <div className="row my-3">
                                    <div className="form-check d-flex align-items-center col px-5 border-0" style={{paddingLeft:"2.3rem!important"}}>
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault" style={{margin:"3px 0 0 10px"}}>
                                            Remember Me
                                        </label>
                                    </div>
                                    <div className="col py-1" style={{textAlign:"right"}}>
                                        <a href="/rbac/security/forget-password" className="forget-content"><u>Forget Password?</u></a>
                                    </div>
                                </div>
                                <div className="submit">
                                    <div className="submit">
                                        <input type="submit" className="btn btn-lg btn-block btn-login w-100 sb-btn-primary p-3" value="Login Now !" />
                                    </div>
                                </div>                            
                                </form>                       
                            </div>
                            <div className="row my-4">
                                    <div className="col">
                                            <a href="/social-auth/google/login" className="btn btn-danger col-12"><i className="fab fa-google"></i> Login with Google
                                            </a>                               
                                    </div>
                                    <div className="col">
                                        <a href="/social-auth/facebook/login" className="btn btn-primary col-12 btn-block"><i className="fab fa-facebook"></i> Login with Facebook</a>  
                                    </div>
                                </div>
                                <div className="text-center link-dont py-2 my-2">
                                    Don't have an account?
                                    <a href="/signup" className="">Signup</a>
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

export default LoginPage