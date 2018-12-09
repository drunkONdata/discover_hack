const axios = require('axios')
const BASE_URL = 'https://flightlookup.azure-api.net/v1/xml/TimeTable/LAX/NRT/20181210';
const API_KEY ='c3d6674425ac412f91a87109e85b49d3';

function getFlightInfo(airline, flightNumber){
  const queryParams = '?' +  encodeURIComponent('Airline') + '=' + encodeURIComponent(`${airline}`)+ '&' +  encodeURIComponent('FlightNumber') + '=' + encodeURIComponent(`${flightNumber}`);
  return axios.get(`${BASE_URL}${queryParams}`, {
    headers:{
      'Ocp-Apim-Subscription-Key':`${API_KEY}`
    }
  })
}

module.exports = {
  getFlightInfo
}
