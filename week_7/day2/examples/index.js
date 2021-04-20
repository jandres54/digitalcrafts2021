const http = require('http')
const bodyParser = require("body.parser")
const express = require("express");
const app = express();

app.use(bodyParser.urlencoder({
    extended: true
}))

app.use(bodyParser.json())
app.use(bodyParser.raw())

const{readFile} = require('fs')
const PORT = 3052;

app.get('/', (req, res) => {
    res.end("hello backend")
} )

app.get('/FAQ', (req, res) => {
    res.end("what's up")
} )

app.get('/about', (req, res) => {
    res.end('about info')
} )

app.get('/team', (req, res) => {
    res.end('digitalcrafts')
} )

app.listen(PORT, () => {
    console.log('hello world')
})