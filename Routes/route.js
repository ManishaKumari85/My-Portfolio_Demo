const express = require("express")
const { sendEmailController } = require("../controller/controller")
const router = express.Router()


router.post("/sendEmail",sendEmailController)


module.exports = router