import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import SlidingBanner from './components/SlidingBanner';
import FeatureCard from './components/FeatureCard';
import features from './data/features';
import ProductList from './components/ProductList';

const KrishiMitra = lazy(() => import('./pages/KrishiMitra'));
const AgroMart = lazy(() => import('./pages/AgroMart'));
const AgroRent = lazy(() => import('./pages/AgroRent'));
const GrowPal = lazy(() => import('./pages/GrowPal'));
const AgriKart = lazy(() => import('./pages/AgriKart'));
const SoilSense = lazy(() => import('./pages/SoilSense'));
const FarmWatch = lazy(() => import('./pages/FarmWatch'));
const GreenSchool = lazy(() => import('./pages/GreenSchool'));
const MarketHub = lazy(() => import('./pages/MarketHub'));

import 'swiper/css';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Loader = () => <div className="text-center py-20">Loading...</div>;

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function HomePage() {
  const [search, setSearch] = useState('');

  const filteredFeatures = features.filter((f) =>
    f.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="dark:bg-gray-900 dark:text-white"
    >
      <div className="flex flex-col items-center">
        <SlidingBanner />

        {/* About Section */}
        <motion.section
          className="w-full max-w-6xl px-4 py-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold text-green-700 dark:text-green-300 mb-4">What is AgroVerse?</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            AgroVerse is your all-in-one agricultural ecosystem 🌾. From smart crop advisory to
            equipment rental, urban gardening, and agri eCommerce — we empower farmers and gardeners
            with technology and community.
          </p>
        </motion.section>

        {/* Features Section */}
        <motion.section
          className="w-full bg-green-50 dark:bg-gray-800 py-14"
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto px-4">
            <input
              type="text"
              placeholder="Search features..."
              className="w-full max-w-md mx-auto mb-10 p-3 rounded-xl border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-green-500 dark:text-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <motion.div
              className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {filteredFeatures.map((feature, idx) => (
                <motion.div key={idx} variants={item}>
      <FeatureCard
  title={feature.title}
  desc={feature.desc}
  image={feature.image}
  link={feature.link}
/>


                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Products Section */}
        <motion.section
          className="w-full bg-white dark:bg-gray-900 py-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-green-700 dark:text-green-300 mb-10">Featured Products</h2>
            <ProductList />
          </div>
        </motion.section>

        {/* Call to Action */}
        <section className="w-full text-center py-14 px-6 bg-green-100 dark:bg-gray-700">
          <h2 className="text-3xl font-bold text-green-800 dark:text-green-300 mb-4">Join the Green Revolution 🌍</h2>
          <p className="text-lg text-gray-700 dark:text-gray-200">
            Whether you're a farmer, urban gardener, or agri-business — AgroVerse is here for you.
          </p>
        </section>

        {/* Footer */}
        <footer className="w-full bg-green-700 text-white py-6 text-center dark:bg-green-900">
          <p>© {new Date().getFullYear()} AgroVerse. Empowering Agriculture with Innovation 🌱</p>
        </footer>
      </div>
    </motion.div>
  );
}

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 dark:bg-gray-900 dark:text-white">
      <h1 className="text-5xl font-bold text-green-700 dark:text-green-400 mb-4">404</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Oops! The page you're looking for doesn't exist.</p>
      <a
        href="/"
        className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
      >
        Go Home
      </a>
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<Loader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/KrishiMitra" element={<KrishiMitra />} />
          <Route path="/AgroMart" element={<AgroMart />} />
          <Route path="/AgroRent" element={<AgroRent />} />
          <Route path="/GrowPal" element={<GrowPal />} />
          <Route path="/AgriKart" element={<AgriKart />} />
          <Route path="/SoilSense" element={<SoilSense />} />
          <Route path="/FarmWatch" element={<FarmWatch />} />
          <Route path="/GreenSchool" element={<GreenSchool />} />
          <Route path="/MarketHub" element={<MarketHub />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <Router>
        <ScrollToTop />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
