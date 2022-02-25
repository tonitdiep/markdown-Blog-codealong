const express = require('express')
const Article = require('./../models/article')
const router = express.Router()
// give us a router to use to vreate views to render something from router 

//export router from module.exports to do this from articles.js
    //need to tell application to use this router
router.get('/new', (req, res) => {
    res.render('articles/new', { article: new Article() })
    //blank new default article
})

router.get('/:id', async (req, res) => {
    //article rendering forever so now add code to make it do something
    const article = await Article.findById(req.params.id)
    if (article == null) res.redirect('/')
    res.render('articles/show', { article: article})    //id of our new created model 

})
//async function using async and await 
router.post('/', async (req, res) => {
    let article = new Article({
        //we neeed to tell Express how to access article
       title: req.body.title,
       description: req.body.description,
       markdown: req.body.markdown
    })
    try{
        article = await article.save() 
        
        res.redirect(`/articles/${article.id}`)
    } catch (e) {
        console.log(e)
        res.render('articles/new', { article: article })
        
    }
         
})

// ^^want to use this post method to save article to our database
//now need to hook up our databse in our application with requiring 'mongoose'
module.exports = router