const express = require('express')
const router = express.Router()
const ctrl = require('../controller/authcontroller')

// ส่งค่าที่ frontend ต้องการในการ register
router.get("/getregisdata",ctrl.getregisdata)

router.post("/register",ctrl.register)
router.post("/login",ctrl.login)

module.exports = router;