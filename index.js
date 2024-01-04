const express = require('express')
const posts = require('./model/posts')

const app = express()
const port = 3000

app.get('/all', (req, res) => {
    console.log(posts.getAll())
    res.json(JSON.stringify(posts.getAll()))
})

app.post('/new', express.json(), (req, res) => {
    const title = req.body.title
    const discription = req.body.discription

    posts.newPost(title, discription)

    res.send('post sent')
})

app.delete('/delete', express.json(), (req, res) => {
    const id = req.body.id

    posts.deletePost(id)

    res.send('post deleted')
})

app.listen(port, () => {
    console.clear()
    console.log('[SERVER PORT]:', port)
})
