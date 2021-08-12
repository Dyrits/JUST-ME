const express = require('express');
const router = express.Router();

const controller = require("../controllers/index");

router.get('/', controller.getHomePage);

router.get("/posts/:id", controller.getBlogPost);

router.get("/404", controller.get404);

router.get("/about", controller.getAbout);

router.get("/contact", controller.getContact);

router.get("*", controller.redirect404);

module.exports = router;
