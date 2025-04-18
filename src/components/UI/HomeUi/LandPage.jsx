import React, { useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";

const LandPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative" id="landpage">
      {/* Background Image */}
      <img
        src="/images/slider2-bg1.jpg"
        alt="Background"
        className="h-screen md:h-[600px] w-full object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center !px-10 max-w-5xl !m-auto">
        {/* Top Icon */}
        <img
          src="/images/slider2-icon.png"
          alt="Icon"
          className="!mb-4"
          data-aos="fade-up"
        />

        {/* Main Heading */}
        <h1
          className="text-5xl md:text-[5rem] font-bold uppercase leading-tight"
          data-aos="fade-up"
        >
          Fooday Restaurant
        </h1>

        {/* Decorative Lines and Subtext */}
        <div
          className="flex flex-row md:flex-row items-center justify-center gap-3 md:gap-6 mt-4 w-full"
          data-aos="fade-up"
        >
          {/* Left Line (Expands to available space) */}
          <div className="hidden md:block h-[2px] bg-white flex-1"></div>

          {/* Text Content */}
          <span className="font-dancing text-lg md:text-4xl font-semibold">
            Tasty
          </span>
          <span className="text-lg md:text-2xl">
            <GoDotFill />
          </span>
          <span className="font-dancing text-lg md:text-4xl font-semibold">
            Delicious
          </span>
          <span className="text-lg md:text-2xl">
            <GoDotFill />
          </span>
          <span className="font-dancing text-lg md:text-4xl font-semibold">
            Savoury
          </span>

          {/* Right Line (Expands to available space) */}
          <div className="hidden md:block h-[2px] bg-white flex-1"></div>
        </div>
      </div>
    </div>
  );
};

export default LandPage;
