const form = document.querySelector(".search-icon");
const search = document.querySelector(".search-bar");
form.addEventListener("click", sub);
let description;
let temp;
let placeName;
let humidity;
let count;
let error;
let data;
const place = document.querySelector(".place");
const errorMsg = document.querySelector(".error");
let date = document.querySelector(".date");
let calander = document.querySelector(".section-b");
console.log(calander);
function sub(e) {
  e.preventDefault();
  const searchText = search.value;

  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${searchText}&APPID=0ffc1202718617c78ddbd4198f0575bd&units=metric`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data = data;
      if (searchText.length < 1) {
        errorMsg.innerHTML = "Please fill all required fields";
        errorMsg.classList.remove("show");
      } else {
        calander.classList.remove("show");
        description = data.weather[0].description;
        temp = data.main.temp;
        placeName = data.name;
        humidity = data.main.humidity;
        count = data.sys.country;
        search.value = "";
        console.log(description);
        let locationIcon = document.querySelector(".weather-icon");
        const { icon } = data.weather[0];
        locationIcon.innerHTML = `<img class="icon" src="icons/${icon}.png">`;
        info();
        wallpaper();
      }
    });
}

const bgImage = document.querySelector(".wallpaper");

function wallpaper() {
  if (
    description === "few clouds" ||
    description === "broken clouds" ||
    description === "scattered clouds"
  ) {
    bgImage.classList.add("few-clouds");
    bgImage.classList.remove("clouds");
    bgImage.classList.remove("clear");
  } else if (description === "clear sky") {
    bgImage.classList.remove("few-clouds");
    bgImage.classList.remove("clouds");
    bgImage.classList.add("clear");
  } else if (description === "rain" || description === "light rain") {
    bgImage.classList.remove("clouds");
    bgImage.classList.remove("clear");
    bgImage.classList.remove("few-clouds");
    bgImage.classList.add("rain");
  } else if (description === "thunderstorm") {
    bgImage.classList.remove("clouds");
    bgImage.classList.remove("clear");
    bgImage.classList.remove("few-clouds");
    bgImage.classList.remove("rain");
    bgImage.classList.add("thunderstorm");
  }
}

const country = document.querySelector(".country");
const tempa = document.querySelector(".temp");
const humiditi = document.querySelector(".humidity");
const conditionss = document.querySelector(".conditions");
const weather = document.querySelector(".weather-display");
const mainBox = document.querySelector(".section-c");

function info() {
  errorMsg.classList.add("show");
  mainBox.classList.remove("show");
  place.innerHTML = placeName += ",&nbsp;";
  date.innerHTML = today;
  tempa.innerHTML = temp += "°C";
  country.innerHTML = count;
  humiditi.innerHTML = humidity += "%";
  conditionss.innerHTML = description;
}
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;
