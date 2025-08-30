import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

import { featuredProducts } from "../data/featureData"; 
import addedToCartImg from "../assets/images/added_to_cart.png"; 

const FeaturedProduct = () => {
  const { addToCart } = useCart();
  const [addedProduct, setAddedProduct] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProduct(product.id);
    setTimeout(() => setAddedProduct(null), 2000); 
  };

  return (
    <div className="py-10 px-4">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
        Featured Product
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto relative">
        {featuredProducts.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition relative"
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

              <div
                className="flex justify-center my-2"
                aria-label={`${p.rating} out of 5 stars`}
              >
                {Array.from({ length: p.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-500 text-2xl">
                    ★
                  </span>
                ))}
              </div>

              <p className="font-bold">Rs. {p.price}</p>
              <p className="text-sm font-medium">{p.bulkOffer}</p>

              <div className="mt-3 relative">
                <button
                  onClick={() => handleAddToCart(p)}
                  className="bg-white px-6 py-2 rounded-lg font-semibold border hover:bg-gray-100 transition"
                >
                  Add to Cart
                </button>

                {addedProduct === p.id && (
                  <img
                    src={addedToCartImg}
                    alt="Added to Cart"
                    className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-40 h-40 object-contain transition-all"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
