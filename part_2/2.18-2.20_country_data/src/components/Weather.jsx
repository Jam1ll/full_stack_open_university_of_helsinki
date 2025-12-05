const Weather = ({ weather }) => {
  console.log("inside Weather component", weather.weather[0].description);
  const degrees = weather.main.temp - 273.15;
  return (
    <>
      Temperature: {degrees.toFixed(2)}°C
      <br />
      <img
        alt={weather.weather[0].description}
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
      ></img>
      <br />
      Wind: {weather.wind.speed}m/s
    </>
  );
};

export default Weather;
