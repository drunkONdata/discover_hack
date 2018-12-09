const router = require('express').Router()
const ctrl = require('../controller/time')

router.get('/toairport', ctrl.toAirport)

module.exports = router