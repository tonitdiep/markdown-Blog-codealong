const express = require('express')
const app = express()

app.set('view engine', 'ejs')
//view engine convert ejs code to html
//ejs -here we will be writing our views using ejs
app.get('/', (req, res) => {
    res.send('Helloo World, from server.js')
})
app.listen(5000)

/*
What is happening here? creating our server 
Express.js res.send() function that sends HTTP response
    https://www.geeksforgeeks.org/express-js-res-send-function/

*/