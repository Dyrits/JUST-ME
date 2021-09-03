let { data, tags, categories } = require("../routes/data");
const recent = data.slice(0, 5);

const getHomePage = function(req, res) {
    let options = { title: "Just Me", posts: data, active: "index", categories };
    res.render("index", options);
}

const getBlogPost = function({ params }, res) {
    let post = data.find(post => post.id === Number(params.id));
    post ? res.render("post", { title: post.title, post, tags, recent, categories }) : res.redirect("/404");
}

const getFilteredList = function({ query }, res) {
    let posts = data.filter(post => post.category === query.category || post.tags.includes(query.tag));
    let options = { title: "Just Me - Filtered", active: query.category, posts, categories };
    res.render("filter", options);
}

const get404 = function(req, res) {
    let options = { title: "Not Found", tags, recent, categories };
    res.render("404", options);
}

const redirect404 = function(req, res) {
    res.redirect("/404");
}

const getAbout = function(req, res) {
    let options = { title: "About", active: "about", categories }
    res.render("about", options);
}

const getContact = function(req, res) {
    let options = { title: "Contact", active: "contact", categories }
    res.render("contact", options);
}

module.exports = { getHomePage, getBlogPost, getFilteredList, get404, redirect404, getAbout, getContact };