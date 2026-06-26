// Compare functionality
const compareProducts = [
  {
    id: 1,
    name: "Canon EOS R6 Mark II",
    sensor: "24.2MP",
    video: "4K 60fps",
    price: "650000 PKR",
    iso: "100-102400",
    autofocus: "Dual Pixel CMOS AF II",
    weight: "670g"
  },
  {
    id: 2,
    name: "Sony A7 IV",
    sensor: "33MP",
    video: "4K 60fps",
    price: "620000 PKR",
    iso: "100-51200",
    autofocus: "759-point Fast Hybrid AF",
    weight: "658g"
  },
  {
    id: 3,
    name: "Nikon Z6 II",
    sensor: "24.5MP",
    video: "4K UHD",
    price: "580000 PKR",
    iso: "100-51200",
    autofocus: "273-point Hybrid AF",
    weight: "705g"
  },
  {
    id: 4,
    name: "Fujifilm X-T5",
    sensor: "40MP",
    video: "6.2K",
    price: "155000 PKR",
    iso: "125-12800",
    autofocus: "Phase Detect AF",
    weight: "607g"
  },
  {
    id: 5,
    name: "Canon EOS R5",
    sensor: "45MP",
    video: "8K",
    price: "950000 PKR",
    iso: "100-51200",
    autofocus: "Dual Pixel CMOS AF II",
    weight: "738g"
  },
  {
    id: 6,
    name: "Sony A7R V",
    sensor: "61MP",
    video: "8K",
    price: "980000 PKR",
    iso: "100-32000",
    autofocus: "AI Tracking AF",
    weight: "723g"
  },
  {
    id: 7,
    name: "Nikon Z8",
    sensor: "45.7MP",
    video: "8K 60fps",
    price: "1100000 PKR",
    iso: "64-25600",
    autofocus: "493-point AF",
    weight: "910g"
  },
  {
    id: 8,
    name: "Fujifilm X-H2",
    sensor: "40.2MP",
    video: "8K",
    price: "480000 PKR",
    iso: "125-12800",
    autofocus: "Hybrid AF",
    weight: "660g"
  },
  {
    id: 9,
    name: "Canon RF 24-70mm Lens",
    focalLength: "24-70mm",
    aperture: "f/2.8",
    mount: "RF Mount",
    stabilization: "Yes",
    price: "420000 PKR",
    weight: "900g"
  },
  {
    id: 10,
    name: "Canon RF 70-200mm Lens",
    focalLength: "70-200mm",
    aperture: "f/2.8",
    mount: "RF Mount",
    stabilization: "Yes",
    price: "620000 PKR",
    weight: "1070g"
  },
  {
    id: 11,
    name: "Canon RF 50mm Lens",
    focalLength: "50mm",
    aperture: "f/1.2",
    mount: "RF Mount",
    stabilization: "No",
    price: "290000 PKR",
    weight: "950g"
  },
  {
    id: 12,
    name: "Sony FE 24-70mm Lens",
    focalLength: "24-70mm",
    aperture: "f/2.8 GM II",
    mount: "Sony E Mount",
    stabilization: "No",
    price: "500000 PKR",
    weight: "695g"
  },
  {
    id: 13,
    name: "Sony FE 70-200mm Lens",
    focalLength: "70-200mm",
    aperture: "f/2.8 GM OSS",
    mount: "Sony E Mount",
    stabilization: "Yes",
    price: "650000 PKR",
    weight: "1045g"
  },
  {
    id: 14,
    name: "Sony FE 50mm Lens",
    focalLength: "50mm",
    aperture: "f/1.2 GM",
    mount: "Sony E Mount",
    stabilization: "No",
    price: "350000 PKR",
    weight: "778g"
  },
  {
    id: 15,
    name: "Nikon Z 24-70mm Lens",
    focalLength: "24-70mm",
    aperture: "f/2.8",
    mount: "Z Mount",
    stabilization: "No",
    price: "470000 PKR",
    weight: "805g"
  },
  {
    id: 16,
    name: "Fujifilm XF 16-55mm Lens",
    focalLength: "16-55mm",
    aperture: "f/2.8",
    mount: "X Mount",
    stabilization: "No",
    price: "250000 PKR",
    weight: "655g"
  },
  {
    id: 17,
    name: "Rode VideoMic Pro+",
    type: "Shotgun Microphone",
    battery: "Rechargeable",
    connectivity: "3.5mm",
    frequencyResponse: "20Hz-20kHz",
    price: "85000 PKR",
    weight: "122g"
  },
  {
    id: 18,
    name: "Rode Wireless GO II",
    type: "Wireless Microphone",
    battery: "7 Hours",
    connectivity: "USB-C",
    range: "200m",
    price: "95000 PKR",
    weight: "32g"
  },
  {
    id: 19,
    name: "DJI Mic 2",
    type: "Wireless Microphone",
    battery: "18 Hours",
    connectivity: "USB-C",
    range: "250m",
    price: "120000 PKR",
    weight: "28g"
  },
  {
    id: 20,
    name: "DJI RS 4 Gimbal",
    type: "Camera Stabilizer",
    payload: "3kg",
    battery: "12 Hours",
    connectivity: "Bluetooth",
    price: "180000 PKR",
    weight: "1240g"
  },
  {
    id: 21,
    name: "SanDisk Extreme Pro 128GB",
    storage: "128GB",
    speed: "200MB/s",
    type: "SDXC UHS-I",
    warranty: "Lifetime",
    price: "12000 PKR",
    weight: "2g"
  },
  {
    id: 22,
    name: "SanDisk Extreme Pro 256GB",
    storage: "256GB",
    speed: "200MB/s",
    type: "SDXC UHS-I",
    warranty: "Lifetime",
    price: "22000 PKR",
    weight: "2g"
  },
  {
    id: 23,
    name: "Lexar Professional 128GB",
    storage: "128GB",
    speed: "280MB/s",
    type: "SDXC UHS-II",
    warranty: "Lifetime",
    price: "15000 PKR",
    weight: "2g"
  },
  {
    id: 24,
    name: "Lexar Professional 256GB",
    storage: "256GB",
    speed: "300MB/s",
    type: "SDXC UHS-II",
    warranty: "Lifetime",
    price: "28000 PKR",
    weight: "2g"
  },
  {
    id: 25,
    name: "Canon Speedlite EL-5",
    type: "Flash",
    guideNumber: "60m",
    connectivity: "Wireless",
    battery: "Rechargeable",
    price: "95000 PKR",
    weight: "491g"
  },
  {
    id: 26,
    name: "Sony HVL-F60RM2",
    type: "Flash",
    guideNumber: "60m",
    connectivity: "Wireless",
    battery: "AA Batteries",
    price: "110000 PKR",
    weight: "439g"
  },
  {
    id: 27,
    name: "Manfrotto Befree Tripod",
    type: "Tripod",
    material: "Aluminum",
    maxHeight: "150cm",
    loadCapacity: "8kg",
    price: "45000 PKR",
    weight: "1490g"
  },
  {
    id: 28,
    name: "Peak Design Camera Bag",
    type: "Camera Backpack",
    capacity: "30L",
    material: "Weatherproof",
    color: "Black",
    price: "55000 PKR",
    weight: "1800g"
  },
  {
    id: 29,
    name: "Godox SL60W",
    type: "LED Video Light",
    power: "60W",
    colorTemp: "5600K",
    brightness: "High Output",
    price: "35000 PKR",
    weight: "1610g"
  },
  {
    id: 30,
    name: "Aputure Amaran 100D",
    type: "LED Video Light",
    power: "100W",
    colorTemp: "5600K",
    brightness: "Ultra Bright",
    price: "65000 PKR",
    weight: "1400g"
  }
];

