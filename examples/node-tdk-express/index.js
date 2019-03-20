const express = require('express')
const app = express()
const port = 3000
const ejs = require('ejs')
const nodetdk = require("node-tdk")

app.engine('.ejs', ejs.__express);
app.set('views', __dirname + '/views');

app.get('/', (req, res) => res.render("./index.ejs"))

app.post('/api/:word', async (req, res) => {
    try {
        res.json(await nodetdk(req.params.word))
    } catch (error) {
        res.json({ "error": error })
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))