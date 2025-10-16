const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const dbURL = process.env.MONGODB_URI;

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Failed to connect to MongoDB', err));

app.get('/', (req, res) => {
    res.send("hallo kamu berhasil");
});


app.use('/books', bookRoutes);

module.exports = app;


