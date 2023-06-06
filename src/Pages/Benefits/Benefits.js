import React from "react";
import payment from "./../../assets/Feature-icons/cash_payment_money.png";
import shipping from "./../../assets/Feature-icons/shipping_icon.png";
import quality from "./../../assets/Feature-icons/quality_icon.png";
import customer from "./../../assets/Feature-icons/customer-service.png";

const Benefits = () => {
  return (
    <div className="max-w-[1200px] my-16 mx-auto">
      <h2 className="text-5xl font-bold text-center font-mono">
        Features & Benefits
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 px-2 lg:px-0 mt-5">
        <div className="bg-blue-200 flex flex-col items-center justify-center rounded-lg  border-blue-700 hover:bg-orange-200 py-4 lg:py-8 group">
          <img
            className="h-10 lg:h-20 w-10 lg:w-20 grayscale group-hover:grayscale-0 mb-1 lg:mb-5"
            src={quality}
            alt=""
          />
          <h4 className="text-xl lg:text-xl font-semibold text-center">
            {" "}
            100% authentic product
          </h4>
        </div>
        <div className="bg-blue-200 flex flex-col items-center justify-center rounded-lg  border-blue-700 hover:bg-orange-200 py-4 lg:py-8 group">
          <img
            className="h-10 lg:h-20 w-10 lg:w-20 grayscale group-hover:grayscale-0 mb-1 lg:mb-5"
            src={shipping}
            alt=""
          />
          <h4 className="text-xl lg:text-2xl font-semibold text-center">
            Fast & Reliable shipping
          </h4>
        </div>
        <div className="bg-blue-200 flex flex-col items-center justify-center rounded-lg  border-blue-700 hover:bg-orange-200 py-4 lg:py-8 group">
          <img
            className="h-10 lg:h-20 w-10 lg:w-20 grayscale group-hover:grayscale-0 mb-1 lg:mb-5"
            src={payment}
            alt=""
          />
          <h4 className="text-xl lg:text-2xl font-semibold text-center">
            Easy Payment System
          </h4>
        </div>
        <div className="bg-blue-200 flex flex-col items-center justify-center rounded-lg  border-blue-700 hover:bg-orange-200 py-4 lg:py-8 group">
          <img
            className="h-10 lg:h-20 w-10 lg:w-20 grayscale group-hover:grayscale-0 mb-1 lg:mb-5"
            src={customer}
            alt=""
          />
          <h4 className="text-xl lg:text-2xl font-semibold text-center">
            Professional Services
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
