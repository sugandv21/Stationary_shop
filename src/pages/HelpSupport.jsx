import React, {useEffect} from "react";

const HelpSupport = () => {
   useEffect(() => {
          document.title = "Supplyhive | Help & Support";
        }, []); 
  return (
    <section className="px-6 md:px-12 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#097afa] mb-8">
          Help & Support
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Need assistance? We’re here to help. Find answers to common questions
          or reach out to our support team for personalized help.
        </p>

        {/* FAQ Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              How do I place an order?
            </h3>
            <p className="text-gray-600">
              Browse products, add them to your cart, and proceed to checkout.
              You can pay online or opt for cash on delivery (if available).
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Can I return or exchange items?
            </h3>
            <p className="text-gray-600">
              Yes, products can be returned or exchanged within 7 days if they
              are unused and in original packaging. Please contact support for
              assistance.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Do you provide bulk/corporate orders?
            </h3>
            <p className="text-gray-600">
              Absolutely! We specialize in bulk supply for schools, offices, and
              institutions. Visit our Corporate page for more info.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              How can I track my order?
            </h3>
            <p className="text-gray-600">
              Once your order is shipped, you’ll receive a tracking ID by email
              or SMS to follow your delivery in real time.
            </p>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-white rounded-2xl shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Still need help?
          </h2>
          <p className="text-gray-600 mb-6">
            Our support team is available 24/7. Reach out to us and we’ll get
            back to you as soon as possible.
          </p>
          <a
            href="/contact"
            className="bg-[#097afa] text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-blue-700 transition"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default HelpSupport;
