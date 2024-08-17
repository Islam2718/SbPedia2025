import React from 'react'
import { Link } from 'react-router-dom'

function WikiBanner() {
  return (
    <div>
        <section className="news-page-banner text-center">
            <div className="news-banner py-5" style={{backgroundImage: "url(/ThemePublic/images/news-banner.png)"}}>
                <h1>Wiki</h1>
                <div className="d-flex justify-content-center breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/"><i className="fa-solid fa-house"></i>  Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page"><Link to="/news">Wiki</Link></li>
                    </ol>
                </div>
                <div className="search-input col-5 mx-auto border-bottom">
                    <form action="/news/search/" method="GET">
                        <div className="input-group mb-1">
                            <input type="text" className="form-control border-0" name="kw" value="" placeholder="Search here..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <button type="submit" className="input-group-text border-0" id="basic-addon2"> <i className="fa-solid fa-magnifying-glass"></i> 
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
  )
}

export default WikiBanner