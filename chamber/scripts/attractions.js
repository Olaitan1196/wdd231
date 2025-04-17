const attractionsContainer = document.getElementById('attractions');

fetch('data/attractions.json')
  .then(response => response.json())
  .then(attractions => {
    attractions.forEach(attraction => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <img src="images/${attraction.image}" alt="${attraction.name}">
        <div class="card-content">
          <h3>${attraction.name}</h3>
          <p><strong>Address:</strong> ${attraction.address}</p>
          <p>${attraction.description}</p>
          <button class="learn-more-btn">${attraction.button}</button>
        </div>
      `;

      attractionsContainer.appendChild(card);
    });
  })
  .catch(err => {
    attractionsContainer.innerHTML = `<p>Failed to load attractions. Please try again later.</p>`;
    console.error("Error loading attractions:", err);
  });

