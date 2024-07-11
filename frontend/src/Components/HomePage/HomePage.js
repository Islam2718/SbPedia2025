import React ,{useEffect} from 'react';
import { useLocation } from 'react-router-dom';

import Banner from './components/Banner';
import Event from './components/Event';
import News from './components/News';
import CallToActionOne from './components/CallToActionOne';
import Wiki from './components/Wiki';
import CallToActionTwo from './components/CallToActionTwo';
import Organization from './components/Organization';
import CallToActionThree from './components/CallToActionThree';
// import Wellcome from './Wellcome';
// import Service from './Service';
// import BackgroundStory from './BackgroundStory';
// import SuccessStory from './SuccessStory';
// import Facts from './Facts';
// import News from './components/News';

function HomePage() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div>
            <Banner />
            <Event />
            <News />
            <CallToActionOne />
            <Wiki />
            <CallToActionTwo />
            <Organization />
            <CallToActionThree />
            {/* <Wellcome />
            <Service />
            <BackgroundStory />
            <SuccessStory />
            <Facts />
            <News /> */}
        </div>
    );
}

export default HomePage;