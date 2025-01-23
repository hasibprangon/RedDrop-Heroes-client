import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../../Shared/NavBar';
import Footer from '../../Shared/Footer';

const Default = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes(`login`) || location.pathname.includes(`register`);
    return (
        <div className='font-prata'>
            {noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Default;