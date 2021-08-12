let { data } = require("../routes/data");

const getHomePage = function(req, res) {
    res.render("index", { title: "Just Me", posts: data, active: "index"})
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

const getAbout = function(req, res) {
    res.render("about", { title: "About", active: "about" });
}

const getContact = function(req, res) {
    res.render("contact", { title: "Contact", active: "contact" });
}

module.exports = { getHomePage, getBlogPost, get404, redirect404, getAbout, getContact };