// ===========================================
// COMPARE.JS - FOTOLAB Product Comparison
// Complete & Professional Version
// ===========================================

// ===========================================
// PRODUCT DATABASE
// ===========================================
const compareProducts = [
    // ===== CAMERAS =====
    { 
        id: 1, 
        name: "Canon EOS R6 Mark II",
        brand: "Canon",
        category: "Mirrorless",
        sensor: "24.2MP Full-Frame",
        video: "4K 60fps",
        price: "₨ 650,000",
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
        price: "₨ 620,000",
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
        price: "₨ 580,000",
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
        price: "₨ 155,000",
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
        price: "₨ 950,000",
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
        price: "₨ 980,000",
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
        price: "₨ 1,100,000",
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
        price: "₨ 480,000",
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
        price: "₨ 420,000",
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
        price: "₨ 620,000",
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
        price: "₨ 290,000",
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
        price: "₨ 500,000",
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
        price: "₨ 650,000",
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
        price: "₨ 350,000",
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
        price: "₨ 470,000",
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
        price: "₨ 250,000",
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
        price: "₨ 85,000",
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
        price: "₨ 95,000",
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
        price: "₨ 120,000",
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
        price: "₨ 180,000",
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
        price: "₨ 45,000",
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
        price: "₨ 12,000",
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
        price: "₨ 22,000",
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
        price: "₨ 15,000",
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
        price: "₨ 28,000",
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
        price: "₨ 95,000",
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
        price: "₨ 110,000",
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
        price: "₨ 35,000",
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
        price: "₨ 65,000",
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
        price: "₨ 55,000",
        weight: "1800g",
        image: "https://picsum.photos/id/1026/200/200"
    }
];

// ===========================================
// POPULATE DROPDOWNS
// ===========================================
function populateCompareDropdowns() {
    console.log('populateCompareDropdowns called');
    const select1 = document.getElementById('product1');
    const select2 = document.getElementById('product2');
    
    if (!select1 || !select2) {
        console.warn('Dropdown elements not found');
        return;
    }

    // Clear existing options
    select1.innerHTML = '<option value="">-- Select Product --</option>';
    select2.innerHTML = '<option value="">-- Select Product --</option>';

    // Add products to dropdowns
    compareProducts.forEach(product => {
        const option1 = document.createElement('option');
        option1.value = product.id;
        option1.textContent = `${product.name} (${product.brand})`;
        select1.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = product.id;
        option2.textContent = `${product.name} (${product.brand})`;
        select2.appendChild(option2);
    });

    console.log(`Added ${compareProducts.length} products to dropdowns`);
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

    // Get all unique keys except id, name, brand, category, image
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
                                <img src="${productA.image}" alt="${productA.name}" 
                                     style="width:60px; height:60px; object-fit:cover; border-radius:8px; border:2px solid #C9A84C44; margin-bottom:5px;"
                                     onerror="this.src='https://picsum.photos/seed/${productA.id}/200/200'">
                                <span class="fw-bold">${productA.name}</span>
                                <small class="text-white-50">${productA.brand}</small>
                            </div>
                        </th>
                        <th style="width:37.5%;" class="text-amber fw-bold">
                            <div class="d-flex flex-column align-items-center">
                                <img src="${productB.image}" alt="${productB.name}" 
                                     style="width:60px; height:60px; object-fit:cover; border-radius:8px; border:2px solid #C9A84C44; margin-bottom:5px;"
                                     onerror="this.src='https://picsum.photos/seed/${productB.id}/200/200'">
                                <span class="fw-bold">${productB.name}</span>
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

    features.forEach((key) => {
        const row = document.createElement('tr');
        
        // Format key name nicely
        const formattedKey = key
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, str => str.toUpperCase())
            .trim();

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
    const select1 = document.getElementById('product1');
    const select2 = document.getElementById('product2');
    
    if (!select1 || !select2) {
        alert('Dropdown elements not found.');
        return;
    }

    const id1 = parseInt(select1.value);
    const id2 = parseInt(select2.value);

    if (!id1 || !id2) {
        alert('Please select two products to compare.');
        return;
    }

    if (id1 === id2) {
        alert('Please select two different products.');
        return;
    }

    const productA = compareProducts.find(p => p.id === id1);
    const productB = compareProducts.find(p => p.id === id2);

    if (!productA || !productB) {
        alert('Products not found in database.');
        return;
    }

    renderComparison(productA, productB);

    // Scroll to results
    const result = document.getElementById('comparisonResult');
    if (result) {
        setTimeout(() => {
            result.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
}

// ===========================================
// CLEAR COMPARISON
// ===========================================
function clearComparison() {
    const select1 = document.getElementById('product1');
    const select2 = document.getElementById('product2');
    const result = document.getElementById('comparisonResult');

    if (select1) select1.value = '';
    if (select2) select2.value = '';

    if (result) {
        result.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-sliders-h"></i>
                <h4>Select Two Products</h4>
                <p>Choose two products from the dropdowns above and click "Compare Now" to see their features side by side.</p>
            </div>
        `;
    }
}

// ===========================================
// INITIALIZE
// ===========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    
    // Populate dropdowns
    populateCompareDropdowns();
    
    // Show empty state initially
    const resultDiv = document.getElementById('comparisonResult');
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
    const compareBtn = document.getElementById('compareBtn');
    if (compareBtn) {
        compareBtn.addEventListener('click', handleCompare);
        console.log('Compare button event listener added');
    } else {
        console.warn('Compare button not found');
    }

    // Clear button
    const clearBtn = document.getElementById('clearBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearComparison);
        console.log('Clear button event listener added');
    } else {
        console.warn('Clear button not found');
    }

    // Enter key support
    document.querySelectorAll('select').forEach(function(select) {
        select.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                const compareBtn = document.getElementById('compareBtn');
                if (compareBtn) compareBtn.click();
            }
        });
    });

    console.log('FOTOLAB Compare page initialized.');
});

// Export functions for use in HTML
window.populateCompareDropdowns = populateCompareDropdowns;
window.renderComparison = renderComparison;
window.handleCompare = handleCompare;
window.clearComparison = clearComparison;