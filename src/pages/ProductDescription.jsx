import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { allProducts } from "../data/productData";
import { useCart } from "../context/CartContext";
import addedToCartImg from "../assets/images/added_to_cart.png"; 

const ProductDescription = () => {
   useEffect(() => {
            document.title = "Supplyhive | Product Description";
          }, []); 
  const { id } = useParams();
  const navigate = useNavigate();
  const product = allProducts.find((p) => p.id === Number(id));
  const { addToCart } = useCart();

  const [showAddedImg, setShowAddedImg] = useState(false);

  if (!product) {
    return <p className="text-center mt-20 text-red-500">Product not found</p>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    setShowAddedImg(true);
    setTimeout(() => setShowAddedImg(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="p-4">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-72 object-contain mb-4"
          />
          <div className="text-center">
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-gray-700 font-medium">Rs. {product.price}</p>
            <p className="text-sm text-gray-500">{product.bulkOffer}</p>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-lg md:text-2xl font-bold mb-2 lg:mb-10 text-center">
            Product Description
          </h2>
          <h3 className="font-semibold text-lg md:text-2xl">{product.name}</h3>
          <h3 className="font-semibold text-lg md:text-xl">{product.title}</h3>
          <p className="text-md text-gray-700 mt-2 leading-relaxed">
            {product.description}
          </p>
          <h3 className="text-lg md:text-2xl mt-4 font-semibold">Key Features:</h3>
          <ul className="list-disc list-inside text-md text-gray-700 space-y-1 mt-2">
            {product.features?.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </div>

      {product.reviews && product.reviews.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl md:text-2xl font-bold mb-10 text-center">
            Comments & Review
          </h2>
          <div className="space-y-6">
            {product.reviews.map((review, idx) => (
              <div key={review.id}>
                <h3 className="font-semibold text-lg mb-4">
                  {idx + 1}. {review.title}
                </h3>
                <p className="font-semibold text-lg">
                  Rating:{" "}
                  {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
                </p>
                <p className="text-gray-700 text-md mt-4">
                  "{review.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Added to cart image above buttons */}
      {showAddedImg && (
        <div className="flex justify-center mb-2">
          <img
            src={addedToCartImg}
            alt="Added to Cart"
            className="w-36 h-36 object-contain"
          />
        </div>
      )}

      {/* Buttons stay in the same row */}
      <div className="flex gap-4 justify-center mt-2">
        <button
          onClick={handleAddToCart}
          className="bg-[#097afa] text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700"
        >
          ADD TO CART
        </button>

        <button
          onClick={() => {
            navigate("/billing", { state: { buyNowProduct: product } });
          }}
          className="bg-[#097afa] text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700"
        >
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default ProductDescription;
