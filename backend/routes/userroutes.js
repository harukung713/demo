const express = require('express')
const router = express.Router()
const upload = require('../middleware/upload')
const ctrl = require('../controller/usercontroller')

router.get('/getformuser/:id',ctrl.getformuser)
router.get('/getuserresult/:id',ctrl.getuserresult)

router.post('/insertresult/:id',upload.single('file'),ctrl.insertresult)
router.post('/uploadtest',upload.single('file'),ctrl.uploadtest)

module.exports = router;    