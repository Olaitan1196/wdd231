document.addEventListener("DOMContentLoaded", function () {
    function adjustLayout() {
        const screenWidth = window.innerWidth;
        const container = document.querySelector(".container");
        const osunImg = document.querySelector(".osun img");
        const profileImg = document.querySelector(".header img");

        // Adjust layout dynamically for different screen sizes
        if (screenWidth < 600) {
            container.style.flexDirection = "column";
            osunImg.style.width = "100%";
            profileImg.style.width = "60px"; // Smaller for mobile
        } else if (screenWidth < 900) {
            container.style.flexDirection = "row";
            osunImg.style.width = "300px";
            profileImg.style.width = "80px";
        } else {
            container.style.flexDirection = "row";
            osunImg.style.width = "400px";
            profileImg.style.width = "100px"; // Normal size
        }
    }

    // Run function on load & resize
    adjustLayout();
    window.addEventListener("resize", adjustLayout);

    // Mobile Navigation (Hamburger Menu)
    const nav = document.querySelector("nav ul");
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "☰ Menu";
    toggleBtn.classList.add("menu-toggle");

    // Insert the button before the nav menu
    nav.parentElement.insertBefore(toggleBtn, nav);

    function toggleNav() {
        nav.classList.toggle("show");
    }

    toggleBtn.addEventListener("click", toggleNav);

    // Check screen size for navigation
    function checkNav() {
        if (window.innerWidth < 600) {
            nav.classList.remove("show");
            toggleBtn.style.display = "block";
        } else {
            nav.classList.add("show");
            toggleBtn.style.display = "none";
        }
    }

    checkNav();
    window.addEventListener("resize", checkNav);
});
