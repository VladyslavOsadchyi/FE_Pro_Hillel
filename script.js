const API_KEY = "320e5be2fc9b1ae2784bd15fc931c204";
const CITY = "Kyiv";

const temperatureEl = document.getElementById("temperature");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const pressureEl = document.getElementById("pressure");
const descriptionEl = document.getElementById("description");
const iconEl = document.getElementById("icon");
const refreshBtn = document.getElementById("refresh");
const datetimeEl = document.getElementById("datetime");

async function getWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&lang=ru&appid=${API_KEY}`,
      { method: "GET" },
    );

    if (!response.ok) {
      throw new Error("Ошибка запроса");
    }

    const data = await response.json();

    function formatDate(unixTime, timezone) {
      const date = new Date((unixTime + timezone) * 1000);

      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };

      return date.toLocaleDateString("ru-RU", options);
    }

    const formattedDate = formatDate(data.dt, data.timezone);
    datetimeEl.textContent = formattedDate;

    temperatureEl.textContent = Math.round(data.main.temp);
    humidityEl.textContent = data.main.humidity;
    windEl.textContent = data.wind.speed;
    pressureEl.textContent = data.main.pressure;
    descriptionEl.textContent = data.weather[0].description;

    const iconCode = data.weather[0].icon;
    iconEl.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  } catch (error) {
    console.error(error);
    alert("Не удалось получить данные о погоде");
  }
}

refreshBtn.addEventListener("click", getWeather);

getWeather();
