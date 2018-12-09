const axios = require('axios')
const BASE_URL = 'https://flightlookup.azure-api.net/v1/xml/TimeTable/LAX/NRT';
const API_KEY ='04f28ff9-8f93-437d-b2e9-f664086f2509';

function getFlightInfo(dateString, airline, flightNumber){
  const queryParams = '?' +  encodeURIComponent('Airline') + '=' + encodeURIComponent(`${airline}`)+ '&' +  encodeURIComponent('FlightNumber') + '=' + encodeURIComponent(`${flightNumber}`);
  return axios.get(`${BASE_URL}/${dateString}${queryParams}`, {
    headers:{
      'Ocp-Apim-Subscription-Key':`${API_KEY}`
    }
  })
}

module.exports = {
  getFlightInfo
}
