// Importing Book model
Book = require('./bookModel')


// Handling index action

// getting all books
exports.index= (req,res) => {
    Book.get( (err, books) => {
        if(err){
            res.json({
                status: "Error",
                message: err
            })
        }
        res.json({
            status: "Success",
            message: "Books retrived successfully",
            data: books
        })
    })
}

// Handle Create book action
exports.new = (req, res) => {
    var book = new Book()
    book.title = req.body.title
    book.author = req.body.author
    book.genre = req.body.genre

    book.save( err => {
        if(err){
            res.json(err)
        }
        res.json({
            message: "New Book created",
            data: book
        })
    })
}

// Handle Update book action
exports.update = ( req, res ) =>{
    let book = {}
    if(req.body.title) book.title = req.body.title
    if(req.body.author) book.author = req.body.author
    if(req.body.genre) book.genre = req.body.genre

    book = {$set: book}

    Book.update({_id: req.params.book_id}, book)
    .then( res.json(book))
    .catch( err => console.error(err))
}

//Handle Delete book action
exports.delete = ( req, res ) => {
    Book.remove({_id: req.params.book_id})
    .then( res.json("Book Deleted"))
    .catch( err => console.error(err))
}

