import React, { useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore aut tenetur laboriosam quas repellat a earum impedit accusantium molestias eaque. Omnis delectus cum obcaecati rem repellendus magn.",
    name: "Timothy Doe",
    role: "Customer",
    image: "/images/testi-1.jpg",
  },
  {
    id: 2,
    quote:
      "Hyyyyy Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore aut tenetur laboriosam quas repellat a earum impedit accusantium molestias eaque. Omnis d. Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    name: "Sarah Ruiz",
    role: "Director",
    image: "/images/testi-2.jpg",
  },
  {
    id: 3,
    quote:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore aut tenetur laboriosam quas repellat a earum impedit accusantium molestias eaque. Omnis delectus cum obcaecat.",
    name: "Michael Smith",
    role: "CEO",
    image: "/images/testi-3.jpg",
  },
  {
    id: 4,
    quote:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore aut tenetur laboriosam quas repellat a earum impedit accusantium molestias eaque. Omnis delectus cum obcaecati rem repellendus magnam porro temporibus ipsam. ",
    name: "Emma Watson",
    role: "Manager",
    image: "/images/testi-4.jpg",
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Start from the second item

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const getVisibleTestimonials = () => {
    const visibleTestimonials = [];
    for (let i = -1; i <= 1; i++) {
      visibleTestimonials.push(
        testimonials[
          (activeIndex + i + testimonials.length) % testimonials.length
        ]
      );
    }
    return visibleTestimonials;
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-full min-h-screen bg-cover bg-center bg-no-repeat !py-20"
      style={{ backgroundImage: "url('/images/bg4.jpg')" }}
    >
      {/* Heading */}
      <div className="flex items-center !mb-4">
        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
        <span className="w-10 md:w-20 h-[1px] bg-orange-500"></span>
        <h2 className="text-orange-500  font-semibold uppercase tracking-wide text-md md:text-lg !px-3">
          Testimonial
        </h2>
        <span className="w-10 md:w-20 h-[1px] bg-orange-500"></span>
        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
      </div>

      <h1 className="font-dancing text-4xl md:text-5xl !mb-8 md:!mb-10 capitalize text-white">
        Our customer says
      </h1>

      <span className="w-[65%] h-[1px] bg-gray-500 mx-2 !mt-6"></span>

      {/* Testimonial Content */}
      {/* <div className="flex flex-col items-center text-white gap-6 w-[65%] !my-10">
        <h3 className="text-center font-bold opacity-70 text-[17px]">
          <span className="font-dancing text-4xl text-orange-500 inline-block !pr-6">
            <RiDoubleQuotesL />
          </span>
          {testimonials[activeIndex].quote}
        </h3>

        
        <h3 className="font-bold text-[17px] opacity-100">
          {testimonials[activeIndex].name}{" "}
          <span className="font-medium opacity-50">
            | {testimonials[activeIndex].role}
          </span>
        </h3>
      </div> */}
      {/* Testimonial Content with slide animation */}
      <div className="relative flex flex-col items-center text-white gap-6 w-[65%] !mt-10 min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute w-full flex flex-col items-center gap-6"
          >
            <h3 className="text-center font-bold opacity-70 text-[17px]">
              <span className="font-dancing  text-xl md:text-4xl text-orange-500 inline-block !pr-6">
                <RiDoubleQuotesL />
              </span>
              <span className="text-xs md:text-md lg:text-lg">
              {testimonials[activeIndex].quote}
              </span>
              
            </h3>

            {/* Name & Role */}
            <h3 className="font-bold text-[12px] md:text-[17px] opacity-100">
              {testimonials[activeIndex].name}{" "}
              <span className="font-medium opacity-50">
                | {testimonials[activeIndex].role}
              </span>
            </h3>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Profile slider*/}
      <div className="flex gap-5 items-center w-[65%]">
        <span className="h-[1px] bg-gray-500 flex-1"></span>

        {/* Three visible images */}
        <div className="flex gap-5">
          {getVisibleTestimonials().map((testimonial, index) => (
            <img
              key={testimonial.id}
              src={testimonial.image}
              alt={testimonial.name}
              className={`h-[60px] w-[60px] rounded-full cursor-pointer transition duration-300 ${
                testimonial.id === testimonials[activeIndex].id
                  ? "border-2 border-orange-500 scale-125 opacity-100"
                  : "border-2 border-gray-500 opacity-50 hover:opacity-100 grayscale-100"
              }`}
              onClick={() => setActiveIndex(testimonials.indexOf(testimonial))}
            />
          ))}
        </div>

        <span className="h-[1px] bg-gray-500 flex-1"></span>
      </div>
    </div>
  );
};

export default Testimonial;
