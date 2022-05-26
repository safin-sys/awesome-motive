const express = require("express")
const app = express()

app.get("/", (req, res) => {
    console.log("here")
    res.json({ sex: "good" })
})
app.listen(3000)