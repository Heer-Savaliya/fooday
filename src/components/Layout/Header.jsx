import React, { useState, useEffect, useContext,useRef } from "react";
import { IoBagHandleSharp } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import Topbar from "../UI/Topbar";
import { auth, firestore } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import UserCartPopUp from "../UI/UserCartPopUp";
import { SearchContext } from "../UI/SearchContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartData, setCartData] = useState(null);
  const navigate = useNavigate();
  const searchBoxRef = useRef(null);
  const [showSearch, setShowSearch] = useState(false);
  const { searchQuery, setSearchQuery } = useContext(SearchContext);

  const handleSearchToggle = () => {
    setShowSearch((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth); // Firebase sign out
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  const handleCart = async () => {
    setShowCart(true);
    try {
      const user = auth.currentUser;
      if (user) {
        const cartRef = collection(firestore, "users", user.uid, "cart");
        const cartSnap = await getDocs(cartRef);
        const cartItems = cartSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (cartItems.length > 0) {
          setCartData(cartItems);
        } else {
          console.log("User havent added the data to the cart ");
          setCartData([]);
        }
      }
    } catch (error) {
      console.log("Error fetching user cart data:", error);
    }
  };

  const handleDeleteCartItem = async (itemId) => {
    try {
      const user = auth.currentUser;
      if (user) {
        await deleteDoc(doc(firestore, "users", user.uid, "cart", itemId));
        setCartData((prev) => prev.filter((item) => item.id !== itemId));
        console.log("Item Deleted from cart");
      }
    } catch (error) {
      console.log("Error while deleting item :", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      {/* Topbar */}
      <Topbar />

      {/* Main Header */}
      <div
        className={`header-main ${
          isScrolled ? "fixed-header bg-white shadow-md" : "z-30"
        }`}
      >
        <div className="container flex justify-between items-center !py-1 md:!py-2 !px-6">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>
          {/* Logo */}
          <div>
            <NavLink to="/">
              <img
                src={`${
                  isScrolled ? "/images/logo.png" : "/images/logo-white.png"
                }`}
                alt="Logo"
              />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <ul className="nav-links flex gap-8 items-center">
              {[
                "Home",
                "About",
                "Reservation",
                "Menu",
                "Orders",
                "Blog",
                "Contact",
              ].map((item, index) => (
                <li key={index} className="nav-item">
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    activeClassName="text-orange-500 border-b-2 border-orange-500"
                    className="pb-2 transition duration-300 hover:text-orange-500"
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          {/* Icons */}
          <div className="flex gap-4">
            <IoBagHandleSharp
              className="cursor-pointer text-lg"
              onClick={handleCart}
            />
            <FaSearch
              className="cursor-pointer text-lg"
              onClick={handleSearchToggle}
            />
            <RiLogoutCircleRLine
              className="cursor-pointer text-lg"
              onClick={handleLogout}
            />
          </div>

          {showSearch && (

            <div ref={searchBoxRef} className="absolute text-black top-25 right-10 bg-white !p-2 rounded shadow-lg z-50">
              <input
                type="text"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => {setSearchQuery(e.target.value);
                  if(window.location.pathname !== "/menu"){
                      navigate("/menu");
                  }
                }}
                className="border !px-4 !py-2 rounded outline-none"
              />
            </div>
          )}
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 w-80 h-screen bg-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out lg:hidden z-50`}
      >
        {/* Close Button */}
        <div
          className="!p-5"
          style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
        >
          <button className=" text-2xl" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="!mt-3">
          <ul className="flex flex-col gap-4 text-lg !p-6">
            {[
              "Home",
              "About",
              "Reservation",
              "Menu",
              "Orders",
              "Blog",
              "Contact",
            ].map((item, index) => (
              <li key={index} className="nav-item text-[16px] font-medium">
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  activeClassName="text-orange-500 border-l-4 border-orange-500 !pl-3"
                  className="transition duration-300 hover:text-orange-500"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {showCart && (
        <UserCartPopUp
          cartData={cartData}
          onClose={() => {
            setShowCart(false);
          }}
          onDelete={handleDeleteCartItem}
        />
      )}
    </header>
  );
};

export default Header;
