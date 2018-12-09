const model = require('../model/time')

// /time/to_airport?start=''&end='' 

const splitAdd = (str) => {
  let result = str
  if (str.split(' ').length > 1) {
    result = str.split(' ').join('+')
  }
  return result
}

/* 
{
    "distance": "1,139 mi",
    "duration": "17 hours 23 mins"
}
*/

const toAirport = async (req, res, next) => {
  try {
    let start = splitAdd(req.query.start)
    let end = splitAdd(req.query.end)
    let mode = req.query.mode || 'driving'
    let result = await model.toAirport(start, end, mode)
    let distance = result.routes[0].legs[0].distance.text
    if (distance.indexOf(',') > 0) {
      let idx = distance.indexOf(',')
      distance = parseFloat(distance.slice(0, idx) + distance.slice(idx + 1))
    } else {
      distance = parseFloat(distance)
    }
    let duration = result.routes[0].legs[0].duration.text

    if (duration.includes('hours')) {
      let hours = duration.split(' ')[0]
      let mins = duration.split(' ')[2]
      duration = parseInt(hours)*60 + parseInt(mins)
    } else {
      let mins = duration.split(' ')[0]
      duration = parseInt(mins)
    }

    res.send({ distance, duration })
  } catch (e) {
    console.error(e)
    next({ status: 404, error: `Distance and time to airport could not be estimated` })
  }
}

// extra time: 
// check-in - TSA: 2 mins
// before counter closes: 60 mins 
// walk from security gate: 2 - 3 mins 



module.exports = {
  toAirport
}