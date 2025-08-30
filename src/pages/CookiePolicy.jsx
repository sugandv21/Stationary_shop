import React, {useEffect} from "react";
import { FaCookieBite } from "react-icons/fa";

export default function CookiePolicy() {
  useEffect(() => {
        document.title = "Supplyhive | Cookie Policy";
      }, []); 
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <div className="flex items-center gap-3 mb-6">
          <FaCookieBite className="text-3xl text-yellow-500" />
          <h1 className="text-3xl font-bold">Cookie Policy</h1>
        </div>

        <p className="text-gray-700 mb-4">
          At <span className="font-semibold">Supplyhive</span>, we use cookies to enhance your browsing experience,
          analyze site traffic, and personalize content. Cookies help us understand your preferences and improve our services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Types of Cookies We Use</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><span className="font-semibold">Essential Cookies:</span> Required for the website to function properly.</li>
          <li><span className="font-semibold">Analytics Cookies:</span> Track visitor interactions to improve user experience.</li>
          <li><span className="font-semibold">Marketing Cookies:</span> Deliver personalized promotions and offers.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Managing Cookies</h2>
        <p className="text-gray-700">
          You can manage or disable cookies through your browser settings. However, some features may not work properly
          if cookies are disabled.
        </p>
      </div>
    </div>
  );
}
