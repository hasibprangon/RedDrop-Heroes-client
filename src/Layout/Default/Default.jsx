import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../../Shared/NavBar';
import Footer from '../../Shared/Footer';

const Default = () => {
    const [theme, setTheme] = useState('light');
    const handleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme])
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes(`login`) || location.pathname.includes(`register`);
    // font-prata
    return (
        <div className={theme === 'dark' ? ' bg-white' : 'text-black '}>
            <div>
                {noHeaderFooter || <NavBar
                    handleTheme={handleTheme}
                ></NavBar>}
            </div>
            <div className='min-h-[calc(100vh-180px)]'>
                <Outlet></Outlet>
            </div>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Default;