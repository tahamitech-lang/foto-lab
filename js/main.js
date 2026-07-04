// ===========================================
// FOTOLAB - Main JavaScript File
// Premium Photography Solutions Since 1991
// ===========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===========================================
    // 1. BOOTSTRAP TOOLTIPS
    // ===========================================
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // ===========================================
    // 2. SMOOTH SCROLLING FOR ANCHOR LINKS
    // ===========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===========================================
    // 3. SCROLL ANIMATIONS (Fade In / Reveal)
    // ===========================================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in, .reveal, .animate-fade-up').forEach(el => {
        observer.observe(el);
    });

    // ===========================================
    // 4. BRAND PAGE FILTERING SUPPORT
    // ===========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productItems = document.querySelectorAll('.product-item');

    if (filterBtns.length && productItems.length) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                const filter = this.dataset.filter || this.dataset.category;

                productItems.forEach(item => {
                    const category = item.dataset.category || item.dataset.brand;
                    item.style.display = (filter === 'all' || category === filter) ? 'block' : 'none';
                });
            });
        });
    }

    // ===========================================
    // 5. ACTIVE NAV LINK HIGHLIGHT
    // ===========================================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // ===========================================
    // 6. FEATURED PRODUCTS (if container exists)
    // ===========================================
    const featuredProductsContainer = document.getElementById('featuredProducts');
    if (featuredProductsContainer) {
        const featuredProducts = [
            {
                name: "Canon EOS R5",
                brand: "Canon",
                price: "$3,899",
                img: "https://picsum.photos/id/1060/400/300",
                desc: "45MP full-frame mirrorless with 8K video"
            },
            {
                name: "Sony A7 IV",
                brand: "Sony",
                price: "$2,499",
                img: "https://picsum.photos/id/1062/400/300",
                desc: "33MP full-frame hybrid with 4K 60p"
            },
            {
                name: "Nikon Z9",
                brand: "Nikon",
                price: "$5,499",
                img: "https://picsum.photos/id/1061/400/300",
                desc: "45.7MP stacked sensor flagship"
            },
            {
                name: "Fujifilm X-T5",
                brand: "Fujifilm",
                price: "$1,699",
                img: "https://picsum.photos/id/1063/400/300",
                desc: "40MP APS-C with film simulations"
            }
        ];
        
        featuredProducts.forEach(p => {
            const cardHTML = `
                <div class="col-md-6 col-lg-3 mb-4">
                    <div class="product-card card h-100 border-secondary bg-dark text-white">
                        <img src="${p.img}" class="card-img-top" alt="${p.name}" style="height:200px; object-fit:cover;">
                        <div class="card-body d-flex flex-column">
                            <span class="badge bg-amber text-dark mb-2" style="background:#C9A84C;">${p.brand}</span>
                            <h5 class="card-title text-white">${p.name}</h5>
                            <p class="card-text text-white-50 small">${p.desc}</p>
                            <div class="mt-auto">
                                <p class="text-amber fw-bold">${p.price}</p>
                                <a href="products.html" class="btn btn-amber w-100">View Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            featuredProductsContainer.innerHTML += cardHTML;
        });
    }

    // ===========================================
    // 7. GEOLOCATION (if locationInfo exists)
    // ===========================================
    const locationInfo = document.getElementById('locationInfo');
    if (locationInfo) {
        function updateLocationInfo(position) {
            const lat = position.coords.latitude.toFixed(6);
            const lng = position.coords.longitude.toFixed(6);
            locationInfo.innerHTML = `
                <i class="fas fa-map-pin text-amber me-1"></i> 
                <span class="text-white-50">Lat: ${lat} , Lng: ${lng}</span>
                <span class="badge bg-amber text-dark ms-1" style="background:#C9A84C; font-size:0.7rem;">±${Math.round(position.coords.accuracy || 0)}m</span>
                <div class="mt-1 small text-white-50"><i class="fas fa-route text-amber me-1"></i>Live route via Geolocation API</div>
            `;
        }
        
        function showLocationError(error) {
            let msg = 'Location access denied.';
            if (error.code === 1) msg = '❌ Permission denied.';
            else if (error.code === 2) msg = '⚠️ Position unavailable.';
            else if (error.code === 3) msg = '⏳ Timeout.';
            locationInfo.innerHTML = `<i class="fas fa-exclamation-triangle text-warning me-1"></i> ${msg}`;
        }
        
        function getLocation() {
            if (!navigator.geolocation) {
                locationInfo.innerHTML = '<i class="fas fa-browser text-warning me-1"></i> Geolocation not supported.';
                return;
            }
            navigator.geolocation.getCurrentPosition(updateLocationInfo, showLocationError, {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            });
        }
        
        // Get location on load
        getLocation();
        
        // Retry after 4 seconds if still locating
        setTimeout(function() {
            if (locationInfo.innerHTML.includes('Locating')) {
                getLocation();
            }
        }, 4000);
    }

    // ===========================================
    // 8. LENS APERTURE ROTATION (Hero Animation)
    // ===========================================
    const aperture = document.getElementById('lensAperture');
    if (aperture) {
        let lastScrollY = window.scrollY;
        let rotation = 0;
        
        window.addEventListener('scroll', function() {
            const scrollY = window.scrollY;
            const delta = scrollY - lastScrollY;
            rotation += delta * 0.3;
            aperture.style.transform = `rotate(${rotation}deg)`;
            lastScrollY = scrollY;
        });
    }

    // ===========================================
    // 9. EMAIL PROTECTION (Spam Prevention)
    // ===========================================
    document.querySelectorAll('.email-protect').forEach(el => {
        const user = el.dataset.user || 'info';
        const domain = el.dataset.domain || 'fotolab.com';
        el.href = `mailto:${user}@${domain}`;
        el.textContent = `${user}@${domain}`;
    });

    // ===========================================
    // 10. COMPARE BAR FUNCTIONALITY (Global)
    // ===========================================
    const compareBar = document.getElementById('compare-bar');
    const compareCount = document.getElementById('compare-count');
    const clearBtn = document.getElementById('compare-clear');
    
    if (compareBar && compareCount) {
        // Load saved compare items from sessionStorage
        const savedItems = JSON.parse(sessionStorage.getItem('fotolab-compare-items') || '[]');
        
        // Function to update compare bar
        window.updateCompareBar = function() {
            const checkboxes = document.querySelectorAll('.compare-cb:checked');
            const count = checkboxes.length;
            compareCount.textContent = count;
            
            if (count > 0) {
                compareBar.classList.add('visible');
            } else {
                compareBar.classList.remove('visible');
            }
            
            // Save to sessionStorage
            const names = Array.from(checkboxes).map(cb => cb.dataset.name || cb.value);
            sessionStorage.setItem('fotolab-compare-items', JSON.stringify(names));
        };
        
        // Clear button
        if (clearBtn) {
            clearBtn.addEventListener('click', function() {
                document.querySelectorAll('.compare-cb').forEach(cb => cb.checked = false);
                if (window.updateCompareBar) window.updateCompareBar();
            });
        }
        
        // Initial update
        setTimeout(window.updateCompareBar, 100);
    }

    // ===========================================
    // 11. KEYBOARD SHORTCUTS
    // ===========================================
    document.addEventListener('keydown', function(e) {
        // Press 'H' for Home
        if (e.key === 'h' && !e.ctrlKey && !e.metaKey && !e.altKey && !e.shiftKey) {
            const homeLink = document.querySelector('a[href="index.html"]');
            if (homeLink) {
                e.preventDefault();
                homeLink.click();
            }
        }
        // Press 'P' for Products
        if (e.key === 'p' && !e.ctrlKey && !e.metaKey && !e.altKey && !e.shiftKey) {
            const productsLink = document.querySelector('a[href="products.html"]');
            if (productsLink) {
                e.preventDefault();
                productsLink.click();
            }
        }
        // Press 'C' for Contact
        if (e.key === 'c' && !e.ctrlKey && !e.metaKey && !e.altKey && !e.shiftKey) {
            const contactLink = document.querySelector('a[href="contact.html"]');
            if (contactLink) {
                e.preventDefault();
                contactLink.click();
            }
        }
    });

    // ===========================================
    // 12. SCROLL TO TOP BUTTON
    // ===========================================
    const scrollBtn = document.getElementById('scrollToTop');
    if (scrollBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollBtn.style.display = 'block';
            } else {
                scrollBtn.style.display = 'none';
            }
        });
        
        scrollBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ===========================================
    // 13. BROWSER COMPATIBILITY DETECTION
    // ===========================================
    function getBrowserInfo() {
        const ua = navigator.userAgent;
        let browser = 'Unknown';
        
        if (ua.indexOf('Chrome') > -1 && ua.indexOf('Edg') === -1) {
            browser = 'Chrome';
        } else if (ua.indexOf('Firefox') > -1) {
            browser = 'Firefox';
        } else if (ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1) {
            browser = 'Internet Explorer';
        } else if (ua.indexOf('Edg') > -1) {
            browser = 'Edge';
        } else if (ua.indexOf('Safari') > -1 && ua.indexOf('Chrome') === -1) {
            browser = 'Safari';
        }
        
        return browser;
    }
    
    // Add browser class to body for CSS targeting
    const browser = getBrowserInfo();
    if (browser) {
        document.body.classList.add('browser-' + browser.toLowerCase());
    }

    // ===========================================
    // 14. CONSOLE WELCOME MESSAGE
    // ===========================================
    console.log('%c📸 FOTOLAB', 'font-size:28px; font-weight:bold; color:#C9A84C;');
    console.log('%cPremium Photography Solutions Since 1991', 'font-size:16px; color:#b0b0d0;');
    console.log('%c🚀 Website Loaded Successfully', 'font-size:14px; color:#4CAF50;');
    console.log('%cDesigned with ❤️ by Tahami Tech', 'font-size:12px; color:#666;');
    
    // ===========================================
    // 15. SWUP PAGE TRANSITIONS (if Swup is available)
    // ===========================================
    if (typeof Swup !== 'undefined') {
        try {
            const swup = new Swup({
                plugins: [
                    // Add Swup plugins here if needed
                ]
            });
            console.log('✅ Swup page transitions initialized');
        } catch (e) {
            console.log('ℹ️ Swup not initialized:', e.message);
        }
    }

});

// ===========================================
// 16. UTILITY FUNCTIONS (Global Scope)
// ===========================================

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Format currency
function formatCurrency(amount, currency = 'PKR') {
    return `${currency} ${Number(amount).toLocaleString()}`;
}

// Toggle element visibility
function toggleElement(elementId) {
    const el = document.getElementById(elementId);
    if (el) {
        el.classList.toggle('d-none');
    }
}

// Show loader
function showLoader() {
    const loader = document.getElementById('fotolab-loader');
    if (loader) loader.classList.add('visible');
}

// Hide loader
function hideLoader() {
    const loader = document.getElementById('fotolab-loader');
    if (loader) loader.classList.remove('visible');
}

// ===========================================
// 17. WINDOW LOAD HANDLERS
// ===========================================
window.addEventListener('load', function() {
    // Hide loader when page is fully loaded
    hideLoader();
    
    // Add loaded class to body
    document.body.classList.add('page-loaded');
});

// Handle page visibility change (for tab switching)
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        // Page became visible again
        const locationInfo = document.getElementById('locationInfo');
        if (locationInfo && locationInfo.innerHTML.includes('Location')) {
            // Refresh location if needed
        }
    }
});

// ===========================================
// 18. ERROR HANDLING
// ===========================================
window.addEventListener('error', function(e) {
    console.error('FOTOLAB Error:', e.message);
    // You can add error tracking here if needed
});

console.log('✅ FOTOLAB main.js loaded successfully');