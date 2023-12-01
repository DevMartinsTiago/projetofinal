const express = require ("express")
const router = express.Router()
const userController = require("../controller/userController")
const userGetController = require("../controller/userGetController")

router.post("/cadastro", userController)
router.get("/cadastros", userGetController)


module.exports = router

