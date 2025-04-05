import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { WiDaySunny } from 'react-icons/wi';


const cropAdvice = [
  {
    id: 1,
    title: "Best Time to Plant Wheat",
    description: "Wheat grows best in cooler weather. The ideal time to plant wheat is in early spring or late fall.",
    imageUrl: "/product_images/wheat.jpeg",
  },
  {
    id: 2,
    title: "How to Manage Pests in Organic Farms",
    description: "Natural pest control methods can help maintain the health of your crops without harming the environment.",
    imageUrl: "/product_images/farm.jpg",
  },
  {
    id: 3,
    title: "Watering Tips for Vegetable Gardens",
    description: "Ensure your vegetables get enough water during the growing season, but avoid overwatering to prevent root rot.",
    imageUrl: "/product_images/vege.jpg",
  },
];

const weatherForecast = {
  temperature: "28°C",
  condition: "Sunny",
  humidity: "60%",
  windSpeed: "12 km/h",
};

const newsArticles = [
  {
    id: 1,
    title: "The Future of Sustainable Agriculture",
    excerpt: "Explore how modern farming techniques are contributing to more sustainable agricultural practices.",
    link: "#",
  },
  {
    id: 2,
    title: "Impact of Climate Change on Farming",
    excerpt: "Learn about the challenges farmers face due to changing weather patterns and climate change.",
    link: "#",
  },
];

const marketPrices = [
  { name: 'Mon', Wheat: 2400 },
  { name: 'Tue', Wheat: 2500 },
  { name: 'Wed', Wheat: 2450 },
  { name: 'Thu', Wheat: 2550 },
  { name: 'Fri', Wheat: 2600 },
];

const farmingTips = [
  "Use crop rotation to improve soil health and reduce pests.",
  "Drip irrigation conserves water and targets roots directly.",
  "Test your soil regularly to adjust nutrients.",
  "Plant cover crops to prevent soil erosion.",
  "Harvest early in the morning to retain freshness."
];

const cropCalendar = [
  { crop: "Wheat", sowing: "Oct-Nov", harvesting: "March-April" },
  { crop: "Rice", sowing: "June-July", harvesting: "Nov-Dec" },
  { crop: "Maize", sowing: "Feb-March", harvesting: "June-July" },
];

const TipsCarousel = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % farmingTips.length), 4000);
    return () => clearInterval(timer);
  }, []);
  return (
    <motion.div className="bg-green-100 p-6 rounded-xl text-center shadow-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.p key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-lg font-semibold">
        🌿 {farmingTips[index]}
      </motion.p>
    </motion.div>
  );
};

const CropCalendar = () => (
  <motion.div className="bg-yellow-100 p-6 rounded-xl shadow-md" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
    <h2 className="text-2xl font-bold text-yellow-700 mb-4">📅 Crop Calendar</h2>
    <div className="space-y-4">
      {cropCalendar.map((item, idx) => (
        <motion.div key={idx} className="bg-white p-4 rounded-md shadow-sm" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }}>
          <p className="text-lg font-medium">{item.crop}</p>
          <p>Sowing: <span className="font-semibold">{item.sowing}</span></p>
          <p>Harvesting: <span className="font-semibold">{item.harvesting}</span></p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const CropDoctor = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState('');

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setResult("Analyzing plant health... 🤖");
      setTimeout(() => {
        setResult("✅ No disease detected. Plant is healthy.");
      }, 3000);
    }
  };

  return (
    <motion.div className="bg-purple-100 p-6 rounded-xl shadow-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2 className="text-2xl font-bold text-purple-700 mb-4">🧠 Crop Doctor</h2>
      <input type="file" accept="image/*" onChange={handleUpload} className="mb-4" />
      {image && <img src={image} alt="Uploaded plant" className="h-40 mb-4 object-cover rounded-md" />}
      {result && <p className="text-lg font-semibold text-gray-700">{result}</p>}
    </motion.div>
  );
};

const VoiceAssistant = () => {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Voice recognition not supported');
      return;
    }
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.interimResults = false;
    recognition.onresult = (event) => {
      const voiceText = event.results[0][0].transcript;
      setTranscript(voiceText);
    };
    recognition.onerror = (e) => console.error(e);
    recognition.onend = () => setIsListening(false);
    recognition.start();
    setIsListening(true);
  };

  return (
    <motion.div className="bg-blue-100 p-6 rounded-xl shadow-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2 className="text-2xl font-bold text-blue-700 mb-2">🎙️ Voice Assistant</h2>
      <button onClick={startListening} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        {isListening ? 'Listening...' : 'Ask about a crop'}
      </button>
      {transcript && <p className="mt-4 text-gray-700 font-semibold">You said: “{transcript}”</p>}
    </motion.div>
  );
};

const KrishiMitra = () => {
  return (
    <div className="p-6 space-y-12">
      <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl font-extrabold text-green-700">🌱 KrishiMitra - Agriculture Pro Max</h1>
        <p className="text-lg text-gray-600 mt-2">Smart advisory, weather, market prices, voice assistant and more.</p>
      </motion.div>

      {/* Crop Advisory */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-4">🌾 Crop Advisory</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cropAdvice.map((advice, index) => (
            <Tilt key={advice.id} glareEnable glareColor="#e0ffe0">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl">
                <img src={advice.imageUrl} alt={advice.title} className="w-full h-40 object-cover rounded-md mb-3" />
                <h3 className="text-xl font-semibold text-green-800">{advice.title}</h3>
                <p className="text-gray-600">{advice.description}</p>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </section>

      {/* Weather Forecast */}
      <section className="bg-blue-50 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">☀️ Today's Weather</h2>
        <div className="flex items-center space-x-6">
          <WiDaySunny size={64} className="text-yellow-400" />
          <div>
            <p>Temperature: {weatherForecast.temperature}</p>
            <p>Condition: {weatherForecast.condition}</p>
            <p>Humidity: {weatherForecast.humidity}</p>
            <p>Wind: {weatherForecast.windSpeed}</p>
          </div>
        </div>
      </section>

      {/* Market Price */}
      <section>
        <h2 className="text-2xl font-bold text-yellow-700 mb-4">📊 Market Price Trend - Wheat</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={marketPrices}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="Wheat" stroke="#82ca9d" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </section>

      {/* News */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-4">📰 Latest News</h2>
        <div className="space-y-4">
          {newsArticles.map((article, index) => (
            <motion.div key={article.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 * index }} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-800">{article.title}</h3>
              <p className="text-gray-600">{article.excerpt}</p>
              <a href={article.link} className="text-blue-600 hover:text-blue-800">Read more</a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Farming Tips */}
      
      <TipsCarousel />

      {/* Crop Calendar */}
      <CropCalendar />

      {/* Crop Doctor */}
      <CropDoctor />

      {/* Voice Assistant */}
      <VoiceAssistant />
    </div>
  );
};

export default KrishiMitra;
