import React, { useState,useEffect } from "react";

export default function PartnersWithUs() {
   useEffect(() => {
          document.title = "Supplyhive | Partners with Us"
        }, []); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Partnership Request Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Partner with Supplyhive</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Collaborate with us to grow together. Join our network of trusted partners and expand your reach.
        </p>
      </section>

      {/* Info Section */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Why Partner With Us?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Access to a wide customer base and marketplace.</li>
          <li>Collaborate on marketing and promotions.</li>
          <li>Exclusive partnership benefits and support.</li>
          <li>Transparent communication and reporting.</li>
        </ul>
      </section>

      {/* Form Section */}
      <section className="py-12 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Submit Your Partnership Request</h2>

        {submitted && (
          <div className="bg-green-100 text-green-800 p-4 rounded mb-6 text-center">
            Thank you! Your request has been submitted.
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Submit Request
          </button>
        </form>
      </section>
    </div>
  );
}
