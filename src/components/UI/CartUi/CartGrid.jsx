import React from "react";
import { NavLink } from "react-router-dom";

const CartGrid = ({ cartData, onDelete, onUpdate }) => {
  // Grand total
  const totalAmount =
    cartData?.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0;

  return (
    <div className="overflow-x-auto max-w-[1200px] w-full overflow-hidden rounded-2xl">
      {cartData && cartData.length > 0 ? (
        <>
          <table className="w-full min-w-[600px] md:min-w-full bg-white shadow-md overflow-hidden rounded-2xl">
            <thead>
              <tr className="bg-orange-500 text-white rounded-4xl">
                <th className="!py-3 !px-2 !md:px-4 text-left">Image</th>
                <th className="!py-3 !px-2 !md:px-4 text-left">Title</th>
                <th className="!py-3 !px-2 !md:px-4 text-left">Price</th>
                <th className="!py-3 !px-2 !md:px-4 text-left">Quantity</th>
                <th className="!py-3 !px-2 !md:px-4 text-left" colSpan="2">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-orange-50 border-b-2 border-gray-200"
                >
                  <td className="!py-3 !px-2 md:!px-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 md:w-20 md:h-20 object-cover rounded"
                    />
                  </td>
                  <td className="!py-3 !px-2 md:!px-4 font-semibold text-orange-500">
                    {item.title}
                  </td>
                  <td className="!py-3 !px-2 md:!px-4 font-black font-dancing">
                    ${item.price}
                  </td>
                  {/* <td className="!py-3 !px-4 font-black font-dancing">{item.quantity}</td> */}
                  <td className="!py-3 !px-2 md:!px-4">
                    <div className="flex flex-row items-center gap-2 md:gap-4 ">
                      <button
                        className="bg-orange-500 text-white !px-2 !py-1 rounded-full"
                        onClick={() => onUpdate(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="font-black font-dancing">
                        {item.quantity}
                      </span>
                      <button
                        className="bg-orange-500 text-white !px-2 !py-1 rounded-full"
                        onClick={() => onUpdate(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>

                  <td className="!py-3 !px-2 md:!px-4 font-black font-dancing">
                    ${item.price * item.quantity}
                  </td>
                  <td className="!py-3 !px-2 md:!px-4 text-orange-500 ">
                    <button
                      onClick={() => onDelete(item.id)}
                      className="text-red-500 font-black text-xs hover:text-red-700"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Total Box */}
          <div className="flex justify-end !mt-6">
            <div className=" border border-orange-400 rounded-2xl !p-4 shadow-lg w-full max-w-xs">
                <div className="flex gap-5 items-center">

              <h3 className="text-xl md:text-4xl font-dancing font-semibold">
                Total Amount
              </h3>
              <p className="text-lg md:text-2xl  font-black font-dancing text-orange-500">
                ${totalAmount.toFixed(2)}
              </p>
                </div>

              <div>
                <button className="btn-about uppercase text-orange-500 font-semibold border border-orange-500 rounded-4xl flex items-center justify-center gap-4 !px-4 !py-2 relative overflow-hidden group w-full transition-all duration-500 ease-in-out hover:bg-orange-500 hover:text-white hover:scale-105">
                  <NavLink to="/checkout" state={{ totalAmount, cartData }}>Checkout</NavLink>
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartGrid;
