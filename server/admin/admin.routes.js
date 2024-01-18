const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('hello from admin')
})

module.exports = app