const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()

app.set('view engine', 'ejs')
//view engine convert ejs code to html
//ejs -here we will be writing our views using ejs

app.use('/articles', articleRouter)
app.get('/', (req, res) => {
    // res.send('Helloo World, from server.js')
        //try this one where we are rendering to the view files index.ejs w/ the render() method
        //render will pass it to the path we want from the diretory 
        const articles = [{
            title: 'Test Article', 
            createdAt: Date.now(),
            description: 'Test description'
        },
        {
            title: 'Test Article 2', 
            createdAt: Date.now(),
            description: 'Test description 2'
        }]
    //    ^ set it to an array w/ one object inside ^
        res.render('index', {articles: articles})
        //passing articles to the view articles.js ^^
})
app.listen(5000)

/*
What is happening here? creating our server 
Express.js res.send() function that sends HTTP response
    https://www.geeksforgeeks.org/express-js-res-send-function/

*/