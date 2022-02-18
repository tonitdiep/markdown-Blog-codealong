const express = require('express')
const router = express.Router()
// give us a router to use to vreate views to render something from router 

//export router from module.exports to do this from articles.js
    //need to tell application to use this router
router.get('/new', (req, res) => {
    res.send('articles/new')
})
module.exports = router