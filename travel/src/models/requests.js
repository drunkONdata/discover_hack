import axios from 'axios'
const BASE_URL = "http://localhost:3200"

async function getFlightInfo(airline, flightNumber){
  let res = await axios.get(`${BASE_URL}/flight/airline/${airline}/flight/${flightNumber}`)
  return res.data.flightInfo
}

const timeToAirport = async (start, end, mode = 'driving') => {
  let res = await axios.get(`${BASE_URL}/time/toairport?start=${start}&end=${end}&mode=${mode}`)
  return res.data 
  }


export default {
  timeToAirport,
  getFlightInfo
}
