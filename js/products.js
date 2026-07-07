// ===========================================
// PRODUCTS PAGE - FOTOLAB
// Product Database & Rendering Logic
// ===========================================

// Product Database
const products = [
    // --- Cameras ---
    { id: 1, name: "Canon EOS R5", brand: "Canon", category: "cameras", price: "$3,899", desc: "45MP full-frame mirrorless with 8K video and IBIS.", img: "../products image/Canon cameras Canon EOS R5.jpg" },
    { id: 2, name: "Nikon Z9", brand: "Nikon", category: "cameras", price: "$5,499", desc: "Flagship mirrorless with 45.7MP stacked sensor and 8K video.", img: "../products image/Nikon Z9 Flagship.jpg" },
    { id: 3, name: "Sony A7 IV", brand: "Sony", category: "cameras", price: "$2,499", desc: "33MP full-frame hybrid with advanced autofocus and 4K video.", img: "../products image/Sony cameras Sony A7.jpg" },
    { id: 4, name: "Fujifilm X-T5", brand: "Fujifilm", category: "cameras", price: "$1,699", desc: "40MP APS-C with film simulation and 6.2K video.", img: "../products image/Fujifilm cameras Fujifilm.jpg" },
    { id: 5, name: "Panasonic Lumix GH6", brand: "Panasonic", category: "cameras", price: "$2,199", desc: "Micro Four Thirds with 5.7K video and ProRes recording.", img: "../products image/Panasonic cameras Panasonic.jpg" },
    
    // --- Lenses ---
    { id: 6, name: "Canon RF 85mm f/1.2 L", brand: "Canon", category: "lenses", price: "$2,399", desc: "Portrait Prime, f/1.2 Aperture, RF Mount", img: "../products image/Canon lenses Canon RF 85mm.jpg" },
    { id: 7, name: "Sony FE 16-35mm GM II", brand: "Sony", category: "lenses", price: "$2,299", desc: "Ultra-Wide Zoom, f/2.8, G-Master", img: "../products image/Sony lenses Sony FE 16-35mm.jpg" },
    { id: 8, name: "Nikon Z 105mm Macro", brand: "Nikon", category: "lenses", price: "$1,899", desc: "Macro Lens, 1:1 Magnification, Z Mount", img: "../products image/Nikon lenses Nikon Z 105mm.jpg" },
    { id: 9, name: "Fujifilm XF 56mm f/1.2", brand: "Fujifilm", category: "lenses", price: "$999", desc: "Fast Portrait Prime, X Mount, Sharp Bokeh", img: "../products image/Fujifilm lenses Fujifilm XF 56mm.jpg" },
    { id: 10, name: "Canon RF 100-500mm", brand: "Canon", category: "lenses", price: "$2,699", desc: "Super Telephoto Zoom, Optical IS", img: "../products image/Canon lenses Canon RF 100-500mm.jpg" },
    { id: 11, name: "Sony FE 90mm Macro", brand: "Sony", category: "lenses", price: "$1,199", desc: "Macro, 1:1, OSS, E-Mount", img: "../products image/Sony lenses Sony FE 90mm.jpg" },
    { id: 12, name: "Nikon Z 70-200mm f/2.8", brand: "Nikon", category: "lenses", price: "$2,699", desc: "Pro Telephoto Zoom, Z Mount", img: "../products image/Nikon lenses Nikon Z 70-200mm.jpg" },
    { id: 13, name: "Canon RF 15-35mm", brand: "Canon", category: "lenses", price: "$1,999", desc: "Wide Angle Zoom, f/2.8, RF Mount", img: "../products image/Canon lenses Canon RF 15-35mm.jpg" },
    { id: 14, name: "Sigma 35mm f/1.4 Art", brand: "Sigma", category: "lenses", price: "$899", desc: "Wide Prime, High Sharpness, Art Series", img: "../products image/Sigma lenses Sigma 35mm.jpg" },
    { id: 15, name: "Tamron 28-75mm G2", brand: "Tamron", category: "lenses", price: "$799", desc: "Standard Zoom, f/2.8, Fast AF", img: "../products image/Tamron lenses Tamron 28-75mm.jpg" },
    
    // --- Pro Audio ---
    { id: 16, name: "Rode VideoMic Pro+", brand: "Rode", category: "audio", price: "$399", desc: "Shotgun Mic, Rechargeable Battery", img: "../products image/Rode audio Rode VideoMic.jpg" },
    { id: 17, name: "Rode Wireless GO II", brand: "Rode", category: "audio", price: "$699", desc: "Wireless Mic, 200m Range", img: "../products image/Rode audio Rode Wireless.jpg" },
    { id: 18, name: "DJI Mic 2", brand: "DJI", category: "audio", price: "$799", desc: "Wireless Mic, 250m Range", img: "../products image/DJI audio DJI Mic.jpg" },
    
    // --- Memory Cards ---
    { id: 19, name: "SanDisk Extreme Pro 128GB", brand: "SanDisk", category: "memory", price: "$149", desc: "200MB/s Speed, SDXC UHS-I", img: "../products image/SanDisk memory SanDisk.jpg" },
    { id: 20, name: "SanDisk Extreme Pro 256GB", brand: "SanDisk", category: "memory", price: "$229", desc: "200MB/s Speed, SDXC UHS-I", img: "../products image/SanDisk memory SanDisk Extreme Pro 256GB.jpg" },
    { id: 21, name: "Lexar Professional 128GB", brand: "Lexar", category: "memory", price: "$169", desc: "280MB/s Speed, SDXC UHS-II", img: "../products image/Lexar memory Lexar Professional 128GB.jpg" },
    { id: 22, name: "Lexar Professional 256GB", brand: "Lexar", category: "memory", price: "$299", desc: "300MB/s Speed, SDXC UHS-II", img: "../products image/Lexar memory Lexar Professional 256GB.jpg" },
    
    // --- Tripods ---
    { id: 23, name: "Manfrotto MT055XPRO3", brand: "Manfrotto", category: "tripods", price: "$349", desc: "Professional aluminum tripod with horizontal column.", img: "../products image/Manfrotto tripods Manfrotto MT055XPRO3.jpg" },
    { id: 24, name: "Gitzo GT2545T", brand: "Gitzo", category: "tripods", price: "$899", desc: "Carbon fiber travel tripod with great stability.", img: "../products image/Gitzo tripods Gitzo GT2545T.jpg" },
    { id: 25, name: "DJI RS 4 Gimbal", brand: "DJI", category: "tripods", price: "$1,199", desc: "3kg Payload, Bluetooth Control", img: "../products image/DJI tripods DJI RS 4 Gimbal.jpg" },
    
    // --- Lighting ---
    { id: 26, name: "Profoto D2 Studio Light", brand: "Profoto", category: "lighting", price: "$1,495", desc: "High-speed studio flash with 10 stops of power range.", img: "../products image/Profoto lighting Profoto D2 Studio.jpg" },
    { id: 27, name: "Godox V1 Flash", brand: "Godox", category: "lighting", price: "$299", desc: "Compact round-head flash for on-camera and off-camera use.", img: "../products image/Godox lighting Godox V1 Flash.jpg" },
    { id: 28, name: "Godox SL60W", brand: "Godox", category: "lighting", price: "$249", desc: "60W Power, 5600K Temp", img: "../products image/Godox lighting Godox SL60W.jpg" },
    { id: 29, name: "Aputure Amaran 100D", brand: "Aputure", category: "lighting", price: "$399", desc: "100W Power, Ultra Bright", img: "../products image/Aputure lighting Aputure Amaran.jpg" },
    
    // --- Bags & Cases ---
    { id: 30, name: "Peak Design Everyday Backpack 30L", brand: "Peak Design", category: "bags", price: "$299", desc: "30L Capacity, Weatherproof", img: "../products image/Peak Design bags Peak Design.jpg" },
    { id: 31, name: "Think Tank Airport Security V3", brand: "Think Tank", category: "bags", price: "$399", desc: "Rolling camera case for professional gear and travel.", img: "../products image/Think Tank bags Think Tank Airport.jpg" },
    
    // --- Accessories ---
    { id: 32, name: "B+W 77mm UV Filter", brand: "B+W", category: "accessories", price: "$89", desc: "High-quality brass filter with MRC nano coating.", img: "../products image/B+W accessories B+W 77mm.jpg" },
    { id: 33, name: "DJI Ronin RS 3 Pro", brand: "DJI", category: "accessories", price: "$999", desc: "Professional 3-axis gimbal for cameras and cinema rigs.", img: "../products image/DJI accessories DJI Ronin RS 3 Pro.jpg" },
    { id: 34, name: "Canon Speedlite EL-5", brand: "Canon", category: "accessories", price: "$399", desc: "60m Guide Number, Wireless Control", img: "../products image/Canon accessories Canon.jpg" },
    { id: 35, name: "Sony HVL-F60RM2", brand: "Sony", category: "accessories", price: "$499", desc: "Wireless Flash, High Performance", img: "../products image/Sony accessories Sony HVL.jpg" }
];

