(function () {
    const LOADER_DURATION = 1500;

    const CSS = `
      #fotolab-loader {
        position: fixed;
        inset: 0;
        z-index: 99999;
        background: #0a0a0f;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.25s ease;
      }
      #fotolab-loader.visible {
        opacity: 1;
        pointer-events: all;
      }
      .fl-img-wrap {
        position: relative;
        width: 280px;
        height: 240px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .fl-img-wrap img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        position: relative;
        z-index: 2;
        filter: drop-shadow(0 0 18px rgba(80,160,255,0.35));
      }
      .fl-lens-flash {
        position: absolute;
        left: 50%;
        top: 52%;
        transform: translate(-50%, -50%);
        width: 54px;
        height: 54px;
        z-index: 3;
        pointer-events: none;
      }
      .fl-lens-flash::before,
      .fl-lens-flash::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(120,200,255,0.95) 0%, rgba(60,140,255,0.7) 40%, transparent 70%);
        animation: fl-pulse 0.75s ease-in-out infinite alternate;
      }
      .fl-lens-flash::after {
        animation-delay: 0.375s;
        background: radial-gradient(circle, rgba(200,235,255,1) 0%, rgba(80,170,255,0.5) 50%, transparent 70%);
        transform: scale(0.65);
      }
      @keyframes fl-pulse {
        0%   { opacity: 0.5; transform: scale(0.8); }
        100% { opacity: 1;   transform: scale(1.15); }
      }
      .fl-rings {
        position: absolute;
        left: 50%;
        top: 52%;
        transform: translate(-50%, -50%);
        z-index: 1;
        pointer-events: none;
      }
      .fl-ring {
        position: absolute;
        border-radius: 50%;
        border: 2px solid transparent;
        border-top-color: rgba(80,170,255,0.9);
        border-right-color: rgba(80,170,255,0.4);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .fl-ring:nth-child(1) {
        width: 70px; height: 70px;
        border-width: 2.5px;
        border-top-color: rgba(100,190,255,1);
        border-right-color: rgba(100,190,255,0.5);
        animation: fl-spin 1s linear infinite;
      }
      .fl-ring:nth-child(2) {
        width: 100px; height: 100px;
        border-width: 2px;
        border-top-color: rgba(70,155,255,0.85);
        border-right-color: rgba(70,155,255,0.35);
        animation: fl-spin 1.5s linear infinite reverse;
      }
      .fl-ring:nth-child(3) {
        width: 134px; height: 134px;
        border-width: 1.5px;
        border-top-color: rgba(50,130,255,0.65);
        border-right-color: rgba(50,130,255,0.2);
        animation: fl-spin 2.2s linear infinite;
      }
      @keyframes fl-spin {
        from { transform: translate(-50%, -50%) rotate(0deg); }
        to   { transform: translate(-50%, -50%) rotate(360deg); }
      }
      .fl-brand {
        margin-top: 28px;
        font-family: 'Segoe UI', Arial, sans-serif;
        font-size: 13px;
        letter-spacing: 5px;
        text-transform: uppercase;
        color: rgba(160,200,255,0.55);
        font-weight: 400;
      }
    `;

    function injectLoader() {
      const style = document.createElement('style');
      style.textContent = CSS;
      document.head.appendChild(style);

      const imgPath = (typeof IMAGE_PATH !== 'undefined') ? IMAGE_PATH : 'assets/images/photographer.png';

      const loaderHTML = `
        <div id="fotolab-loader">
          <div class="fl-img-wrap">
            <div class="fl-rings">
              <div class="fl-ring"></div>
              <div class="fl-ring"></div>
              <div class="fl-ring"></div>
            </div>
            <img src="${imgPath}" alt="Loading" />
            <div class="fl-lens-flash"></div>
          </div>
          <div class="fl-brand">FOTOLAB</div>
        </div>
      `;
      document.body.insertAdjacentHTML('afterbegin', loaderHTML);
    }

    function showLoader(callback) {
      const loader = document.getElementById('fotolab-loader');
      loader.classList.add('visible');
      setTimeout(callback, LOADER_DURATION);
    }

    function hideLoader() {
      const loader = document.getElementById('fotolab-loader');
      if (loader) loader.classList.remove('visible');
    }

    function interceptLinks() {
      document.addEventListener('click', function (e) {
        const anchor = e.target.closest('a[href]');
        if (!anchor || anchor.target === '_blank') return;

        const href = anchor.getAttribute('href');
        if (!href) return;

        const trimmed = href.trim();
        const isAnchor = trimmed.startsWith('#');
        const isSpecial = /^(javascript|mailto|tel):/.test(trimmed);
        if (isAnchor || isSpecial) return;

        const url = new URL(trimmed, window.location.href);
        const isExternal = url.origin !== window.location.origin;
        const isSamePageAnchor = url.pathname === window.location.pathname && url.hash && url.hash !== '';
        if (isExternal || isSamePageAnchor) return;

        e.preventDefault();
        showLoader(function () { window.location.href = url.href; });
      });
    }

    window.addEventListener('pageshow', function (event) {
      hideLoader();
      if (event.persisted) {
        const loader = document.getElementById('fotolab-loader');
        if (loader) loader.classList.remove('visible');
      }
    });

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () {
        injectLoader();
        interceptLinks();
      });
    } else {
      injectLoader();
      interceptLinks();
    }
  })();