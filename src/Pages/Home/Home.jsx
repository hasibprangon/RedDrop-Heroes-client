import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Featured from './Featured';
import About from './About';
import DonationRequests from '../DonationRequests/DonationRequests ';
import Blog from '../Blog/Blog';
import Testimonials from './Testimonials';
import FAQ from './FAQ';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home || RedDrop-Heroes</title>
            </Helmet>
           <Banner></Banner>
           <About></About>
           <ContactUs></ContactUs>
           <Featured></Featured>
           <DonationRequests></DonationRequests>
           <Blog></Blog>
           <Testimonials></Testimonials>
           <FAQ></FAQ>
        </div>
    );
};

export default Home;