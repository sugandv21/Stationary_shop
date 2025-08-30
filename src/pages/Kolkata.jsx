import React, {useEffect} from "react";

export default function Kolkata() {
   useEffect(() => {
          document.title = "Supplyhive | Location in Kolkata"
        }, []); 
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-blue-500 text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Supplyhive in Kolkata</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Find your favorite stationery items in Kolkata! From pens to notebooks, folders, and more – we deliver conveniently to your doorstep.
        </p>
      </section>

      <section className="py-12 px-4 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Kolkata Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.417848214868!2d88.3638958!3d22.572646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277bc16eb6f3f%3A0x8f53cfa184d8f7!2sKolkata%2C%20West%20Bengal%2C%20India!5e0!3m2!1sen!2sus!4v1693371285678!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">What We Offer in Kolkata</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Wide range of pens, notebooks, and folders.</li>
            <li>Fast and safe delivery in Kolkata.</li>
            <li>Exclusive city-specific offers and discounts.</li>
            <li>Easy order tracking and support.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 px-4 text-center bg-blue-100">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Shop Stationery in Kolkata Now</h2>
        <p className="text-gray-700 mb-6">Explore our collection and order your stationery with just a click.</p>
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
