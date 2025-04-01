async function loadSpotlights() {
    try {
        const response = await fetch("data/chamber_members.json");
        const members = await response.json();

        // Filter only Gold and Silver members
        const eligibleMembers = members.filter(member => 
            member.membership === "Gold" || member.membership === "Silver"
        );

        // Randomly pick 2 or 3 members
        const shuffled = eligibleMembers.sort(() => 0.5 - Math.random());
        const selectedMembers = shuffled.slice(0, Math.min(3, shuffled.length));

        // Generate HTML for spotlights
        let spotlightHTML = "<h2>Business Spotlights</h2>";
        selectedMembers.forEach(member => {
            spotlightHTML += `
                <div class="company">
                    <img src="images/${member.image}" alt="${member.name} Logo" loading="lazy">
                    <h3>${member.name}</h3>
                    <p><strong>Phone:</strong> ${member.phone}</p>
                    <p><strong>Address:</strong> ${member.address}</p>
                    <p><strong>Website:</strong> <a href="${member.website}" target="_blank">Visit</a></p>
                    <p class="membership ${member.membership.toLowerCase()}">${member.membership} Member</p>
                </div>
            `;
        });

        document.querySelector('.spotlight').innerHTML = spotlightHTML;

    } catch (error) {
        document.querySelector('.spotlight').innerHTML = "Error loading spotlight members.";
    }
}

loadSpotlights();
