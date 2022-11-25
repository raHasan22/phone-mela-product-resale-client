import React from 'react';

const Catagories = () => {
    return (
        <div className='my-8 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>
            <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src="https://fdn2.gsmarena.com/vv/pics/google/google-pixel7-pro-2.jpg" alt="Movie"/></figure>
            <div className="card-body">
                <h2 className="card-title">Android Phone!</h2>
                <p>We have bet collection of android smartphones at cheaper value</p>
                <div className="card-actions justify-end">
                </div>
            </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg" alt="Movie"/></figure>
            <div className="card-body">
                <h2 className="card-title">iPhone!</h2>
                <p>You can also try pre-owned iphones with good battery health</p>
                <div className="card-actions justify-end">
                </div>
            </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-ipad-pro-129-2022-1.jpg" alt="Movie"/></figure>
            <div className="card-body">
                <h2 className="card-title">Tablets!</h2>
                <p>We also provide ipads and android tabs</p>
                <div className="card-actions justify-end">
                </div>
            </div>
            </div>
        </div>
    );
};

export default Catagories;