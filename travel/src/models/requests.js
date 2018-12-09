import axios from 'axios'
const BASE_URL = "http://localhost:3200"

const timeToAirport = async (start, end, mode = 'driving') => {
  let res = await axios.get(`${BASE_URL}/time/toairport?start=${start}&end=${end}&mode=${mode}`, {
  })
  return res 
}


export default {
  timeToAirport
}