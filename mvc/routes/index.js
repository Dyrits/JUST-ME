const express = require('express');
const router = express.Router();

const controller = require("../controllers/index");

router.get('/', controller.getHomePage);

router.get("/posts/:id", controller.getBlogPost);

module.exports = router;
