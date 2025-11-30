import axios from "axios";
const baseUrl = `https://studies.cs.helsinki.fi/restcountries`;

//
// endpoints
//

const getAllCountries = () => {
  const request = axios.get(`${baseUrl}/api/all`);
  return request.then((response) => response.data);
};

const getCountryByName = (countryName) => {
  const request = axios.get(`${baseUrl}/api/name/${countryName}`);
  return request.then((response) => response.data);
};

export default {
  getAllCountries,
  getCountryByName,
};
