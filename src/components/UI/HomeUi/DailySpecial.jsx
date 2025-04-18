import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";

const dailySpecials = [
  {
    img: "/images/product-2a.jpg",
    name: "The Cracker Barrel's Country Boy Breakfast",
    price: "25.0",
  },
  {
    img: "/images/product-2b.jpg",
    name: "Uncle Herschel's Favorite",
    price: "45.0",
  },
  {
    img: "/images/product-2c.jpg",
    name: "Grandpa's Country Fried Breakfast",
    price: "30.0",
  },
  {
    img: "/images/product-2d.jpg",
    name: "Chinese Chicken Bread Spicy Soup",
    price: "12.0",
  },
  {
    img: "/images/product-2a.jpg",
    name: "The Cracker Barrel's Country Boy Breakfast",
    price: "25.0",
  },
  {
    img: "/images/product-2b.jpg",
    name: "Uncle Herschel's Favorite",
    price: "45.0",
  },
];

const DailySpecial = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full h-[100vh]">
      {/* Background Image */}
      <img
        src="/images/banner2.jpg"
        alt=""
        className="w-full h-[100vh] brightness-25 absolute top-0 left-0 object-cover"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 absolute left-0 top-1/2 -translate-y-1/2 w-full !px-5 md:!px-10 items-center">
        {/* Left Image (Hidden on small screens) */}
        <div className="hidden lg:block">
          <img
            src="/images/product-decorate.jpg"
            alt=""
            className="h-auto w-[95%]"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-center lg:justify-start lg:items-start">
          {/* Section Title */}
          <div className="flex items-center !mb-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full lg:hidden"></div>
            <span className="w-10 h-[1px] bg-orange-500 lg:hidden"></span>
            <div className="text-orange-500 uppercase font-semibold text-lg !px-3 lg:!pl-0">
              Chef Choice
            </div>
            <span className="w-10 h-[1px] bg-orange-500"></span>
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          </div>

          <h1 className="font-dancing text-white text-4xl md:text-5xl !mb-10 md:!mb-10 text-center lg:text-left">
            Daily Special
          </h1>

          <div className="w-full flex justify-center lg:justify-start">
            {/* Swiper Vertical Slider */}
            <Swiper
              direction="vertical"
              slidesPerView={3}
              spaceBetween={20}
              modules={[Navigation]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="h-[300px] w-full sm:w-[400px] md:w-[500px] lg:w-[600px] overflow-hidden flex flex-col gap-6"
            >
              {dailySpecials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`flex items-center gap-3 md:gap-5 justify-between transition-opacity duration-500 ${
                      activeIndex === index ? "opacity-100" : "opacity-50"
                    }`}
                  >
                    {/* Left Info */}
                    <div className="flex items-center gap-3 md:gap-5">
                      <img
                        src={item.img}
                        alt=""
                        className="h-[55px] w-[55px] md:h-[70px] md:w-[70px] rounded-full"
                      />
                      <div className="text-white">
                        <h2 className="font-dancing text-lg md:text-xl font-bold capitalize">
                          {item.name}
                        </h2>
                        <p className="text-[12px] md:text-[14px] opacity-80">
                          Duis aute irure dolor in reprehenderit in voluptate.
                        </p>
                      </div>
                    </div>
                    {/* Right Info */}
                    <div className="flex flex-col items-end text-orange-500">
                      <h3 className="font-dancing relative text-lg md:text-xl font-bold">
                        <span className="absolute -top-2 -left-2 text-sm md:text-lg">
                          $
                        </span>
                        {item.price}
                      </h3>
                      <button className="bg-orange-500 text-white !py-1 !px-3 rounded-full uppercase text-xs md:text-sm font-semibold transition-all duration-300 hover:shadow-lg">
                        Order
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Custom Navigation Buttons */}
          <div className="flex gap-3 !mt-8">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white flex items-center justify-center text-white opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <ChevronUp size={20} md:size={25} strokeWidth={3} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white flex items-center justify-center text-white opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <ChevronDown size={20} md:size={25} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailySpecial;
