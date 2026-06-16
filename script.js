const input = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const weatherDisplay = document.getElementById("weather-display");
const loadingMsg = document.getElementById("loading-msg");

// Data elements
const tempUI = document.getElementById("temp");
const cityUI = document.getElementById("city-name");
const descUI = document.getElementById("description");
const humUI = document.getElementById("humidity");
const windUI = document.getElementById("wind");

// This function SIMULATES getting data from the internet
function fetchWeatherData(cityName) {
    // 1. Hide the old weather data and show the loading message
    weatherDisplay.classList.add("hidden");
    loadingMsg.classList.remove("hidden");

    // 2. setTimeout fakes a 1.5 second server delay
    setTimeout(() => {
        
        // 3. Fake API Response Data
        let fakeData = {
            temperature: Math.floor(Math.random() * 20) + 10, // Random temp between 10 and 30
            description: "Partly Cloudy ⛅",
            humidity: Math.floor(Math.random() * 40) + 40,
            windSpeed: Math.floor(Math.random() * 15) + 5
        };

        // 4. Update the UI with the data
        tempUI.innerText = `${fakeData.temperature}°C`;
        
        // Capitalize the first letter of the city they typed
        const cleanCity = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
        cityUI.innerText = cleanCity;
        
        descUI.innerText = fakeData.description;
        humUI.innerText = fakeData.humidity;
        windUI.innerText = fakeData.windSpeed;

        // 5. Hide loading message and show the final dashboard
        loadingMsg.classList.add("hidden");
        weatherDisplay.classList.remove("hidden");

    }, 1500); // 1.5 seconds
}

// Click Event Listener
searchBtn.addEventListener("click", () => {
    let city = input.value.trim();
    
    if (city === "") {
        alert("Please enter a city name first!");
        return;
    }

    fetchWeatherData(city);
    input.value = ""; // clear input
});