import React, { useEffect }  from 'react';
import config from '../../../config';
// import { Swiper, SwiperSlide} from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// import required modules
// import { Autoplay } from 'swiper/modules'
// import 'swiper/css';
// import axios from 'axios';
// import { Link } from 'react-router-dom'; 
// import config from '../../config';
const Banner = () =>{
    // const [sliderJsonData, setSliderJsonData] = useState([]);
    useEffect(() => {  
        // fetchSliderData();
      }, []);
    return(
        <>
            <section className='section-slider py-5' style={{ backgroundColor: '#F8FBFF' }}>
                <div className='col-8 mx-auto'>
                    <div className='row'>
                        <img src={config.FILE_URL + "event.png"} alt='' className="img-fluid rounded m-0 p-0"/>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Banner;