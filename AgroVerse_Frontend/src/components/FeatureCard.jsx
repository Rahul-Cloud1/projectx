// src/components/FeatureCard.jsx

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ title, desc, image, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden cursor-pointer transition"
    >
      <Link to={link}>
        <div className="h-40 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4 flex flex-col justify-between h-40">
          <h3 className="text-xl font-semibold text-green-700 dark:text-green-300">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
          <div className="mt-4 text-green-600 dark:text-green-400 flex items-center justify-end">
            <ArrowRight size={18} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default FeatureCard;
