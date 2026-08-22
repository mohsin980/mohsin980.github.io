(function () {
  'use strict';

  var root = document.documentElement;
  var themeToggle = document.getElementById('themeToggle');
  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  var yearEl = document.getElementById('year');

  /* ------------------------------------------------------------------
     Theme: default to the visitor's OS preference, then let them
     flip it for the rest of the visit. Kept in memory only (no
     storage APIs) so this behaves the same in every environment.
  ------------------------------------------------------------------ */
  function prefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
  }

  setTheme(prefersDark() ? 'dark' : 'light');

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var current = root.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  /* ------------------------------------------------------------------
     Mobile nav
  ------------------------------------------------------------------ */
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ------------------------------------------------------------------
     Footer year
  ------------------------------------------------------------------ */
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
