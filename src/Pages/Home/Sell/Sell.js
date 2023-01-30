import React from 'react';
import { Link } from 'react-router-dom';

const Sell = () => {
    return (
        <div className='my-10'>
            <div className="hero rounded min-h-screen mx-5 max-w-[1200px] bg-gradient-to-b from-[#414141] to-[#000000] my-10 lg:mx-auto">
            <div className="hero-content flex-col lg:flex-row lg:justify-between">
                <div>
                <img src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/03/best-phone-2022-920x613.jpg" className="max-w-sm rounded-lg shadow-2xl w-full hover:scale-105" alt='' />
                </div>
                <div>
                <h1 className="text-5xl font-bold text-white">Sell Products!</h1>
                <p className="py-6 text-white">Sell your used phones and tablets that are in good condition</p>
                <button className="btn bg-cyan-700 hover:bg-sky-900 w-32 btn-sm text-white"><Link to='/addphone'>Get Started</Link></button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Sell;