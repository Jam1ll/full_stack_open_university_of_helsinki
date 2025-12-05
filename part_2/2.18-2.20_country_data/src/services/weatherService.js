import axios from "axios";

const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = import.meta.env.VITE_WEATHER_APIKEY;
//to hide apikey and restart the app:
//($env:VITE_WEATHER_APIKEY="HERE_GOES_THE_KEY") -and (npm run dev)

const getWeatherByCapital = ({ capital }) => {
  console.log("inside getWeatherCapital from weatherService.js");
  return axios
    .get(`${baseUrl}?q=${capital}&appid=${apiKey}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export default { getWeatherByCapital };
