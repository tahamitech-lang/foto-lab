// ============================================
// GEOLOCATION.JS - FOTOLAB Location Tracker
// Compact & Professional Version
// ============================================

// FOTOLAB Store Coordinates (Karachi, Pakistan)
const FOTOLAB_COORDS = {
    lat: 24.8270,
    lng: 67.1205
};

let retryCount = 0;
const MAX_RETRIES = 3;

/**
 * Main function to get user location
 */
function getLocation() {
    const info = document.getElementById('locationInfo');
    if (!info) return;

    if (!navigator.geolocation) {
        info.innerHTML = `
            <div class="d-flex align-items-center gap-2 text-warning">
                <i class="fas fa-exclamation-triangle"></i>
                <span class="small">Geolocation not supported</span>
                <button class="btn btn-sm btn-outline-amber ms-auto" onclick="useManualLocation()">
                    <i class="fas fa-edit"></i>
                </button>
            </div>
        `;
        return;
    }

    info.innerHTML = `
        <div class="d-flex align-items-center gap-2 text-white-50">
            <div class="spinner-border spinner-border-sm text-amber" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <span class="small">Detecting location...</span>
        </div>
    `;

    navigator.geolocation.getCurrentPosition(
        (position) => handleLocationSuccess(position),
        (error) => handleLocationError(error),
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    );
}

/**
 * Handle successful location detection
 */
function handleLocationSuccess(position) {
    const info = document.getElementById('locationInfo');
    if (!info) return;

    const userLat = position.coords.latitude;
    const userLng = position.coords.longitude;

    // Calculate distance
    const distance = calculateDistance(userLat, userLng, FOTOLAB_COORDS.lat, FOTOLAB_COORDS.lng);
    const roadDistance = distance * 1.3;

    // Calculate travel times
    const walkingTime = Math.round((roadDistance / 5) * 60);
    const drivingTime = Math.round((roadDistance / 30) * 60);

    info.innerHTML = `
        <div class="w-100">
            <div class="d-flex align-items-center justify-content-between mb-1">
                <span class="text-amber fw-bold small">
                    <i class="fas fa-store me-1"></i>FOTOLAB
                </span>
                <span class="badge bg-amber text-dark" style="font-size: 9px;">
                    <i class="fas fa-check-circle me-1"></i>Live
                </span>
            </div>
            <div class="d-flex align-items-center justify-content-between bg-dark px-2 py-1 rounded-2 mb-1">
                <span class="text-white-50 small">
                    <i class="fas fa-route text-amber me-1"></i>Distance
                </span>
                <span class="text-white fw-bold small">${roadDistance.toFixed(1)} km</span>
            </div>
            <div class="d-flex gap-1">
                <div class="flex-1 bg-dark px-2 py-1 rounded-2 text-center" style="flex: 1;">
                    <i class="fas fa-walking text-info me-1" style="font-size: 10px;"></i>
                    <span class="text-white small">${formatTime(walkingTime)}</span>
                </div>
                <div class="flex-1 bg-dark px-2 py-1 rounded-2 text-center" style="flex: 1;">
                    <i class="fas fa-car text-success me-1" style="font-size: 10px;"></i>
                    <span class="text-white small">${formatTime(drivingTime)}</span>
                </div>
            </div>
        </div>
    `;

    retryCount = 0;
}

/**
 * Handle geolocation errors
 */
function handleLocationError(error) {
    const info = document.getElementById('locationInfo');
    if (!info) return;

    if (retryCount < MAX_RETRIES) {
        retryCount++;
        setTimeout(() => getLocation(), 2000 * retryCount);
        return;
    }

    let message = 'Unable to get location.';
    let icon = 'fa-exclamation-triangle';
    let color = 'text-warning';

    switch(error.code) {
        case error.PERMISSION_DENIED:
            message = 'Location access denied.';
            icon = 'fa-ban';
            color = 'text-danger';
            break;
        case error.POSITION_UNAVAILABLE:
            message = 'GPS signal lost.';
            icon = 'fa-satellite-dish';
            break;
        case error.TIMEOUT:
            message = 'Request timed out.';
            icon = 'fa-clock';
            color = 'text-info';
            break;
    }

    info.innerHTML = `
        <div class="d-flex align-items-center gap-2 ${color}">
            <i class="fas ${icon}"></i>
            <span class="small">${message}</span>
            <button class="btn btn-sm btn-outline-amber ms-auto" onclick="getLocation()" style="font-size: 10px; padding: 1px 8px;">
                <i class="fas fa-redo"></i>
            </button>
            <button class="btn btn-sm btn-outline-secondary" onclick="useManualLocation()" style="font-size: 10px; padding: 1px 8px;">
                <i class="fas fa-edit"></i>
            </button>
        </div>
    `;
}

/**
 * Manual location entry
 */
function useManualLocation() {
    const info = document.getElementById('locationInfo');
    if (!info) return;

    info.innerHTML = `
        <div class="w-100">
            <div class="text-amber small fw-bold mb-1">
                <i class="fas fa-map-marker-alt me-1"></i>Enter Location
            </div>
            <div class="d-flex gap-1 mb-1">
                <input type="text" id="manualLat" class="form-control form-control-sm bg-dark text-white border-secondary" 
                       placeholder="Lat" value="24.8600" style="font-size: 11px; padding: 2px 6px; width: 50%;">
                <input type="text" id="manualLng" class="form-control form-control-sm bg-dark text-white border-secondary" 
                       placeholder="Lng" value="67.0600" style="font-size: 11px; padding: 2px 6px; width: 50%;">
            </div>
            <div class="d-flex gap-1">
                <button class="btn btn-sm btn-amber" onclick="calculateManualDistance()" style="font-size: 10px; padding: 1px 10px;">
                    <i class="fas fa-calculator me-1"></i>Calculate
                </button>
                <button class="btn btn-sm btn-outline-secondary" onclick="getLocation()" style="font-size: 10px; padding: 1px 10px;">
                    <i class="fas fa-satellite me-1"></i>GPS
                </button>
            </div>
        </div>
    `;
}

/**
 * Calculate distance from manual coordinates
 */
function calculateManualDistance() {
    const latInput = document.getElementById('manualLat');
    const lngInput = document.getElementById('manualLng');

    if (!latInput || !lngInput) return;

    const lat = parseFloat(latInput.value.trim());
    const lng = parseFloat(lngInput.value.trim());

    if (isNaN(lat) || isNaN(lng)) {
        alert('Please enter valid coordinates.');
        return;
    }

    handleLocationSuccess({
        coords: { latitude: lat, longitude: lng, accuracy: 50 }
    });
}

/**
 * Haversine formula for distance calculation
 */
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

/**
 * Format time
 */
function formatTime(minutes) {
    if (minutes < 1) return '< 1m';
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
}

/**
 * Initialize on page load
 */
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => getLocation(), 300);
});

// Export functions
window.getLocation = getLocation;
window.useManualLocation = useManualLocation;
window.calculateManualDistance = calculateManualDistance;

console.log('FOTOLAB Geolocation initialized.');