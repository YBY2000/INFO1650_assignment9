// /backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        // Add your email validation logic here
      },
      message: 'Invalid email format',
    },
  },
  password: {
    type: String,
    required: true,
    // Add your password validation logic here
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
