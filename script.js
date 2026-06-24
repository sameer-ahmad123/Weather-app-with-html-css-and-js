const input = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const weatherDisplay = document.getElementById("weather-display");
const loadingMsg = document.getElementById("loading-msg");
const tempUI = document.getElementById("temp");
const cityUI = document.getElementById("city-name");
const descUI = document.getElementById("description");
const humUI = document.getElementById("humidity");
const windUI = document.getElementById("wind");
function fetchWeatherData(cityName) {

    weatherDisplay.classList.add("hidden");
    loadingMsg.classList.remove("hidden");


    setTimeout(() => {

        let fakeData = {
            temperature: Math.floor(Math.random() * 20) + 10, 
            description: "Partly Cloudy ⛅",
            humidity: Math.floor(Math.random() * 40) + 40,
            windSpeed: Math.floor(Math.random() * 15) + 5
        };
        tempUI.innerText = `${fakeData.temperature}°C`;

        const cleanCity = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
        cityUI.innerText = cleanCity;
        
        descUI.innerText = fakeData.description;
        humUI.innerText = fakeData.humidity;
        windUI.innerText = fakeData.windSpeed;

        loadingMsg.classList.add("hidden");
        weatherDisplay.classList.remove("hidden");

    }, 1500); 
}

searchBtn.addEventListener("click", () => {
    let city = input.value.trim();
    
    if (city === "") {
        alert("Please enter a city name first!");
        return;
    }

    fetchWeatherData(city);
    input.value = "";
});
