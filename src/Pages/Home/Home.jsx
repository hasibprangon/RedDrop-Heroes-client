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
import { useOutletContext } from "react-router-dom"; 

const Home = () => {
    const { theme, handleTheme } = useOutletContext();
    return (
        <div>
            <Helmet>
                <title>Home || RedDrop-Heroes</title>
            </Helmet>
           <Banner theme={theme} handleTheme={handleTheme} ></Banner>
           <About theme={theme}></About>
           <ContactUs theme={theme}></ContactUs>
           <Featured theme={theme}></Featured>
           <DonationRequests theme={theme}></DonationRequests>
           <Blog theme={theme}></Blog>
           <Testimonials theme={theme}></Testimonials>
           <FAQ theme={theme}></FAQ>
        </div>
    );
};

export default Home;