import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';
import img from '../../src/assets/image/RedDrop-Heroes.png';

const NavBar = () => {
    const { user, handleSignOut } = useAuth();

    const handleLogOut = () => {
        handleSignOut()
            .then(() => {
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Log out successful',
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
            .catch((err) => {
                Swal.fire({
                    position: 'top',
                    icon: 'error',
                    title: `${err?.message}`,
                    showConfirmButton: false,
                    timer: 1500,
                });
            });
    };

    const [info, setInfo] = useState(false);

    const handleMouseHover = () => {
        setInfo(true);
    };

    const handleMouseHoverOut = () => {
        setInfo(false);
    };
    const handleClick = () => {
        setInfo(prev => !prev);
    };

    const links = (
        <>
            <li>
                <NavLink className='text-white' to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className='text-white'  to="/donationRequests">Donation Request</NavLink>
            </li>
            <li>
                <NavLink className='text-white' to="/blog">Blog</NavLink>
            </li>
            {user && user?.email ? (
                <button className="text-start ml-3 md:hidden" onClick={handleSignOut}>
                    Logout
                </button>
            ) : (
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
            )}
        </>
    );

    return (
        <div className="navbar bg-red-600 sticky top-0 z-50 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-md"
                    >
                        {links}
                    </ul>
                </div>
                <img className="w-12 mx-2 rounded-full" src={img} alt="" />
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end">
                {user?.email ? (
                    <div className="relative">
                        <img
                            onClick={handleClick}
                            onMouseEnter={handleMouseHover}
                            onMouseDownCapture={handleMouseHoverOut}
                            className="w-12 h-12 border-2 border-white rounded-full mr-3 cursor-pointer transform transition-all hover:scale-110"
                            src={user?.photoURL}
                            alt=""
                        />
                        {info && (
                            <div
                                className="absolute right-2 mt-4 w-44 bg-white rounded-lg shadow-lg z-10"
                                onMouseEnter={handleMouseHover}
                                onMouseLeave={handleMouseHoverOut}
                            >
                                <div className="p-4 border-b text-center">
                                    <p className="text-sm text-gray-700 font-medium">
                                        {user?.displayName}
                                    </p>
                                    {user && user?.email && (
                                        <NavLink
                                            to="/dashboard"
                                            className="text-blue-600 hover:underline mt-2 block"
                                        >
                                            Dashboard
                                        </NavLink>
                                    )}
                                </div>
                                <div className="text-center">
                                    <button
                                        className="btn btn-danger w-full"
                                        onClick={handleLogOut}
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="flex items-center gap-3">
                        <Link to="/login" className="btn btn-outline text-white mr-3 mt-3">
                            Login
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBar;
