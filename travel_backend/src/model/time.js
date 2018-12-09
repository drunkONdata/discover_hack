const axios = require('axios')
const { API_KEY } = process.env

const toAirport = (start, end, mode) => {
  try {
    return axios.get(` 
    https://maps.googleapis.com/maps/api/directions/json?key=${API_KEY}&origin=${start}&destination=${end}&mode=${mode}
    `).then(result => {
        return result.data
      }).catch(console.log)
  } catch (e) {
    console.error(e)
  }
}

module.exports = {
  toAirport
}