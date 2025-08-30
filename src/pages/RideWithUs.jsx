import React, {useEffect} from "react";
import deliveryImg from "../assets/images/delivery.jpg"; 

export default function RideWithUs() {
   useEffect(() => {
             document.title = "Supplyhive | Ride with us";
           }, []); 
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-blue-500 text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Ride With Supplyhive</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Get your stationery delivered safely and quickly, right to your doorstep. 
          Whether it's files, folders, pens, or notebooks – we bring everything to you!
        </p>
      </section>

      <section className="py-12 px-4 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <img
          src={deliveryImg}
          alt="Delivery"
          className="w-full md:w-1/2 rounded-xl shadow-lg"
        />
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Our Delivery Service?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Quick and reliable delivery of stationery products.</li>
            <li>Safe packaging to protect your items.</li>
            <li>Flexible delivery schedule to suit your needs.</li>
            <li>Easy tracking and customer support.</li>
            <li>Doorstep delivery for all items, from pens to notebooks and files.</li>
          </ul>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">1. Select Your Items</h3>
            <p className="text-gray-600">Choose from our wide range of stationery products including pens, notebooks, folders, and more.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">2. Request Delivery</h3>
            <p className="text-gray-600">Let us know your address and preferred time for delivery. We ensure your items reach you safely.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">3. Receive Your Order</h3>
            <p className="text-gray-600">Our delivery team brings your stationery directly to your doorstep quickly and securely.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 text-center bg-blue-100">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Your Stationery Delivered?</h2>
        <p className="text-gray-700 mb-6">Explore our collection and request delivery instantly.</p>
        <a
          href="/office-basics"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Shop Now
        </a>
      </section>
    </div>
  );
}
