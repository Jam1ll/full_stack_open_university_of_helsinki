import Country from "./Country";
import Message from "./Message";

const Countries = ({ countries, inputValue }) => {
  console.log("Countries component start");

  //filter data
  const filteredCountries = countries.filter((c) => {
    let common = c.name.common.toLowerCase();
    let official = c.name.official.toLowerCase();
    let value = inputValue.toLowerCase();

    if (inputValue.length === 0) return false;

    return common.includes(value) || official.includes(value); //true
  });

  console.log("filtered countries length: ", filteredCountries.length);

  if (filteredCountries.length > 10) {
    return (
      <Message message={"too many coincidences, please me bore specific."} />
    );
  }

  //create components
  if (filteredCountries.length > 0)
    if (filteredCountries.length === 1) {
      //show more info if it is just one country
      return (
        <ul>
          <Country
            key={filteredCountries[0].cca2}
            country={filteredCountries[0]}
            isOneCountry={true}
          />
        </ul>
      );
    }
  return (
    <ul>
      {filteredCountries.map((c) => (
        <Country key={c.cca2} country={c} isOneCountry={false} />
      ))}
    </ul>
  );
};

export default Countries;
