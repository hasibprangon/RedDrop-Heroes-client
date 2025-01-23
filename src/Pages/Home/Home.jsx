import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home || RedDrop-Heroes</title>
            </Helmet>
           <Banner></Banner>
        </div>
    );
};

export default Home;