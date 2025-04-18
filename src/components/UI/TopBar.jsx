import React, { useState, useEffect } from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaPinterest, FaUser } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { doc, getDoc } from "firebase/firestore";
import { auth , firestore } from '../../firebaseConfig';  // assuming you have db setup
import UserPopup from "./UserPopup";  // import your popup component

const Topbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleAccountClick = async () => {
    setShowPopup(true);
    try {
      const user = auth.currentUser;
      if (user) {
        const userRef = doc(firestore, "users", user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setUserData(userSnap.data());
        } else {
          console.log("No such user data!");
        }
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <>
      <div className="bg-orange-500 text-white text-sm font-bold flex justify-center">
        <div className="container max-w-screen-xl !px-4 flex justify-between items-center flex-wrap gap-2 !py-2">
          
          {/* Left Side */}
          <div className="topbar-left flex flex-wrap gap-4 md:gap-6 items-center">
            <div className="flex items-center gap-2">
              <IoLocationSharp />
              <p className="hidden sm:block">160 White Oak Drive Kansas City</p>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <p>012 987 650</p>
            </div>
          </div>

          {/* Right Side */}
          <div className="topbar-right flex items-center gap-3">
            <div className="hidden md:flex items-center gap-5">
              <FaFacebookF className="cursor-pointer" />
              <FaTwitter className="cursor-pointer" />
              <FaPinterest className="cursor-pointer" />
              <IoLogoGoogleplus className="text-lg cursor-pointer" />
            </div>
            <div className="hidden md:block font-thin">|</div>
            <div className="flex items-center gap-2 cursor-pointer" onClick={handleAccountClick}>
              <FaUser />
              <span>My Account</span>
            </div>
          </div>

        </div>
      </div>

      {showPopup && (
        <UserPopup 
          userData={userData} 
          onClose={() => setShowPopup(false)} 
        />
      )}
    </>
  );
};

export default Topbar;
