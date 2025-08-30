import React, {useEffect} from "react";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const Social = () => {
      useEffect(() => {
                document.title = "Supplyhive | Socia Media";
              }, []); 
  return (
    <div className="min-h-screen p-6 md:p-10 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4 text-center">Follow Us on Social Media</h1>
      <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
        Stay connected with Supplyhive! Follow us for the latest updates on stationery products, special offers, DIY tips, and more.
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-8 mb-12">
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2">
          <Instagram className="w-12 h-12 text-pink-500 hover:scale-110 transition" />
          <span className="text-gray-700 font-medium">Instagram</span>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2">
          <Facebook className="w-12 h-12 text-blue-600 hover:scale-110 transition" />
          <span className="text-gray-700 font-medium">Facebook</span>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2">
          <Linkedin className="w-12 h-12 text-blue-700 hover:scale-110 transition" />
          <span className="text-gray-700 font-medium">LinkedIn</span>
        </a>
      </div>

      {/* Social Posts */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {/* Instagram Post */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
          <img
            src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=300&q=80"
            alt="Instagram Post"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold mb-2">Stationery Inspiration</h3>
            <p className="text-gray-600 text-sm">
              Discover creative ways to organize your desk and boost productivity!
            </p>
          </div>
        </div>

        {/* Facebook Post */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=300&q=80"
            alt="Facebook Post"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold mb-2">Exclusive Offers</h3>
            <p className="text-gray-600 text-sm">
              Check out our latest discounts and seasonal offers for your favorite stationery!
            </p>
          </div>
        </div>

        {/* LinkedIn Post */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=300&q=80"
            alt="LinkedIn Post"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold mb-2">Business Updates</h3>
            <p className="text-gray-600 text-sm">
              Stay updated with Supplyhive's professional initiatives and collaborations.
            </p>
          </div>
        </div>
      </div>

      {/* Call-to-action */}
      <div className="mt-12 text-center">
        <p className="mb-4 text-gray-700">
          Follow us today and be part of our stationery community!
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition"
          >
            Follow on Instagram
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Follow on Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;
