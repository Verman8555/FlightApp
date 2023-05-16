const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send("Opening");
    console.log("hello");
})

app.listen(5000, () => {
    console.log("gotcha");
})