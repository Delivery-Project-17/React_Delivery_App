const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // Import body-parser for parsing request body

app.use(cors());
app.use(bodyParser.json()); // Parse JSON-encoded bodies

// Connect to MongoDB
mongoose.connect("mongodb+srv://ash:password1708@deliveryapp.rpfc5qz.mongodb.net/?retryWrites=true&w=majority&appName=DeliveryApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected');
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});

// Define schema and model for Captain (if not already defined)
const Captain = require('./models/captainModel');

// Define route to handle POST request from React frontend
app.post('/captain', async (req, res) => {
  try {
    const { name, from, to, date, time, medium } = req.body;
    
    // Create a new Captain document
    const newCaptain = new Captain({
      name,
      from,
      to,
      date,
      time,
      medium
    });

    // Save the new Captain document to MongoDB
    await newCaptain.save();

    res.status(201).json({ message: 'Captain details saved successfully' });
  } catch (error) {
    console.error('Error saving captain details:', error);
    res.status(500).json({ message: 'Failed to save captain details', error });
  }
});

app.get('/', (req, res)=>{
    res.send('hi');
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});
