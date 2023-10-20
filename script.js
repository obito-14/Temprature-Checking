const apiKey = "5f768601861cdaa2a8c8e8b301966bb2";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".Enter input");
const searchBtn = document.querySelector(".Enter button");
const weatherIcon = document.querySelector("#whether-img");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".whether").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data.name);

    document.querySelector(".city_name").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "/images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "/images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "/images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "/images/mist.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "/images/snow.png";
    }

    document.querySelector(".whether").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
