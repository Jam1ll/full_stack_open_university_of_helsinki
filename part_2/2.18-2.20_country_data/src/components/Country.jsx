import { useState } from "react";
import Language from "./Language";

const Country = ({ country, isOneCountry }) => {
  console.log("Country component start");

  const [showDetails, setShowDetails] = useState(false);

  const countryData = (
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
    </>
  );

  if (isOneCountry) {
    return <li>{countryData}</li>;
  } else {
    return (
      <li>
        {country.name.common}{" "}
        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "hide" : "show"}
        </button>
        {showDetails ? countryData : null}{" "}
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
