// Secret code to unlock the site
const secretCode = "laranja";

function checkCode() {
  const input = document.getElementById("code-input").value;
  const error = document.getElementById("error-message");

  if (input === secretCode) {
    // Bring the main site to front
    document.getElementById("lock-screen").style.zIndex = "0";
    document.getElementById("main-site").style.zIndex = "2";
    error.textContent = "";
  } else {
    error.textContent = "Código errado, tenta outra vez.";
  }
}

// Optional: countdown script (reuse from before)
const deadline = new Date("2025-04-07T19:00:00").getTime();
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = deadline - now;

  if (distance <= 0) {
    countdownElement.innerHTML = "Deadline reached!";
    clearInterval(interval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();
