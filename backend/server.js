import express, { json } from 'express';
import cors from 'cors';
import mysql from 'mysql2';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(json());

// Create MySQL pool
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mdn_portfolio',
});

// API route to receive contact form data
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const sql = 'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)';
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error('Error inserting into DB:', err);
      return res.status(500).json({ message: 'Database error. Try again later.' });
    }

    console.log('✅ Message saved:', { name, email, message });
    return res.status(200).json({ message: 'Message received and saved successfully!' });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});