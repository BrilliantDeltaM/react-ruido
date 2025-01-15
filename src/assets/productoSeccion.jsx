import React from "react";
import ProductCard from "./productoCard";
import products from "./producto";

const ProductSection = ({ addToCart }) => {
  return (
    <main id="productos-section" className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-center text-black mb-8">Nuestros Productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </main>
  );
};

export default ProductSection;
