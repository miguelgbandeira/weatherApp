import { getCurrentWeatherData } from "./modules/weather-api";
import { getGif } from "./modules/gif-api";

getCurrentWeatherData("lisbon")
  .then((weather) => {
    console.log(weather.condition);
    return getGif(weather.condition);
  })
  .then((gifUrl) => {
    console.log(gifUrl);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
