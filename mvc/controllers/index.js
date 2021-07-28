let { data } = require("../routes/data");

const getHomePage = function(req, res) {
    res.render("index", { title: "Just Me", posts: data})
}

const getBlogPost = function({ params }, res) {
    let post = data.find(post => post.id === Number(params.id));
    res.render("post", { title: post.title, post: post })
}

module.exports = { getHomePage, getBlogPost };