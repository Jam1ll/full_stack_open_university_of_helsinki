import Language from "./Language";

const Country = ({ country, isOneCountry }) => {
  console.log("Country component start");

  if (isOneCountry) {
    return (
      <li>
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
        <img
          aria-placeholder={country.name.common}
          src={country.flags.png}
        ></img>
      </li>
    );
  } else {
    return <li>{country.name.common}</li>;
  }
};

export default Country;
