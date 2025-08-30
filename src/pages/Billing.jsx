import React, { useState, useEffect } from "react"; 
import { useCart } from "../context/CartContext";
import { useNavigate, useLocation } from "react-router-dom";
import orderSuccess from "../assets/images/order_success.png";

export default function Billing() {
    useEffect(() => {
      document.title = "Supplyhive | Billing"; 
    }, []); 
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: ""
  });

  const buyNowProduct = location.state?.buyNowProduct || null;
  const itemsToShow = buyNowProduct
    ? [{ ...buyNowProduct, quantity: 1 }]
    : cartItems;

  const subtotal = itemsToShow.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Validate form fields before placing order
  const validateForm = () => {
    const { name, address, city, postalCode } = form;
    if (!name.trim() || !address.trim() || !city.trim() || !postalCode.trim()) {
      alert("Please fill all billing details.");
      return false;
    }
    if (!/^\d{5,6}$/.test(postalCode.trim())) {
      alert("Enter a valid postal code (5-6 digits).");
      return false;
    }
    return true;
  };

  const handlePlaceOrder = () => {
    if (!validateForm()) return;

    const selectedPayment =
      document.querySelector('input[name="payment"]:checked')?.value ||
      "Cash on Delivery";

    localStorage.setItem("paymentMethod", selectedPayment);
    localStorage.setItem("orderTotal", subtotal);
    localStorage.setItem(
      "orderId",
      "OD" + Math.floor(100000000 + Math.random() * 900000000)
    );
    localStorage.setItem("lastOrder", JSON.stringify(itemsToShow));

    setShowSuccess(true);

    setTimeout(() => {
      navigate("/order-summary");
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen w-full mt-20 text-gray-900 relative">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border-2 border-black p-6">
            <h2 className="text-3xl font-semibold tracking-tight mb-6">
              Billing Details
            </h2>
            <form className="space-y-6">
              <InputField
                label="Name"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
              />
              <InputField
                label="Street Address"
                name="address"
                placeholder="Enter your street address"
                value={form.address}
                onChange={handleChange}
              />
              <InputField
                label="Town/City"
                name="city"
                placeholder="Enter your city"
                value={form.city}
                onChange={handleChange}
              />
              <InputField
                label="Postal Code"
                name="postalCode"
                placeholder="Enter postal code"
                value={form.postalCode}
                onChange={handleChange}
              />
            </form>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="rounded-2xl border-2 border-black">
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Your Order</h3>
                <div className="mb-3 flex items-center justify-between text-lg font-semibold">
                  <span>Products</span>
                  <span>Subtotal</span>
                </div>

                {itemsToShow.length === 0 ? (
                  <p className="text-gray-600">No products selected.</p>
                ) : (
                  itemsToShow.map((item) => (
                    <div
                      key={item.id}
                      className="text-gray-800 flex items-center justify-between text-base mb-2"
                    >
                      <span className="font-semibold">
                        {item.name} x {item.quantity}
                      </span>
                      <span className="font-semibold">
                        Rs.{item.price * item.quantity}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="rounded-b-2xl bg-[#78A7FF] rounded-2xl border-2 border-black text-gray-900">
              <div className="flex items-center justify-between px-4 py-3 text-lg font-semibold">
                <span>Total</span>
                <span>Rs.{subtotal}</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="rounded-2xl border-2 border-black">
              <div className="p-6 space-y-4">
                <RadioRow label="Cash on Delivery" defaultChecked />
                <RadioRow label="UPI" />
                <RadioRow label="Debit Card" />
                <RadioRow label="Credit Card" />
              </div>
            </div>
          </div>
        </div>

        {/* Place Order Button */}
        <div className="mt-8 flex w-full justify-center">
          <button
            onClick={handlePlaceOrder}
            className="rounded-xl cursor-pointer bg-[#1877F2] px-8 py-3 text-white font-semibold hover:bg-[#1467cf] focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Place order
          </button>
        </div>
      </div>

      {/* ✅ Order Success Image Overlay */}
      {showSuccess && (
        <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-50">
          <img
            src={orderSuccess}
            alt="Order Success"
            className="w-64 h-64 object-contain animate-bounce"
          />
        </div>
      )}
    </div>
  );
}

// Input field component
function InputField({ label, name, placeholder, value, onChange }) {
  return (
    <div>
      <label className="block text-lg font-medium mb-2">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl bg-[#78A7FF]/80 text-gray-900 placeholder-gray-800 font-medium px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}

// Radio row component
function RadioRow({ label, defaultChecked = false }) {
  return (
    <label className="flex items-center gap-3 text-gray-800">
      <span className="relative inline-flex h-4 w-4 items-center justify-center">
        <input
          type="radio"
          name="payment"
          value={label}
          defaultChecked={defaultChecked}
          className="peer sr-only"
        />
        <span className="block h-4 w-4 rounded-full border-2 border-gray-400 peer-checked:border-black" />
        <span className="pointer-events-none absolute h-2 w-2 rounded-full bg-[#10f836] opacity-0 peer-checked:opacity-100" />
      </span>
      <span className="text-base font-medium">{label}</span>
    </label>
  );
}
