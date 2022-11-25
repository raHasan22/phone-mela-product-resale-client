import React from 'react';
import image from '../.././assets/pictures/banner.png';

const Banner = () => {
    return (
        <div className='my-5'>
            <div className="hero min-h-screen lg:min-h-[700px] lg:w-[1200px] mx-auto" style={{ backgroundImage: `url(${image})` }}>
        <div className="hero-overlay bg-opacity-30 lg:rounded-[40px]"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-white font-bold">Welcome</h1>
            <p className="mb-5 text-white">We providing smartphones which are pre-owned and in a budget price. We also ensure the quality of our devices and provide warranty</p>
            <button className="btn btn-primary text-white">Get Started</button>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Banner;