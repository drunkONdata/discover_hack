import axios from 'axios'
const BASE_URL = "http://localhost:3200"

async function getFlightInfo(){
  let res = await axios.get(`${BASE_URL}/flight/airline/ua/flight/32`)
  return res.data.flightInfo

  const timeToAirport = (start, end, mode = 'driving') => {
  return axios.get(`${BASE_URL}/time/toairport?start=${start}&end=${end}&mode=${mode}`)
    .then(result => result)
    .catch(console.log)
  }


export default {
  timeToAirport,
  getFlightInfo
}
