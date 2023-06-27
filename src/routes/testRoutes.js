const express = require("express")

const { testFunction } = require("../controllers/testController.js")

const router = express.Router()

router.route("/test").get(testFunction)

module.exports = router
