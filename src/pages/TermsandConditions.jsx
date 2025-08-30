import React, {useEffect} from "react";

const TermsAndConditions = () => {
    useEffect(() => {
              document.title = "Supplyhive | Teams & Conditions";
            }, []); 
  return (
    <section className="px-6 md:px-12 py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#097afa] mb-8">
          Terms & Conditions
        </h1>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Welcome to <span className="font-semibold">SupplyHive</span>. By
          accessing and using our website, you agree to the following terms and
          conditions. Please read them carefully.
        </p>

        {/* Terms Section */}
        <div className="space-y-8 text-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              1. General Use
            </h2>
            <p>
              Our website and services are intended for personal and business
              use. You agree not to misuse the site for unlawful purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              2. Orders & Payments
            </h2>
            <p>
              All orders placed through our website are subject to availability
              and confirmation of payment. We reserve the right to cancel or
              refuse any order at our discretion.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              3. Returns & Refunds
            </h2>
            <p>
              Products may be returned or exchanged within 7 days if unused and
              in original packaging. Refunds will be processed within 5–7
              business days of approval.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              4. Intellectual Property
            </h2>
            <p>
              All content, logos, images, and materials on this site are the
              property of SupplyHive and may not be copied, reproduced, or
              distributed without permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              5. Limitation of Liability
            </h2>
            <p>
              SupplyHive shall not be liable for any indirect, incidental, or
              consequential damages arising from the use of our products or
              website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              6. Updates to Terms
            </h2>
            <p>
              We may update these terms and conditions from time to time. Any
              changes will be posted on this page with an updated effective
              date.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Last Updated: August 2025  
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
