// Importing express
const express = require('express')

// Importing Route
let apiRoute = require('./routes')

// Importing mongoose and body parser
let mongoose = require('mongoose'),
    bodyParser = require('body-parser')

// Initializing app
const app = express()

// Config body parser to handle request
app.use( bodyParser.urlencoded( { extended: true } ))

// Config for json parsing
app.use( bodyParser.json())

// Setting port number
const PORT = process.env.port || 3000

// Listening to port
app.listen(PORT, ()=>console.log("Server started on port: " + PORT))

// Sening massage for defualt route
app.get('/' , (req,res) => {
    res.send('Express is running successfully')
})

// API Route
app.use( '/api', apiRoute )

const connectionStr = 'mongodb+srv://jlugo:xbox2701@cluster0.mme34.mongodb.net/book-store?retryWrites=true&w=majority'

// Connect mongoDB
mongoose
    .connect( connectionStr,() => console.log("Connected to DB") )


