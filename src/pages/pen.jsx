import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

import banner from "../assets/images/pens_banner.jpg";
import addedToCartImg from "../assets/images/added_to_cart.png"; 
import { penProducts } from "../data/penData";

const categories = [
  "Office Basics",
  "Files & Folders",
  "Paper & Notebooks",
  "Pens & Writing",
  "School Supplies",
];

const priceFilters = [
  { label: "Rs. 50-100", min: 50, max: 100 },
  { label: "Rs. 100-200", min: 100, max: 200 },
  { label: "Rs. 200-300", min: 200, max: 300 },
  { label: "Rs. 300-500", min: 300, max: 500 },
];

const Pen = () => {
   useEffect(() => {
          document.title = "Supplyhive | Pens & Writing";
        }, []); 
  const [selectedPrices, setSelectedPrices] = useState([priceFilters[0].label]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Pens & Writing");

  const { addToCart } = useCart();

  const toggleFilter = (label) => {
    setSelectedPrices((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = penProducts.filter((p) => {
    if (selectedPrices.length === 0) return true;
    return selectedPrices.some((label) => {
      const filter = priceFilters.find((f) => f.label === label);
      return p.price >= filter.min && p.price <= filter.max;
    });
  });

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProduct(product.id);
    setTimeout(() => setAddedProduct(null), 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Banner */}
      <div className="mx-auto max-w-7xl px-4 py-8">
                          <div className="rounded-2xl overflow-hidden">
                            <img
                              src={banner}
                              alt="banner"
                              className="w-full h-48 md:h-[500px]"
                            />
                          </div>
        <p className="text-center mt-3 text-lg md:text-2xl font-semibold text-gray-700">
          "Where Ideas Begin – Shop Smart, Stay Sharp!"
        </p>
      </div>

      {/* Categories Dropdown */}
      <div className="relative flex items-center mb-4 h-12 px-4">
        <button
          className="flex items-center font-bold"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu size={20} className="mr-2" />
          Categories
        </button>

        <h2 className="absolute left-1/2 transform -translate-x-1/2 text-md md:text-xl  font-bold">
          {selectedCategory}
        </h2>

        {sidebarOpen && (
          <div className="absolute left-4 top-12 bg-white shadow-lg rounded-lg w-48 z-30">
            <ul className="divide-y divide-gray-200">
              {categories.map((c, i) => (
                <li key={i}>
                  <a
                    href={`/${c.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}`}
                    onClick={() => handleCategoryClick(c)}
                    className={`block px-4 py-2 text-sm font-medium hover:bg-gray-100 ${
                      selectedCategory === c ? "text-black font-bold" : "text-gray-700"
                    }`}
                  >
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div
          className={`fixed md:static z-20 w-64 p-4 transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition-transform duration-300`}
        >
          <div className="bg-[#097afa] px-6 py-2 mb-10 rounded-xl text-white">
            <h2 className="text-lg font-bold mb-4">Categories</h2>
            <ul className="space-y-2 mb-6">
              {categories.map((c, i) => (
                <li key={i} className="hover:underline">
                  <Link
                    to={`/${c.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}`}
                    onClick={() => handleCategoryClick(c)}
                    className={`${selectedCategory === c ? "text-black font-bold" : "text-white"} block`}
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#097afa] px-6 py-2 mb-10 rounded-xl text-white">
            <h2 className="text-lg font-bold mb-2">Filter by Price</h2>
            <div className="space-y-2 ms-5">
              {priceFilters.map((filter, i) => (
                <label key={i} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedPrices.includes(filter.label)}
                    onChange={() => toggleFilter(filter.label)}
                    className="form-checkbox text-blue-500"
                  />
                  <span>{filter.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="flex-1 p-4 md:px-8">
          <p className="mb-4 text-gray-600">
            Showing Result 1-{filteredProducts.length} of {filteredProducts.length} results
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition relative"
              >
                <Link to={`/product/${p.id}`}>
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-4 bg-[#7aabf5] text-center">
                  <Link to={`/product/${p.id}`}>
                    <h3 className="font-semibold hover:underline">{p.name}</h3>
                  </Link>
                  <div className="flex justify-center my-2">
                    {Array.from({ length: p.rating }).map((_, i) => (
                      <span key={i} className="text-[#fae823] text-4xl">
                        ★
                      </span>
                    ))}
                  </div>

                  <p className="font-bold">Rs. {p.price}</p>
                  <p className="font-bold text-sm">{p.bulkOffer}</p>

                  {/* Add-to-Cart Image Above Button */}
                  <div className="relative mt-3">
                    {addedProduct === p.id && (
                      <img
                        src={addedToCartImg}
                        alt="Added to Cart"
                        className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-20 h-20 object-contain transition-all"
                      />
                    )}

                    <button
                      onClick={() => handleAddToCart(p)}
                      className="bg-white px-4 py-2 rounded-lg font-semibold border hover:bg-gray-100"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pen;
