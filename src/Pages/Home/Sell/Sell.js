import React from 'react';

const Sell = () => {
    return (
        <div className='my-10'>
            <div className="hero min-h-screen bg-base-200 my-10 lg:w-5/6 mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                <img src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/03/best-phone-2022-920x613.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                <h1 className="text-5xl font-bold">Sell Products!</h1>
                <p className="py-6">Sell your used phones and tablets that are in good condition</p>
                <button className="btn btn-primary">Sell now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Sell;