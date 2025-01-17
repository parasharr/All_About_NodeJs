const express = require('express')
require('dotenv').config()
const app = express()
const port = 80

app.get("/", (req, res)=> {
    res.send("Hello World!")
})
app.get("/about", (req, res)=> {
    res.send("You are in about page");
})
app.get("/login", (req, res)=> {
    res.send('<h1>Please Login to your account</h1>')
})
app.get("/chai", (req, res)=> {
    res.send('<h2>Chai aur code</h2>')
})

app.listen(process.env.PORT, ()=> {
    console.log(`Example app listening on port ${port}`);
})