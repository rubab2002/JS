let APIKey = "6f62089d539947b997f75428260403";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

searchBtn.addEventListener("click", () => {
  let city = cityInput.value.trim(); // ✅ value yahan lena hai

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  fetchWeatherData(city);
});

async function fetchWeatherData(city) {
  let url = `https://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${city}`;

  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);

    console.log("City:", data.location.name);
    console.log("Temp:", data.current.temp_c);
    console.log("Humidity:", data.current.humidity);
    console.log("Wind Speed:", data.current.wind_kph);
  } catch (error) {
    console.error(error);
  }
}
