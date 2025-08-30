import React, {useEffect} from "react";

const SupplyHiveCorporate = () => {
    useEffect(() => {
              document.title = "Supplyhive | Corporate Solutions";
            }, []); 
  return (
    <section className="px-6 md:px-12 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <h1 className="text-3xl font-bold text-center text-[#097afa] mb-8">
          SupplyHive Corporate Solutions
        </h1>

        {/* Intro Section */}
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          At <span className="font-semibold text-[#097afa]">SupplyHive</span>,
          we provide high-quality stationery and office essentials tailored for
          businesses, schools, and institutions. Partner with us to streamline
          your supply needs with competitive pricing, bulk orders, and reliable
          delivery.
        </p>

        {/* 3 Info Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#097afa] mb-3">
              Bulk Orders
            </h3>
            <p className="text-gray-600">
              Get access to bulk purchasing with flexible pricing and discounts
              for large corporate orders.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#097afa] mb-3">
              Customized Solutions
            </h3>
            <p className="text-gray-600">
              Tailored packages for schools, offices, and institutions to match
              your unique requirements.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#097afa] mb-3">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              Reliable and timely delivery to ensure you never run out of
              essentials when you need them most.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Partner with SupplyHive
          </h2>
          <p className="text-gray-600 mb-6">
            Ready to simplify your corporate stationery needs? Get in touch with
            us today.
          </p>
          <a
            href="/contact"
            className="bg-[#097afa] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default SupplyHiveCorporate;
