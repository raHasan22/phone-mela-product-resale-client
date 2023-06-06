import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="mx-5 max-w-[1200px] lg:mx-auto my-10">
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col md:flex-row md:justify-between  space-y-6 md:space-x-6 md:space-y-0 bg-cyan-700 w-full max-w-6xl p-8 sm:p-12 rounded-xl text-white overflow-hidden">
          <div className="flex flex-col space-y-8 justify-between ">
            <div className="">
              <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
              <p className="pt-2 text-cyan-100 text-sm">
                At your emergency, you can Contact us easily from here
              </p>
            </div>
            <div className="flex flex-col space-y-6 ">
              <div className="inline-flex space-x-2 items-center">
                <BsFillTelephoneFill className="inline-block text-teal-300 text-lg"></BsFillTelephoneFill>
                <span>+ (880) 1XXX XXX XXX</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <HiMail className="inline-block text-teal-300 text-xl"></HiMail>
                <span>qwerty@zxy.com</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <MdLocationOn className="inline-block text-teal-300 text-xl"></MdLocationOn>
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
            <div className="flex space-x-4 text-lg">
              <a href="facebook.com">
                <FaFacebook></FaFacebook>
              </a>
              <a href="twitter.com">
                <FaTwitter></FaTwitter>
              </a>
              <a href="linkedin.com">
                <FaLinkedin />
              </a>
              <a href="instagram.com">
                <FaInstagram></FaInstagram>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-28 -top-28"></div>
            <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -left-28 -bottom-16"></div>
            <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
              <form action="" className="flex flex-col space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm">
                    Message
                  </label>
                  <textarea
                    type="text"
                    rows="4"
                    placeholder="Message"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2"
                  />
                </div>
                <button className="inline-block self-end bg-cyan-700 text-white rounded-lg font-bold px-6 py-2 uppercase text-sm">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
