import React from "react";

const UserPopup = ({ userData, onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-end items-start !p-6 !pt-10 z-50">
      <div className="bg-white rounded-2xl shadow-lg !p-6 w-96 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-orange-500 font-bold">X</button>
        <h2 className="text-xl font-bold !mb-4 text-orange-500">User Details</h2>
        {userData ? (
          <div className="space-y-2 text-gray-700 text-sm">
            <p className="capitalize"><strong>Name : </strong> {userData.fname + " " + userData.lname}</p>
            <p><strong>Email : </strong> {userData.email}</p>
            <p><strong>Phone : </strong> {userData.phone}</p>
            <p><strong>Address : </strong> {userData.address}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default UserPopup;
