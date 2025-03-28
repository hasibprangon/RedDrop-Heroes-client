import React, { useState } from 'react';
import { FcHome } from 'react-icons/fc';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import useDonor from '../../Hooks/useDonor';
import useAdmin from '../../Hooks/useAdmin';
import useVolunteer from '../../Hooks/useVolunteer';
import { HiMenu, HiX } from "react-icons/hi";

const Dashboard = () => {
    const location = useLocation();
    const [isDonor] = useDonor();
    const [isAdmin, isLoading] = useAdmin();
    const [isVolunteer, isVolunteerLoading] = useVolunteer()
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='flex'>
            <aside className={`w-64 min-h-screen bg-red-500 p-4 fixed md:relative z-50 transition-all duration-300 ${isOpen ? "w-64" : "w-2 md:w-64"
                } overflow-hidden md:overflow-visible`}>
                {/* Sidebar Toggle Button (Mobile) */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="absolute top-2 right-0 md:hidden text-white text-2xl"
                >
                    {isOpen ? <HiX /> : <HiMenu />}
                </button>
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

                    {/* donor dashboard */}
                    {isDonor && (
                        <>
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
                        </>
                    )}

                    {/* admin routes */}
                    {isAdmin &&
                        <>

                            <li><NavLink
                                to="/dashboard/all-users"
                                className={({ isActive }) =>
                                    isActive ? 'text-white font-bold' : ''
                                }>All Users</NavLink></li>

                            <li><NavLink
                                to='/dashboard/all-blood-donation-request'
                                className={({ isActive }) =>
                                    isActive ? 'text-white font-bold' : ''
                                }>All Blood Donation Requests</NavLink></li>

                            {/* <li><NavLink
                                // to='/dashboard/my-donation-request'
                                className={({ isActive }) =>
                                    isActive ? 'text-white font-bold' : ''
                                }>Content Management</NavLink></li> */}
                        </>
                    }

                    {/* admin and volunteer shared routes */}
                    {
                        (isVolunteer) &&
                        <>
                            <li><NavLink
                                to='/dashboard/all-blood-donation-request'
                                className={({ isActive }) =>
                                    isActive ? 'text-white font-bold' : ''
                                }>All Blood Donation Requests</NavLink></li>
                            <li><NavLink
                                to='/dashboard/create-donation-request'
                                className={({ isActive }) =>
                                    isActive ? 'text-white font-bold' : ''
                                }>Create Donation Request</NavLink></li>
                        </>

                    }



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