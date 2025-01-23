import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Featured from './Featured';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home || RedDrop-Heroes</title>
            </Helmet>
           <Banner></Banner>
           <ContactUs></ContactUs>
           <Featured></Featured>
        </div>
    );
};

export default Home;