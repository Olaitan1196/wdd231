// scripts/products.js

export async function loadProducts() {
    const container = document.getElementById('product-list');
    
    try {
      const response = await fetch('data/products.json');
      const products = await response.json();
  
      products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
  
        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <h3>${product.name}</h3>
          <p class="price">${product.price}</p>
          <p class="desc">${product.description}</p>
          <button class="buy-btn">Add to Cart</button>
        `;
  
        container.appendChild(card);
      });
  
    } catch (err) {
      container.innerHTML = '<p class="error">Failed to load products.</p>';
      console.error('Error loading products:', err);
    }
  }
  