document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navUl = document.querySelector('nav ul');
    const currentYear = document.getElementById('currentYear');
    const lastModified = document.getElementById('lastModified');
    const businessListings = document.querySelector('.business-listings'); // Select the business listings container

    hamburgerMenu.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });

    currentYear.textContent = new Date().getFullYear();
    lastModified.textContent = document.lastModified;
});

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".hamburger-menu");
    const navList = document.querySelector("nav ul");
    const links = document.querySelectorAll("nav ul li a");

    // Toggle menu visibility on small screens
    menuButton.addEventListener("click", function () {
        navList.classList.toggle("open");
    });

    // Highlight the current page
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });
});


async function getWeather() {
    const apiKey = "bc46beba003f75125c77f255a378c57d";
    const city = "Lagos"; // Replace with chamber location
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Get current weather
        const current = data.list[0];
        const temperature = Math.round(current.main.temp);
        
        // Get all weather conditions
        const weatherDescriptions = current.weather.map(w => w.description)
            .map(desc => desc.replace(/\b\w/g, c => c.toUpperCase())) // Capitalize words
            .join(", ");

        // Get 3-day forecast (filtering 12PM data points)
        const forecast = data.list.filter(entry => entry.dt_txt.includes("12:00:00")).slice(1, 4);
        let forecastHTML = "<h3>3-Day Forecast</h3><ul>";
        forecast.forEach(day => {
            const date = new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: "long" });
            const temp = Math.round(day.main.temp);
            forecastHTML += `<li><strong>${date}:</strong> ${temp}°C</li>`;
        });
        forecastHTML += "</ul>";

        // Update the HTML
        document.querySelector('.weather').innerHTML = `
            <h2>Current Weather in ${city}</h2>
            <p><strong>${temperature}°C</strong> - ${weatherDescriptions}</p>
            ${forecastHTML}
        `;

    } catch (error) {
        document.querySelector('.weather').innerHTML = "Unable to load weather data.";
    }
}

getWeather();
