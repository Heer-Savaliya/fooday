import React, { useState } from "react";
import { FaGlassCheers } from "react-icons/fa";
import { GiFruitBowl, GiHotMeal, GiMeal, GiCupcake } from "react-icons/gi";
import Breakfast from "../../subMenu/Breakfast";
import Lunch from "../../subMenu/Lunch";
import Dinner from "../../subMenu/Dinner";
import Dessert from "../../subMenu/Dessert";
// import { Dessert } from "lucide-react";

const menuItems = [
  { id: "breakfast", label: "Breakfast", icon: GiFruitBowl },
  { id: "lunch", label: "Lunch", icon: GiHotMeal },
  { id: "dinner", label: "Dinner", icon: GiMeal },
  { id: "dessert", label: "Dessert", icon: GiCupcake },
  { id: "drink", label: "Drink", icon: FaGlassCheers },
];

const OurMenu = () => {
  const [active, setActive] = useState("breakfast"); // Default active item

  return (
    <div
      className="flex flex-col items-center justify-center w-full min-h-screen bg-cover bg-center bg-no-repeat !py-20 !px-4 sm:!px-6 md:!px-12 lg:!px-20"
      style={{ backgroundImage: "url('/images/bg3.jpg')" }}
    >
      {/* Heading */}
      <div className="flex items-center !mb-4 sm:!mb-6">
        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
        <span className="w-14 sm:w-15 h-[1px] bg-orange-500"></span>
        <h2 className="text-orange-500 text-base sm:text-lg  font-semibold uppercase tracking-wide !mx-2">
          Our menu
        </h2>
        <span className="w-14 sm:w-15 h-[1px] bg-orange-500 "></span>
        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
      </div>

      <h1 className="font-dancing text-3xl sm:text-5xl capitalize !mb-8 font-black">
        Tasty and good price
      </h1>

      {/* Menu Navigation */}
      <div className="flex items-center gap-5 sm:gap-8 md:gap-10 lg:gap-12 !mt-8 sm:!mt-10">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = active === item.id;

          return (
            <div key={item.id} className="flex flex-col items-center gap-2 sm:gap-3 cursor-pointer"
              onClick={() => setActive(item.id)}
            >
              {/* Icon */}
              <Icon
                className={`h-12 w-12 sm:h-16 sm:w-16 md:h-[65px] md:w-[65px] !p-2 sm:!p-3 md:!p-4 rounded-full border transition-all duration-500 ease-in-out 
                  ${isActive ? "border-orange-500 text-orange-500 opacity-100" : "border-transparent text-gray-400 opacity-45 hover:border-orange-500 hover:opacity-100 hover:text-orange-500"}
                `}
              />
              {/* Label */}
              <p className={`font-medium text-sm sm:text-base md:text-lg ${isActive ? "text-orange-500" : "text-black"}`}>
                {item.label}
              </p>
            </div>
          );
        })}
      </div>

      {/* Main content */}
      {active === "breakfast" && <Breakfast />}
      {active === "lunch" && <Lunch />}
      {active === "dinner" && <Dinner/>}
      {active === "dessert" && <Dessert />}
      {active === "drink" && <Lunch />}
    </div>
  );
};

export default OurMenu;
