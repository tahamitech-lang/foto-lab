// Geolocation API
function getLocation() {
    const info = document.getElementById("locationInfo");
    if (navigator.geolocation) {
        info.innerHTML = `<span class="text-white-50"><i class="fas fa-spinner fa-spin me-2"></i>Aapki location track ki ja rahi hai...</span>`;
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        info.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    const lat1 = position.coords.latitude;
    const lon1 = position.coords.longitude;
    
    // Target Destination: Fotolab Coordinates
    const lat2 = 24.8270; 
    const lon2 = 67.1205; 

    // Haversine Formula se distance calculate karne ka tareeqa (Kilometers me)
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon / 2) * Math.sin(dLon / 2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
    let distance = R * c; // Distance in km

    // Thoda real-world route estimation add karne ke liye crow-fly distance ko 1.3 se multiply kiya
    distance = distance * 1.3; 

    // Waqt ka andaza (Time Estimation)
    // Paidal (Walking) speed ~ 5 km/h
    const walkingTimeMinutes = Math.round((distance / 5) * 60);
    // Gari (Driving) speed Karachi traffic me ~ 30 km/h
    const drivingTimeMinutes = Math.round((distance / 30) * 60);

    // Format Time strings
    const walkingStr = walkingTimeMinutes > 60 
        ? `${Math.floor(walkingTimeMinutes / 60)} Hour ${walkingTimeMinutes % 60} minute` 
        : `${walkingTimeMinutes} minute`;

    const drivingStr = drivingTimeMinutes > 60 
        ? `${Math.floor(drivingTimeMinutes / 60)} Hour ${drivingTimeMinutes % 60} minute` 
        : `${drivingTimeMinutes} minute`;

    const info = document.getElementById("locationInfo");
    info.innerHTML = `
        <div class="mb-2 text-warning fw-bold">
            <i class="fas fa-route me-2"></i>FotoLab from your distance: ${distance.toFixed(1)} km
        </div>
        <hr class="border-secondary my-2">
        <div class="row text-start fs-6 mt-3">
            <div class="col-6">
                <i class="fas fa-walking text-white-50 me-2"></i><strong>Walking:</strong><br>
                <span class="text-white-50">${walkingStr} It will take</span>
            </div>
            <div class="col-6">
                <i class="fas fa-car text-success me-2"></i><strong>Driving:</strong><br>
                <span class="text-white-50">${drivingStr} It will take</span>
            </div>
        </div>
    `;
}

function showError(error) {
    const info = document.getElementById("locationInfo");
    switch(error.code) {
        case error.PERMISSION_DENIED:
            info.innerHTML = "User ne Location share karne ki permission nahi di.";
            break;
        case error.POSITION_UNAVAILABLE:
            info.innerHTML = "Location ki maloomat dastyab nahi hain.";
            break;
        case error.TIMEOUT:
            info.innerHTML = "Location request timeout ho gayi.";
            break;
        case error.UNKNOWN_ERROR:
            info.innerHTML = "Koi anjana error aya hai.";
            break;
    }
}
function showError(error) {
    const info = document.getElementById("locationInfo");
    let msg = "";
    switch(error.code) {
        case error.PERMISSION_DENIED:
            msg = "Location access blocked. Please enable it in browser settings to see distance.";
            break;
        case error.POSITION_UNAVAILABLE:
            msg = "Location information unavailable.";
            break;
        case error.TIMEOUT:
            msg = "Request timed out.";
            break;
        default:
            msg = "Unknown error occurred.";
            break;
    }
    // Error ko red text mein dikhayein
    info.innerHTML = `<span class="text-danger"><i class="fas fa-exclamation-triangle me-2"></i>${msg}</span>`;
}