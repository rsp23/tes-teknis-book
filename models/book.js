const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: [true, 'judul tidak boleh kosong']
    },
    author: {
        type: String,
        required: [true, 'penulis tidak boleh kosong']
    },
    year: {
        type: Number,
        max: new Date().getFullYear()
    },
    read: {
        type: Boolean,
        default: false
    }
}, { timestamps: true});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;