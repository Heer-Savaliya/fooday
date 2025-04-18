import React from "react";
import { FaSearch, FaLink } from "react-icons/fa";

const images = [
  { src: "./images/gallery-1.jpg", alt: "Food 1", size: "md:row-span-3" },
  {
    src: "./images/gallery-2.jpg",
    alt: "Food 2",
    size: "md:col-span-2 md:row-span-2",
  },
  {
    src: "./images/gallery-3.jpg",
    alt: "Food 3",
    size: "md:col-span-1 md:row-span-2",
  },
  { src: "./images/gallery-4.jpg", alt: "Food 4", size: "md:row-span-3" },
  { src: "./images/gallery-5.jpg", alt: "Food 5" },
  { src: "./images/gallery-6.jpg", alt: "Food 6", size: "md:col-span-2" },
];

const FoodGallery = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center !pt-20 ">
      {/* Heading */}
      <div className="flex items-center !mb-4">
        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
        <span className="w-10 md:w-20 h-[1px] bg-orange-500"></span>
        <h2 className="text-orange-500 text-sm md:text-md font-semibold uppercase tracking-wide !px-2">
          Our gallery
        </h2>
        <span className="w-10 md:w-20 h-[1px] bg-orange-500"></span>
        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
      </div>

      {/* Title */}
      <h1 className="font-dancing text-3xl md:text-5xl capitalize !mb-10 font-black text-center">
        fooday hot dishes
      </h1>

      {/* Image Grid */}
      <div className="grid w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-5 auto-rows-[200px] md:auto-rows-[230px] ">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden ${image.size || ""}`}
          >
            {/* Image */}
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl"
            />

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-[rgba(255,255,255,0.5)] text-gray-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-black text-center">
                <h3 className="font-dancing text-lg md:text-2xl font-black">
                  Chicago Beefsteak
                </h3>
                <div className="flex justify-center gap-2 md:gap-3 !mt-2">
                  <div className="bg-gray-500 !p-2 rounded-full hover:bg-orange-500">
                    <FaSearch className="text-sm md:text-md cursor-pointer text-gray-100" />
                  </div>

                  <a
                    href={image.src.replace("./", "/")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-500 !p-2 rounded-full hover:bg-orange-500"
                  >
                    <FaLink className="text-sm md:text-md cursor-pointer text-gray-100" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodGallery;
