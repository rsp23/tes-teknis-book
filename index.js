const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const port = 3000;

app.use(express.json());

const dbURL = 'mongodb+srv://belajar-nodejs:belajarnodejs@cluster0.jkunq95.mongodb.net/Tes?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(dbURL)
.then(() => {
    console.log("Berhasil konek mongodb");
    app.listen(port, ()=> {
        console.log(`server berjalan di http://localhost:${port}`);
    });
})
.catch(err => console.log("gagal terhubung dengan database mongo db", err));

app.get('/', (req, res) => {
    res.send("hallo kamu berhasil");
});


app.use('/books', bookRoutes);


