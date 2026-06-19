(function() {
  var STORAGE_KEY = 'theme';
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');

  function getCurrentTheme() {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {}
    if (toggle) {
      toggle.setAttribute('aria-checked', theme === 'dark' ? 'true' : 'false');
    }
  }

  if (toggle) {
    toggle.setAttribute('aria-checked', getCurrentTheme() === 'dark' ? 'true' : 'false');
    toggle.addEventListener('click', function() {
      var next = getCurrentTheme() === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }

  window.addEventListener('storage', function(e) {
    if (e.key === STORAGE_KEY && e.newValue) {
      root.setAttribute('data-theme', e.newValue);
      if (toggle) {
        toggle.setAttribute('aria-checked', e.newValue === 'dark' ? 'true' : 'false');
      }
    }
  });
})();
