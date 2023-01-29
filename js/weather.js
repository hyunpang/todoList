const API_KEY = "925fb6d83e397970da6307d5d18fa2e0";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
    fetch(url).then(response => response.json()).then(data => {
        const icon = document.getElementById("imgId");
        const temp = document.querySelector(".weather-temp span")
        const city = document.querySelector(".weather-city span");
        const iconImg = data.weather[0].icon;
        
        temp.innerText = data.main.temp + "°";
        city.innerText = data.name;
        icon.src = `http://openweathermap.org/img/wn/${iconImg}@2x.png`;
    });
}

function onGeoError() {
    alert("에러");
    location.href = "index.html";
} 

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);