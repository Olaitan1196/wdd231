// scripts/nav.js

export function initNavigation() {
    const menuBtn = document.getElementById('menu-button');
    const navLinks = document.getElementById('nav-links');
  
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }
  