import axios from 'axios'
const BASE_URL = "http://localhost:3200"

async function getFlightInfo(airline, flightNumber){
  let res = await axios.get(`${BASE_URL}/flight/airline/${airline}/flight/${flightNumber}`)
  return res.data.flightInfo
}
async function getMerchantInfo(city, type){
  let res = await axios.get(`${BASE_URL}/merchs/${city}/${type}`)
  return res.data
}

const timeToAirport = async (start, end, mode = 'driving') => {
  let res = await axios.get(`${BASE_URL}/time/toairport?start=${start}&end=${end}&mode=${mode}`)
  return res.data
}


export default {
  timeToAirport,
  getFlightInfo,
  getMerchantInfo
}
