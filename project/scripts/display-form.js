const responseContainer = document.getElementById("response-container");

const data = JSON.parse(localStorage.getItem("formSubmission"));

if (data) {
  responseContainer.innerHTML = `
    <h2>Thanks for reaching out, ${data.name}!</h2>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Product of Interest:</strong> ${data.product}</p>
    <p><strong>Your Message:</strong></p>
    <p>${data.message}</p>
  `;
} else {
  responseContainer.innerHTML = "<p>No form data found.</p>";
}
