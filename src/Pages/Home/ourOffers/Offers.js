import React from "react";

const Offers = () => {
  return (
    <div className="my-10">
      <div className="card mx-5 max-w-[1200px] bg-base-100 shadow-xl image-full lg:mx-auto">
        <figure>
          <img
            src="https://zamzam-blog.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/06/Eid-Al-Adha-Wishes.jpg"
            alt="Eid"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white text-4xl">Upcoming events Discount</h2>
          <p className="text-white">
            1. We are offering surprise discounts for next Eid !!
          </p>
          <div className="card-actions justify-end">
            <button className="btn bg-cyan-700 hover:bg-sky-900 w-42 btn-sm text-white">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
