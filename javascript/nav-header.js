// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function () {
  const nav = document.getElementById('main-nav');
  nav.classList.toggle('open');
  this.classList.toggle('open');
});

// Handle dropdowns in mobile view
document.querySelectorAll('.dropdown-toggle').forEach(function (toggle) {
  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    const dropdown = this.nextElementSibling;
    dropdown.classList.toggle('open');
  });
});
