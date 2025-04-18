import React, { useEffect, useState } from "react";
import OrderGrid from "../components/UI/OrderUi/OrderGrid";
import { auth, firestore } from "../firebaseConfig";
import { collection, doc, getDocs } from "firebase/firestore";

const Orders = () => {
  const [orderData, setOrderData] = useState([]);

  // Orders view
  const handleOrderView = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const orderRef = collection(firestore, "users", user.uid, "orders");
        const orderSnap = await getDocs(orderRef);
        const orderItems = orderSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        if (orderItems.length > 0) {
          setOrderData(orderItems);
        } else {
          console.log("User havent place any order ");
          setOrderData([]);
        }
      }
    } catch (error) {
      console.error("Error fetching user order data : ", error);
    }
  };

 

  useEffect(() => {
    handleOrderView();
  }, []);

  return (
    <div className="flex flex-col items-center !py-16 !px-4 md:!px-8">
      {/* Heading */}
      <div className="flex items-center !mb-4 sm:!mb-6">
        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
        <span className="w-14 sm:w-15 h-[1px] bg-orange-500"></span>
        <h2 className="text-orange-500 text-base sm:text-lg  font-semibold uppercase tracking-wide !mx-2">
          My Orders
        </h2>
        <span className="w-14 sm:w-15 h-[1px] bg-orange-500 "></span>
        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
      </div>

      <h1 className="font-dancing text-3xl sm:text-5xl capitalize !mb-8 font-black">
        Yum , delicious , tasty
      </h1>

      <OrderGrid orderData={orderData} setOrderData={setOrderData} />
    </div>
  );
};

export default Orders;
