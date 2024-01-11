const searchbtn = document.querySelector(".icon1");
const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const humidity = document.querySelector(".hperc");
const wind = document.querySelector(".winds");
const pic = document.querySelector("#pic");
const climate = document.querySelector(".climate");
const logo = document.querySelector(".logo");
const card = document.querySelector(".card");

searchbtn.addEventListener("click", () => {
  output();
});
const output = async () => {
  const cityname = document.querySelector(".input").value;
  const apikey = "40970ff22ee63c234d40bdc9fd80ef5c";
  try {
    const api = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}`
    );
    if (!api.ok) {
      alert("Cityname incorrect");
    }

    const json = await api.json();
    if (json.weather[0].main == "Clear") {
      pic.src = "./icons/clear-sky.png";
      pic.alt = "Clear weather";
    } else if (json.weather[0].main == "Clouds") {
      pic.src = "./icons/cloudy.png";
      pic.alt = "Cloudy";
    } else if (json.weather[0].main == "Rain") {
      pic.src = "./icons/raining.png";
      pic.alt = "rain";
    } else if (json.weather[0].main == "Tornado") {
      pic.src = "./icons/tornado.png";
      pic.alt = "tornado";
    } else if (json.weather[0].main == "Thunderstorm") {
      pic.src = "./icons/thunderstorm.png";
      pic.alt = "thynderstrorm";
    } else if (json.weather[0].main == "Drizzle") {
      pic.src = "./icons/Drizzle.png";
      pic.alt = "drizzle";
    } else if (json.weather[0].main == "Snow") {
      pic.src = "./icons/snow.png";
      pic.alt = "snow";
    } else if (json.weather[0].main == "Mist") {
      pic.src = "./icons/mist.png";
      pic.alt = "Mist";
    } else if (json.weather[0].main == "Smoke") {
      pic.src = "./icons/smoke.png";
      pic.alt = "Smoke";
    } else if (json.weather[0].main == "Haze") {
      pic.src = "./icons/haze.png";
      pic.alt = "Haze";
    } else if (json.weather[0].main == "Dust") {
      pic.src = "./icons/sandstrom.png";
      pic.alt = "Dust";
    } else if (json.weather[0].main == "Sand") {
      pic.src = "./icons/strong.png";
      pic.alt = "Sand";
    } else if (json.weather[0].main == "Fog") {
      pic.src = "./icons/fog.png";
      pic.alt = "fog";
    } else {
      pic.src = "./icons/volcano.png";
      pic.alt = "Ash";
    }
    climate.innerHTML = json.weather[0].main;
    temp.innerHTML = json.main.temp;
    city.innerHTML = json.name;
    humidity.innerHTML = json.main.humidity + "%";
    wind.innerHTML = json.wind.speed + "Km/h";

    if ((card.style.display = "none")) {
      card.style.display = "block";
    }

    console.log(json);
  } catch (error) {
    console.log("There was a problem with the fetch operation:", error);
  }
};
// const icon =()=>{
//     if
// }
