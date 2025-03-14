// Get the current year dynamically and insert it into the footer
const yearSpan = document.querySelector("#current\\ year"); 
const currentYear = new Date().getFullYear();
if (yearSpan) {
    yearSpan.textContent = currentYear;
}

// Get the last modified date of the document and insert it into the footer
const lastModified = document.querySelector("#lastModified");
if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}
