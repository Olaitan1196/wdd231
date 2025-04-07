["header", "nav", "footer"].forEach(id => {
    fetch(`${id}.html`)
      .then(res => res.text())
      .then(html => document.getElementById(id).innerHTML = html);
  });

  const params = new URLSearchParams(window.location.search);
  const fields = ["firstName", "lastName", "email", "phone", "orgName", "timestamp"];
  fields.forEach(field => {
    const el = document.getElementById(field);
    if (el) el.textContent = params.get(field);
  });