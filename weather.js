const API_KEY = "90c0aebcf365086b171bae817b065dba";

function onGeoOk(position) {
  // 찾는 것 성공
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      let weatherCondition = "";

      console.log(data.weather[0].main);
      if (data.weather[0].main == "Clouds") {
        weatherCondition = `${data.weather[0].main} ☁️ `;
      } else if (data.weather[0].main == "Wind") {
        weatherCondition = `${data.weather[0].main} ☔ `;
      } else if (data.weather[0].main == "Snow") {
        weatherCondition = `${data.weather[0].main} ☃️ `;
      } else if (data.weather[0].main == "Clear") {
        weatherCondition = `${data.weather[0].main} ☀️ `;
      } else {
        weatherCondition = `${data.weather[0].main} `;
      }
      city.innerText = data.name;
      weather.innerText = `${weatherCondition}/ ${data.main.temp}°C`;
    });
}
function onGeoError() {
  // 찾는 것 실패
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
