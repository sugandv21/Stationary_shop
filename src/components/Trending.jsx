import React, { useState } from "react"; 
import { useCart } from "../context/CartContext"; 
import { Link } from "react-router-dom";
import { trendingProducts } from "../data/trendingData"; 
import addedToCartImg from "../assets/images/added_to_cart.png"; 

export default function Trending() {
  const { addToCart } = useCart();
  const [addedProduct, setAddedProduct] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProduct(product.id);
    setTimeout(() => setAddedProduct(null), 2000); // Show "added to cart" for 2s
  };

  return (
    <section className="w-full bg-white px-4 py-2">
      <h2 className="text-lg md:text-3xl font-semibold text-center mb-8">Trending</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {trendingProducts.map((item) => (
          <div
            key={item.id}
            className="w-[360px] h-[260px] rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 relative group"
          >
            {/* Link to Product Description */}
            <Link to={`/product/${item.id}`}>
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </Link>

            {/* Add to Cart Button */}
            <button
              onClick={() => handleAddToCart(item)}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Add to Cart
            </button>

            {/* Added to Cart Animation */}
            {addedProduct === item.id && (
              <img
                src={addedToCartImg}
                alt="Added to Cart"
                className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-40 h-40 object-contain transition-all"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
