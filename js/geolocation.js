// ============================================
// GEOLOCATION.JS - FOTOLAB Location Tracker
// Complete implementation with fallback options
// ============================================

// FOTOLAB Store Coordinates (Karachi, Pakistan)
const FOTOLAB_LAT = 24.8270;
const FOTOLAB_LNG = 67.1205;

// Global variable to store location status
let locationStatus = 'pending';

// Main function to get location
function getLocation() {
    const info = document.getElementById("locationInfo");
    if (!info) return;
    
    // Check if browser supports geolocation
    if (!navigator.geolocation) {
        info.innerHTML = `
            <div class="text-warning">
                <i class="fas fa-exclamation-triangle me-2"></i>
                Geolocation is not supported by your browser. 
                <button class="btn btn-sm btn-outline-amber mt-2" onclick="useManualLocation()">
                    <i class="fas fa-map-marker-alt me-1"></i>Enter Location Manually
                </button>
            </div>
        `;
        return;
    }

    // Show loading state
    info.innerHTML = `
        <div class="text-white-50">
            <i class="fas fa-spinner fa-spin me-2"></i>
            Getting your location...
        </div>
    `;

    // Request location with options
    navigator.geolocation.getCurrentPosition(
        // Success callback
        function(position) {
            showPosition(position);
        },
        // Error callback
        function(error) {
            showError(error);
        },
        {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 0
        }
    );
}

// Success function - shows location and distance
function showPosition(position) {
    const info = document.getElementById("locationInfo");
    if (!info) return;

    const lat1 = position.coords.latitude;
    const lon1 = position.coords.longitude;
    
    // Calculate distance using Haversine formula
    const distance = calculateDistance(lat1, lon1, FOTOLAB_LAT, FOTOLAB_LNG);
    
    // Real-world route estimation (multiply by 1.3 for actual road distance)
    const actualDistance = distance * 1.3;
    
    // Calculate time estimates
    const walkingTime = Math.round((actualDistance / 5) * 60); // 5 km/h walking
    const drivingTime = Math.round((actualDistance / 30) * 60); // 30 km/h driving
    
    // Format time strings
    const walkingStr = formatTime(walkingTime);
    const drivingStr = formatTime(drivingTime);

    // Display the information
    info.innerHTML = `
        <div class="mb-2 text-amber fw-bold">
            <i class="fas fa-route me-2"></i>
            Distance to FOTOLAB: <span class="text-white">${actualDistance.toFixed(1)} km</span>
        </div>
        <div class="row g-2 mt-2">
            <div class="col-6">
                <div class="bg-dark p-2 rounded-3">
                    <i class="fas fa-walking text-info me-1"></i>
                    <strong class="text-white-50">Walking</strong>
                    <div class="text-white">${walkingStr}</div>
                </div>
            </div>
            <div class="col-6">
                <div class="bg-dark p-2 rounded-3">
                    <i class="fas fa-car text-success me-1"></i>
                    <strong class="text-white-50">Driving</strong>
                    <div class="text-white">${drivingStr}</div>
                </div>
            </div>
        </div>
        <div class="mt-2 small text-white-50">
            <i class="fas fa-map-pin text-amber me-1"></i>
            Your location: ${lat1.toFixed(4)}, ${lon1.toFixed(4)}
        </div>
    `;
    
    locationStatus = 'success';
}

// Error function - handles all geolocation errors
function showError(error) {
    const info = document.getElementById("locationInfo");
    if (!info) return;

    let msg = '';
    let icon = 'fa-exclamation-triangle';
    let color = 'text-warning';

    switch(error.code) {
        case error.PERMISSION_DENIED:
            msg = 'Location access denied. Please allow location permission in your browser.';
            icon = 'fa-ban';
            color = 'text-danger';
            break;
        case error.POSITION_UNAVAILABLE:
            msg = 'Location information unavailable. Please enable GPS or try again.';
            icon = 'fa-satellite-dish';
            color = 'text-warning';
            break;
        case error.TIMEOUT:
            msg = 'Location request timed out. Please try again.';
            icon = 'fa-clock';
            color = 'text-info';
            break;
        default:
            msg = 'Unable to get your location. Please try again later.';
            icon = 'fa-question-circle';
            color = 'text-secondary';
            break;
    }

    info.innerHTML = `
        <div class="${color}">
            <i class="fas ${icon} me-2"></i>
            ${msg}
        </div>
        <button class="btn btn-sm btn-outline-amber mt-2" onclick="useManualLocation()">
            <i class="fas fa-map-marker-alt me-1"></i>Enter Location Manually
        </button>
        <button class="btn btn-sm btn-outline-secondary mt-2 ms-2" onclick="getLocation()">
            <i class="fas fa-redo me-1"></i>Retry
        </button>
    `;
    
    locationStatus = 'error';
}

// Manual location input (fallback when geolocation fails)
function useManualLocation() {
    const info = document.getElementById("locationInfo");
    if (!info) return;

    info.innerHTML = `
        <div class="bg-dark p-3 rounded-3">
            <div class="text-amber mb-2">
                <i class="fas fa-map-marker-alt me-2"></i>
                <strong>Enter your location manually</strong>
            </div>
            <div class="row g-2">
                <div class="col-6">
                    <input type="text" id="manualLat" class="form-control form-control-sm bg-dark text-white border-secondary" 
                           placeholder="Latitude (e.g., 24.8270)" value="24.8600">
                </div>
                <div class="col-6">
                    <input type="text" id="manualLng" class="form-control form-control-sm bg-dark text-white border-secondary" 
                           placeholder="Longitude (e.g., 67.1205)" value="67.0600">
                </div>
            </div>
            <button class="btn btn-sm btn-amber mt-2" onclick="calculateManualDistance()">
                <i class="fas fa-calculator me-1"></i>Calculate Distance
            </button>
            <button class="btn btn-sm btn-outline-secondary mt-2 ms-2" onclick="getLocation()">
                <i class="fas fa-satellite me-1"></i>Use GPS
            </button>
        </div>
    `;
}

// Calculate distance from manually entered coordinates
function calculateManualDistance() {
    const latInput = document.getElementById('manualLat');
    const lngInput = document.getElementById('manualLng');
    
    if (!latInput || !lngInput) return;
    
    const lat = parseFloat(latInput.value);
    const lng = parseFloat(lngInput.value);
    
    if (isNaN(lat) || isNaN(lng)) {
        alert('Please enter valid latitude and longitude values.');
        return;
    }
    
    // Create a fake position object
    const fakePosition = {
        coords: {
            latitude: lat,
            longitude: lng,
            accuracy: 100
        }
    };
    
    showPosition(fakePosition);
}

// Haversine formula to calculate distance between two coordinates
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

// Format time in hours and minutes
function formatTime(minutes) {
    if (minutes < 1) return 'Less than 1 minute';
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`;
}

// Auto-initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure DOM is fully loaded
    setTimeout(function() {
        getLocation();
    }, 500);
});

// Also retry if element exists but location not loaded
setInterval(function() {
    const info = document.getElementById('locationInfo');
    if (info && info.innerHTML.includes('Getting your location')) {
        // If still loading after 10 seconds, retry
        setTimeout(function() {
            if (info.innerHTML.includes('Getting your location')) {
                getLocation();
            }
        }, 10000);
    }
}, 5000);

// Export functions for use in HTML onclick
window.getLocation = getLocation;
window.useManualLocation = useManualLocation;
window.calculateManualDistance = calculateManualDistance;