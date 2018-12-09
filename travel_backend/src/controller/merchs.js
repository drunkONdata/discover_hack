const model = require('../model/merchs')

async function getAllMerch(req, res, next){
  try{
    const response = await model.getAllMerch()
    const resp = response.data.result
    res.status(200).json({
      resp
    })
  } catch (e){
    console.log(e)
    next({status:400, error: 'Unable to find merchants'})
  }
}

async function getMerchByCity(req, res, next){
  try{
    const city = req.params.city
    const type = req.params.type
    const response = await model.getMerchByCity(city, type)
    const resp = response.data.result
    res.status(200).json({
      resp
    })
  } catch (e){
    console.log(e)
    next({status:400, error: 'Unable to find merchants in specified city'})
  }
}

async function getOffersByLocation(req, res, next){
  try{
    const long = req.params.long
    const lat = req.params.lat
    const radius = req.params.radius
    const response = await model.getOffersByLocation(long, lat, radius)
    const resp = response.data.result
    res.status(200).json({
      resp
    })
  } catch (e){
    console.log(e)
    next({status:400, error: 'Unable to find any offers at specified location'})
  }
}

module.exports = {
  getAllMerch,
  getMerchByCity,
  getOffersByLocation
}
