import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaSearch, FaBars, FaTimes, FaChevronDown, FaEye, FaEyeSlash } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/images/logo.png";
import cartImg from "../assets/images/cart.png";
import userImg from "../assets/images/user.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchMessage, setSearchMessage] = useState("");

  const { cartItems } = useCart();
 const { user, login, logout, loginModalOpen, openLogin, closeLogin } = useAuth();
  const navigate = useNavigate();

  const categories = [
    { name: "Office Basics", keywords: ["office", "basics", "stationery"] },
    { name: "Files & Folders", keywords: ["files", "folders", "file", "folder"] },
    { name: "Paper & Notebooks", keywords: ["paper", "notebook", "notebooks"] },
    { name: "Pens & Writing", keywords: ["pen", "pens", "writing", "marker", "pencil"] },
    { name: "School Supplies", keywords: ["school", "supplies", "eraser", "geometry"] },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const keyword = searchValue.toLowerCase().trim();
    const matchedCategory = categories.find((cat) =>
      cat.keywords.some((k) => k.includes(keyword))
    );

    if (matchedCategory) {
      navigate(`/${matchedCategory.name.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}`);
      setSearchValue("");
      setSearchMessage("");
      setIsOpen(false);
    } else {
      setSearchMessage(`Available categories: ${categories.map(c => c.name).join(", ")}`);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.length === 0) {
      alert("No user registered. Please sign up.");
      closeLogin();
      navigate("/sign-up");
      return;
    }

    const inputVal = loginUsername.trim().toLowerCase();
    const existingUser = users.find(
      (u) => u.email.toLowerCase() === inputVal || u.phone.toLowerCase() === inputVal
    );

    if (!existingUser) {
      alert("User not found. Please sign up.");
      closeLogin();
      navigate("/sign-up");
      return;
    }

    if (existingUser.password === loginPassword) {
      login(existingUser);
      closeLogin();
      alert("Login successful!");
    } else {
      alert("Incorrect password!");
    }
  };

  const linkClasses = "transition-colors duration-200 hover:text-[#1877F2]";
  const activeClasses = "text-[#1877F2] font-semibold";
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-8xl mx-auto px-4 md:px-10 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4 sm:gap-6 lg:gap-12">
          <img src={logo} alt="Logo" className="w-12 h-12 md:w-20 md:h-20 rounded-full border-2 border-black" />
          <span className="font-bold text-lg md:text-xl">Supplyhive</span>
        </div>

        <div className="hidden lg:flex flex-1 justify-center items-center gap-16 text-xl relative">
          <NavLink to="/" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : ""}`}>Home</NavLink>
          <NavLink to="/office-basics" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : ""}`}>Shop</NavLink>
          <NavLink to="/about" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : ""}`}>About us</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : ""}`}>Contact</NavLink>

          {!user ? (
            <button onClick={openLogin} className={linkClasses}>Login/Register</button>
          ) : (
            <div className="relative">
              <button onClick={() => setShowDropdown(!showDropdown)} className="flex items-center gap-2 font-medium hover:text-[#1877F2]">
                Hello, {user.name} <FaChevronDown className="text-sm" />
              </button>
              {showDropdown && (
                <div className="absolute mt-2 bg-white border rounded-lg shadow-md w-32 right-0 z-50">
                  <button onClick={() => { logout(); setShowDropdown(false); }} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Logout</button>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex items-center gap-6 lg:gap-10">
          <form onSubmit={handleSearch} className="hidden lg:flex items-center bg-blue-500 rounded-full px-4 py-2 w-72">
            <input
              type="text"
              placeholder="Search for Stationery"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="flex-1 bg-transparent text-white placeholder-white outline-none text-sm"
            />
            <button type="submit"><FaSearch className="text-white" /></button>
          </form>

          <NavLink to="/cart" className="relative cursor-pointer">
            <img src={cartImg} alt="Cart" className="w-7 h-7 object-contain" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </NavLink>

          <div className="relative">
            <img src={userImg} alt="User" className="w-7 h-7 object-contain cursor-pointer" onClick={() => setShowDropdown(!showDropdown)} />
            {showDropdown && (
              <div className="absolute right-0 mt-2 bg-white border rounded-xl shadow-lg w-40 z-50 p-2">
                <NavLink to="/order-summary" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md" onClick={() => setShowDropdown(false)}>My Order</NavLink>
                <NavLink to="/track-order" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md" onClick={() => setShowDropdown(false)}>Track Order</NavLink>
              </div>
            )}
          </div>

          <button className="lg:hidden text-2xl ml-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white px-4 pb-4 flex flex-col gap-4 shadow relative">
          <form onSubmit={handleSearch} className="flex items-center bg-blue-500 rounded-full px-4 py-2 w-full">
            <input
              type="text"
              placeholder="Search for Stationery"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="flex-1 bg-transparent text-white placeholder-white outline-none text-sm"
            />
            <button type="submit"><FaSearch className="text-white" /></button>
          </form>

          <NavLink to="/" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : ""}`} onClick={handleLinkClick}>Home</NavLink>
          <NavLink to="/shop" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : ""}`} onClick={handleLinkClick}>Shop</NavLink>
          <NavLink to="/about" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : ""}`} onClick={handleLinkClick}>About us</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : ""}`} onClick={handleLinkClick}>Contact</NavLink>

          {!user ? (
            <button onClick={() => { openLogin(); setIsOpen(false); }} className={`${linkClasses} text-left`}>Login/Register</button>
          ) : (
            <button onClick={() => { logout(); setIsOpen(false); }} className={`${linkClasses} text-left`}>Logout ({user.name})</button>
          )}
        </div>
      )}

      {searchMessage && (
        <div className="text-center text-red-500 py-2 bg-gray-100">
          {searchMessage}
        </div>
      )}

     {loginModalOpen && (
  <div className="fixed inset-0 flex justify-center items-start pt-20 z-[9999] bg-black/50">
    <div className="bg-white shadow-2xl border rounded-xl p-4 w-[340px] relative">
      <button
        onClick={closeLogin}  
        className="absolute top-2 right-3 text-lg font-bold text-gray-600 hover:text-black"
      >
        &times;
      </button>

      <h2 className="text-xl font-semibold text-center">Sign In</h2>
            <p className="text-center text-red-500 text-sm font-medium mb-3">
              Don’t have an account? <Link to="/sign-up" onClick={closeLogin} className="hover:underline">Create an Account</Link>
            </p>

            <form className="flex flex-col gap-3" onSubmit={handleLogin}>
              <div>
                <label className="block text-sm font-medium mb-1">Email / Phone</label>
                <input
                  type="text"
                  placeholder="Email or Phone"
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                  className="w-full p-2 bg-blue-200 rounded-xl placeholder-gray-600 outline-none"
                  required
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                  type={showPwd ? "text" : "password"}
                  placeholder="Password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full p-2 bg-blue-200 rounded-xl placeholder-gray-600 outline-none"
                  required
                />
                <span
                  role="button"
                  tabIndex={0}
                  className="absolute right-3 top-3 cursor-pointer text-gray-700"
                  onClick={() => setShowPwd(!showPwd)}
                  onKeyDown={(e) => e.key === "Enter" && setShowPwd(!showPwd)}
                >
                  {showPwd ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <button type="submit" className="bg-blue-500 text-black py-2 rounded-xl hover:bg-blue-600 transition">Sign In</button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
}
