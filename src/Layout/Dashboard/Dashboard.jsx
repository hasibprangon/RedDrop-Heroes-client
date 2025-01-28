import React from 'react';
import { FcHome } from 'react-icons/fc';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const Dashboard = () => {
    const location = useLocation();
    return (
        <div className='flex'>
            <aside className='w-64 min-h-screen bg-red-500'>
                <ul className='menu p-4'>
                    <li><NavLink
                        to='/dashboard'
                        className={({ isActive }) =>
                            isActive && location.pathname === '/dashboard' ? 'text-white font-bold' : ''
                        }
                    >
                        Dashboard
                    </NavLink></li>
                    {/* profile */}
                    <li><NavLink
                        to='/dashboard/profile'
                        className={({ isActive }) =>
                            isActive ? 'text-white font-bold' : ''
                        }>Profile</NavLink></li>

                    {/* createDonationRequest */}
                    <li><NavLink
                        to='/dashboard/create-donation-request'
                        className={({ isActive }) =>
                            isActive ? 'text-white font-bold' : ''
                        }>Create Donation Request</NavLink></li>

                    <li><NavLink
                        to='/dashboard/my-donation-request'
                        className={({ isActive }) =>
                            isActive ? 'text-white font-bold' : ''
                        }>My Donation Request</NavLink></li>


                        
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FcHome className='text-xl'>
                            </FcHome>
                            <span className='text-xl'>Home</span>
                        </NavLink>
                    </li>
                </ul>


            </aside>


            {/* dashboard content */}
            <main className='flex-1 bg-gray-100 p-8'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Dashboard;