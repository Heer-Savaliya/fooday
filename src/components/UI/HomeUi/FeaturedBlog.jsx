import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEye } from "react-icons/fa6";
import { MdDoubleArrow } from "react-icons/md";
import { LuMessageCircleHeart } from "react-icons/lu";

// Blog Data (JSON format)
const blogData = [
  {
    id: 1,
    image: "./images/blog-grid-1.jpg",
    title: "How to cook the banasari pan for cozy weather",
    views: 18,
    comments: 18,
    date: { day: "12", month: "Jun" },
    delay: 100,
  },
  {
    id: 2,
    image: "./images/blog-grid-1-1.jpg",
    title: "How to cook the hot & spicy Turkish crab for cold weather",
    views: 10,
    comments: 11,
    date: { day: "16", month: "Jun" },
    delay: 500,
  },
  {
    id: 3,
    image: "./images/blog-grid-1-2.jpg",
    title: "How to cook the spicy Chinese noodle for cold weather",
    views: 28,
    comments: 10,
    date: { day: "24", month: "Jun" },
    delay: 800,
  },
];

const FeaturedBlog = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  return (
    <div className="flex flex-col items-center !py-16 !px-4 md:!px-8">
      {/* Heading */}
      <div className="flex items-center !mb-6">
        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
        <span className="w-16 sm:w-20 h-[1px] bg-orange-500"></span>
        <h2 className="text-orange-500 text-sm sm:text-md font-semibold uppercase tracking-wide !px-2">
          updated from
        </h2>
        <span className="w-16 sm:w-20 h-[1px] bg-orange-500"></span>
        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
      </div>

      <h1 className="font-dancing text-3xl sm:text-5xl capitalize !mb-10 font-black text-center">
        our featured blog
      </h1>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[1200px] max-w-full">
        {blogData.map((post, index) => {
          // Find if the last row has only one item (in md:grid-cols-2)
          const isSingleItemOnLastRow =
            blogData.length % 2 !== 0 && index === blogData.length > 1 ? "md:col-span-1 mx-auto" : "";

          return (
            <div
              key={post.id}
              className={`bg-white relative transition-shadow duration-300 shadow-lg hover:shadow-xl group overflow-hidden rounded-lg ${
                isSingleItemOnLastRow ? "md:col-span-2" : ""
              }`}
              style={{
                boxShadow:
                  "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "rgba(17, 17, 26, 0.2) 0px 6px 20px, rgba(17, 17, 26, 0.2) 0px 10px 30px, rgba(17, 17, 26, 0.2) 0px 20px 60px";
                e.currentTarget.querySelector(".bottom-border").style.width =
                  "100%";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px";
                e.currentTarget.querySelector(".bottom-border").style.width =
                  "0";
              }}
              data-aos="fade-up"
              data-aos-delay={post.delay}
            >
              {/* Bottom Border Animation */}
              <div className="absolute bottom-0 left-1/2 w-0 h-[3px] bg-orange-500 transition-all duration-300 group-hover:w-full group-hover:left-0 bottom-border"></div>

              {/* Top Info */}
              <div className="flex items-center justify-center gap-4 !p-3 text-gray-400 font-semibold text-sm md:text-md">
                <div className="flex items-center">
                  <FaEye /> <span>{post.views}</span>
                </div>
                <div>|</div>
                <div className="flex items-center">
                  <LuMessageCircleHeart /> <span>{post.comments}</span>
                </div>
                <div>|</div>
                <div>
                  Post by <span className="text-orange-500">Admin</span>
                </div>
              </div>

              {/* Image Section */}
              <div className="relative">
                <img
                  src={post.image}
                  alt="Blog Post"
                  className="w-full h-64 object-cover"
                />
                {/* Date Circle */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white w-16 h-16 sm:w-20 sm:h-20 rounded-full flex flex-col items-center justify-center border-4 border-white">
                  <span className="text-2xl sm:text-3xl font-dancing font-black">
                    {post.date.day}
                  </span>
                  <span className="text-xs sm:text-md uppercase font-semibold">
                    {post.date.month}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="!p-6 !mt-10">
                <h1 className="font-dancing font-black text-xl sm:text-2xl capitalize">
                  {post.title}
                </h1>
                <p className="!py-3 font-medium text-gray-500 text-sm sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio quasi eligendi sapiente quibusdam.
                </p>
                <a
                  href="#"
                  className="flex items-center justify-end text-gray-500 hover:text-orange-500"
                >
                  Read more <MdDoubleArrow />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedBlog;
