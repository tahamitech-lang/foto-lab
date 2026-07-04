(function () {
    const LOADER_DURATION = 1500;

    const CSS = `
      #fotolab-loader {
        position: fixed;
        inset: 0;
        z-index: 99999;
        background: #0b0b1a;
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
        filter: drop-shadow(0 0 18px rgba(201, 168, 76, 0.4));
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
        background: radial-gradient(circle, rgba(201, 168, 76, 0.95) 0%, rgba(201, 168, 76, 0.6) 40%, transparent 70%);
        animation: fl-pulse 0.75s ease-in-out infinite alternate;
      }
      .fl-lens-flash::after {
        animation-delay: 0.375s;
        background: radial-gradient(circle, rgba(255, 215, 100, 1) 0%, rgba(201, 168, 76, 0.5) 50%, transparent 70%);
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
        border-top-color: rgba(201, 168, 76, 0.9);
        border-right-color: rgba(201, 168, 76, 0.4);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .fl-ring:nth-child(1) {
        width: 70px; height: 70px;
        border-width: 2.5px;
        border-top-color: rgba(201, 168, 76, 1);
        border-right-color: rgba(201, 168, 76, 0.5);
        animation: fl-spin 1s linear infinite;
      }
      .fl-ring:nth-child(2) {
        width: 100px; height: 100px;
        border-width: 2px;
        border-top-color: rgba(201, 168, 76, 0.85);
        border-right-color: rgba(201, 168, 76, 0.35);
        animation: fl-spin 1.5s linear infinite reverse;
      }
      .fl-ring:nth-child(3) {
        width: 134px; height: 134px;
        border-width: 1.5px;
        border-top-color: rgba(201, 168, 76, 0.65);
        border-right-color: rgba(201, 168, 76, 0.2);
        animation: fl-spin 2.2s linear infinite;
      }
      @keyframes fl-spin {
        from { transform: translate(-50%, -50%) rotate(0deg); }
        to   { transform: translate(-50%, -50%) rotate(360deg); }
      }
      .fl-brand {
        margin-top: 28px;
        font-family: 'Bebas Neue', 'Segoe UI', Arial, sans-serif;
        font-size: 18px;
        letter-spacing: 6px;
        text-transform: uppercase;
        color: rgba(201, 168, 76, 0.7);
        font-weight: 400;
        text-shadow: 0 0 20px rgba(201, 168, 76, 0.2);
      }
      .fl-brand span {
        color: #fff;
        font-weight: 300;
      }
    `;

    let loaderInjected = false;

    function resolveLoaderImagePath() {
      const currentPath = window.location.pathname || '';
      const isInsidePagesFolder = currentPath.includes('/pages/');
      return isInsidePagesFolder ? '../images/fotoloader.png' : 'images/fotoloader.png';
    }

    function injectLoader() {
      if (loaderInjected || document.getElementById('fotolab-loader')) return;
      loaderInjected = true;

      const style = document.createElement('style');
      style.textContent = CSS;
      document.head.appendChild(style);

      const imgPath = (typeof IMAGE_PATH !== 'undefined') ? IMAGE_PATH : resolveLoaderImagePath();

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
          <div class="fl-brand">FOTO<span>LAB</span></div>
        </div>
      `;
      document.body.insertAdjacentHTML('afterbegin', loaderHTML);
    }

    function showLoader(callback) {
      const loader = document.getElementById('fotolab-loader');
      if (!loader) {
        if (typeof callback === 'function') callback();
        return;
      }

      loader.classList.add('visible');
      requestAnimationFrame(function () {
        setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, LOADER_DURATION);
      });
    }

    function hideLoader() {
      const loader = document.getElementById('fotolab-loader');
      if (loader) loader.classList.remove('visible');
    }

    function getInternalHref(target) {
      const anchor = target && target.closest ? target.closest('a[href]') : null;
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (!href) return null;

        const trimmed = href.trim();
        if (!trimmed || trimmed.startsWith('#') || /^(javascript|mailto|tel):/i.test(trimmed)) {
          return null;
        }

        const url = new URL(trimmed, window.location.href);
        if (url.origin !== window.location.origin) {
          return null;
        }

        if (url.pathname === window.location.pathname && url.hash) {
          return null;
        }

        return url.href;
      }

      const button = target && target.closest ? target.closest('button[data-href], button[data-loader-link="true"]') : null;
      if (button) {
        const href = button.getAttribute('data-href') || button.getAttribute('data-loader-link');
        if (!href || href === 'true') return null;
        const trimmed = href.trim();
        if (!trimmed || trimmed.startsWith('#') || /^(javascript|mailto|tel):/i.test(trimmed)) {
          return null;
        }

        const url = new URL(trimmed, window.location.href);
        if (url.origin !== window.location.origin) {
          return null;
        }
        return url.href;
      }

      return null;
    }

    function interceptNavigation() {
      if (window.__fotolabLoaderBound) return;
      window.__fotolabLoaderBound = true;

      document.addEventListener('click', function (event) {
        const target = event.target && event.target.closest ? event.target.closest('a[href], button[data-href], button[data-loader-link="true"]') : null;
        if (!target) return;

        const href = getInternalHref(target);
        if (!href) return;

        if (target.tagName === 'BUTTON' && target.getAttribute('type') === 'submit') {
          return;
        }

        event.preventDefault();
        event.stopImmediatePropagation();

        requestAnimationFrame(function () {
          showLoader(function () {
            window.location.assign(href);
          });
        });
      }, true);
    }

    function init() {
      injectLoader();
      interceptNavigation();
    }

    window.addEventListener('pageshow', function () {
      hideLoader();
    });

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
      init();
    }
})();