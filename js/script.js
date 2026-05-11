'use strict';

/**
 * js/script.js
 * モバイル用ハンバーガーメニューの開閉を制御します。
 */
document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.getElementById('hamburgerBtn');
  var mobileMenu = document.getElementById('mobileMenu');

  if (!hamburger || !mobileMenu) {
    return;
  }

  function openMenu() {
    hamburger.classList.add('is-open');
    mobileMenu.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileMenu.setAttribute('aria-hidden', 'false');
  }

  function closeMenu() {
    hamburger.classList.remove('is-open');
    mobileMenu.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  }

  hamburger.addEventListener('click', function () {
    if (hamburger.classList.contains('is-open')) {
      closeMenu();
      return;
    }

    openMenu();
  });

  document.addEventListener('click', function (event) {
    if (!event.target.closest('.hdr') && mobileMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });

  mobileMenu.querySelectorAll('.mobile-menu__link').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
});
