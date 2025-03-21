import Lottie from 'lottie-react';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import animation from '../../../src/assets/Animations/Register Animation.json'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic';


const image = import.meta.env.VITE_IMAGE_API_KEY;
const imageApi = `https://api.imgbb.com/1/upload?key=${image}`

const Register = () => {
    const { register, handleSubmit, reset } = useForm()
    const { createUser, setUser, updateUserProfile } = useAuth();
    const [showPass, setShowPass] = useState(false);
    const [upazilas, setUpazilas] = useState(null);
    const [districts, setDistricts] = useState(null);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/Districts.json')
            .then(res => res.json())
            .then(data => setDistricts(data))
    }, [])

    useEffect(() => {
        fetch('/Upazilas.json')
            .then(res => res.json())
            .then(data => setUpazilas(data))
    }, [])

    const onSubmit = async (data) => {
        const imageFile = { image: data?.image[0] }

        const res = await axiosPublic.post(imageApi, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        const photoUrl = res?.data?.data?.display_url;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordRegex.test(data?.password)) {
            Swal.fire({
                icon: "error",
                title: "Password must be contains at least an Uppercase, a Lowercase, and be at least 6 characters long",
                showConfirmButton: false,
                timer: 2000
            });
            return;
        };

        if (data?.password !== data?.confirmPassword) {
            Swal.fire({
                icon: "error",
                title: "Passwords do not match!",
                showConfirmButton: false,
                timer: 2000
            });
            return;
        }
        const userInfo = {
            name: data?.name,
            email: data?.email,
            photoUrl,
            role: "donor",
            bloodGrp: data?.bloodGrp,
            district:data?.district,
            upazila: data?.upazila,
            status: "active"
        }
        createUser(data?.email, data?.password)
            .then(result => {
                const user = result?.user;
                setUser(user);
                updateUserProfile({ displayName: data?.name, photoURL: photoUrl })
                    .then(() => {
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res?.data?.insertedId) {
                                    Swal.fire({
                                        icon: "success",
                                        title: "Registration Successful",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                }
                            })
                        reset();
                        navigate('/');
                    })
                    .catch(err => {
                        console.error('Error creating user:', err)
                        Swal.fire({
                            icon: "error",
                            title: `${err.message}`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
            })
            .catch(err => {
                console.error('Error creating user:', err)
                Swal.fire({
                    icon: "error",
                    title: `${err.message}`,
                    showConfirmButton: false,
                    timer: 1500
                });
            })

    }



    return (
        <div className="hero bg-red-50 p-5 my-5">
            <Helmet>
                <title>Register || RedDrop-Heroes</title>
            </Helmet>
            <div className="hero-content flex-col bg-red-100 lg:flex-row-reverse">
                <div className="text-center lg:text-left lg:w-[500px] md:w-[400px] w-64">
                    <Lottie
                        animationData={animation}
                        loop={true}
                    ></Lottie>
                </div>
                <div className="card bg-red-50 lg:w-[500px] md:w-[450px]  mr-8 shrink-0 shadow-2xl">
                    <h1 className="text-4xl font-bold my-8 text-center">Register now!</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        {/* Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                {...register("name", { required: true })}
                                type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        {/* Photo Url */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input
                                {...register("image", { required: true })}
                                type="file" className="file-input file-input-bordered w-full " required />
                        </div>
                        {/* blood group */}
                        <div className="form-control">
                            <label className="block font-bold">Blood Group</label>
                            <select
                                {...register("bloodGrp", { required: true })}
                                name='bloodGrp' className="select select-bordered w-full " required>
                                <option disabled selected>Select your blood group</option>
                                <option>A+</option>
                                <option>A-</option>
                                <option>B+</option>
                                <option>B-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                                <option>O+</option>
                                <option>O-</option>
                            </select>
                        </div>
                        {/* Districts */}
                        <div className="form-control">
                            <label className="block font-bold">Districts</label>
                            <select
                                {...register("district", { required: true })}
                                name='district' className="select select-bordered w-full " required>
                                <option disabled selected>Select your District</option>
                                {
                                    districts?.map(district => <option key={district.id}>
                                        {district.name}
                                    </option>)
                                }
                            </select>
                        </div>

                        {/* Upazilas */}
                        <div className="form-control">
                            <label className="block font-bold">Upazila</label>
                            <select
                                {...register("upazila", { required: true })}
                                className="select select-bordered w-full " required>
                                <option disabled selected>Select your Upazila</option>
                                {
                                    upazilas?.map(district => <option key={district.id}>
                                        {district.name}
                                    </option>)
                                }
                            </select>
                        </div>

                        {/* Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register("email", { required: true })}
                                type="email" placeholder="Enter Your Email" className="input input-bordered" required />
                        </div>
                        {/* Password */}
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                {...register("password", { required: true })}
                                type={showPass ? 'text' : 'password'} placeholder="password" name='password' className="input input-bordered" required />
                            <button type='button' onClick={() => setShowPass(!showPass)} className='absolute right-2 top-12 btn btn-xs'>
                                {
                                    showPass ? <FaEyeSlash /> : <FaEye />
                                }
                            </button>
                        </div>
                        {/* Confirm Password */}
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input
                                {...register("confirmPassword", { required: true })}
                                type={showPass ? 'text' : 'password'} placeholder="password" className="input input-bordered" required />
                            <button type='button' onClick={() => setShowPass(!showPass)} className='absolute right-2 top-12 btn btn-xs'>
                                {
                                    showPass ? <FaEyeSlash /> : <FaEye />
                                }
                            </button>
                        </div>
                        <div className="form-control mt-6">

                            <button className="bg-white text-red-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 hover:scale-105 transition duration-300">Register</button>
                        </div>
                        <p className='text-center font-semibold mb-3'>Already Have an Account? Please <Link to='/login' className='text-blue-500 font-bold'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;