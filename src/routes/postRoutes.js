const express = require("express")

const { getAllPosts } = require("../controllers/postController")

const router = express.Router()

router.route("/all").get(getAllPosts)

module.exports = router
