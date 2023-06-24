const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "rudrarupam",
});

// CORS configuration
const corsOptions = {
  origin: "https://rudra-roopam.netlify.app/", // Replace with the actual origin of your HTML page
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: "Content-Type,Authorization",
  credentials: true,
};

app.options('/api/data', cors(corsOptions)); 

app.post('/api/data', (req, res) => {
  console.log("body--->",req.body);

  const {
    name,
    age,
    gender,
    contact,
    address,
    image,
    instruments,
    bloodGroup,
    instagram
  } = req.body;
console.log(req.body);
  // Check if the contact already exists in the database
  pool.query('SELECT COUNT(*) AS count FROM users WHERE Contact = ?', [contact])
    .then((result) => {
      const count = result[0][0].count;
      if (count > 0) {
        res.status(400).json({ error: 'Contact already exists' });
      } else {
        // Insert the form data into the database
        pool.query(
          'INSERT INTO users (Name, Age, Gender, Contact, Address, Image, Instruments, blood_group, instagram_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
          [name, age, gender, contact, address, image, instruments, bloodGroup, instagram]
        ).then((results) => {
          console.log('Data inserted successfully');
          res.json({ message: 'Data inserted successfully' });
        }).catch((error) => {
          console.error('Error inserting data:', error);
          res.status(500).json({ error: 'An error occurred while inserting the data' });
        });
      }
    }).catch((error) => {
      console.error('Error checking contact:', error);
      res.status(500).json({ error: 'An error occurred while checking the contact' });
    });
});

// Start server
const PORT = process.env.PORT || 9191;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
