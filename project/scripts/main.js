// scripts/main.js

import { initNavigation } from './nav.js';
import { loadProducts } from './products.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  
  const productSection = document.getElementById('product-list');
  if (productSection) {
    loadProducts();
  }
});

// Set current year in footer
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
      const now = new Date();
      const options = { year: "numeric", month: "long", day: "numeric" };
      const fullDate = now.toLocaleDateString("en-US", options);
      yearSpan.textContent = fullDate;
    }
  });
  
  