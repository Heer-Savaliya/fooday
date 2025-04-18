import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";

const chefs = [
  { id: 1, name: "Teresa Doe", img: "./images/team-4.png" },
  { id: 2, name: "Michael Doe", img: "./images/team-1.png" },
  { id: 3, name: "Tersia Doe", img: "./images/team-2.png" },
  { id: 4, name: "Michael Doe", img: "./images/team-3.png" },
];

const Chefs = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const swiperRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    AOS.refresh(); 
  }, [activeIndex]);

  return (
    <div className="flex flex-col items-center !py-16">
    <div className="flex items-center !mb-4">
      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
      <span className="w-10 md:w-20 h-[1px] bg-orange-500"></span>
      <h2 className="text-orange-500 text-md md:text-lg font-semibold uppercase tracking-wide !px-2">
        Meet our
      </h2>
      <span className="w-10 md:w-20 h-[1px] bg-orange-500"></span>
      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
    </div>

    <h1 className="font-dancing text-4xl md:text-5xl !mb-16 md:!mb-10 capitalize font-black">
      Awesome Master Chefs
    </h1>

    <div className="relative w-full !px-4 !mx-auto max-w-7xl md:max-w-6xl lg:max-w-6xl">
      <Swiper
        loop
        centeredSlides={true}
        breakpoints={{
          640: { slidesPerView: 1 , spaceBetween: 20 },
          768: { slidesPerView: 2 , spaceBetween: 30},
          1024: { slidesPerView: 3, spaceBetween: 30 },

        }}
        navigation={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Navigation]}
        className="w-full"  
      >
        {chefs.map((chef, index) => (
          <SwiperSlide key={chef.id} className="relative text-center">
            <div
              data-aos="fade-up"
              className={`relative border border-gray-300 rounded-full !mx-auto transition-all duration-300 ${
                activeIndex === index
                  ? "bg-orange-500 text-white shadow-2xl shadow-gray-800/50"
                  : ""
              }`}
            >
              <img
                src={chef.img}
                alt={chef.name}
                className={`relative !mx-auto inline transition-all duration-300 ${
                  activeIndex === index
                    ? "h-96 md:h-85"
                    : "h-72 md:h-78"
                }`}
              />
            </div>
            <div className="text-center !mt-6">
              <h2 className="uppercase text-xl font-bold text-orange-500">
                {chef.name}
              </h2>
              <p className="text-gray-500 font-medium">Head Chef</p>
            </div>
            <hr className="block text-gray-400 w-15 !mx-auto !my-3" />
            <ul className="flex items-center justify-center gap-3 text-gray-500">
              <li><a href="#"><FaFacebookF className="cursor-pointer hover:text-orange-500" /></a></li>
              <li><a href="#"><FaTwitter className="cursor-pointer hover:text-orange-500" /></a></li>
              <li><a href="#"><FaPinterest className="cursor-pointer hover:text-orange-500" /></a></li>
              <li><a href="#"><IoLogoGoogleplus className="text-lg cursor-pointer hover:text-orange-500" /></a></li>
            </ul>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hidden lg:block">
        <button
          className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-orange-500 text-white !p-2 rounded-full shadow-lg hover:bg-orange-600 transition-all"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-orange-500 text-white !p-2 rounded-full shadow-lg hover:bg-orange-600 transition-all"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      <div className="flex justify-center gap-4 !mt-6 xl:hidden">
        <button
          className="bg-orange-500 text-white !p-3 rounded-full shadow-lg hover:bg-orange-600 transition-all"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          className="bg-orange-500 text-white !p-3 rounded-full shadow-lg hover:bg-orange-600 transition-all"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  </div>
  );
};

export default Chefs;
