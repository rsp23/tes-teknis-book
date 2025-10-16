const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const dbURL = process.env.MONGODB_URI;

mongoose.connect(dbURL)
.then(() => {
    console.log("Berhasil konek mongodb");
    app.listen(port, ()=> {
        console.log(`server berjalan di ${port}`);
    });
})
.catch(err => console.log("gagal terhubung dengan database mongo db", err));

app.get('/', (req, res) => {
    res.send("hallo kamu berhasil");
});


app.use('/books', bookRoutes);


