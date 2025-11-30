import { useState, useEffect } from "react";
import countryService from "./services/countryService";
import Countries from "./components/Countries";

const App = () => {
  //
  // hooks
  //

  //data
  const [countryData, setCountryData] = useState([]);

  //form
  const [inputValue, setInputValue] = useState("");

  //
  //useEffect
  //
  useEffect(() => {
    countryService
      .getAllCountries()
      .then((countries) => {
        if (countries) setCountryData(countries);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <h2>Country data</h2>
      country: <input value={inputValue} onChange={handleInputChange} />
      <hr />
      <Countries countries={countryData} inputValue={inputValue} />
    </>
  );
};

export default App;
