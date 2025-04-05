import React from 'react';

const GreenSchool = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4">GreenSchool</h1>
      <p className="mb-4">This is the GreenSchool module page.</p>
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Shop Now</button>
      <button className="ml-2 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Add to Cart</button>
    </div>
  );
};

export default GreenSchool;
