import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { GiFoodTruck, GiMeal } from "react-icons/gi";
import { FaGlassCheers } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";

const services = [
  { icon: <GiMeal />, title: "Reservation", delay: 100 },
  { icon: <FaGlassCheers />, title: "Private Event", delay: 300 },
  { icon: <IoFastFoodOutline />, title: "Online Order", delay: 500 },
  { icon: <GiFoodTruck />, title: "Fast Delivery", delay: 700 },
];

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="flex flex-col items-center !py-22 !px-4 md:!px-8">
      {/* Heading */}
      <div className="flex items-center !mb-4">
        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
        <span className="w-16 sm:w-20 h-[1px] bg-orange-500"></span>
        <h2 className="text-orange-500 text-sm sm:text-md font-semibold uppercase tracking-wide !px-2">
          Our service
        </h2>
        <span className="w-16 sm:w-20 h-[1px] bg-orange-500"></span>
        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
      </div>

      <h1 className="font-dancing text-3xl sm:text-5xl capitalize !mb-19 font-black text-center">
        What we focus on
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] w-full">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={service.delay} // Different delay for each item
            className="flex flex-col items-center text-center"
          >
            <div className="group relative w-24 h-24 md:w-28 md:h-28 rounded-full grid place-items-center border-dashed border border-gray-600 transition-all duration-300 hover:bg-orange-500 hover:text-white">
              <div className="absolute top-[-7px] right-0 !px-3 !py-1 rounded-full border-2 border-gray-300 bg-white group-hover:bg-orange-500 group-hover:text-white group-hover:border-white">
                {index + 1}
              </div>
              <div className="text-orange-500 text-6xl md:text-7xl group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
            </div>
            <h2 className="font-dancing font-black capitalize !mt-4 text-2xl md:text-3xl">
              {service.title}
            </h2>
            <p className="text-gray-500 font-semibold !pt-2 !px-4 text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
