const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

//connecting our database
// mongoose.connect('mongodb://localhost/blog',  
    // { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect('mongodb://127.0.0.1/blog')

app.set('view engine', 'ejs')
//view engine convert ejs code to html
//ejs -here we will be writing all our views using ejs


// app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    // res.send('Helloo World, from server.js')
        //try this one where we are rendering to the view files index.ejs w/ the render() method
        //render will pass it to the path we want from the diretory 
    //index route/main route    
        const articles = [{
            title: 'Test Article', 
            createdAt: new Date(),
            description: 'Test description'
        },
        {
            title: 'Test Article 2', 
            createdAt: new Date(),
            description: 'Test description 2'
        }]
    //    ^ set it to an array w/ one object inside ^
        res.render('articles/index', {articles: articles})
        //hooks up the view
        //passing articles to the view articles.js ^^
})

app.use('/articles', articleRouter)

app.listen(5000)

/*
What is happening here? creating our server 
Express.js res.send() function that sends HTTP response
    https://www.geeksforgeeks.org/express-js-res-send-function/

*/