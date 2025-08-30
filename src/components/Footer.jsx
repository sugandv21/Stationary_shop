import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import instagramImg from "../assets/images/instagram.png";
import facebookImg from "../assets/images/facebook.png";
import whatsappImg from "../assets/images/whatsapp.png";
import playstore from "../assets/images/playstore.png";
import appstore from "../assets/images/appstore.png";

export default function Footer() {
    const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <footer className="mt-10 border-t border-gray-200 px-6 sm:px-10 lg:px-20 xl:px-28 py-12">
      <div className="mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-16">
          <img
            src={logo}
            alt="Supplyhive Logo"
            className="w-14 h-14 sm:w-16 sm:h-16 lg:w-15 lg:h-15 rounded-full object-cover border-2 border-black mb-3 sm:mb-0"
          />
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold leading-snug">
            Supplyhive <br />
            <span className="text-sm md:text-lg text-gray-600 font-normal">
              2025 Supplyhive Limited
            </span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 md:gap-16 text-md md:text-xl">
        <div>
          <h3 className="font-medium mb-4">Company</h3>
          <ul className="space-y-2 text-gray-500">
            <li>
              <Link to="/about" className="text-gray-500 hover:text-black transition">About us</Link>
            </li>
            <li>
              <Link to="/corporate" className="text-gray-500 hover:text-black transition">Supplyhive corporate</Link>
            </li>
            <li>
              <Link to="/careers" className="text-gray-500 hover:text-black transition">Careers</Link>
            </li>
            <li>
              <Link to="/team" className="text-gray-500 hover:text-black transition">Team</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-4">Contact us</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="/support" className="text-gray-500 hover:text-black transition">Help & Support</Link>
            </li>
            <li>
              <Link to="/partner" className="text-gray-500 hover:text-black transition">Partner with us</Link>
            </li>
            <li>
              <Link to="/ride" className="text-gray-500 hover:text-black transition">Ride with us</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-4">Available in</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="/coimbatore" className="text-gray-500 hover:text-black transition">Coimbatore</Link>
            </li>
            <li>
              <Link to="/bengaluru" className="text-gray-500 hover:text-black transition">Bengaluru</Link>
            </li>
            <li>
              <Link to="/chennai" className="text-gray-500 hover:text-black transition">Chennai</Link>
            </li>
            <li>
              <Link to="/kolkata" className="text-gray-500 hover:text-black transition">Kolkata</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-4">Legal</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="/terms" className="text-gray-500 hover:text-black transition">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/cookies" className="text-gray-500 hover:text-black transition">Cookie policy</Link>
            </li>
            <li>
              <Link to="/privacy" className="text-gray-500 hover:text-black transition">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-4">Information</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="/location" className="text-gray-500 hover:text-black transition">Location</Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-500 hover:text-black transition">Email</Link>
            </li>
            <li>
              <Link to="/social" className="text-gray-500 hover:text-black transition">Social Media</Link>
            </li>
          </ul>
        </div>
      </div>

    <div className="flex gap-6 mt-6 mx-10 justify-center md:justify-end">
      <img
        src={instagramImg}
        alt="Instagram"
         className="w-10 h-10 cursor-pointer transition-transform transform hover:scale-110 hover:brightness-110 hover:shadow-lg"
        onClick={() => openLink("https://instagram.com")}
      />
      <img
        src={facebookImg}
        alt="Facebook"
         className="w-10 h-10 cursor-pointer transition-transform transform hover:scale-110 hover:brightness-110 hover:shadow-lg"
        onClick={() => openLink("https://facebook.com")}
      />
      <img
  src={whatsappImg}
  alt="WhatsApp"
  className="w-10 h-10 cursor-pointer transition-transform transform hover:scale-110 hover:brightness-110 hover:shadow-lg"
  onClick={() => openLink("https://wa.me/")}
/>

    </div>

      <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-gray-800 font-semibold text-ld md:text-2xl text-center md:text-left">
          For better experience, download the app now
        </p>

        <div className="flex gap-4">
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={playstore}
              alt="Google Play"
              className="h-10 md:h-12 hover:scale-110"
            />
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={appstore}
              alt="App Store"
              className="h-10 md:h-12 hover:scale-110"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
