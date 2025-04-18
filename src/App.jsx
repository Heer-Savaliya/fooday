import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Reservation from "./pages/Reservation";
import Menu from "./pages/Menu";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import AppLayout from "./components/Layout/AppLayout";
import Loader from "./components/UI/Loader";
import PrivateRoute from "./components/PrivateRoute";
import "../src/App.css";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";


const App = () => {
  const [loading, setLoading] = useState(true);

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },

    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: (
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          )
        },
        {
          path: "/about",
          element: (
            <PrivateRoute>
              <About />
            </PrivateRoute>
          )
        },
        {
          path: "/reservation",
          element: (
            <PrivateRoute>
              <Reservation />
            </PrivateRoute>
          )
        },
        {
          path: "/menu",
          element: (
            <PrivateRoute>
              <Menu />
            </PrivateRoute>
          )
        },
        {
          path: "/orders",
          element: (
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          )
        },
        {
          path: "/blog",
          element: (
            <PrivateRoute>
              <Blog />
            </PrivateRoute>
          )
        },
        {
          path: "/contact",
          element: (
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          )
        },
        {
          path: "/cart",
          element: (
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          )
        },
        {
          path: "/checkout",
          element: (
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          )
        }
      ]
    }
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : <RouterProvider router={router} />;
};

export default App;
