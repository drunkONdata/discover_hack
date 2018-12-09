const axios = require('axios')
const GUIDE_BASE_URL = 'https://api.discover.com/cityguides/v2/merchants';
const OFFER_BASE_URL = 'https://api.discover.com/dci-offers/v2/offers'
const token = '04f28ff9-8f93-437d-b2e9-f664086f2509';

function getAllMerch(){
  const queryParams = '?' +  encodeURIComponent('card_network') + '=' + encodeURIComponent('DCI')+ '&' +  encodeURIComponent('has_privileges') + '=' + encodeURIComponent('false')+ '&' +  encodeURIComponent('sortby') + '=' + encodeURIComponent('name')+ '&' +  encodeURIComponent('sortdir') + '=' + encodeURIComponent('asc');
  return axios.get(`${GUIDE_BASE_URL}${queryParams}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'x-dfs-api-plan': 'CITYGUIDES_SANDBOX'
    }
  })
}

function getMerchByCity(city, type){
  const queryParams = '?' +  encodeURIComponent('card_network') + '=' + encodeURIComponent('DCI')+ '&' +
  encodeURIComponent('merchant_city') + '=' +
  encodeURIComponent(`${city}`) + '&' +
  encodeURIComponent('merchant_category') + '=' +
  encodeURIComponent(`${type}`) + '&' +
  encodeURIComponent('has_privileges') + '=' + encodeURIComponent('false')+ '&' +  encodeURIComponent('sortby') + '=' + encodeURIComponent('name')+ '&' +  encodeURIComponent('sortdir') + '=' + encodeURIComponent('asc');
  return axios.get(`${GUIDE_BASE_URL}${queryParams}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'x-dfs-api-plan': 'CITYGUIDES_SANDBOX'
    }
  })
}

function getOffersByLocation(long, lat, radius){
  const queryParams = '?' +  encodeURIComponent('lat') + '=' + encodeURIComponent(`${lat}`)+ '&' +  encodeURIComponent('lng') + '=' + encodeURIComponent(`${long}`)+ '&' +  encodeURIComponent('radius') + '=' + encodeURIComponent(`${radius}`)+ '&' +  encodeURIComponent('lang') + '=' + encodeURIComponent('en')+ '&' +  encodeURIComponent('sortdir') + '=' + encodeURIComponent('asc');
  return axios.get(`${OFFER_BASE_URL}${queryParams}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'x-dfs-api-plan': 'DCIOFFERS_SANDBOX'
    }
  })
}

module.exports = {
  getAllMerch,
  getMerchByCity,
  getOffersByLocation
}
