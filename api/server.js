require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'src')));

const database = async () => {
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
  
    try {
      await mongoose.connect(
        process.env.DB_CONNECTION,
        connectionParams
      );
      console.log("Connected to MongoDB");
    } catch (error) {
      console.log("Connection to MongoDB failed:", error);
    }
};

database();

const User = require("./models/User.js");

app.post('/loggedin', async (req, res) => {

    console.log(req.body);
    const { usn, password } = req.body;
  
    try {
      const user = await User.findOne({ usn: usn });
      if (!user) {
        // User with the provided USN not found   
        return res.status(404).json({ message: 'User not found' });
      }
  
      if (user.password !== password) {
        // Incorrect password
        return res.status(401).json({ message: 'Incorrect password' });
      }
      // User found and password matched
      return res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      console.log('Error:', error);
      return res.status(500).json({ message: 'Server error' });
    }
  });



app.listen(3002, () =>  {
    console.log("server is listening")
});
