import React from "react";
import { Link } from "react-router-dom";

const Sell = () => {
  return (
    <div className="mt-10 mb-12">
      <div className="max-w-[1200px] mx-auto md:flex md:flex-row bg-gradient-to-b from-[#414141] to-[#000000] lg:px-10 lg:py-10 sm:py-10 rounded">
        <div className="md:w-1/2 px-10 py-10 md:py-0">
          <img
            className="w-full hover:scale-105 rounded-md"
            src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/03/best-phone-2022-920x613.jpg"
            alt="banner"></img>
        </div>
        <div className="text-center flex flex-col justify-center md:w-1/2 md:text-left px-10 pb-10 md:py-0">
          <h1 className="mb-5 text-5xl text-white font-bold">Sell Products!</h1>
          <p className="mb-5 text-white">
            Sell your used phones and tablets that are in good condition
          </p>
          <div className="text-center md:text-left">
            <button className="btn bg-cyan-700 hover:bg-sky-900 w-32 btn-sm text-white">
              <Link to="/addphone">Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
