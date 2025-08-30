import React, {useEffect} from "react";
import { FaUserShield } from "react-icons/fa";

export default function PrivacyPolicy() {
   useEffect(() => {
          document.title = "Supplyhive | Privacy Policy";
        }, []); 
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <div className="flex items-center gap-3 mb-6">
          <FaUserShield className="text-3xl text-blue-500" />
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
        </div>

        <p className="text-gray-700 mb-4">
          <span className="font-semibold">Supplyhive</span> values your privacy and is committed to protecting your personal information.
          This policy explains how we collect, use, and safeguard your data when you use our website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Personal information you provide, such as name, email, and phone number.</li>
          <li>Order details and payment information for purchase processing.</li>
          <li>Browsing data, such as pages visited and preferences.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Information</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>To process orders and manage your account.</li>
          <li>To communicate updates, promotions, and offers.</li>
          <li>To improve our website and user experience.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Data Security</h2>
        <p className="text-gray-700">
          We implement industry-standard security measures to protect your personal information from unauthorized access,
          disclosure, or alteration.
        </p>
      </div>
    </div>
  );
}
