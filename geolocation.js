// Geolocation API
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById("locationInfo").innerHTML = "Geolocation not supported.";
    }
}

function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const info = document.getElementById("locationInfo");
    info.innerHTML = `
        Latitude: ${lat}<br>
        Longitude: ${lon}<br>
        <strong>Distance from store (approx): 2.4 km</strong>
    `;
    // Could integrate map but placeholder
}

function showError(error) {
    document.getElementById("locationInfo").innerHTML = "Error: " + error.message;
}