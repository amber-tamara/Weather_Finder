import "../sass/style.scss";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg|webp)$/));



const country = document.querySelector(".country");
const tempa = document.querySelector(".temp");
const humiditi = document.querySelector(".humidity");
const conditions = document.querySelector(".conditions");
const weather = document.querySelector(".weather-display");
const mainBox = document.querySelector(".main-section");
const search = document.querySelector(".search-bar");
const form = document.querySelector(".form");
const place = document.querySelector(".place");
const errorMsg = document.querySelector(".error");
let date = document.querySelector(".date");

form.addEventListener("submit", getWeather);

function getWeather(e) {
  e.preventDefault();
  const searchText = search.value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&APPID=0ffc1202718617c78ddbd4198f0575bd&units=metric`
  )
    .then((res) => res.json())
    .then((data) => {
      data = data;
      if (searchText.length < 1) {
        errorMessage()
      } else {
        paintWeather(data)
      }
    });
}

function paintWeather(data) {
  const description = data.weather[0].description;
  const temp = data.main.temp;
  const roundedTemp = temp > 5 ? Math.ceil(temp) : Math.floor(temp)
  const placeName = data.name;
  const count = data.sys.country;
  search.value = "";
  let locationIcon = document.querySelector(".weather-icon");
  const { icon } = data.weather[0];
  locationIcon.innerHTML = `<img class="icon" src="icons/${icon}.png">`;
  const weatherInformation = {
    description,
    roundedTemp,
    placeName,
    count
  }
  info(weatherInformation);
}

function errorMessage() {
  errorMsg.innerHTML = "Field cannot be empty";
  errorMsg.classList.remove("show");
}

function info(weatherInformation) {
  errorMsg.classList.add("show");
  mainBox.classList.remove("show");
  place.innerHTML = weatherInformation.placeName += ",&nbsp;";
  tempa.innerHTML = weatherInformation.roundedTemp += "°C";
  country.innerHTML = weatherInformation.count;
  conditions.innerHTML = weatherInformation.description;
}