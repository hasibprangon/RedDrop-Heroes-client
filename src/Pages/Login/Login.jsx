import Lottie from 'lottie-react';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import animation from '../../../src/assets/Animations/Login Animation.json'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const { register, handleSubmit,reset } = useForm();
    const { handleSignIn, setUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation(); 

    const onSubmit = (data) => {
        handleSignIn(data?.email, data?.password)
        .then(result => {
            const user = result?.user;
            setUser(user)
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Login Successful",
                showConfirmButton: false,
                timer: 1500
            });
            reset();
            navigate(location?.state ? location?.state : "/");
        })
        .catch(err => {
            Swal.fire({
                position: "top",
                icon: "error",
                title: `${err.message}`,
                showConfirmButton: false,
                timer: 1500
            });
        })
    }
    return (
        <div>
            <div className="hero bg-red-50 min-h-screen my-5">
                <Helmet>
                    <title>Login || RedDrop-Heroes</title>
                </Helmet>
                <div className="hero-content bg-red-100 flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <Lottie
                            animationData={animation}
                            loop={true}
                        ></Lottie>
                    </div>
                    <div className="card bg-red-50 w-full max-w-sm shrink-0 shadow-2xl">
                        <h1 className="text-4xl text-center mt-5 font-bold">Login now!</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email")}placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password")} type={showPass ? 'text' : 'password'}placeholder="password" className="input input-bordered" required />
                                <button type='button' onClick={() => setShowPass(!showPass)}className='absolute right-2 top-12 btn btn-xs'>
                                {
                                    showPass ? <FaEyeSlash /> : <FaEye />
                                }
                                </button>
                            </div>
                            <div className="form-control mt-6">
                            <button className="bg-white text-red-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 hover:scale-105 transition duration-300">Login</button>
                            </div>
                            <p className='text-center font-semibold mb-3'>New To this website? Please <Link to='/register' className='text-blue-500 font-bold'>Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;