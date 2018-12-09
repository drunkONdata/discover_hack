import axios from 'axios'
const BASE_URL = "http://localhost:3200"

async function getFlightInfo(airline, flightNumber){
  let res = await axios.get(`${BASE_URL}/flight/airline/${airline}/flight/${flightNumber}`)
  return res.data.flightInfo
}

const timeToAirport = (start, end, mode = 'driving') => {
  return axios.get(`${BASE_URL}/time/toairport?start=${start}&end=${end}&mode=${mode}`)
    .then(result => result)
    .catch(console.log)
  }


export default {
  timeToAirport,
  getFlightInfo
}
