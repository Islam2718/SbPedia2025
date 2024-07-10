import React ,{useEffect} from 'react';
import { useLocation } from 'react-router-dom';

import Banner from './components/Banner';
import Event from './components/Event';
// import Wellcome from './Wellcome';
// import Service from './Service';
// import BackgroundStory from './BackgroundStory';
// import SuccessStory from './SuccessStory';
// import Facts from './Facts';
import News from './components/News';


// import FaqArea from './FaqArea'
function HomePage() {
  const location = useLocation(); 

  // Scroll to the top of the page when the route changes
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, [location]);
    return(
        <div>
          {/* <div className='text-center h-100 alert py-5 my-5'>Social Business Pedia...</div> */}
            <Banner/>
            <Event/>
            {/* <Wellcome />    */}
            {/* <Service /> */}
            {/* <BackgroundStory /> */}
            {/* <SuccessStory /> */}
            {/* <Facts/> */}
            <News />
        </div>
    )
}
export default HomePage;