import Lottie from 'lottie-react';
import React from 'react';
import animation from '../../src/assets/Animations/Not Found.json'
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';

const Error = () => {
    return (
        <div>
            <div className='w-[600px] flex justify-center items-center container mx-auto'>
                <div>
                    <h2 className='text-5xl font-semibold text-red-400 text-center mt-10'>Oops! An error occurred</h2>
                    <Lottie
                        animationData={animation}
                        loop={true}
                    ></Lottie>
                </div>
            </div>
            <div className='flex justify-center items-center mt-5'><Link to='/' className='btn bg-red-400 text-white font-bold text-base'><FaArrowLeftLong></FaArrowLeftLong> Back to home</Link></div>
        </div>
    );
};

export default Error;