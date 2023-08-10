import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});
app.get("/another", (req, res) => {
    res.render("another.ejs");
});

app.post("/submit", (req, res) => {
    res.render("index.ejs", {
        task: req.body['newItem']
    })
})
app.post("/anotherSubmit", (req, res) => {
    res.render("another.ejs", {
        task: req.body['newItem']
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});