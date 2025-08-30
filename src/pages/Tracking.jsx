import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import Stepper from "./Stepper";
import banner from "../assets/images/diary.jpg";

export default function Tracking() {
    useEffect(() => {
              document.title = "Supplyhive | Tracking Order";
            }, []); 
  const { cartItems } = useCart();
  const [itemsToShow, setItemsToShow] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("lastOrder");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setItemsToShow(parsed);
          return;
        }
      } catch (err) {
        // parse error -> ignore and fallback
        // console.error("failed to parse lastOrder", err);
      }
    }
    setItemsToShow(cartItems || []);
  }, [cartItems]);

  const paymentMethod =
    localStorage.getItem("paymentMethod") || "Cash on Delivery";
  const orderId = localStorage.getItem("orderId") || "OD123456789";

  const storedOrderTotal = localStorage.getItem("orderTotal");
  const orderTotal = storedOrderTotal
    ? Number(storedOrderTotal)
    : itemsToShow.reduce(
        (total, item) => total + (Number(item.price) || 0) * (Number(item.quantity) || 1),
        0
      );

  const today = new Date();
  const deliveryDate = new Date();
  deliveryDate.setDate(today.getDate() + 4);

  const formatDate = (date) =>
    date.toLocaleDateString("en-US", { month: "short", day: "numeric" });

  const steps = [
    { label: `Order Confirmed, ${formatDate(today)}`, status: "done" },
    { label: "Shipped", status: "done" },
    { label: "Out for Delivery", status: "pending" },
    {
      label: `Delivery, ${formatDate(deliveryDate)} by 11 PM`,
      status: "pending",
    },
  ];

  return (
    <div className="min-h-screen w-full mt-20 text-gray-900">
      <div className="w-full mb-6">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-96 object-cover max-w-7xl mx-auto rounded-lg shadow-md"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="text-xl md:text-2xl lg:text-3xl mb-10 font-bold">
          Order ID : {orderId}
        </h1>
        <p className="text-sm md:text-lg lg:text-xl text-gray-600">
          Seller : Supplyhive
        </p>
        <p className="text-sm md:text-lg lg:text-xl text-gray-600 mb-6">
          Rs.{orderTotal}
        </p>

        <Stepper steps={steps} />

        <div className="flex flex-col items-center mt-10 w-full">
          <div className="border-2 border-gray-400 rounded-xl p-4 mb-2 w-[80%] md:w-[50%]">
            <h2 className="text-md md:text-xl lg:text-2xl font-bold mb-4">
              Your Order
            </h2>
            <div className="grid grid-cols-2 text-sm md:text-lg lg:text-xl mb-2">
              <span>Products</span>
              <span className="text-right">Subtotal</span>
            </div>

            {itemsToShow.length === 0 ? (
              <p className="text-center text-gray-600">No products found for this order.</p>
            ) : (
              itemsToShow.map((item) => (
                <div
                  key={item.id ?? `${item.name}-${Math.random()}`}
                  className="grid grid-cols-2 text-sm md:text-lg font-semibold py-2"
                >
                  <span>
                    {item.name} x {item.quantity ?? 1}
                  </span>
                  <span className="text-right">
                    Rs.{(Number(item.price) || 0) * (Number(item.quantity) || 1)}
                  </span>
                </div>
              ))
            )}
          </div>

          <div className="bg-[#097afa] rounded-lg px-6 py-3 font-bold text-lg flex justify-between items-center w-[80%] md:w-[50%]">
            <span>Total</span>
            <span>Rs.{orderTotal}</span>
          </div>
          <div className="mt-6">
            <p className="flex items-center space-x-2">
              <span className="w-3 h-3 border-2 border-black rounded-full inline-block bg-[#10f836]"></span>
              <span className="text-sm md:text-lg lg:text-xl">{paymentMethod}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
