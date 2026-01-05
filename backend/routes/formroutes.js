const express = require('express')
const router = express.Router()
const ctrl = require('../controller/formcontroller')

router.get('/getformdata',ctrl.getformdata)
router.get('/checktime',ctrl.checktime)

router.post('/insertep/:id',ctrl.insertep)
router.post('/insertindicator/:id',ctrl.insertindicator)
router.post('/insertform/:id',ctrl.insertform)

router.delete('/deleteep/:id',ctrl.deleteep)
router.delete('/deleteindicator/:id',ctrl.deleteindicator)
router.delete('/deleteform/:id',ctrl.deleteform)

module.exports = router;