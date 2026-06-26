// Products data and logic
const products = [
{
id: 1,
name: "Canon EOS R6 Mark II",
brand: "Canon",
category: "Mirrorless Camera",
price: "650000 PKR",
image: "https://picsum.photos/id/201/400/300",
features: "24.2MP Sensor, 4K 60fps Video, Dual Pixel CMOS AF II"
},
{
id: 2,
name: "Sony A7 IV",
brand: "Sony",
category: "Mirrorless Camera",
price: "620000 PKR",
image: "https://picsum.photos/id/202/400/300",
features: "33MP Sensor, 4K 60fps Video, 759-point Fast Hybrid AF"
},
{
id: 3,
name: "Nikon Z6 II",
brand: "Nikon",
category: "Mirrorless Camera",
price: "580000 PKR",
image: "https://picsum.photos/id/203/400/300",
features: "24.5MP Sensor, 4K UHD Video, 273-point Hybrid AF"
},
{
id: 4,
name: "Fujifilm X-T5",
brand: "Fujifilm",
category: "Mirrorless Camera",
price: "155000 PKR",
image: "https://picsum.photos/id/204/400/300",
features: "40MP Sensor, 6.2K Video, Phase Detect AF"
},
{
id: 5,
name: "Canon EOS R5",
brand: "Canon",
category: "Mirrorless Camera",
price: "950000 PKR",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThD7N8qQXhMMITEXOSMF4GZww7u9p7BP0X7V3WAYLqKg&s=10",
features: "45MP Sensor, 8K Video, Dual Pixel CMOS AF II"
},
{
id: 6,
name: "Sony A7R V",
brand: "Sony",
category: "Mirrorless Camera",
price: "980000 PKR",
image: "https://picsum.photos/id/206/400/300",
features: "61MP Sensor, 8K Video, AI Tracking AF"
},
{
id: 7,
name: "Nikon Z8",
brand: "Nikon",
category: "Mirrorless Camera",
price: "1100000 PKR",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsdvqh6rEFHGbvmIP60jKqwot3Sa2HTB1bz2jkSSOVzg&s=10",
features: "45.7MP Sensor, 8K 60fps Video, 493-point AF"
},
{
id: 8,
name: "Fujifilm X-H2",
brand: "Fujifilm",
category: "Mirrorless Camera",
price: "480000 PKR",
image: "https://picsum.photos/id/208/400/300",
features: "40.2MP Sensor, 8K Video, Hybrid AF"
},
{
id: 9,
name: "Canon RF 24-70mm Lens",
brand: "Canon",
category: "Camera Lens",
price: "420000 PKR",
image: "https://picsum.photos/id/209/400/300",
features: "24-70mm, f/2.8 Aperture, Image Stabilization"
},
{
id: 10,
name: "Canon RF 70-200mm Lens",
brand: "Canon",
category: "Camera Lens",
price: "620000 PKR",
image: "https://picsum.photos/id/210/400/300",
features: "70-200mm, f/2.8 Aperture, Image Stabilization"
},
{
id: 11,
name: "Canon RF 50mm Lens",
brand: "Canon",
category: "Camera Lens",
price: "290000 PKR",
image: "https://picsum.photos/id/211/400/300",
features: "50mm Prime Lens, f/1.2 Aperture, RF Mount"
},
{
id: 12,
name: "Sony FE 24-70mm Lens",
brand: "Sony",
category: "Camera Lens",
price: "500000 PKR",
image: "https://picsum.photos/id/212/400/300",
features: "24-70mm, f/2.8 GM II, Sony E Mount"
},
{
id: 13,
name: "Sony FE 70-200mm Lens",
brand: "Sony",
category: "Camera Lens",
price: "650000 PKR",
image: "https://picsum.photos/id/213/400/300",
features: "70-200mm, f/2.8 GM OSS, Optical Stabilization"
},
{
id: 14,
name: "Sony FE 50mm Lens",
brand: "Sony",
category: "Camera Lens",
price: "350000 PKR",
image: "https://picsum.photos/id/214/400/300",
features: "50mm Prime Lens, f/1.2 GM, Sony E Mount"
},
{
id: 15,
name: "Nikon Z 24-70mm Lens",
brand: "Nikon",
category: "Camera Lens",
price: "470000 PKR",
image: "https://picsum.photos/id/215/400/300",
features: "24-70mm Lens, f/2.8 Aperture, Z Mount"
},
{
id: 16,
name: "Fujifilm XF 16-55mm Lens",
brand: "Fujifilm",
category: "Camera Lens",
price: "250000 PKR",
image: "https://picsum.photos/id/216/400/300",
features: "16-55mm Lens, f/2.8 Aperture, X Mount"
},
{
id: 17,
name: "Rode VideoMic Pro+",
brand: "Rode",
category: "Microphone",
price: "85000 PKR",
image: "https://picsum.photos/id/217/400/300",
features: "Shotgun Mic, Rechargeable Battery, 3.5mm Output"
},
{
id: 18,
name: "Rode Wireless GO II",
brand: "Rode",
category: "Microphone",
price: "95000 PKR",
image: "https://picsum.photos/id/218/400/300",
features: "Wireless Mic, 200m Range, USB-C"
},
{
id: 19,
name: "DJI Mic 2",
brand: "DJI",
category: "Microphone",
price: "120000 PKR",
image: "https://picsum.photos/id/219/400/300",
features: "Wireless Mic, 250m Range, 18 Hour Battery"
},
{
id: 20,
name: "DJI RS 4 Gimbal",
brand: "DJI",
category: "Gimbal",
price: "180000 PKR",
image: "https://picsum.photos/id/220/400/300",
features: "3kg Payload, Bluetooth Control, 12 Hour Battery"
},
{
id: 21,
name: "SanDisk Extreme Pro 128GB",
brand: "SanDisk",
category: "Memory Card",
price: "12000 PKR",
image: "https://picsum.photos/id/221/400/300",
features: "128GB Storage, 200MB/s Speed, SDXC UHS-I"
},
{
id: 22,
name: "SanDisk Extreme Pro 256GB",
brand: "SanDisk",
category: "Memory Card",
price: "22000 PKR",
image: "https://picsum.photos/id/222/400/300",
features: "256GB Storage, 200MB/s Speed, SDXC UHS-I"
},
{
id: 23,
name: "Lexar Professional 128GB",
brand: "Lexar",
category: "Memory Card",
price: "15000 PKR",
image: "https://picsum.photos/id/223/400/300",
features: "128GB Storage, 280MB/s Speed, SDXC UHS-II"
},
{
id: 24,
name: "Lexar Professional 256GB",
brand: "Lexar",
category: "Memory Card",
price: "28000 PKR",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROk_HUwPf5QmtbF4ychEK3I-IXVwdU_42mzlU2J9EZOg&s=10",
features: "256GB Storage, 300MB/s Speed, SDXC UHS-II"
},
{
id: 25,
name: "Canon Speedlite EL-5",
brand: "Canon",
category: "Flash",
price: "95000 PKR",
image: "https://picsum.photos/id/225/400/300",
features: "60m Guide Number, Wireless Control, Rechargeable Battery"
},
{
id: 26,
name: "Sony HVL-F60RM2",
brand: "Sony",
category: "Flash",
price: "110000 PKR",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnWbyZS0FVtN7GBPp-YJ5RTBtlzBX_pujDs_waB20e3w&s=10",
features: "60m Guide Number, Wireless Flash, AA Batteries"
},
{
id: 27,
name: "Manfrotto Befree Tripod",
brand: "Manfrotto",
category: "Tripod",
price: "45000 PKR",
image: "https://picsum.photos/id/227/400/300",
features: "Aluminum Build, 150cm Height, 8kg Load Capacity"
},
{
id: 28,
name: "Peak Design Camera Bag",
brand: "Peak Design",
category: "Camera Bag",
price: "55000 PKR",
image: "https://picsum.photos/id/228/400/300",
features: "30L Capacity, Weatherproof Material, Black Color"
},
{
id: 29,
name: "Godox SL60W",
brand: "Godox",
category: "LED Video Light",
price: "35000 PKR",
image: "https://picsum.photos/id/229/400/300",
features: "60W Power, 5600K Color Temperature, High Output"
},
{
id: 30,
name: "Aputure Amaran 100D",
brand: "Aputure",
category: "LED Video Light",
price: "65000 PKR",
image: "https://picsum.photos/id/230/400/300",
features: "100W Power, 5600K Color Temperature, Ultra Bright"
}
];
    // Add more products for all categories...

function renderProducts(containerId, filteredProducts = products) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    filteredProducts.forEach(product => {
        const card = `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="product-card card h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <span class="badge bg-teal">${product.brand}</span>
                        <h5>${product.name}</h5>
                        <p class="small">${product.features}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="fs-4 fw-bold">${product.price}</span>
                            <a href="#" onclick="downloadFeatures(${product.id}); return false;" class="btn btn-sm btn-outline-light">Click here for Download</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Filter function for brands etc.
function downloadFeatures(id) {
    alert(`Downloading features for product ID: ${id}. (DOCX simulation)`);
}

// Call on load if applicable
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('productGrid')) {
        renderProducts('productGrid');
    }
});