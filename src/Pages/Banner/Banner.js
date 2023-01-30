import React from 'react';
import image from '../.././assets/pictures/banner.png';

const Banner = () => {
    return (
        <div className='my-5'>
        <div className='max-w-[1200px] mx-auto md:flex md:flex-row-reverse bg-gradient-to-b from-[#414141] to-[#000000] lg:px-10 lg:py-10 sm:py-10 rounded'>
            <div className='md:w-1/2 px-10 py-10 md:py-0'>
                <img className='w-full hover:scale-95' src={image} alt='banner'></img>
            </div>
            <div className='text-center flex flex-col justify-center md:w-1/2 md:text-left px-10 pb-10 md:py-0'>
            <h1 className="mb-5 text-5xl text-white font-bold">Welcome</h1>
            <p className="mb-5 text-white">We providing smartphones which are pre-owned and in a budget price. We also ensure the quality of our devices and provide warranty</p>
            <div className='text-center md:text-left'><button className="btn bg-cyan-700 hover:bg-sky-900 w-32 btn-sm text-white">Get Started</button></div>
            </div>
        </div>
        </div>
    );
};

export default Banner;