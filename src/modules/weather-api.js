const api_key = "9fd6ac1f89184d86976231049242903";

async function getCurrentWeatherData(city) {
  const apiData = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`
  );
  const dataJson = await apiData.json();
  const current = dataJson.current;
  const cityName = dataJson.location.name;
  const country = dataJson.location.country;
  const condition = current.condition.text;
  const temp_c = current.temp_c;
  const temp_f = current.temp_f;
  const humidity = current.humidity;
  const feelslike_c = current.feelslike_c;
  const feelslike_f = current.feelslike_f;

  return {
    cityName,
    country,
    condition,
    temp_c,
    temp_f,
    humidity,
    feelslike_c,
    feelslike_f,
  };
}

export { getCurrentWeatherData };
