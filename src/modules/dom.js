import { getCurrentWeatherData } from "./weather-api";
import { getGif } from "./gif-api";

const input = document.querySelector(".input");
const searchBtn = document.querySelector(".submit");
const weatherContainer = document.querySelector(".weather-container");
const gifContainer = document.querySelector(".gif-container");

function getDisplay() {
  searchBtn.addEventListener("click", () => {
    getCurrentWeatherData(input.value)
      .then((weather) => {
        input.value = "";
        createWeatherWidget(weather);

        return getGif(weather.condition);
      })
      .then((gifUrl) => {
        gifContainer.textContent = "";
        const img = document.createElement("img");
        img.classList.add("gif");
        img.src = gifUrl;
        gifContainer.appendChild(img);
      })
      .catch((error) => {
        alert("Something went wrong: " + error);
      });
  });
}

function createWeatherWidget(weather) {
  weatherContainer.innerHTML = "";

  weatherContainer.classList.add("has-content");

  // Create elements for each weather property
  const cityElement = document.createElement("h3");
  cityElement.textContent = `${weather.cityName}`;

  const countryElement = document.createElement("div");
  countryElement.textContent = `${weather.country}`;

  const conditionElement = document.createElement("div");
  conditionElement.textContent = `${weather.condition}`;

  const conditionIconElement = document.createElement("img");
  conditionIconElement.src = weather.conditionIcon;
  conditionIconElement.alt = "Weather Condition Icon";

  const tempCElement = document.createElement("div");
  tempCElement.textContent = `Temperature (°C): ${weather.temp_c}`;

  const tempFElement = document.createElement("div");
  tempFElement.textContent = `Temperature (°F): ${weather.temp_f}`;

  const feelslikeCElement = document.createElement("div");
  feelslikeCElement.textContent = `Feels Like (°C): ${weather.feelslike_c}`;

  const feelslikeFElement = document.createElement("div");
  feelslikeFElement.textContent = `Feels Like (°F): ${weather.feelslike_f}`;

  const humidityElement = document.createElement("div");
  humidityElement.textContent = `Humidity: ${weather.humidity}`;

  // Append elements to weatherContainer
  weatherContainer.appendChild(cityElement);
  weatherContainer.appendChild(countryElement);
  weatherContainer.appendChild(conditionElement);
  weatherContainer.appendChild(conditionIconElement);
  weatherContainer.appendChild(tempCElement);
  weatherContainer.appendChild(tempFElement);
  weatherContainer.appendChild(feelslikeCElement);
  weatherContainer.appendChild(feelslikeFElement);
  weatherContainer.appendChild(humidityElement);
}

export { getDisplay };
