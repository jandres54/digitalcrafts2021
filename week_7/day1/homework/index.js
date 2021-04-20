const http = require('http')

const express = require("express");


const app = express();

const{readFile} = require('fs')

const PORT = 3052;



app.get('/', (req, res) => {
    res.end('hello')
} )


app.listen(PORT, () => {
    console.log('hello world')
})