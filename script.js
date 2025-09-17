// ===========================
// Mobile Menu Toggle
// ===========================
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('show');
  });
}

// ===========================
// Auto Footer Year
// ===========================
const y = document.getElementById('year');
if (y) {
  y.textContent = new Date().getFullYear();
}

// ===========================
// Simple JavaScript Example
// ===========================
// This function changes the text on your home page when you click the button.
function changeText() {
  document.getElementById("funText").textContent = "You clicked the button! 🎉";
}

