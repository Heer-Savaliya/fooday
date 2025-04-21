import React, { useEffect, useState } from 'react';
import { GoStarFill } from "react-icons/go";
import { LuLink, LuShoppingCart } from "react-icons/lu";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { auth, firestore } from '../../../firebaseConfig';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MenuGrid = ({ searchQuery }) => {
  const [menuItems, setMenuItems] = useState([]);

  // Fetch products from Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, "products"));
        const productsArray = querySnapshot.docs.map(doc => ({
          id: doc.id, // Firestore doc ID
          ...doc.data()
        }));
        setMenuItems(productsArray);
      } catch (err) {
        console.error("Error fetching products: ", err);
        toast.error("Failed to load products.", { position: "top-right" });
      }
    };

    fetchProducts();
  }, []);

  const filteredItems = menuItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = async (item) => {
    const user = auth.currentUser;
    if (!user) {
      toast.warn("Please log in to add items to your cart!", { position: "top-right" });
      return;
    }

    try {
      await addDoc(collection(firestore, "users", user.uid, "cart"), {
        itemId: item.id,
        title: item.title,
        price: item.price,
        quantity: 1,
        chef: item.chef,
        rating: item.rating,
        image: item.image
      });
      toast.success(`${item.title} added to cart!`, { position: "top-right" });
    } catch (err) {
      console.error("Error adding to cart: ", err);
      toast.error("Failed to add item to cart.", { position: "top-right" });
    }
  };

  return (
    <>
      <ToastContainer position="top-right" toastStyle={{ backgroundColor: '#000', color: '#fff' }} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[1200px] max-w-full">
        {filteredItems.map(item => (
          <div key={item.id} className="shadow-2xl flex flex-col rounded-lg overflow-hidden bg-white relative group">
            <div className="relative">
              <img src={item.image} alt={item.title} className="w-full transition-transform duration-500 h-[240px]" />
              <div className="absolute inset-0 bg-[rgba(20,19,19,0.5)] flex flex-col justify-end items-end !pr-8 !pb-12 gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <a href={item.image.replace("./", "/")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-400 hover:bg-orange-500 text-white !p-3 rounded-full shadow-lg transition-colors duration-300">
                  <LuLink size={13} strokeWidth={3} />
                </a>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-gray-400 hover:bg-orange-500 text-white !p-3 rounded-full shadow-lg transition-colors duration-300">
                  <LuShoppingCart size={13} strokeWidth={3} />
                </button>
              </div>
              <div className="absolute bottom-[-30px] right-5 bg-orange-500 text-white text-sm font-bold rounded-full w-16 h-16 flex justify-center items-center border-3 shadow-2xl ">
                <span className='text-lg font-dancing'>${item.price}</span>
              </div>
            </div>
            <div className="!px-6 !py-8 font-semibold relative">
              <h2 className="text-[1.7rem] font-dancing capitalize font-black hover:text-orange-500 transition-colors duration-300">
                {item.title}
              </h2>
              <div className="flex items-center gap-5 !mt-2 text-gray-600">
                <p>Chef <span className="text-orange-500">{item.chef}</span></p>
                <p>|</p>
                <p className="flex items-center text-orange-500">
                  <GoStarFill className="!mr-1" /> {item.rating}
                </p>
              </div>
            </div>
            <span className="absolute bottom-0 left-1/2 w-0 h-[3px] bg-orange-500 transition-all duration-500 group-hover:left-0 group-hover:w-full"></span>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuGrid;
