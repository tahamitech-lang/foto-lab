// FOTOLAB Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Bootstrap tooltips if any
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Featured products population (example data)
    const featuredProductsContainer = document.getElementById('featuredProducts');
    if (featuredProductsContainer) {
        const products = [
            {
                name: "Canon EOS R5",
                brand: "Canon",
                price: "₹2,45,000",
                img: "https://picsum.photos/id/201/400/300"
            },
            // Add more
        ];
        products.forEach(p => {
            const cardHTML = `
                <div class="col-md-4 col-lg-3 mb-4">
                    <div class="product-card card h-100 border-0 shadow">
                        <img src="${p.img}" class="card-img-top" alt="${p.name}">
                        <div class="card-body">
                            <h5 class="card-title">${p.name}</h5>
                            <p class="text-amber">${p.brand}</p>
                            <p class="fw-bold">${p.price}</p>
                            <a href="products.html" class="btn btn-outline-light w-100">View Details</a>
                        </div>
                    </div>
                </div>
            `;
            featuredProductsContainer.innerHTML += cardHTML;
        });
    }

    console.log('%cFOTOLAB Website Loaded Successfully', 'color: #E94560; font-size: 16px; font-family: monospace');
});