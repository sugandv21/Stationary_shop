import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import banner from "../assets/images/diary.jpg";

export default function MyOrders() {
   useEffect(() => {
          document.title = "Supplyhive | My Orders";
        }, []); 
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrder = JSON.parse(localStorage.getItem("lastOrder")) || [];
    setOrders(storedOrder);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white mt-20 text-gray-900">
      <div className="w-full mb-6">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-96 object-cover max-w-7xl mx-auto rounded-lg shadow-md"
        />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="text-3xl font-bold mb-8 text-center">My Orders</h1>

        {orders.length === 0 ? (
          <p className="text-center text-gray-600">No orders placed yet.</p>
        ) : (
          <div className="border-2 border-gray-400 rounded-xl overflow-hidden p-4">
            <div className="grid grid-cols-4 text-center font-bold bg-gray-100 py-3 rounded-t-xl">
              <span>Product</span>
              <span>Quantity</span>
              <span>Unit Price</span>
              <span>Total Price</span>
            </div>

            {orders.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-4 items-center text-center py-6 px-3"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded mb-2"
                  />
                  <h2 className="font-medium">{item.name}</h2>
                  <p className="font-bold">Rs.{item.price}</p>
                </div>

                <span>{item.quantity}</span>
                <span>Rs.{item.price}</span>
                <span>Rs.{item.price * item.quantity}</span>
              </div>
            ))}

            <div className="px-6 py-4 lg:py-0 text-center">
              <p className="text-gray-700">
                Delivery expected by{" "}
                <span className="font-semibold">September 1</span>
              </p>
              <p className="mt-2 cursor-pointer">
                <span className="text-yellow-500 ">⭐</span> Rate and Review the
                Product
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 flex w-full justify-center">
        <button
          onClick={() => navigate("/track-order")}
          className="rounded-xl cursor-pointer bg-[#1877F2] px-8 py-3 text-white font-semibold hover:bg-[#1467cf] focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Track Your Order
        </button>
      </div>
    </div>
  );
}
