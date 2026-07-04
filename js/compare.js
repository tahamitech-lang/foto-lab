// ===========================================
// COMPARE PAGE - FOTOLAB
// Product Database & Comparison Logic
// ===========================================

// Product Database
const compareProducts = [
    // ===== CAMERAS =====
    { 
        id: 1, 
        name: "Canon EOS R6 Mark II",
        brand: "Canon",
        category: "Mirrorless",
        sensor: "24.2MP Full-Frame",
        video: "4K 60fps",
        price: "650,000 PKR",
        iso: "100-102400",
        autofocus: "Dual Pixel CMOS AF II",
        weight: "670g",
        image: "https://picsum.photos/id/1060/200/200"
    },
    { 
        id: 2, 
        name: "Sony A7 IV",
        brand: "Sony",
        category: "Mirrorless",
        sensor: "33MP Full-Frame",
        video: "4K 60fps",
        price: "620,000 PKR",
        iso: "100-51200",
        autofocus: "759-point Fast Hybrid AF",
        weight: "658g",
        image: "https://picsum.photos/id/1062/200/200"
    },
    { 
        id: 3, 
        name: "Nikon Z6 II",
        brand: "Nikon",
        category: "Mirrorless",
        sensor: "24.5MP Full-Frame",
        video: "4K UHD",
        price: "580,000 PKR",
        iso: "100-51200",
        autofocus: "273-point Hybrid AF",
        weight: "705g",
        image: "https://picsum.photos/id/1061/200/200"
    },
    { 
        id: 4, 
        name: "Fujifilm X-T5",
        brand: "Fujifilm",
        category: "Mirrorless",
        sensor: "40MP APS-C",
        video: "6.2K",
        price: "155,000 PKR",
        iso: "125-12800",
        autofocus: "Phase Detect AF",
        weight: "607g",
        image: "https://picsum.photos/id/1063/200/200"
    },
    { 
        id: 5, 
        name: "Canon EOS R5",
        brand: "Canon",
        category: "Mirrorless",
        sensor: "45MP Full-Frame",
        video: "8K",
        price: "950,000 PKR",
        iso: "100-51200",
        autofocus: "Dual Pixel CMOS AF II",
        weight: "738g",
        image: "https://picsum.photos/id/1065/200/200"
    },
    { 
        id: 6, 
        name: "Sony A7R V",
        brand: "Sony",
        category: "Mirrorless",
        sensor: "61MP Full-Frame",
        video: "8K",
        price: "980,000 PKR",
        iso: "100-32000",
        autofocus: "AI Tracking AF",
        weight: "723g",
        image: "https://picsum.photos/id/1067/200/200"
    },
    { 
        id: 7, 
        name: "Nikon Z8",
        brand: "Nikon",
        category: "Mirrorless",
        sensor: "45.7MP Stacked",
        video: "8K 60fps",
        price: "1,100,000 PKR",
        iso: "64-25600",
        autofocus: "493-point AF",
        weight: "910g",
        image: "https://picsum.photos/id/1011/200/200"
    },
    { 
        id: 8, 
        name: "Fujifilm X-H2",
        brand: "Fujifilm",
        category: "Mirrorless",
        sensor: "40.2MP APS-C",
        video: "8K",
        price: "480,000 PKR",
        iso: "125-12800",
        autofocus: "Hybrid AF",
        weight: "660g",
        image: "https://picsum.photos/id/1005/200/200"
    },
    // ===== LENSES =====
    { 
        id: 9, 
        name: "Canon RF 24-70mm f/2.8L",
        brand: "Canon",
        category: "Lens",
        focalLength: "24-70mm",
        aperture: "f/2.8",
        mount: "RF Mount",
        stabilization: "Yes",
        price: "420,000 PKR",
        weight: "900g",
        image: "https://picsum.photos/id/1068/200/200"
    },
    { 
        id: 10, 
        name: "Canon RF 70-200mm f/2.8L",
        brand: "Canon",
        category: "Lens",
        focalLength: "70-200mm",
        aperture: "f/2.8",
        mount: "RF Mount",
        stabilization: "Yes",
        price: "620,000 PKR",
        weight: "1070g",
        image: "https://picsum.photos/id/1069/200/200"
    },
    { 
        id: 11, 
        name: "Canon RF 50mm f/1.2L",
        brand: "Canon",
        category: "Lens",
        focalLength: "50mm",
        aperture: "f/1.2",
        mount: "RF Mount",
        stabilization: "No",
        price: "290,000 PKR",
        weight: "950g",
        image: "https://picsum.photos/id/1070/200/200"
    },
    { 
        id: 12, 
        name: "Sony FE 24-70mm f/2.8 GM II",
        brand: "Sony",
        category: "Lens",
        focalLength: "24-70mm",
        aperture: "f/2.8 GM II",
        mount: "Sony E Mount",
        stabilization: "No",
        price: "500,000 PKR",
        weight: "695g",
        image: "https://picsum.photos/id/1071/200/200"
    },
    { 
        id: 13, 
        name: "Sony FE 70-200mm f/2.8 GM OSS",
        brand: "Sony",
        category: "Lens",
        focalLength: "70-200mm",
        aperture: "f/2.8 GM OSS",
        mount: "Sony E Mount",
        stabilization: "Yes",
        price: "650,000 PKR",
        weight: "1045g",
        image: "https://picsum.photos/id/1072/200/200"
    },
    { 
        id: 14, 
        name: "Sony FE 50mm f/1.2 GM",
        brand: "Sony",
        category: "Lens",
        focalLength: "50mm",
        aperture: "f/1.2 GM",
        mount: "Sony E Mount",
        stabilization: "No",
        price: "350,000 PKR",
        weight: "778g",
        image: "https://picsum.photos/id/1073/200/200"
    },
    { 
        id: 15, 
        name: "Nikon Z 24-70mm f/2.8 S",
        brand: "Nikon",
        category: "Lens",
        focalLength: "24-70mm",
        aperture: "f/2.8",
        mount: "Z Mount",
        stabilization: "No",
        price: "470,000 PKR",
        weight: "805g",
        image: "https://picsum.photos/id/1074/200/200"
    },
    { 
        id: 16, 
        name: "Fujifilm XF 16-55mm f/2.8",
        brand: "Fujifilm",
        category: "Lens",
        focalLength: "16-55mm",
        aperture: "f/2.8",
        mount: "X Mount",
        stabilization: "No",
        price: "250,000 PKR",
        weight: "655g",
        image: "https://picsum.photos/id/1075/200/200"
    },
    // ===== AUDIO =====
    { 
        id: 17, 
        name: "Rode VideoMic Pro+",
        brand: "Rode",
        category: "Audio",
        type: "Shotgun Microphone",
        battery: "Rechargeable",
        connectivity: "3.5mm",
        frequencyResponse: "20Hz-20kHz",
        price: "85,000 PKR",
        weight: "122g",
        image: "https://picsum.photos/id/1080/200/200"
    },
    { 
        id: 18, 
        name: "Rode Wireless GO II",
        brand: "Rode",
        category: "Audio",
        type: "Wireless Microphone",
        battery: "7 Hours",
        connectivity: "USB-C",
        range: "200m",
        price: "95,000 PKR",
        weight: "32g",
        image: "https://picsum.photos/id/1081/200/200"
    },
    { 
        id: 19, 
        name: "DJI Mic 2",
        brand: "DJI",
        category: "Audio",
        type: "Wireless Microphone",
        battery: "18 Hours",
        connectivity: "USB-C",
        range: "250m",
        price: "120,000 PKR",
        weight: "28g",
        image: "https://picsum.photos/id/1082/200/200"
    },
    // ===== TRIPODS & GIMBALS =====
    { 
        id: 20, 
        name: "DJI RS 4 Gimbal",
        brand: "DJI",
        category: "Gimbal",
        type: "Camera Stabilizer",
        payload: "3kg",
        battery: "12 Hours",
        connectivity: "Bluetooth",
        price: "180,000 PKR",
        weight: "1240g",
        image: "https://picsum.photos/id/1041/200/200"
    },
    { 
        id: 21, 
        name: "Manfrotto Befree Tripod",
        brand: "Manfrotto",
        category: "Tripod",
        type: "Tripod",
        material: "Aluminum",
        maxHeight: "150cm",
        loadCapacity: "8kg",
        price: "45,000 PKR",
        weight: "1490g",
        image: "https://picsum.photos/id/1040/200/200"
    },
    // ===== MEMORY CARDS =====
    { 
        id: 22, 
        name: "SanDisk Extreme Pro 128GB",
        brand: "SanDisk",
        category: "Memory",
        storage: "128GB",
        speed: "200MB/s",
        type: "SDXC UHS-I",
        warranty: "Lifetime",
        price: "12,000 PKR",
        weight: "2g",
        image: "https://picsum.photos/id/1070/200/200"
    },
    { 
        id: 23, 
        name: "SanDisk Extreme Pro 256GB",
        brand: "SanDisk",
        category: "Memory",
        storage: "256GB",
        speed: "200MB/s",
        type: "SDXC UHS-I",
        warranty: "Lifetime",
        price: "22,000 PKR",
        weight: "2g",
        image: "https://picsum.photos/id/1071/200/200"
    },
    { 
        id: 24, 
        name: "Lexar Professional 128GB",
        brand: "Lexar",
        category: "Memory",
        storage: "128GB",
        speed: "280MB/s",
        type: "SDXC UHS-II",
        warranty: "Lifetime",
        price: "15,000 PKR",
        weight: "2g",
        image: "https://picsum.photos/id/1072/200/200"
    },
    { 
        id: 25, 
        name: "Lexar Professional 256GB",
        brand: "Lexar",
        category: "Memory",
        storage: "256GB",
        speed: "300MB/s",
        type: "SDXC UHS-II",
        warranty: "Lifetime",
        price: "28,000 PKR",
        weight: "2g",
        image: "https://picsum.photos/id/1073/200/200"
    },
    // ===== FLASHES =====
    { 
        id: 26, 
        name: "Canon Speedlite EL-5",
        brand: "Canon",
        category: "Flash",
        type: "Flash",
        guideNumber: "60m",
        connectivity: "Wireless",
        battery: "Rechargeable",
        price: "95,000 PKR",
        weight: "491g",
        image: "https://picsum.photos/id/1074/200/200"
    },
    { 
        id: 27, 
        name: "Sony HVL-F60RM2",
        brand: "Sony",
        category: "Flash",
        type: "Flash",
        guideNumber: "60m",
        connectivity: "Wireless",
        battery: "AA Batteries",
        price: "110,000 PKR",
        weight: "439g",
        image: "https://picsum.photos/id/1075/200/200"
    },
    // ===== LIGHTING =====
    { 
        id: 28, 
        name: "Godox SL60W",
        brand: "Godox",
        category: "Lighting",
        type: "LED Video Light",
        power: "60W",
        colorTemp: "5600K",
        brightness: "High Output",
        price: "35,000 PKR",
        weight: "1610g",
        image: "https://picsum.photos/id/1015/200/200"
    },
    { 
        id: 29, 
        name: "Aputure Amaran 100D",
        brand: "Aputure",
        category: "Lighting",
        type: "LED Video Light",
        power: "100W",
        colorTemp: "5600K",
        brightness: "Ultra Bright",
        price: "65,000 PKR",
        weight: "1400g",
        image: "https://picsum.photos/id/1023/200/200"
    },
    // ===== BAGS =====
    { 
        id: 30, 
        name: "Peak Design Camera Bag",
        brand: "Peak Design",
        category: "Bag",
        type: "Camera Backpack",
        capacity: "30L",
        material: "Weatherproof",
        color: "Black",
        price: "55,000 PKR",
        weight: "1800g",
        image: "https://picsum.photos/id/1026/200/200"
    }
];

