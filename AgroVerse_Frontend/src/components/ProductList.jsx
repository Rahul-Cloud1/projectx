// src/components/ProductList.jsx
import React from 'react';

const products = [
  {
    name: 'Organic Fertilizer',
    price: '₹499',
    description: 'Eco-friendly fertilizer for better crop yield.',
  },
  {
    name: 'Drip Irrigation Kit',
    price: '₹1,299',
    description: 'Complete kit for efficient water usage.',
  },
  {
    name: 'Vegetable Seeds Pack',
    price: '₹299',
    description: 'High-yield seeds for your kitchen garden.',
  },
];

const ProductList = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-2">
            {product.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-2">{product.description}</p>
          <span className="text-green-600 dark:text-green-400 font-bold">{product.price}</span>
        </div>
      ))}
    </div>
  );
};

export default ProductList;