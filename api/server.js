// /backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost/userDB', { useNewUrlParser: true }); 
mongoose.connection
.once("open", () => console.log('Connected')) 
.on("error", error => {
    console.log("MongoDB Error: " + error);
})
app.use(bodyParser.json());
app.use('/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
