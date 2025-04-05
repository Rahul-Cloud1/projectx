import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const productsData = [
  {
    id: 1,
    name: "Stihl Mh 710",
    category: "Power Weeders",
    price: 75000,
    imageUrl: "/product_images/mh 710.jpg",
  },
  {
    id: 2,
    name: "Sharpex 16 Electric",
    category: "Lawn Mowers",
    price: 50000,
    imageUrl: "product_images/Sharpex 1.png",
  },
  {
    id: 3,
    name: "Stihl Petrol Chain Saw",
    category: "Chain Saw",
    price: 17000,
    imageUrl: "product_images/ms 230.jpg",
  },
  {
    id: 4,
    name: "Electric Brush Cutter",
    category: "Brush Cutters",
    price: 12000,
    imageUrl: "product_images/fse 81.jpg",
  },
  {
    id: 5,
    name: "Hedge Trimmer",
    category: "Hedge Trimmers",
    price: 45000,
    imageUrl: "public/product_images/Hedge trimmer.jpg",
  },
  {
    id: 6,
    name: "Hand Tools",
    category: "Garden Tools",
    price: 1500,
    imageUrl: "product_images/Hand Tool 1.jpeg",
  },
  {
    id: 7,
    name: "Stihl Electric Mower",
    category: "Lawn Mowers",
    price: 75000,
    imageUrl: "product_images/stihl-electric-mower.jpg",
  },
  {
    id: 8,
    name: "Stihl Gas Chainsaw",
    category: "Chain Saw",
    price: 21000,
    imageUrl: "product_images/stihl-gas-chainsaw.jpg",
  },
  {
    id: 9,
    name: "Makita Brush Cutter",
    category: "Brush Cutters",
    price: 13000,
    imageUrl: "product_images/makita-brush-cutter.jpg",
  },
  {
    id: 10,
    name: "Bosch Hedge Trimmer",
    category: "Hedge Trimmers",
    price: 35000,
    imageUrl: "product_images/bosch-hedge-trimmer.jpg",
  },
  {
    id: 11,
    name: "Electric Weed Remover",
    category: "Power Weeders",
    price: 65000,
    imageUrl: "product_images/electric-weed-remover.jpg",
  },
  {
    id: 12,
    name: "Garden Sprayer",
    category: "Garden Tools",
    price: 2000,
    imageUrl: "product_images/garden-sprayer.jpg",
  }
];

const categories = [
  "All",
  "Power Weeders",
  "Brush Cutters",
  "Chain Saw",
  "Hedge Trimmers",
  "Lawn Mowers",
  "Garden Tools"
];

const itemsPerPage = 6;

const AgroMart = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [wishlist, setWishlist] = useState([]);

  const filteredProducts = productsData.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Add to Wishlist
  const toggleWishlist = (id) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.includes(id)) {
        return prevWishlist.filter((item) => item !== id);
      } else {
        return [...prevWishlist, id];
      }
    });
  };

  // Add to Cart (stub function)
  const addToCart = (product) => {
    alert(`Added ${product.name} to the cart!`);
  };

  // Buy Now (stub function)
  const buyNow = (product) => {
    alert(`Buying ${product.name} now!`);
  };

  return (
    <motion.div
      className="p-4 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-4xl font-extrabold mb-6 text-center text-green-800">AgroMart</h1>

      {/* Filter & Search */}
      <div className="flex flex-col md:flex-row md:justify-between items-center mb-6 gap-4 sticky top-4 bg-white z-10 py-2">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium shadow-sm border border-green-700 hover:bg-green-700 hover:text-white ${
                selectedCategory === category ? "bg-green-700 text-white" : "bg-white text-green-700"
              }`}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Search products..."
          className="px-4 py-2 border rounded-lg w-full md:w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-300"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProducts.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">No products found.</p>
        ) : (
          <AnimatePresence mode="wait">
            {currentProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                layout
                whileHover={{ scale: 1.05 }}
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-xl transition-all"
              >
                <motion.img
                  loading="lazy"
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-contain mb-4 rounded transform transition duration-300 ease-in-out hover:scale-105"
                />
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h3>
                <p className="text-green-700 font-bold text-lg">
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                  }).format(product.price)}
                </p>

                {/* Buttons Section */}
                <div className="flex justify-between items-center mt-4">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-800"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
                    onClick={() => buyNow(product)}
                  >
                    Buy Now
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className={`text-red-500 text-2xl ${wishlist.includes(product.id) ? "animate-pulse" : ""}`}
                    onClick={() => toggleWishlist(product.id)}
                  >
                    ❤️
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-2 flex-wrap">
        {[...Array(totalPages)].map((_, index) => (
          <motion.button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 rounded-full border border-green-700 transition-all duration-300 ${
              currentPage === index + 1 ? "bg-green-700 text-white" : "bg-white text-green-700"
            }`}
            whileHover={{ scale: 1.1 }}
          >
            {index + 1}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default AgroMart;
