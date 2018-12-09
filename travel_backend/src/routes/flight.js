const router = require('express').Router()
const ctrl = require('../controller/flight')

router.get('/airline/:airline/flight/:flightNumber/:dateString', ctrl.getFlightInfo)

module.exports = router
