import React from "react";

const Stats = () => {
  return (
    <div className="mx-5 max-w-[1200px] lg:mx-auto my-5 lg:my-20">
      <div className="stats shadow-xl stats-vertical lg:stats-horizontal w-full h-screen lg:h-44">
        <div className="stat shadow-inner">
          <div className="stat-figure text-pink-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
          <div className="stat-title">Total Registration</div>
          <div className="stat-value text-pink-800">5.6K</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat shadow-inner">
          <div className="stat-figure text-orange-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <div className="stat-title">Page Views</div>
          <div className="stat-value text-orange-400">2.6M</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat shadow-inner">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
               
              </div>
            </div>
          </div>
          <div className="stat-value">86%</div>
          <div className="stat-title">Delivery Successful</div>
          <div className="stat-desc text-orange-400">31 remaining</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
