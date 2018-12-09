import axios from 'axios'
const BASE_URL = "http://localhost:3200"

const timeToAirport = async (start, end, mode = 'driving') => {
  let res = await axios.get(`${BASE_URL}/time/toairport?start=${start}&end=${end}&mode=${mode}`, {
  })
  return res
}

async function getFlightInfo(){
  let res = await axios.get(`${BASE_URL}/flight/airline/ua/flight/32`)
  return res.data.flightInfo
}


export default {
  timeToAirport,
  getFlightInfo
}
