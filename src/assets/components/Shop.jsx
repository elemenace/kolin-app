import { useState, useEffect } from "react";

const ShopProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the Fake Store API
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setProducts(data); // Set the products from the API response
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className=" mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#f8f4e8]">
      <h1 className="text-5xl font-bold text-center mb-14 pt-6 text-[#d4677e]">
        Shop Our Premium Cosmetics
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 w-60 relative group transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={product.image}
              alt={product.title}
              className="rounded-lg mb-4 w-full h-44 object-cover transition-transform transform group-hover:scale-110"
            />
            <h2 className="text-md font-serif font-bold text-[#4B3E28] mb-2 text-center">
              {product.title}
            </h2>
            <p className="text-center mt-2 text-sm font-medium text-[#6B4A32]">
              ₱{product.price.toLocaleString()}
            </p>
            {/* Hover Add to Cart Button */}
            <button className="absolute bottom-2 opacity-0 group-hover:opacity-100 bg-[#d4677e] text-white px-4 py-2 rounded-lg font-medium shadow-lg transition-all duration-300">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopProducts;
