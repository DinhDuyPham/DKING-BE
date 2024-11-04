const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/projects', require('./routes/projectRoutes'));
// app.use('/api/tasks', require('./routes/taskRoutes'));

module.exports = app;
