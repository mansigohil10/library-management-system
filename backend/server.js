const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/config');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const borrowRoutes = require('./routes/borrowRoutes');
const errorHandler = require('./middlewares/errorMiddleware');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/borrow', borrowRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
