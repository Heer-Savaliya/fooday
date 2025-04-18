import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth, firestore } from "../firebaseConfig";
import { collection, addDoc, doc, getDoc, getDocs, deleteDoc, serverTimestamp } from "firebase/firestore";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalAmount = 0, cartData = [] } = location.state || {};
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const fetchUserInfo = async () => {
    const user = auth.currentUser;
    if (user) {
      const userDoc = await getDoc(doc(firestore, "users", user.uid));
      if (userDoc.exists()) {
        const data = userDoc.data();
        setUserInfo({
          name: data.fname + " " + data.lname || "",
          email: data.email || "",
          phone: data.phone || "",
          address: data.address || "",
        });
      }
    }
  };


  const handleClearCart = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const cartRef = collection(firestore, "users", user.uid, "cart");
          const cartSnap = await getDocs(cartRef);
          const deletionPromises = cartSnap.docs.map((docItem) =>
            deleteDoc(doc(firestore, "users", user.uid, "cart", docItem.id))
          );
    
          await Promise.all(deletionPromises);
          // setCartData([]);
          console.log("Cart cleared successfully");
        } 
      } catch (error) {
        toast.error("Error clearing cart : ", error);
      }
    };

  const placeOrder = async () => {
    const user = auth.currentUser;
    if (!user) return alert("User not logged in!");

    if (!userInfo.name || !userInfo.phone || !userInfo.address) {
      return alert("Please make sure all information is filled!");
    }

    try {
      const orderRef = collection(firestore, "users", user.uid, "orders");
      await addDoc(orderRef, {
        userInfo,
        items: cartData,
        totalAmount,
        createdAt: serverTimestamp(),
        status: "Pending",
      });

      
      await handleClearCart();  // Clear cart after placing the order.

      toast.success("Order placed successfully!");
      setTimeout(() => {
        navigate("/orders", { replace: true });
      }, 1500);
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <>
    <ToastContainer
  position="top-right"
  toastStyle={{ backgroundColor: '#000', color: '#fff' }}
/>
    <div className="!py-9">
      <div
        style={{
          boxShadow: `rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, 
                rgba(0, 0, 0, 0.3) 0px 3px 7px -3px`,
        }}
        className="w-[90%] sm:w-[500px] md:w-[600px]  lg:w-[700px] xl:max-w-2xl !mx-auto bg-white !p-8 rounded-2xl !mt-10"
      >
        <h2 className="text-4xl font-semibold text-orange-500 !mb-6 font-dancing text-center">
          Checkout
        </h2>

        <div className="space-y-4">
          <div className="!pb-3">
            <label className="block !mb-1 font-semibold text-orange-500">
              Name
            </label>
            <input
              type="text"
              value={userInfo.name}
              onChange={(e) =>
                setUserInfo({ ...userInfo, name: e.target.value })
              }
              className="w-full border border-orange-300 rounded-xl !p-3 outline-orange-500 capitalize"
            />
          </div>

          <div className="!pb-3">
            <label className="block !mb-1 font-semibold text-orange-500">
              Email
            </label>
            <input
              type="email"
              value={userInfo.email}
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
              className="w-full border border-orange-300 rounded-xl !p-3 outline-orange-500"
            />
          </div>

          <div className="!pb-3">
            <label className="block !mb-1 font-semibold text-orange-500">
              Phone
            </label>
            <input
              type="text"
              value={userInfo.phone}
              onChange={(e) =>
                setUserInfo({ ...userInfo, phone: e.target.value })
              }
              className="w-full border border-orange-300 rounded-xl !p-3 outline-orange-500"
            />
          </div>

          <div>
            <label className="block !mb-1 font-semibold text-orange-500">
              Address
            </label>
            <textarea
              value={userInfo.address}
              onChange={(e) =>
                setUserInfo({ ...userInfo, address: e.target.value })
              }
              className="w-full border border-orange-300 rounded-xl !p-3 outline-orange-500 capitalize"
            />
          </div>

          <div className="flex justify-between items-center !mt-6">
            <span className="text-2xl font-dancing font-semibold text-orange-600">
              Total : ${totalAmount.toFixed(2)}
            </span>
            <button
              onClick={placeOrder}
              className="uppercase text-orange-500 font-semibold border border-orange-500 rounded-4xl !px-6 !py-2 transition-all duration-500 ease-in-out hover:bg-orange-500 hover:text-white hover:scale-105"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Checkout;
