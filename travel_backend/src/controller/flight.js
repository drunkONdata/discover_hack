const model = require('../model/flight')
var convert = require('xml-js')

async function getFlightInfo(req, res, next){
  try{
    const airline = req.params.airline
    const flightNumber = req.params.flightNumber
    const dateString = req.params.dateString || 20181210;
    const response = await model.getFlightInfo(airline, flightNumber)
    var options = {compact:true}
    const resp = convert.xml2js(response.data, options);
    const flightInfo = resp.OTA_AirDetailsRS.FlightDetails._attributes

    res.status(200).json({
      flightInfo
    })
  } catch (e){
    console.log(e)
    next({status:400, error: 'Unable to find flight info'})
  }
}

module.exports = {
  getFlightInfo
}
