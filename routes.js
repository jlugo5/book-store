
// Import express router
let Router = require('express').Router()

// Set default api response
Router.get( '/' , (req,res) => {
    res.json( {
        status: "WORKING",
        message: "This is the api route"
    })
})

// Importing Book Controller
var bookController = require('./bookController')

// book routes
Router.route('/books')
        .get(bookController.index)
        .post(bookController.new)

Router.route('/books/:book_id')
        .put(bookController.update)
        .delete(bookController.delete)


// Export API route
module.exports = Router


