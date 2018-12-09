const router = require('express').Router()
const ctrl = require('../controller/merchs')

router.get('/', ctrl.getAllMerch)
router.get('/:city', ctrl.getMerchByCity)
router.get('/long/:long/lat/:lat/distance/:radius', ctrl.getOffersByLocation)

module.exports = router
