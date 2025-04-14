import express, { json } from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(json());

// MySQL Pool
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mdn_devspace',
});

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,         // Your Gmail address
    pass: process.env.GMAIL_APP_PASSWORD, // App password from Gmail
  },
});

// Contact Route
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const sql = 'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)';
  db.query(sql, [name, email, message], (err) => {
    if (err) {
      console.error('Error inserting into DB:', err);
      return res.status(500).json({ message: 'Database error. Try again later.' });
    }

    // Send email notification
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // send to yourself
      subject: '📩 New Contact Message - MDN Devspace',
      text: `New message from ${name} (${email}):\n\n${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('❌ Email send error:', error);
      } else {
        console.log('✅ Email sent:', info.response);
      }
    });

    console.log('✅ Message saved:', { name, email, message });
    return res.status(200).json({ message: 'Message received and saved successfully!' });
  });
});

// Subscribe Route
app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required.' });
  }

  const sql = 'INSERT INTO subscribers (email) VALUES (?)';
  db.query(sql, [email], (err) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ message: 'Email already subscribed.' });
      }
      console.error('Error inserting subscriber:', err);
      return res.status(500).json({ message: 'Failed to subscribe. Please try again later.' });
    }

    // Email notification
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: '📰 New Subscriber - MDN Devspace',
      text: `New subscriber: ${email}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('❌ Subscription email error:', error);
      } else {
        console.log('✅ Subscription email sent:', info.response);
      }
    });
    console.log('GMAIL_USER:', process.env.GMAIL_USER);
    console.log('✅ New subscriber:', email);
    return res.status(200).json({ message: 'Subscribed successfully!' });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});