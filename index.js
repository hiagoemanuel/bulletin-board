const express = require('express')

const app = express()
const port = 3000

const posts = [
    {
        id: 'SDawWOnmWR',
        title: 'board test',
        discription: 'this is the dicription'
    }
]

app.get('/all', (req, res) => {
    res.json(JSON.stringify(posts))
})

app.post('/new', (req, res) => {

})

app.listen(port, () => {
    console.clear()
    console.log('[SERVER PORT]:', port)
})