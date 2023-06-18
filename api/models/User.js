const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String, required: true, max: 1024, min: 6},
    usn: {type: String, required: true},
    gender: {type: String},
    age: {type: Number},
    mobileNo: {type: String},
    password: {type: String, required: true, max: 1024, min: 6}
});

const User = mongoose.model("User", UserSchema);

module.exports = User;