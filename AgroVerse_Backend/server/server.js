const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const uploadRoute = require('./routes/upload');
app.use('/api/upload', uploadRoute);
const wishlistRoutes = require('./routes/wishlist');
app.use('/api/wishlist', wishlistRoutes);
const orderRoutes = require('./routes/orders');
app.use('/api/orders', orderRoutes);



app.use('/uploads', express.static('uploads'));


const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const rentalRoutes = require('./routes/rentals');
const advisoryRoutes = require('./routes/advisory');
const orderRoutes = require('./routes/orders');
const cartRoutes = require('./routes/cart');
app.use('/api/cart', cartRoutes);

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/rentals', rentalRoutes);
app.use('/api/advisory', advisoryRoutes);
app.use('/api/orders', orderRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(process.env.PORT || 5000, () => {
            console.log('Server running...');
        });
    })
    .catch(err => console.log(err));