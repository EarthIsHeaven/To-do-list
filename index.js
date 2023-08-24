import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const posts = [];
const anotherPosts = [];

app.get("/", (req, res) => {
    res.render("index.ejs", {
        posts: posts
    });
});

app.get("/another", (req, res) => {
    res.render("another.ejs", {
        anotherPosts: anotherPosts
    });
});

app.post("/submit", (req, res) => {
    const post = {
        task: req.body['newItem']
    }
    posts.push(post);
    res.redirect("/");
})

app.post("/anotherSubmit", (req, res) => {
    const post = {
        task: req.body['newItem']
    }
    anotherPosts.push(post);
    res.redirect("/another");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});