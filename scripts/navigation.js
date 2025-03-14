// Select the navigation menu
const navigation = document.querySelector("nav ul");

// Create and insert the menu toggle button
const menuButton = document.createElement("button");
menuButton.id = "menu-toggle";
menuButton.textContent = "☰ Menu";

// Insert the button before the navigation list
navigation.parentElement.insertBefore(menuButton, navigation);

// Toggle menu visibility when the button is clicked
menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});

// Close menu when a link is clicked (for mobile UX)
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("open");
    });
});
