import React from "react";

const BestDiscount = () => {
  return (
    <div className="mx-5 max-w-[1200px] lg:mx-auto my-10">
      <div className="mb-5">
        <h1 className="text-4xl text-center font-bold">Best discounts</h1>
      </div>
    
        <section class="mx-auto w-full p-4 lg:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-10 bg-gray-100 rounded-xl shadow-transparent">
          <div class="w-72 h-fit group">
            <div class="relative overflow-hidden rounded-lg">
              <img
                class="h-96 w-full object-cover"
                src="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-ultra-5g.jpg"
                alt=""
              />
              <div class="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button class="bg-cyan-700 rounded-lg text-white py-2 px-5">
                  View Details
                </button>
              </div>
            </div>
            <h2 class="mt-3 text-xl capitalize">Samsung Galaxy S23 Ultra</h2>
            <h3 class="mt-3 text-lg capitalize">12/256 GB</h3>
            <del class="text-red-700 text-lg">$1010</del>
            <p class="text-xl mt-2 ml-1 inline-block">$899</p>
          </div>
          <div class="w-72 h-fit group">
            <div class="relative overflow-hidden rounded-lg">
              <img
                class="h-96 w-full object-cover"
                src="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max-.jpg"
                alt=""
              />
              <div class="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button class="bg-cyan-700 rounded-lg text-white py-2 px-5">
                  View details
                </button>
              </div>
            </div>
            <h2 class="mt-3 text-xl capitalize">Apple iPhone 14 Pro Max</h2>
            <h3 class="mt-3 text-lg capitalize">6/256 GB</h3>
            <del class="text-red-700 text-lg">$1199</del>
            <p class="text-xl mt-2 ml-1 inline-block">$949</p>
          </div>
          <div class="w-72 h-fit group">
            <div class="relative overflow-hidden rounded-lg">
              <img
                class="h-96 w-full object-cover"
                src="https://fdn2.gsmarena.com/vv/bigpic/google-pixel-tablet-1.jpg"
                alt=""
              />
              <div class="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button class="bg-cyan-700 rounded-lg text-white py-2 px-5">
                  View Details
                </button>
              </div>
            </div>
            <h2 class="mt-3 text-xl capitalize">Google Pixel Tablet</h2>
            <h3 class="mt-3 text-lg capitalize">8/256 GB</h3>

            <del class="text-red-700 text-lg">$699</del>
            <p class="text-xl mt-2 ml-1 inline-block">$599</p>
          </div>
        </section>
     
    </div>
  );
};

export default BestDiscount;
