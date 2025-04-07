document.addEventListener("DOMContentLoaded", () => {
    const timestamp = document.getElementById("timestamp");
    if (timestamp) timestamp.value = new Date().toISOString();
  });
  
  function openModal(id) {
    document.getElementById(id).style.display = "block";
  }
  
  function closeModal(id) {
    document.getElementById(id).style.display = "none";
  }
  
  window.onclick = function (event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
      if (event.target == modal) modal.style.display = "none";
    });
  };
  