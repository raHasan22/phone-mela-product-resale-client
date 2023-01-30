import React from 'react';
import iphone from '../../../assets/catagories/iphone.png';
import android from '../../../assets/catagories/android.png';
import tablet from '../../../assets/catagories/tablet.jpg';

const Catagories = () => {
    return (
        <div className='mx-5 max-w-[1200px] m-auto'>
        <div>
            <h2 className='text-4xl text-center'>Product Catagories</h2>
        </div>
        <div className="flex min-h-screen items-center justify-center bg-neutral-800 mt-10">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                <div className="">
                    <img className="h-full w-full object-cover transition-transform duration-500  group-hover:scale-125" src={android} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 className="font-dmserif text-3xl font-bold text-white">Android Phone!</h1>
                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">We have best collection of android smartphones at cheaper value. our android phones are from different popular brand like: Samsung, Google, Xiaomi, OnePlus etc</p>
                    <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                </div>
                </div>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                <div className="">
                    <img className="h-full w-full object-cover transition-transform duration-500  group-hover:scale-125" src={iphone} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 className="font-dmserif text-3xl font-bold text-white">iPhone!</h1>
                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">You can also try pre-owned iphones. Our phones have good battery health(at least 90%) and good condition. We also provide after sell services</p>
                    <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                </div>
                </div>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                <div className="">
                    <img className="h-full w-full object-cover transition-transform duration-500  group-hover:scale-125" src={tablet} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 className="font-dmserif text-3xl font-bold text-white">Tablets!</h1>
                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">We also provide tablets for every price range, both from and IOS. They all are fresh condition. Suitable for creators and children</p>
                    <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                </div>
                </div>
            </div>
            </div>

        </div>
    );
};

export default Catagories;