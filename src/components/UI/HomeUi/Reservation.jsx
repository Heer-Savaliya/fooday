import React from "react";
import { FaPhone, FaPerson, FaClock } from "react-icons/fa6";
import { BsCalendar2Date } from "react-icons/bs";

const Reservation = () => {

  return (
    <div className="grid lg:grid-cols-2 w-full sm:grid-cols-1">
      <div className="bg-black text-white flex flex-col items-center justify-center relative !py-10">
        <div className="flex items-center !mb-4">
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          <span className="w-10 md:w-15 lg:w-20 h-[1px] bg-orange-500 "></span>
          <h2 className="font-dancing text-xl capitalize tracking-wide font-black !px-2 md:text-2xl lg:text-3xl">
            Make a Reservation
          </h2>
          <span className="w-10 md:w-15 lg:w-20 h-[1px] bg-orange-500"></span>
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
        </div>
        <h2 className=" font-black text-sm capitalize !mb-8 text-gray-200">
          You can call us directly at
          <span className="text-orange-500"> 225-88888</span>
        </h2>

        {/* Input */}

        <form action="#" className="!px-4 sm:!px-8 md:!px-16">
          <div className="!py-10 grid gap-5">
            <div className="grid md:grid-cols-2 gap-5 sm:grid-cols-1">
              <div className="flex items-center bg-[rgba(42,41,41,0.59)] text-gray-400 !p-2 gap-3">
                <FaPhone className="!pl-1" /> <span>|</span>
                <input
                  type="tel"
                  name=""
                  id=""
                  placeholder="Phone"
                  className="font-bold placeholder:text-gray-400 border-0 outline-0"
                />
              </div>

              <div className="flex items-center bg-[rgba(42,41,41,0.59)] text-gray-400 !p-2 gap-3">
                <FaPerson className="!pl-1" /> <span>|</span>
                <select
                  name="options"
                  id="options"
                  className="font-bold text-gray-400 bg-transparent border-0 outline-0 w-full"
                >
                  <option value="" disabled selected>
                    1 person
                  </option>
                  <option value="option1" className="text-black">
                    2 person
                  </option>
                  <option value="option2" className="text-black">
                    3 person
                  </option>
                  <option value="option3" className="text-black">
                    4 person
                  </option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5 sm:grid-cols-1">
              <div className="flex items-center bg-[rgba(42,41,41,0.59)] text-gray-400 !p-2 gap-3">
                <BsCalendar2Date className="!pl-1" /> <span>|</span>
                <input
                  type="date"
                  name=""
                  id=""
                  placeholder=""
                  className="font-bold placeholder:text-gray-400 border-0 outline-0"
                />
              </div>

              <div className="flex items-center bg-[rgba(42,41,41,0.59)] text-gray-400 !p-2 gap-3">
                <FaClock className="!pl-1" /> <span>|</span>
                <select
                  name="time"
                  id="time"
                  className="font-bold text-gray-400 bg-transparent border-0 outline-0 w-full"
                >
                  <option value="" disabled selected>
                    Select Time
                  </option>
                  <option value="7:00 PM" className="text-black">
                    7:00 PM
                  </option>
                  <option value="8:00 PM" className="text-black">
                    8:00 PM
                  </option>
                  <option value="9:00 PM" className="text-black">
                    9:00 PM
                  </option>
                  <option value="10:00 PM" className="text-black">
                    10:00 PM
                  </option>
                  <option value="11:00 PM" className="text-black">
                    11:00 PM
                  </option>
                  <option value="12:00 PM" className="text-black">
                    12:00 PM
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="w-auto flex items-center justify-center">
            <button className="relative bg-orange-500 text-white !py-3 !px-8 rounded-full uppercase text-md lg:text-lg font-semibold transition-all duration-300 hover:underline">
              Order
            </button>
          </div>
        </form>

        {/* Extra Image */}

        <img src="./images/home2-img-deco.png" alt="" className="hidden md:block absolute w-[300px] bottom-[-45px] left-0 " data-aos="fade-right"/>
      </div>
      <div>
        <img src="./images/banner4.jpg" alt="" className="hidden lg:block w-[100%] h-[80vh]" />
      </div>
    </div>
  );
};

export default Reservation;
