// Products data and logic
const products = [
    // --- Lenses (10 New Entries) ---
    { id: 1, name: "Canon RF 85mm f/1.2 L", brand: "Canon", category: "Camera Lens", price: "750000 PKR", image: "https://picsum.photos/id/10/400/300", features: "Portrait Prime, f/1.2 Aperture, RF Mount" },
    { id: 2, name: "Sony FE 16-35mm GM II", brand: "Sony", category: "Camera Lens", price: "550000 PKR", image: "https://picsum.photos/id/11/400/300", features: "Ultra-Wide Zoom, f/2.8, G-Master" },
    { id: 3, name: "Nikon Z 105mm Macro", brand: "Nikon", category: "Camera Lens", price: "380000 PKR", image: "https://picsum.photos/id/12/400/300", features: "Macro Lens, 1:1 Magnification, Z Mount" },
    { id: 4, name: "Fujifilm XF 56mm f/1.2", brand: "Fujifilm", category: "Camera Lens", price: "220000 PKR", image: "https://picsum.photos/id/13/400/300", features: "Fast Portrait Prime, X Mount, Sharp Bokeh" },
    { id: 5, name: "Canon RF 100-500mm", brand: "Canon", category: "Camera Lens", price: "880000 PKR", image: "https://picsum.photos/id/14/400/300", features: "Super Telephoto Zoom, Optical IS" },
    { id: 6, name: "Sony FE 90mm Macro", brand: "Sony", category: "Camera Lens", price: "320000 PKR", image: "https://picsum.photos/id/15/400/300", features: "Macro, 1:1, OSS, E-Mount" },
    { id: 7, name: "Nikon Z 70-200mm f/2.8", brand: "Nikon", category: "Camera Lens", price: "690000 PKR", image: "https://picsum.photos/id/16/400/300", features: "Pro Telephoto Zoom, Z Mount" },
    { id: 8, name: "Canon RF 15-35mm", brand: "Canon", category: "Camera Lens", price: "520000 PKR", image: "https://picsum.photos/id/17/400/300", features: "Wide Angle Zoom, f/2.8, RF Mount" },
    { id: 9, name: "Sigma 35mm f/1.4 Art", brand: "Sigma", category: "Camera Lens", price: "180000 PKR", image: "https://picsum.photos/id/18/400/300", features: "Wide Prime, High Sharpness, Art Series" },
    { id: 10, name: "Tamron 28-75mm G2", brand: "Tamron", category: "Camera Lens", price: "160000 PKR", image: "https://picsum.photos/id/19/400/300", features: "Standard Zoom, f/2.8, Fast AF" },

    // --- Other Products ---
    { id: 17, name: "Rode VideoMic Pro+", brand: "Rode", category: "Microphone", price: "85000 PKR", image: "https://picsum.photos/id/217/400/300", features: "Shotgun Mic, Rechargeable Battery" },
    { id: 18, name: "Rode Wireless GO II", brand: "Rode", category: "Microphone", price: "95000 PKR", image: "https://picsum.photos/id/218/400/300", features: "Wireless Mic, 200m Range" },
    { id: 19, name: "DJI Mic 2", brand: "DJI", category: "Microphone", price: "120000 PKR", image: "https://picsum.photos/id/219/400/300", features: "Wireless Mic, 250m Range" },
    { id: 20, name: "DJI RS 4 Gimbal", brand: "DJI", category: "Gimbal", price: "180000 PKR", image: "https://picsum.photos/id/220/400/300", features: "3kg Payload, Bluetooth Control" },
    { id: 21, name: "SanDisk 128GB", brand: "SanDisk", category: "Memory Card", price: "12000 PKR", image: "https://picsum.photos/id/221/400/300", features: "200MB/s Speed, SDXC UHS-I" },
    { id: 22, name: "SanDisk 256GB", brand: "SanDisk", category: "Memory Card", price: "22000 PKR", image: "https://picsum.photos/id/222/400/300", features: "200MB/s Speed, SDXC UHS-I" },
    { id: 23, name: "Lexar 128GB", brand: "Lexar", category: "Memory Card", price: "15000 PKR", image: "https://picsum.photos/id/223/400/300", features: "280MB/s Speed, SDXC UHS-II" },
    { id: 24, name: "Lexar 256GB", brand: "Lexar", category: "Memory Card", price: "28000 PKR", image: "https://picsum.photos/id/224/400/300", features: "300MB/s Speed, SDXC UHS-II" },
    { id: 25, name: "Canon Speedlite EL-5", brand: "Canon", category: "Flash", price: "95000 PKR", image: "https://picsum.photos/id/225/400/300", features: "60m Guide Number, Wireless Control" },
    { id: 26, name: "Sony HVL-F60RM2", brand: "Sony", category: "Flash", price: "110000 PKR", image: "https://picsum.photos/id/226/400/300", features: "Wireless Flash, High Performance" },
    { id: 27, name: "Manfrotto Befree", brand: "Manfrotto", category: "Tripod", price: "45000 PKR", image: "https://picsum.photos/id/227/400/300", features: "Aluminum Build, 150cm Height" },
    { id: 28, name: "Peak Design Bag", brand: "Peak Design", category: "Camera Bag", price: "55000 PKR", image: "https://picsum.photos/id/228/400/300", features: "30L Capacity, Weatherproof" },
    { id: 29, name: "Godox SL60W", brand: "Godox", category: "LED Video Light", price: "35000 PKR", image: "https://picsum.photos/id/229/400/300", features: "60W Power, 5600K Temp" },
    { id: 30, name: "Aputure Amaran 100D", brand: "Aputure", category: "LED Video Light", price: "65000 PKR", image: "https://picsum.photos/id/230/400/300", features: "100W Power, Ultra Bright" }
];

function renderProducts(containerId, filteredProducts = products) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    filteredProducts.forEach(product => {
        const card = `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="product-card card h-100 bg-dark text-white border-secondary">
                    <div class="img-zoom-container">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    </div>
                    <div class="card-body d-flex flex-column justify-content-between">
                        <div>
                            <span class="badge bg-teal mb-2">${product.brand}</span>
                            <h5 class="text-amber">${product.name}</h5>
                            <p class="small text-white-50">${product.features}</p>
                        </div>
                        <div class="mt-3">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <span class="fs-5 fw-bold">${product.price}</span>
                            </div>
                            <a href="#" onclick="downloadFeatures(${product.id}); return false;" class="btn btn-slide-in w-100">View Details</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

function downloadFeatures(id) {
    alert(`Downloading detailed features for product ID: ${id} as a Word Document.`);
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('productGrid')) {
        renderProducts('productGrid');
    }
});