

const Book = require('../models/book');

const createBook = (req, res) => {
    const book = new Book(req.body);
    console.log('Request Body:', req.body);

    book.save()
        .then(result => {
            res.status(201).json({
                message: 'Buku berhasil ditambahkan',
                data: result
            });
        })
        .catch(err => {
            res.status(400).json({
                message: 'Gagal menambahkan buku',
                error: err.message
            });
        });
};

const allBooks = (req, res) => {
    Book.find().sort({ createdAt: -1})
        .then(books => {
            res.status(200).json({
                message: 'Berhasil mengambil data buku',
                data : books
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Gagal mengambil buku',
                error: err.message
            });
        });
};

const getBookById = (req, res) => {
    const { id } = req.params;

    Book.findById(id)
        .then(book => {
            if(!book){
                return res.status(400).json({
                    message: 'Buku tidak ada'
                });

            }

            res.status(200).json({
                message: 'Buku berhasil ditemukan',
                data: book
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Gagal mengambil buku',
                error: err.message
            });
        });
}

const deleteBook = (req, res) =>{
    const { id } = req.params;

    Book.findByIdAndDelete(id)
        .then(result => {
            if(!result){
                return res.status(400).json({
                    message: 'Buku tidak ada'
                });
            }

            res.status(200).json({
                message: 'Berhasil hapus',
                data: result
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'gagal hapus',
                error: err.message
            });
        });
};


const updateBook = (req, res) => {
    const { id } = req.params;

    Book.findByIdAndUpdate(id, req.body, {new: true, runValidators: true})
        .then(updated => {
            if(!updated){
                return res.status(404).json({
                    message: 'Buku tidak ditemukan'
                });
            }

            res.status(200).json({
                message: 'Buku berhasil diupdate',
                data: updated
            });
        })
        .catch(err => {
            res.status(400).json({
                message: 'gagal memperbarui buku',
                error: err.message
            });
        });
};


module.exports = {
    createBook,
    allBooks,
    getBookById,
    deleteBook,
    updateBook
};