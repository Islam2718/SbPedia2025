import React, { useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Wellcome from './Wellcome';
import VisionMission from './VisionMission';
import BoardMembers from './BoardMembers';


// import FaqArea from './FaqArea'
function AboutPage() {
  const location = useLocation(); 
  // Scroll to the top of the page when the route changes
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, [location]);
    return(
        <div>
            <Wellcome />
            <VisionMission />
            <BoardMembers />
        </div>
    )
}
export default AboutPage;