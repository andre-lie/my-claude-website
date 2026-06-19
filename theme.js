(function() {
  var STORAGE_KEY = 'theme';
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');

  function getCurrentTheme() {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
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
})();
