const express = require('express')
const posts = require('../model/posts')

const router = express.Router()

router.get('/all', (req, res) => {
    res.json(JSON.stringify(posts.getAll()))
})

router.post('/new', express.json(), (req, res) => {
    const title = req.body.title
    const discription = req.body.discription

    posts.newPost(title, discription)

    res.send('post sent')
})

router.delete('/delete', express.json(), (req, res) => {
    const id = req.body.id

    posts.deletePost(id)

    res.send('post deleted')
})

module.exports = router