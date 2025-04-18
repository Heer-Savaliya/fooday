import firebase from "firebase/compat/app";
import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth, firestore } from "../../../firebaseConfig";

const OrderGrid = ({ orderData, setOrderData }) => {

  const sortedOrders = Array.isArray(orderData)
    ? [...orderData].sort((a, b) => {
        if (!a.createdAt || !b.createdAt) return 0;
        return b.createdAt.seconds - a.createdAt.seconds;
      })
    : [];

  const cancelOrder = async (orderId) => {
    try {
      const user = auth.currentUser;
      if (!user) {
        toast.error("User not logged in!");
        return;
      }
      const orderRef = doc(firestore, "users", user.uid, "orders", orderId);
      await updateDoc(orderRef, { status: "Cancelled" });
      setOrderData(prev =>
        prev.map(order =>
          order.id === orderId ? { ...order, status: "Cancelled" } : order
        )
      );
      toast.success("Order cancelled successfully!");
    } catch (error) {
      console.error("Error cancelling order:", error);
      toast.error("Failed to cancel the order!");
    }
  };

  return (
    <>
      <ToastContainer position="top-right" toastStyle={{ backgroundColor: '#000', color: '#fff' }} />
      <div className="overflow-x-auto !mx-auto max-w-[1200px] w-full !mt-6">
        {sortedOrders && sortedOrders.length > 0 ? (
          <>
            {sortedOrders.map((order) => (
              <div key={order.id} className="!mb-20 bg-white">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center !mb-4">
                  <h2 className="text-md font-semibold text-orange-500">Order ID : {order.id}</h2>
                  <div className="flex gap-4 sm:gap-7 items-center justify-center">
                    <p className="text-md capitalize font-bold">status :  
                      <span className={`uppercase ${order.status === "Cancelled" ? "text-red-500" : "text-orange-500"}`}>
                         {order.status}
                      </span>
                    </p>
                    <button
                      onClick={() => cancelOrder(order.id)}
                      className={`${order.status === "Cancelled" ? "hidden" : ""} 
                        uppercase text-orange-500 font-semibold border-2 border-orange-500 rounded-4xl !px-4 !py-2 transition-all duration-500 ease-in-out hover:bg-orange-500 hover:text-white hover:scale-105`}>
                      Cancel
                    </button>
                  </div>
                </div>

                <table className="w-full overflow-hidden rounded-2xl">
                  <thead>
                    <tr className="bg-orange-500 text-white rounded-4xl">
                      <th className="!py-3 !px-2 md:!px-4 text-left">Image</th>
                      <th className="!py-3 !px-2 md:!px-4 text-left">Title</th>
                      <th className="!py-3 !px-2 md:!px-4 text-left">Price</th>
                      <th className="!py-3 !px-2 md:!px-4 text-left">Quantity</th>
                      <th className="!py-3 !px-2 md:!px-4 text-left">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.items.map((product, index) => (
                      <tr key={index} className="hover:bg-orange-50 border-b-2 border-gray-200">
                        <td className="!py-3 !px-2 md:!px-4">
                          <img src={product.image} alt={product.title} className="w-12 h-12 md:w-16 md:h-16 object-cover rounded" />
                        </td>
                        <td className="!py-3 !px-2 md:!px-4 font-semibold text-orange-500 ">{product.title}</td>
                        <td className="!py-3 !px-2 md:!px-4 font-black font-dancing">${product.price}</td>
                        <td className="!py-3 !px-2 md:!px-4 font-black font-dancing">{product.quantity}</td>
                        <td className="!py-3 !px-2 md:!px-4 font-black font-dancing">${(product.price * product.quantity).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="flex justify-end !mt-4">
                  <h3 className="text-xl font-semibold text-orange-500">
                    Total Amount: ${order.totalAmount.toFixed(2)}
                  </h3>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p className="text-gray-500">You have not placed any orders yet.</p>
        )}
      </div>
    </>
  );
};

export default OrderGrid;
