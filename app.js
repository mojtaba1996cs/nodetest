const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
app.get('/', (req, res) => {
 res.sendFile("./views/home.html", {root: __dirname});
})
mongoose.connect("mongodb+srv://taboodb:mojaba1996cs2@cluster0.ursadu6.mongodb.net/?appName=Cluster0").then(() => {
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
 })
 .catch((err) => {
   console.log(err);
 });
