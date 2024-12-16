import express from 'express';
import dotenv from 'dotenv';
// import morgan from 'morgan';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
// app.use(morgan('dev')); //morgan for logging if needed
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.send('test test welcome');
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend Server running on http://localhost:${PORT}`);
});
