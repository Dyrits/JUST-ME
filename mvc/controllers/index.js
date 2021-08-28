let { data, tags, categories } = require("../routes/data");
const recent = data.slice(0, 5);

const getHomePage = function(req, res) {
    res.render("index", { title: "Just Me", posts: data, active: "index", categories: categories })
}

const getBlogPost = function({ params }, res) {
    let post = data.find(post => post.id === Number(params.id));
    post ? res.render("post", { title: post.title, post: post, tags: tags, recent: recent, categories: categories }) : res.redirect("/404");
}

const getFilteredList = function({ query }, res) {
    let posts = data.filter(post => post.category === query.category);
    res.render("filter", { title: "Just Me - Filtered", active: query.category, posts: posts, categories: categories })
}

const get404 = function(req, res) {
    res.render("404", { title: "Not Found", tags: tags, recent: recent, categories: categories })
}

const redirect404 = function(req, res) {
    res.redirect("/404");
}

const getAbout = function(req, res) {
    res.render("about", { title: "About", active: "about", categories: categories });
}

const getContact = function(req, res) {
    res.render("contact", { title: "Contact", active: "contact", categories: categories });
}

module.exports = { getHomePage, getBlogPost, getFilteredList, get404, redirect404, getAbout, getContact };