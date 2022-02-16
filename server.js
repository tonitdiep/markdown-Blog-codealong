const express = require('express')
const articleRouter = require('./routes/articles.js')
const app = express()

app.set('view engine', 'ejs')
//view engine convert ejs code to html
//ejs -here we will be writing our views using ejs

app.use('/articles', articleRouter)
app.get('/', (req, res) => {
    // res.send('Helloo World, from server.js')
        //try this one where we are rendering to the view files index.ejs w/ the render() method
        //render will pass it to the path we want from the diretory 
    res.render('index')
})
app.listen(5000)

/*
What is happening here? creating our server 
Express.js res.send() function that sends HTTP response
    https://www.geeksforgeeks.org/express-js-res-send-function/

*/