import Lottie from 'lottie-react';
import React from 'react';
import animation from '../../../src/assets/Animations/Loading Animation.json'

const Loading = () => {
    return (
        <div className='w-[600px] flex justify-center items-center container mx-auto'>
            <div>
                <Lottie
                    animationData={animation}
                    loop={true}
                ></Lottie>
            </div>
        </div>
    );
};

export default Loading;