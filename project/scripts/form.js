const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    product: form.product.value,
    message: form.message.value.trim()
  };

  localStorage.setItem("formSubmission", JSON.stringify(formData));
  window.location.href = "form-response.html";
});
