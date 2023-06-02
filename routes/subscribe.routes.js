const express = require("express")
const router = express.Router()
const Controller = require("../controllers/Subscribe.controller")

router.post("/", Controller.subscribeNews)
router.get("/", Controller.getAllSubscribeNews)

module.exports = router