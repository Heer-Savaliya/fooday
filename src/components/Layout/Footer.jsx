import React from "react";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import SubscribeSection from "../UI/SubscribeSection";

const Footer = () => {
  return (
    <div>
      <SubscribeSection />
      <footer className="bg-black text-white !py-12">
        <div className="!mx-auto !px-4 w-full max-w-[1250px]">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 flex-wrap">
            {/* Left Section: Company Info */}
            <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[60%] xl:w-[60%] !px-4 sm:!px-0">
              <div className="!mt-10 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-5 sm:gap-0">
                <img
                  src="./images/logo-white.png"
                  alt="Logo"
                  className="w-28 sm:w-36 md:w-40 max-w-full"
                />
                <div>
                  <div className="flex items-center gap-3 sm:gap-5 flex-wrap justify-center sm:justify-start">
                    {[
                      { icon: FaFacebookF, link: "#" },
                      { icon: FaTwitter, link: "#" },
                      { icon: FaPinterest, link: "#" },
                      { icon: IoLogoGoogleplus, link: "#" },
                    ].map(({ icon: Icon, link }, index) => (
                      <div
                        key={index}
                        className="bg-[rgba(57,57,57,0.59)] !p-3 rounded-full text-xs cursor-pointer 
                    transition-all duration-300 ease-in-out hover:bg-orange-500 hover:text-white hover:scale-105"
                      >
                        <a href={link}>
                          <Icon />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-400 !mt-8 font-semibold text-center sm:text-left text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <hr className="!my-8 text-gray-600" />

              {/* Contact Info */}
              <div className="!mt-6 flex flex-wrap justify-center sm:justify-between gap-6">
                {[
                  {
                    icon: FaMapMarkerAlt,
                    details: [
                      "157 White Oak Drive, Kansas City",
                      "689 Lynn Street, South Boston",
                    ],
                  },
                  {
                    icon: FaPhoneAlt,
                    details: ["(617)-276-8031", "(617)-276-8031"],
                  },
                  {
                    icon: FaEnvelope,
                    details: ["admin@fooday.com", "support@fooday.com"],
                  },
                ].map(({ icon: Icon, details }, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Icon className="text-gray-500 text-xl md:text-2xl cursor-pointer hover:text-orange-500" />
                    <div className="text-gray-300 font-semibold text-sm md:text-base">
                      {details.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section: Business Hours */}
            <div
              className="relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden w-full sm:w-[90%] md:w-[70%] lg:w-[35%] xl:w-[30%] max-w-sm !mt-10 lg:!mt-0"
              style={{ backgroundImage: `url('/images/banner.jpg')` }}
            >
              <div
                className="absolute inset-0"
                style={{ backgroundColor: "rgba(255, 100, 2, 0.7)" }}
              ></div>

              <div className="relative text-white !p-6 lg:!p-8 border-2 !m-4">
                <h3 className="text-3xl md:text-4xl font-dancing font-black text-center !mb-4">
                  Open Hours
                </h3>
                <ul className="space-y-2 text-sm md:text-md font-semibold flex flex-col gap-3">
                  {[
                    { day: "Tuesday", hours: "7AM - 9PM" },
                    { day: "Wednesday", hours: "7AM - 9PM" },
                    { day: "Thursday", hours: "7AM - 9PM" },
                    { day: "Friday", hours: "7AM - 9PM" },
                    { day: "Saturday", hours: "7AM - 9PM" },
                    { day: "Sunday", hours: "7AM - 9PM" },
                    { day: "Monday", hours: "Closed" },
                  ].map(({ day, hours }, index) => (
                    <li key={index} className="flex justify-between">
                      <span>{day}:</span>
                      <span className="text-black font-sans">{hours}</span>
                    </li>
                  ))}
                </ul>
                <h4 className="text-3xl md:text-4xl font-dancing font-black text-center !mt-6">
                  Reservation Numbers
                </h4>
                <p className="text-center text-xl md:text-2xl font-semibold !mt-2 text-black">
                  (617)-276-8031
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
