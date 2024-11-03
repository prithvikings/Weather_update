const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_Img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temprature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity'); 
const wind_speed = document.getElementById('wind-speed'); 
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

const checkweather=async (city)=>{
    const api="c6bc976394f13845dc637ae1be0ff583";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
    const weather_data=await fetch(url);
    try{
        const data=await weather_data.json();
        console.log(data);
        if(data.cod=="404"){
            console.error("City not found");
            location_not_found.style.display="flex";
            weather_body.style.display="none";
            return;
        }
        location_not_found.style.display="none"; 
        weather_body.style.display="flex";
        temperature.innerHTML=`${Math.round(data.main.temp-273.15)}°C`;
        description.innerHTML=`${data.weather[0].description}`;
        humidity.innerHTML=`${data.main.humidity}%`;
        wind_speed.innerHTML=`${Math.round(data.wind.speed)} km/h`;

        const weather=data.weather[0].main;
        if(weather=="Clouds"){
            weather_Img.src="./assets/cloud.png";
        }else if(weather=="Rain"){
            weather_Img.src="./assets/rain.png";
        }
        else if(weather=="Clear"){
            weather_Img.src="./assets/clear.png";
        }else if(weather=="Haze"){
            weather_Img.src="./assets/mist.png";
        }else if(weather=="Mist"){
            weather_Img.src="./assets/mist.png";
        }
        else if(weather=="Snow"){
            weather_Img.src="./assets/snow.png";
        }
        else if(weather=="Thunderstorm"){
            weather_Img.src="./assets/rain.png";
        }
    }catch(e){
        console.error("City not found");
    }
}


inputBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const city = inputBox.value.trim();
        if (city) {
            checkweather(city);
        } else {
            alert("Please enter a city name."); // Alert if the input is empty
        }
    }
});

searchBtn.addEventListener('click', () => {
    const city = inputBox.value.trim();
    if (city) {
        checkweather(city);
    } else {
        alert("Please enter a city name."); // Alert if the input is empty
    }
});


