const express = require('express');
const path = require('path');
const bodyp = require('body-parser')
const app = express();
app.use(bodyp.json());
const PORT = 5023;

// Index.html, root html page.
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

// Access other non-root pages.
app.get("/:page", (req, res) => {
    res.sendFile(path.join(__dirname, "public", req.params.page + ".html"));
})

app.get("/file/:f", (req, res) => {
    res.sendFile(path.join(__dirname, "public", req.params.f));
})

// Plus API, returns n + 1 of n being the request parameter.
app.post("/plus", (req, res) => {
    jsonReq = req.body.num;
    try{
        res.json({"plusnum" : jsonReq + 1});
    } catch(e){
        res.send("you must enter a number!")
    }
})

// Start HTTP server.
app.listen(PORT, () => {
    console.log("Listening on PORT " + PORT);
})