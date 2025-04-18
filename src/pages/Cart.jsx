import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CartGrid from "../components/UI/CartUi/CartGrid";
import { auth, firestore } from "../firebaseConfig";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [cartData, setCartData] = useState(null);
  const location = useLocation();

  // Cart item view
  const handleCartView = async () => {
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
          toast.warn("User havent added the data to the cart ", {
            position: "top-right",
          });
          setCartData([]);
        }
      }
    } catch (error) {
      toast.error("Error fetching user cart data:", error, {
        position: "top-right",
      });
    }
  };

  // Cart item delete
  const handleDeleteCartItem = async (itemId) => {
    try {
      const user = auth.currentUser;
      if (user) {
        await deleteDoc(doc(firestore, "users", user.uid, "cart", itemId));
        setCartData((prev) => prev.filter((item) => item.id !== itemId));
        toast.success("Item Deleted from cart", { position: "top-right" });
      }
    } catch (error) {
      toast.error("Error while deleting item :", error, {
        position: "top-right",
      });
    }
  };

  // Cart qty update
  const handleUpdateQty = async (itemId, newQty) => {
    try {
      const user = auth.currentUser;
      if (user && newQty > 0) {
        const cartItemRef = doc(firestore, "users", user.uid, "cart", itemId);
        await updateDoc(cartItemRef, { quantity: newQty });
        handleCartView();
      }
    } catch (error) {
      toast.error("Error while updating the qty : ", error, {
        position: "top-right",
      });
    }
  };

  useEffect(() => {
    handleCartView();
  }, []);

  // useEffect(() => {
  //   if (location.state?.clearCart) {
  //     handleClearCart(); // this will clear the cart when coming back from Checkout
  //   }
  // }, [location.state]);

  return (
    <>
      <ToastContainer
        position="top-right"
        toastStyle={{ backgroundColor: "#000", color: "#fff" }}
      />
      <div className="flex flex-col items-center !py-16 !px-4 md:!px-8">
        {/* Heading */}
        <div className="flex items-center !mb-4 sm:!mb-6">
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          <span className="w-14 sm:w-15 h-[1px] bg-orange-500"></span>
          <h2 className="text-orange-500 text-base sm:text-lg  font-semibold uppercase tracking-wide !mx-2">
            My Cart
          </h2>
          <span className="w-14 sm:w-15 h-[1px] bg-orange-500 "></span>
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
        </div>

        <h1 className="font-dancing text-3xl sm:text-5xl capitalize !mb-8 font-black">
          Tasty and good price
        </h1>

        <CartGrid
          cartData={cartData}
          onDelete={handleDeleteCartItem}
          onUpdate={handleUpdateQty}
          // onClearCart={handleClearCart}
        />
      </div>
    </>
  );
};

export default Cart;
