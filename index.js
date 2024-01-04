const express = require('express')
const apiRouter = require('./routes/api')
const path = require('path')

const app = express()
const port = 3000

app.use('/api', apiRouter)
app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.clear()
    console.log('[SERVER PORT]:', port)
})
