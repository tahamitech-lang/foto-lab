// Products data and logic
const products = [
    {
        id: 1,
        name: "Canon EOS R6 Mark II",
        brand: "Canon",
        category: "Mirrorless Cameras",
        price: "₹1,85,000",
        image: "https://picsum.photos/id/201/400/300",
        features: "24.2MP, 4K Video, Dual Pixel AF"
    },
    {
        id: 2,
        name: "Nikon Z6 II",
        brand: "Nikon",
        category: "Mirrorless Cameras",
        price: "₹1,65,000",
        image: "https://picsum.photos/id/202/400/300",
        features: "24.5MP, IBIS, 4K60p"
    },
    // Add more products for all categories...
];

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
                            <a href="#" onclick="downloadFeatures(${product.id}); return false;" class="btn btn-sm btn-outline-light">Download Specs</a>
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