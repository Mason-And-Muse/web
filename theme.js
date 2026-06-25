// Theme toggle: honors the system light/dark setting by default, and lets the
// visitor override it. The choice is saved so it persists across pages/visits.
(function () {
  var btn = document.querySelector('.theme-toggle');
  if (!btn) return;

  function effectiveTheme() {
    var forced = document.documentElement.getAttribute('data-theme');
    if (forced === 'light' || forced === 'dark') return forced;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function describe() {
    var next = effectiveTheme() === 'dark' ? 'light' : 'dark';
    var label = 'Switch to ' + next + ' mode';
    btn.setAttribute('aria-label', label);
    btn.setAttribute('title', label);
  }

  btn.addEventListener('click', function () {
    var next = effectiveTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    describe();
  });

  // Keep the label accurate if the system preference changes while the page is
  // open and the visitor hasn't set an explicit override.
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', describe);
  }

  describe();
})();
