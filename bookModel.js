
// Importing mongoose
const mongoose = require('mongoose')

// Creating s Schema
var bookSchema = mongoose.Schema( {
    title:{
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: String,
    add_date:{
        type: Date,
        default: Date.now
    }
} )

// Export Book model
var Book = module.exports = mongoose.model( "books",bookSchema)

// DB
module.exports.get = (callback, limit) => {
    Book.find(callback).limit(limit)
}
