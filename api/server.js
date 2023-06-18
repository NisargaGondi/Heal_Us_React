require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

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

app.get('/user', async (req, res) => {
    const user = await User.find();
    res.json(user);
});

app.post('/user/new', async (req, res) => {

    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        usn: req.body.usn,
        gender: req.body.gender,
        age: req.body.age,
        mobileNo: req.body.mobileNo,
        password: req.body.password,        
    });

    await user.save();

    res.json(user);
});

app.delete('/user/delete/:id', async (req, res) => {

    const userdel = await User.findByIdAndDelete(req.params.id);

    res.json(userdel);
});


app.listen(3001, () =>  {
    console.log("server is listening")
});

// mongoose.connect("mongodb+srv://gauriramabhadran:Divya@20031234@cluster0.bv50ulh.mongodb.net/", { useNewUrlParser: true }, () =>
//   console.log("Connected to mongodb")
// );