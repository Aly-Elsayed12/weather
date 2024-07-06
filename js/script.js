
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let day1 = weekday[d.getDay()];
let day2 = weekday[d.getDay()+1];
let day3 = weekday[d.getDay()+2];

const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const m = new Date()
let monthName = month[m.getMonth()] 

let cityName = document.querySelector("#search-input");
let findBtn = document.querySelector("#find-btn")

findBtn.addEventListener("click", function(){
  getWeather(cityName.value)
})

async function getWeather(city){
  let x = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d10b19627a24a18a69154528240407&q=${city}&days=3`)
  let data = await x.json()
  displayData(data)
  console.log(data);
}


function displayData(data) {
  let dayOne = `
              <div class="inner mb-4">
              <header class="d-flex justify-content-between px-2 py-1 fs-5">
                <p>${day1}</p>
                <p>${monthName}</p>
              </header>
              <p class="p-2">${data.location.name}</p>
              <div class="body px-2 pt-3 pb-4 d-flex justify-content-between">
                <h3 class="text-white ">${data.current.temp_c}<span class="position-relative">o</span>C</h3>
                <img src="${data.current.condition.icon}" alt="">
              </div>
              <span class="px-2" >${data.current.condition.text}</span>
              <div class="footer mt-3 px-2 d-flex justify-content-between">
                <span class="icon-1">
                  <img src="/image/icon-umberella.png"  alt="">
                  ${data.current.feelslike_c}%
                </span>
                <span class="icon-2">
                  <img src="/image/icon-wind.png" alt="">
                  ${data.current.wind_kph}km/h
                </span>
                <span class="icon-3">
                  <img src="/image/icon-compass.png" alt="">
                  ${data.current.wind_dir}
                </span>
              </div>
            </div>
  `
document.querySelector("#dayOne").innerHTML = dayOne

let dayTow = `
              <div class="inner mb-4">
              <header class="d-flex justify-content-center px-2 py-1 fs-5">
                <p>${day2}</p>
              </header>
              <div class="body px-2 pt-5  d-flex flex-column align-items-center">
              <img src="${data.forecast.forecastday[1].day.condition.icon}" class="" alt="">
                <h3 class="text-white ">${data.forecast.forecastday[1].day.maxtemp_c}<span class="position-relative">o</span>C</h3>
                <span>${data.forecast.forecastday[1].day.mintemp_c}<sub class="position-relative">o</sub></span>
                <span class="px-2" >${data.current.condition.text}</span>
              </div>
`
document.querySelector("#dayTwo").innerHTML = dayTow
let dayThree = `
              <div class="inner mb-4">
              <header class="d-flex justify-content-center px-2 py-1 fs-5">
                <p>${day3}</p>
              </header>
              <div class="body px-2 pt-5  d-flex flex-column align-items-center">
              <img src="${data.forecast.forecastday[2].day.condition.icon}" class="" alt="">
                <h3 class="text-white ">${data.forecast.forecastday[2].day.maxtemp_c}<span class="position-relative">o</span>C</h3>
                <span>${data.forecast.forecastday[2].day.mintemp_c}<sub class="position-relative">o</sub></span>
                <span class="px-2" >${data.current.condition.text}</span>
              </div>
`
document.querySelector("#dayThree").innerHTML = dayThree
}
getWeather("cario")