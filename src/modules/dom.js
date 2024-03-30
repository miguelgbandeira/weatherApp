import { getCurrentWeatherData } from "./modules/weather-api";
import { getGif } from "./modules/gif-api";

const input = document.querySelector(".input");
const searchBtn = document.querySelector(".search");
const weatherContainer = document.querySelector(".weather-container");

function getDisplay() {
  console.log("hello");
  searchBtn.addEventListener("click", () => {
    getCurrentWeatherData(input.textContent)
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
