import React from 'react'

const Dinner = () => {
    const menuitems = [
        {
          name: "Uncle Herschel's Favorite",
          price: "45.0",
        },
        {
          name: "The Cracker Barrel's Country Boy Breakfast",
          price: "25.0",
        },
        {
          name: "Grandpa's Country Fried Breakfast",
          price: "30.0",
        },
        {
          name: "Chinese Chicken Bread Spicy Soup",
          price: "12.0",
        },
        {
          name: "The Cracker Barrel's Country Boy Breakfast",
          price: "25.0",
        },
      ];
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-20 !mt-15 !mx-5" data-aos="fade-up">
        {/* Image Section */}
        <div>
          <img src="/images/pd-cat-dinner.png" alt="Breakfast" />
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-5">
          {menuitems.map((curItem, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-5 "
            >
              {/* Left Info */}
              <div className="text-black">
                <h2 className="font-dancing text-lg sm:text-xl md:text-2xl font-bold capitalize">
                  {curItem.name}
                </h2>
                <p className="text-sm sm:text-[14px] opacity-80">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse eillum
                </p>
              </div>

              {/* Right Info */}
              <div className="flex flex-col items-end text-orange-500">
                <h3 className="font-dancing relative text-lg sm:text-xl font-bold">
                  <span className="absolute -top-2 -left-2 text-sm">$</span>
                  {curItem.price}
                </h3>
                <button className="relative bg-orange-500 text-white !py-1 !px-3 sm:!py-1.5 sm:!px-4 rounded-full uppercase text-xs sm:text-sm font-semibold transition-all duration-300 hover: custom-underline">
                  Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dinner
