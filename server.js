//jshint esversion:6

const express = require('express')
const https = require('https')
const app = express()

app.listen(3000, () => {
    console.log("Server start")
})

app.get('/', (req, res) => {
    console.log(req)
    let url = 'https://www.npmjs.com/package/axios'
    https.get(url, (res) => {
        console.log(res)
    })
})