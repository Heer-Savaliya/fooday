import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const SubscribeSection = () => {
  return (
    <section className="bg-white !pt-10 !px-4 !mb-10 lg:!mb-0 flex items-center justify-center">
      {/* Left: Image (hidden on small screens) */}
      <div className="hidden lg:block w-1/5">
        <img src="/images/bg5.png" alt="Food on Fork" className="w-full" />
      </div>

      {/* Middle + Right: Text and Input */}
      <div className="container max-w-6xl flex flex-col lg:flex-row items-center gap-6 md:gap-10">
        
        {/* Text Section */}
        <div className="text-center lg:text-left flex-1">
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold font-dancing">
            Subscribe Us Now
          </h2>
          <p className="text-gray-500 !mt-2 text-sm md:text-base">
            Get more news and delicious dishes everyday from us
          </p>
        </div>

        {/* Input Field */}
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-full max-w-md sm:max-w-lg">
          <input
            type="email"
            placeholder="Email"
            className="!px-4 !py-2 w-full outline-none bg-gray-100 text-gray-600 text-sm md:text-base"
          />
          <button className="!px-5 !py-3 bg-orange-500 text-white hover:bg-orange-600 transition-all">
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
