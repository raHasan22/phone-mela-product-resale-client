import React from 'react';

const Offers = () => {
    return (
        <div className='my-10'>
            <div className="card mx-5 max-w-[1200px] bg-base-100 shadow-xl image-full lg:mx-auto">
            <figure><img src="https://news.cgtn.com/news/2022-03-31/Qatar-2022-World-Cup-football-will-be-fastest-ever-18QoGQieMmY/img/8f5ea785498241ef86064bc29809b5b8/8f5ea785498241ef86064bc29809b5b8.jpeg" alt="football" /></figure>
            <div className="card-body">
                <h2 className="card-title text-white text-4xl">Ongoing Discount</h2>
                <p className='text-white'>1. We are providing flat 10% discount all of our iPhones and 8% discount on android phones until Qatar world cup 2022 Final</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Offers;