const messageArea = document.getElementById('visit-message');
const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;

let lastVisit = localStorage.getItem('lastVisit');
let now = Date.now();

if (!lastVisit) {
  messageArea.textContent = "Welcome! Let us know if you have any questions.";
} else {
  let daysBetween = Math.floor((now - lastVisit) / MILLISECONDS_IN_A_DAY);

  if (daysBetween < 1) {
    messageArea.textContent = "Back so soon! Awesome!";
  } else if (daysBetween === 1) {
    messageArea.textContent = "You last visited 1 day ago.";
  } else {
    messageArea.textContent = `You last visited ${daysBetween} days ago.`;
  }
}

localStorage.setItem('lastVisit', now);
