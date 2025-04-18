import React, { useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const UserCartPopUp = ({ cartData, onClose, onDelete }) => {
  const navigate = useNavigate();
  const popupRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex justify-end items-start !p-5 !pt-26">
      <div ref={popupRef} className="w-96 bg-white shadow-2xl rounded-lg !p-4 relative">
        <h2 className="text-xl font-bold !mb-4 font-serif">Your Cart</h2>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-orange-500 font-bold"
        >
          X
        </button>

        {cartData && cartData.length > 0 ? (
          <div>
            <ul className="divide-y divide-gray-200">
              {cartData.map((item) => (
                <li
                  key={item.id}
                  className="!py-2 flex justify-between items-center gap-3"
                >
                  <div className="flex gap-4 items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 rounded object-cover"
                    />
                    <div>
                      <p className="font-black font-dancing text-lg text-orange-500">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Price : </span> ${item.price}
                      </p>
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Quantity : </span> {item.quantity}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => onDelete(item.id)}
                    className="text-red-500 font-bold text-[10px] hover:text-red-700"
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex justify-between gap-6 !mt-4">
              <button
                className="btn-about uppercase text-orange-500 font-semibold border border-orange-500 rounded-4xl flex items-center justify-center gap-4 !px-4 !py-2 w-full text-center transition-all duration-500 ease-in-out hover:bg-orange-500 hover:text-white hover:scale-105"
                onClick={() => {
                  onClose();
                  navigate("/cart");
                }}
              >
                Cart
              </button>

              {/* <button
                className="btn-about uppercase text-orange-500 font-semibold border border-orange-500 rounded-4xl flex items-center justify-center gap-4 !px-4 !py-2 w-full transition-all duration-500 ease-in-out hover:bg-orange-500 hover:text-white hover:scale-105"
                onClick={() => {
                  onClose();
                  navigate("/checkout");
                }}
              >
                Checkout
              </button> */}
              <button
  className="btn-about uppercase text-orange-500 font-semibold border border-orange-500 rounded-4xl flex items-center justify-center gap-4 !px-4 !py-2 w-full transition-all duration-500 ease-in-out hover:bg-orange-500 hover:text-white hover:scale-105"
  onClick={() => {
    onClose();
    navigate("/checkout", { 
      state: { 
        cartData, 
        totalAmount: cartData.reduce((sum, item) => sum + item.price * item.quantity, 0) 
      }
    });
  }}
>
  Checkout
</button>

            </div>
          </div>
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default UserCartPopUp;
