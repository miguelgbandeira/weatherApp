import { getCurrentWeatherData } from "./weather-api";
import { getGif } from "./gif-api";

const input = document.querySelector(".input");
const searchBtn = document.querySelector(".submit");
const weatherContainer = document.querySelector(".weather-container");

function getDisplay() {
  searchBtn.addEventListener("click", () => {
    getCurrentWeatherData(input.textValue)
      .then((weather) => {
        return getGif(weather.condition);
      })
      .then((gifUrl) => {
        const img = document.createElement("img");
        console.log(gifUrl);
        img.src = gifUrl;
        weatherContainer.appendChild(img);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
}

export { getDisplay };
