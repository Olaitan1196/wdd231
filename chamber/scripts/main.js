document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navUl = document.querySelector('nav ul');
    const currentYear = document.getElementById('currentYear');
    const lastModified = document.getElementById('lastModified');
    const businessListings = document.querySelector('.business-listings'); // Select the business listings container

    hamburgerMenu.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });

    currentYear.textContent = new Date().getFullYear();
    lastModified.textContent = document.lastModified;

    // Fetch and display member data
    async function fetchMembers() {
        try {
            const response = await fetch('data/members.json');
            const members = await response.json();
            displayMembers(members);
        } catch (error) {
            console.error('Error fetching members:', error);
        }
    }

    function displayMembers(members) {
        members.forEach(member => {
            const businessCard = document.createElement('article');
            businessCard.classList.add('business');
            businessCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name} Logo" class="business-logo">
                <h2>${member.name}</h2>
                <p>${member.description}</p>
                <p>Address: ${member.address}</p>
                <p>Phone: ${member.phone}</p>
                <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
                <p>Membership: ${member.membershipLevel}</p>
            `;
            businessListings.appendChild(businessCard);
        });
    }

    fetchMembers(); // Call the fetchMembers function
});