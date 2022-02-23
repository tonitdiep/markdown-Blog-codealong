const express = require('express')
const router = express.Router()
// give us a router to use to vreate views to render something from router 

//export router from module.exports to do this from articles.js
    //need to tell application to use this router
router.get('/new', (req, res) => {
    res.render('articles/new')
})

router.post('/', (req, res) => {
    
})

// ^^want to use this post method to save article to our database
//now need to hook up our databse in our application with requiring 'mongoose'
module.exports = router