// ===========================================
// RENDER PRODUCTS
// ===========================================
function renderProducts(category) {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    
    const filtered = category === 'all' || !category
        ? products 
        : products.filter(p => p.category === category);
    
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-box-open fa-3x text-amber mb-3"></i>
                <h4 class="text-white">No products found</h4>
                <p class="text-white-50">Try selecting a different category.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(p => `
        <div class="col-6 col-md-4 col-lg-3">
            <div class="product-card">
                <img src="${p.img}" alt="${p.name}" loading="lazy">
                <div class="d-flex justify-content-between align-items-center mt-2">
                    <span class="badge-brand">${p.brand}</span>
                    <span class="badge bg-dark text-white-50" style="font-size:0.65rem; text-transform:capitalize;">${p.category}</span>
                </div>
                <h5>${p.name}</h5>
                <p class="desc">${p.desc}</p>
                <div class="d-flex justify-content-between align-items-center mt-2">
                    <span class="price">${p.price}</span>
                    <button class="btn-details" onclick="showProductDetails(${p.id})">
                        <i class="fas fa-info-circle me-1"></i> Details
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ===========================================
// SHOW PRODUCT DETAILS
// ===========================================
function showProductDetails(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    
    alert(`Product: ${product.name}\nBrand: ${product.brand}\nCategory: ${product.category}\nPrice: ${product.price}\nFeatures: ${product.desc}\n\nDetailed specifications available in the product brochure (Word document).`);
}

// ===========================================
// GEOLOCATION (Footer)
// ===========================================
function updateLocationInfo(position) {
    const lat = position.coords.latitude.toFixed(6);
    const lng = position.coords.longitude.toFixed(6);
    const el = document.getElementById('locationInfo');
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
    const el = document.getElementById('locationInfo');
    if (el) {
        let msg = 'Location access denied.';
        if (error.code === 1) msg = '❌ Permission denied.';
        else if (error.code === 2) msg = '⚠️ Position unavailable.';
        else if (error.code === 3) msg = '⏳ Timeout.';
        el.innerHTML = `<i class="fas fa-exclamation-triangle text-warning me-1"></i> ${msg}`;
    }
}

function getLocation() {
    if (!navigator.geolocation) {
        const el = document.getElementById('locationInfo');
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
    // Render all products initially
    renderProducts('all');
    
    // Category filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const category = this.dataset.category;
            renderProducts(category);
        });
    });
    
    // Get geolocation
    getLocation();
    
    // Retry after 4 seconds if still locating
    setTimeout(() => {
        const el = document.getElementById('locationInfo');
        if (el && el.innerHTML.includes('Locating')) {
            getLocation();
        }
    }, 4000);
});