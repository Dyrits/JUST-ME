let { data } = require("../routes/data");

const getHomePage = function(req, res) {
    res.render("index", { title: "Just Me", posts: data})
}

const getBlogPost = function({ params }, res) {
    let post = data.find(post => post.id === Number(params.id));
    post ? res.render("post", { title: post.title, post: post }) : res.redirect("/404");
}

const get404 = function(req, res) {
    res.render("404", { title: "Not Found" })
}

const redirect404 = function(req, res) {
    res.redirect("/404");
}

module.exports = { getHomePage, getBlogPost, get404, redirect404 };