// ===========================================
// POPULATE DROPDOWNS
// ===========================================
function populateCompareDropdowns() {
    const select1 = document.getElementById('product1');
    const select2 = document.getElementById('product2');
    if (!select1 || !select2) return;

    // Clear existing options (keep first empty option)
    select1.innerHTML = '<option value="">-- Choose a product --</option>';
    select2.innerHTML = '<option value="">-- Choose a product --</option>';

    compareProducts.forEach(product => {
        const option1 = document.createElement('option');
        option1.value = product.id;
        option1.textContent = product.name + ' (' + product.brand + ')';
        select1.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = product.id;
        option2.textContent = product.name + ' (' + product.brand + ')';
        select2.appendChild(option2);
    });
}

// ===========================================
// RENDER COMPARISON
// ===========================================
function renderComparison(productA, productB) {
    const result = document.getElementById('comparisonResult');
    if (!result) return;

    if (!productA || !productB || productA.id === productB.id) {
        result.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-exclamation-circle text-warning"></i>
                <h4>Select Two Different Products</h4>
                <p>Please select two different products to compare their features.</p>
            </div>
        `;
        return;
    }

    // Dono products ki keys ko combine karke unique features list banana
    const ignoredKeys = ['id', 'name', 'brand', 'category', 'image'];
    const allKeys = new Set([...Object.keys(productA), ...Object.keys(productB)]);
    const features = Array.from(allKeys).filter(key => !ignoredKeys.includes(key));

    result.innerHTML = `
        <div class="comparison-table mt-3">
            <table class="table table-dark table-striped m-0 align-middle">
                <thead>
                    <tr>
                        <th style="width:25%;" class="text-amber">Feature</th>
                        <th style="width:37.5%;" class="text-white">
                            <div class="d-flex flex-column align-items-center">
                                <img src="${productA.image}" alt="${productA.name}" style="width:60px; height:60px; object-fit:cover; border-radius:8px; border:2px solid #C9A84C44; margin-bottom:5px;">
                                ${productA.name}
                                <small class="text-white-50">${productA.brand}</small>
                            </div>
                        </th>
                        <th style="width:37.5%;" class="text-amber fw-bold">
                            <div class="d-flex flex-column align-items-center">
                                <img src="${productB.image}" alt="${productB.name}" style="width:60px; height:60px; object-fit:cover; border-radius:8px; border:2px solid #C9A84C44; margin-bottom:5px;">
                                ${productB.name}
                                <small class="text-white-50">${productB.brand}</small>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody id="comparisonBody"></tbody>
            </table>
        </div>
    `;

    const tbody = document.getElementById('comparisonBody');
    if (!tbody) return;

    // Har ek feature row ko add karna
    features.forEach((key) => {
        const row = document.createElement('tr');
        
        // Key name ko properly Capitalize format me convert karna
        const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

        const valA = productA[key] !== undefined && productA[key] !== '' ? productA[key] : '—';
        const valB = productB[key] !== undefined && productB[key] !== '' ? productB[key] : '—';

        // Highlight matching features
        const isMatch = valA === valB && valA !== '—';
        const highlightClass = isMatch ? 'highlight' : '';

        row.innerHTML = `
            <td class="text-white-50 fw-bold">${formattedKey}</td>
            <td class="text-white ${highlightClass}">${valA}</td>
            <td class="text-amber fw-bold ${highlightClass}">${valB}</td>
        `;
        tbody.appendChild(row);
    });

    // Add note about matching features
    const note = document.createElement('div');
    note.className = 'text-center mt-3';
    note.innerHTML = `
        <span class="text-white-50 small">
            <i class="fas fa-info-circle text-amber me-1"></i>
            Highlighted values indicate matching features.
        </span>
    `;
    result.appendChild(note);
}

// ===========================================
// HANDLE COMPARE BUTTON
// ===========================================
function handleCompare(e) {
    const btn = e.currentTarget;
    
    // Ripple Effect
    let ripple = document.createElement("span");
    ripple.classList.add("ripple");
    btn.appendChild(ripple);

    let x = e.clientX - btn.getBoundingClientRect().left;
    let y = e.clientY - btn.getBoundingClientRect().top;

    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255,255,255,0.3)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'rippleEffect 0.6s linear';
    ripple.style.width = '100px';
    ripple.style.height = '100px';
    ripple.style.marginLeft = '-50px';
    ripple.style.marginTop = '-50px';
    ripple.style.pointerEvents = 'none';

    setTimeout(function() { 
        if (ripple && ripple.parentNode) {
            ripple.remove();
        }
    }, 600);

    // Comparison Logic
    const select1 = document.getElementById('product1');
    const select2 = document.getElementById('product2');
    if (!select1 || !select2) return;

    const productA = compareProducts.find(p => String(p.id) === select1.value);
    const productB = compareProducts.find(p => String(p.id) === select2.value);
    renderComparison(productA, productB);
}

// ===========================================
// GEOLOCATION (Footer)
// ===========================================
function updateLocationInfo(position) {
    var lat = position.coords.latitude.toFixed(6);
    var lng = position.coords.longitude.toFixed(6);
    var el = document.getElementById('locationInfo');
    if (el) {
        el.innerHTML = `
            <i class="fas fa-map-pin text-amber me-1"></i> 
            <span class="text-white-50">Lat: ${lat} , Lng: ${lng}</span>
            <span class="badge bg-amber text-dark ms-1" style="background:#C9A84C; font-size:0.7rem;">±${Math.round(position.coords.accuracy || 0)}m</span>
            <div class="mt-1 small text-white-50"><i class="fas fa-route text-amber me-1"></i>Live route via Geolocation API</div>
        `;
    }
}

function showLocationError(error) {
    var el = document.getElementById('locationInfo');
    if (el) {
        var msg = 'Location access denied.';
        if (error.code === 1) msg = '❌ Permission denied.';
        else if (error.code === 2) msg = '⚠️ Position unavailable.';
        else if (error.code === 3) msg = '⏳ Timeout.';
        el.innerHTML = '<i class="fas fa-exclamation-triangle text-warning me-1"></i> ' + msg;
    }
}

function getLocation() {
    if (!navigator.geolocation) {
        var el = document.getElementById('locationInfo');
        if (el) el.innerHTML = '<i class="fas fa-browser text-warning me-1"></i> Geolocation not supported.';
        return;
    }
    navigator.geolocation.getCurrentPosition(updateLocationInfo, showLocationError, {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
    });
}

// ===========================================
// INITIALIZE
// ===========================================
document.addEventListener('DOMContentLoaded', function() {
    // Populate dropdowns
    populateCompareDropdowns();
    
    // Show empty state initially
    var resultDiv = document.getElementById('comparisonResult');
    if (resultDiv) {
        resultDiv.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-sliders-h"></i>
                <h4>Select Two Products</h4>
                <p>Choose two products from the dropdowns above and click "Compare Now" to see their features side by side.</p>
            </div>
        `;
    }

    // Compare button
    var compareBtn = document.getElementById('compareBtn');
    if (compareBtn) {
        compareBtn.addEventListener('click', handleCompare);
    }

    // Clear button
    var clearBtn = document.getElementById('clearBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            document.getElementById('product1').value = '';
            document.getElementById('product2').value = '';
            var resultDiv = document.getElementById('comparisonResult');
            if (resultDiv) {
                resultDiv.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-sliders-h"></i>
                        <h4>Select Two Products</h4>
                        <p>Choose two products from the dropdowns above and click "Compare Now" to see their features side by side.</p>
                    </div>
                `;
            }
        });
    }

    // Enter key support
    document.querySelectorAll('select').forEach(function(select) {
        select.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                var compareBtn = document.getElementById('compareBtn');
                if (compareBtn) compareBtn.click();
            }
        });
    });

    // Get geolocation
    getLocation();
    
    // Retry after 4 seconds if still locating
    setTimeout(function() {
        var el = document.getElementById('locationInfo');
        if (el && el.innerHTML.indexOf('Locating') !== -1) {
            getLocation();
        }
    }, 4000);
});

// Add ripple animation keyframes
var style = document.createElement('style');
style.textContent = `
    @keyframes rippleEffect {
        to { transform: scale(2.5); opacity: 0; }
    }
    .btn-amber { position: relative; overflow: hidden; }
    .empty-state { text-align: center; padding: 30px 20px; }
    .empty-state i { font-size: 3rem; color: #C9A84C44; margin-bottom: 16px; }
    .empty-state h4 { color: #fff; }
    .empty-state p { color: #b0b0d0; }
    .comparison-table { background: #10102a; border: 1px solid #2a2a50; border-radius: 16px; overflow: hidden; }
    .comparison-table .table-dark { background: #10102a; }
    .comparison-table .table-dark th { border-bottom: 2px solid #2a2a50; padding: 14px 18px; background: #1a1a3a; }
    .comparison-table .table-dark td { padding: 12px 18px; border-bottom: 1px solid #1a1a3a; }
    .comparison-table .table-dark tr:last-child td { border-bottom: none; }
    .comparison-table .highlight { color: #C9A84C !important; font-weight: 600; }
    .text-amber { color: #C9A84C; }
`;
document.head.appendChild(style);