function populateCompareDropdowns() {
    const select1 = document.getElementById('product1');
    const select2 = document.getElementById('product2');
    if (!select1 || !select2) return;

    compareProducts.forEach(product => {
        const option1 = document.createElement('option');
        option1.value = product.id;
        option1.textContent = product.name;
        select1.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = product.id;
        option2.textContent = product.name;
        select2.appendChild(option2);
    });
}

function renderComparison(productA, productB) {
    const result = document.getElementById('comparisonResult');
    if (!result) return;

    if (!productA || !productB || productA.id === productB.id) {
        result.innerHTML = '<p class="text-white-50">Select two different products to compare.</p>';
        return;
    }

    result.innerHTML = `
        <div class="table-responsive">
            <table class="table table-dark table-bordered text-white align-middle">
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>${productA.name}</th>
                        <th>${productB.name}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Sensor</td><td>${productA.sensor}</td><td>${productB.sensor}</td></tr>
                    <tr><td>Video</td><td>${productA.video}</td><td>${productB.video}</td></tr>
                    <tr><td>ISO Range</td><td>${productA.iso}</td><td>${productB.iso}</td></tr>
                    <tr><td>Autofocus</td><td>${productA.autofocus}</td><td>${productB.autofocus}</td></tr>
                    <tr><td>Weight</td><td>${productA.weight}</td><td>${productB.weight}</td></tr>
                    <tr><td>Price</td><td>${productA.price}</td><td>${productB.price}</td></tr>
                </tbody>
            </table>
        </div>
    `;
}

function handleCompare() {
    const select1 = document.getElementById('product1');
    const select2 = document.getElementById('product2');
    if (!select1 || !select2) return;

    const productA = compareProducts.find(p => String(p.id) === select1.value);
    const productB = compareProducts.find(p => String(p.id) === select2.value);
    renderComparison(productA, productB);
}

document.addEventListener('DOMContentLoaded', () => {
    populateCompareDropdowns();

    const compareBtn = document.getElementById('compareBtn');
    if (compareBtn) {
        compareBtn.addEventListener('click', handleCompare);
    }
});