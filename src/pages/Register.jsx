import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, firestore } from "../firebaseConfig";
import { NavLink , useNavigate } from "react-router-dom";
import { FaFacebookF, FaUserAlt, FaInstagram, FaTwitter , FaAddressCard , FaPhoneAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";

function Register() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fname, lname, email, password, phone, address } = formData;

    try {
      // Create user in Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store in Firestore
      await setDoc(doc(firestore, "users", user.uid), {
        fname,
        lname,
        email,
        phone: Number(phone),
        address,
        createdAt: new Date(),
      });

      alert("User registered and stored in Firestore!");
      navigate("/login");

    } catch (err) {
      setError(err.message);
    }
  };

  return (

    <div className="grid place-items-center h-dvh ">

{/* <div className="register-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="fname" placeholder="First Name" onChange={handleChange} required />
        <input name="lname" placeholder="Last Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} required />
        <textarea name="address" placeholder="Address" onChange={handleChange} required></textarea>

        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Register</button>
      </form>
    </div> */}



          <div className="rounded-2xl shadow-2xl">
            <div className="login-form  flex items-center justify-center flex-col !p-6">
              <h2 className="text-orange-500 uppercase font-black text-2xl !mt-3">
                Register
              </h2>
              <p className="text-[15px] text-center !mt-3 text-gray-500">
                Log in to get in the moment updates on the things that interest you
              </p>
              <form
                onSubmit={handleSubmit}
                className="!p-6  flex flex-col gap-4 w-full"
              >
                <div className="flex gap-3">
                <div className=" flex items-center justify-center gap-8 shadow-lg shadow-black/5 ring-1 ring-black/10 !px-4 !py-3 rounded-4xl w-full">
                  <FaAddressCard className="text-orange-500" />
                  <input
                    className="border-none outline-none font-bold"
                    name="fname" placeholder="First Name" onChange={handleChange} required
                  />
                </div>
    
                <div className=" flex items-center justify-center gap-8 shadow-lg shadow-black/5 ring-1 ring-black/10 !px-4 !py-3 rounded-4xl w-full">
                  <FaAddressCard className="text-orange-500" />
                  <input
                    className="border-none outline-none font-bold"
                    name="lname" placeholder="Last Name" onChange={handleChange} required
                  />
                </div>
                </div>

                <div className="flex gap-3">
                <div className=" flex items-center justify-center gap-8 shadow-lg shadow-black/5 ring-1 ring-black/10 !px-4 !py-3 rounded-4xl w-full">
                  <FaUserAlt className="text-orange-500" />
                  <input
                    className="border-none outline-none font-bold"
                    name="email" type="email" placeholder="Email" onChange={handleChange} required
                  />
                </div>
    
               
                <div className=" flex items-center justify-center gap-8 shadow-lg shadow-black/5 ring-1 ring-black/10 !px-4 !py-3 rounded-4xl w-full">
                  <FaPhoneAlt className="text-orange-500" />
                  <input
                    className="border-none outline-none font-bold"
                    name="phone" placeholder="Phone Number" onChange={handleChange} required
                  />
                </div>
                </div>

                <div className="flex gap-3">
                <div className=" flex items-center justify-center gap-8 shadow-lg shadow-black/5 ring-1 ring-black/10 !px-4 !py-3 rounded-4xl w-full">
                  <RiLockPasswordFill className="text-orange-500" />
                  <input
                    className="border-none outline-none font-bold"
                    name="password" type="password" placeholder="Password" onChange={handleChange} required 
                  />
                </div>
                <div className=" flex items-center justify-center gap-8 shadow-lg shadow-black/5 ring-1 ring-black/10 !px-4 !py-3 rounded-4xl w-full">
                  <RiLockPasswordFill className="text-orange-500" />
                  <input
                    className="border-none outline-none font-bold"
                    name="password" type="password" placeholder="Confirm Password" onChange={handleChange} required 
                  />
                </div>
                </div>
    
                <div className=" flex items-center  gap-8 shadow-lg shadow-black/5 ring-1 ring-black/10 !px-4 !py-3 rounded-4xl w-full">
                  <FaLocationDot className="text-orange-500" />
                  <textarea className="border-none outline-none font-bold w-full" name="address" placeholder="Address" onChange={handleChange} required></textarea>
                </div>
    
                {error && <p style={{ color: "red" }} className="text-center text-sm font-bold">{error}</p>}
                <button
                  type="submit"
                  className="shadow-lg shadow-black/5 ring-1 ring-black/10 !px-4 !py-3 rounded-4xl w-full bg-orange-500 text-white uppercase font-bold tracking-wider"
                >
                  Register
                </button>
    
                <p className="text-center text-sm text-gray-600">
                  Have an account ?{" "}
                  <span className="text-gray-800 font-bold">
                    <NavLink to="/register">Sign in now</NavLink>
                  </span>
                </p>
              </form>
            </div>
            <div className="bg-orange-500 w-full rounded-b-2xl">
              <p className="text-center !p-6 text-white font-bold text-sm">
                Sign Up with social media
              </p>
    
              {/* icons */}
              <div className="flex items-center justify-center gap-6 text-orange-500 !pb-6">
                <div className="bg-white !p-2 rounded-full">
                  <FaFacebookF />
                </div>
                <div className="bg-white !p-2 rounded-full">
                  <FaInstagram />
                </div>
                <div className="bg-white !p-2 rounded-full">
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>



    
  );
}

export default Register;
