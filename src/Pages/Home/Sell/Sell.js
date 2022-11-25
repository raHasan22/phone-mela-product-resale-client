import React from 'react';

const Sell = () => {
    return (
        <div className='my-10'>
            <div className="card sm:w-96 md:w-[600px] lg:w-[1024px] bg-base-100 shadow-xl image-full mx-auto">
            <figure><img src="https://images.ctfassets.net/wcfotm6rrl7u/2sDJE99xaUTEDxrkiopmtK/be3cba35562ec25a738ac957d93d7964/april_8th_launch-og_image.jpg?w=1200" alt="football" /></figure>
            <div className="card-body">
                <h2 className="card-title text-white text-4xl">Sell Products</h2>
                <p className='text-white'>Sell your used phones and tablets that are in good condition</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Sell now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Sell;