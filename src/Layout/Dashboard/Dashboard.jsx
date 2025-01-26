import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex'>
            <aside className='w-64 min-h-full bg-red-500'>
                <ul className='menu p-4'>
                    <li><NavLink to='/dashboard/profile'>Profile</NavLink></li>
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