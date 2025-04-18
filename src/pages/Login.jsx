import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { NavLink, useNavigate } from "react-router-dom";
import { FaFacebookF, FaUserAlt, FaInstagram, FaTwitter } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="grid place-items-center h-dvh ">
      <div className="rounded-2xl shadow-2xl">
        <div className="login-form  flex items-center justify-center flex-col !p-6 max-w-md">
          <h2 className="text-orange-500 uppercase font-black text-2xl !mt-3">
            Log in
          </h2>
          <p className="text-[15px] text-center !mt-3 text-gray-500">
            Log in to get in the moment updates on the things that interest you
          </p>
          <form
            onSubmit={handleSubmit}
            className="!p-6  flex flex-col gap-4 w-full"
          >
            <div className=" flex items-center justify-center gap-8 shadow-lg shadow-black/5 ring-1 ring-black/10 !px-4 !py-3 rounded-4xl w-full">
              <FaUserAlt className="text-orange-500" />
              <input
                className="border-none outline-none font-bold"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className=" flex items-center justify-center gap-8 shadow-lg shadow-black/5 ring-1 ring-black/10 !px-4 !py-3 rounded-4xl w-full">
              <RiLockPasswordFill className="text-orange-500" />
              <input
                className="border-none outline-none font-bold"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <p style={{ color: "red" }} className="text-center text-sm font-bold">{error}</p>}
            <button
              type="submit"
              className="shadow-lg shadow-black/5 ring-1 ring-black/10 !px-4 !py-3 rounded-4xl w-full bg-orange-500 text-white uppercase font-bold tracking-wider"
            >
              Login
            </button>

            <p className="text-center text-sm text-gray-600">
              Dont't have an account ?{" "}
              <span className="text-gray-800 font-bold">
                <NavLink to="/register">Sign Up now</NavLink>
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

export default Login;
