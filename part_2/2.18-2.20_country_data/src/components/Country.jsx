import { useEffect, useState } from "react";
import Language from "./Language";
import weatherService from "../services/weatherService";
import Weather from "./Weather";

const Country = ({ country, isOneCountry }) => {
  console.log("Inside Country component");

  const [showDetails, setShowDetails] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  //weather data
  //(as it is an API call, it is async, so a useEffect is recomended)
  useEffect(() => {
    if (showDetails || isOneCountry) {
      const capital = country.capital;

      weatherService
        .getWeatherByCapital({ capital })
        .then((data) => {
          setWeatherData(data);
          console.log("data retrieved", data);
        })
        .catch((error) => console.log(error));
    }
  }, [country, isOneCountry, showDetails]);

  //country data (JavaScript XML (JSX))
  const CountryData = (
    <>
      <h3>{country.name.common}</h3>
      Region: {country.region}
      <br />
      Capital: {country.capital}
      <br />
      Area: {country.area}
      <hr />
      <h4>Languages</h4>
      <ul>
        {country.languages ? (
          Object.values(country.languages).map((l) => (
            <Language key={l} language={l} />
          ))
        ) : (
          <p>no data to display</p>
        )}
      </ul>
      <hr />
      <h4>Flag</h4>
      <img alt={country.name.common} src={country.flags.png}></img>
      <h4>Wheater in {country.capital}</h4>
      {/*we need to avoid sending a null state to Weather
      because it renders before the api call...*/}
      {weatherData ? (
        <Weather weather={weatherData} />
      ) : (
        <p>loading weather data...</p>
      )}
    </>
  );

  if (isOneCountry) {
    //conditional render
    return <li>{CountryData}</li>;
  } else {
    return (
      <li>
        {country.name.common}{" "}
        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "hide" : "show"}
        </button>
        {showDetails ? CountryData : null}
        {/*if it is false, it shows nothing
        if(showDetails == true){
        return CountryData
        }else{
        return null}*/}
      </li>
    );
  }
};

export default Country;
