"use client";
import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

function page() {
  return (
    <>
      <div className="flex justify-between items-center bg-black text-white px-10 py-40">
        {/* Left Section */}
        <div className="w-1/2 space-y-4">
          <h1 className="text-4xl font-bold">Have an idea for us?</h1>
          <h2 className="text-3xl font-bold">Drop a line.</h2>
          <p className="text-gray-400 max-w-md">
            We partner with entrepreneurs and businesses to help scale and grow
            their ideas. With employees in every sector a business can need,
            there’s no better way to get a leg up.
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-3 bg-gray-800 rounded-lg hover:bg-gray-600 transition"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-800 rounded-lg hover:bg-gray-600 transition"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-1/2 bg-gray-900 p-8 rounded-xl border border-purple-500">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 bg-black border border-gray-600 rounded-md text-white focus:outline-none focus:border-purple-500"
            />
            <input
              type="number"
              placeholder="Phone"
              className="w-full p-3 bg-black border border-gray-600 rounded-md text-white focus:outline-none focus:border-purple-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-black border border-gray-600 rounded-md text-white focus:outline-none focus:border-purple-500"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 bg-black border border-gray-600 rounded-md text-white h-32 focus:outline-none focus:border-purple-500"
            ></textarea>
            <button className="w-full p-3 bg-purple-600 hover:bg-purple-700 rounded-md font-bold transition cursor-pointer ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default page;
