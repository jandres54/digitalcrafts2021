const http = require('http')

const express = require("express");


const app = express();

const{readFile} = require('fs')

const PORT = 5051;

app.get('/vacations', (req, res) => {
    res.end('apple')
} )

app.get('/', (req, res) => {
    res.end('hello')
} )


app.get('/cat', (req, res) => {
    readFile('cat.html', "UTF-8", (err, html)=> {
        res.send(html)
    })
} )





app.listen(PORT, () => {
    console.log('hello world')
})