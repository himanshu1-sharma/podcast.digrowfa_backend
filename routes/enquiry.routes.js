const express = require("express")
const router = express.Router()
const Controller = require("../controllers/Enquiry.controller")

router.post("/", Controller.enquiry)
router.get("/", Controller.getAllEnquires)

module.exports = router